import '../../assets/styles/components/Case-studies/CaseDetail.css'
import { useLocation } from 'react-router-dom'

export const CaseDetail = () => {
  const { state } = useLocation()

  return (
    <section className='t-details'>
        <h2 className='title'>{state.data.title}</h2>
        <div className='t-img'>
          <img src={state.data.img} />
        </div>
        <div className='txt'>
            Cashio - a protocol that builds a decentralized stablecoin $CASH - got hacked for $52M.
            The $CASH stablecoin, whose value is supposed to be pegged to $1 dollar, plummeted to a low of $0.0005 right after the exploit!
            Let’s first understand what cashio protocol does and then deep dive in figuring out how the hacker tricked the protocol in giving them all the user deposited funds.

            <br /><span className='head-txt'>What would you use Cashio protocol for?</span>
            Cashio is a decentralized stablecoin protocol on Solana that manages the issuance of $CASH stablecoin - a token that is soft pegged 1:1 to $USD.
            The protocol allows you do 2 things:
            <ul  className='ul'>
              <li>
                mint $CASH stablecoin by depositing an equivalent amount of LP tokens.
                <ul className='ul'>
                  <li>For eg: to mint $100 CASH, you had to deposit $100 worth of USDT-USDC LP tokens.</li>
                </ul>
              </li>
              <li>Burn $CASH to redeem the equivalent amount of LP tokens.</li>
            </ul>
            
            Once you get $CASH, you can then use it as a store of value, medium of exchange and swap 1:1 to any stablecoin

            <br /><span className='head-txt'>How did the hacker steal funds?</span>
            As we mentioned above, a user can burn $CASH tokens to redeem an equivalent amount of LP tokens.
            Now what if you create fake $CASH tokens (that have no value in the market) out of thin air and “convince” the protocol that you in fact have legit tokens and the protocol hands over the underlying LP tokens (that have real value in the market)?
            That’s the vulnerability the hacker was able to spot and exploit.
            High level view of how the hack worked:
            <ul className='ul'>
              <li>Hacker cleverly exploited the protocol’s $CASH minting code by depositing fake invaluable collateral to mint 2 billion valuable $CASH tokens.</li>
              <li>Burned part of these fake $CASH tokens to get all the USDC-USDT LP tokens (collateral that has real value in the market)</li>
              <li>They then swapped these collateral LP tokens on Saber (a decentralized exchange) to get $16.4 million USDC and $10.8 million USDT respectively.</li>
              <li>Swapped the remaining $CASH tokens for $8.6 million UST and $17 million USDC through Saber exchange.</li>
            </ul>


            It’s funny that the project’s tagline was literally:<br />

            Now that you understand at a high level how the hack worked, let’s deep dive into technical details of the hack.

            <br /><span className='head-txt'>Technical details:</span>
            Let’s look inside the hood of Cashio protocol.
            Cashio mainly consisted of 2 programs:
            <ol className='ol'>
              <li>Brr - program - responsible for printing and burning $CASH tokens</li>
              <li>Bankman - program - responsible for recording and tracking collateral that is required to mint $CASH</li>
            </ol>
            
            The vulnerability lied in the Brr program. It has 2 instructions:
            <ol className='ol'>
              <li>print_cash</li>
              <li>burn_cash</li>
            </ol>
            <span className='mb-1'>Let’s zoom into `print_cash` instruction:</span>
            <ul className='ul'>
              <li>The print_cash instruction is responsible for minting $CASH tokens.</li>
              <li>It receives a list of accounts including the “Bank” account and “Collateral” account.</li>
              <li>These accounts are responsible to record and track the collateral that is allowed to mint $CASH.</li>
              <li>It also has validation logic that is given below.</li>
            </ul>
            <img src='/image 70.svg' />

            <span className='mb-1'>The vulnerability lies in the above code as it fails to check the validity of the “Bank” account.</span>
            <ul className='ul'>
              <li>That means an attacker could create a fake bank account, transfer fake collateral into it to bypass the validation checks.</li>
              <li>The only check of the input Bank account is to ensure the input Collateral account is associated with the Bank account (line 12). However, it can be easily bypassed by providing a fake Collateral account as well.</li>
              <li>In fact, all other checks become meaningless because the Bank account is the source of trust. And the hacker did exactly that: out of the 12 input accounts, the attacker created 8 fake accounts to pass all of the validity checks.</li>
            </ul>           
            <p>As a result, a Bank with a worthless collateral could be used to mint real CASH tokens.</p>
            <p>And therefore, the hacker (using the 6D…Vuzw address) sent the attack transaction that consisted of a fake bank with fake collateral to mint 2B $CASH tokens!</p>
            <p>Please check the Attack Payload in the Appendix section that describes what all was sent through the attack transaction.</p>

            <span className='head-txt'>How to fix the vulnerability?</span>
            We need to add 1 line of code that is assert_keys_eq!(self.bank.crate_mint, self.crate_mint).This validation ensures that the Bank account's crate_mint is the correct crate_mint for $CASH.
            <br /><span className='underline mb-1'>Patch link</span>

            <img src='/image 72.svg' alt=''/>

            <span className='head1'>What did hacker do with the funds after the exploit was successful?</span>
            <ol className='ol'>
              <li>
                Part of CASH tokens were burnt for LP tokens USDT-USDC pool & swapped for USDT, USDC
                <ul className='ul-1'>
                  <li>Tx 1 to burn $CASH to get USDT-USDC LP</li>
                  <li>Tx 2 to swap USDT-USDC LP for 16.4M $USDC and 10.8M $USDT https://solscan.io/tx/pjUgAeUfWaSSJuw2Cq1cQ9gHNWs8jkxJMtHqVAMuwhg3Uk9LN9Y2obfwt6Qm8bztg56xidWBMytzmqyWzvbsrwH
              </li>
                </ul>
              </li>
              <li>Around 1.97 billion CASH tokens were swapped for $8 million UST and $17 million USDC
                <ul className='ul-1'>
                  <li>Tx: <a className='link'>https://solscan.io/tx/3qeUYN3sjxxhZFTEGoDYEe4YNwqqQH8tpaa4UGdAqfVNWautK9fQ5JRoo4W1YKZ6ouVkk3sC51WQiwmxbpuinXm3</a></li>
                </ul>
              </li>
              <li>
                Then hacker converted a portion of the funds and transfer to Ethereum blockchain 
                <ul className='ul-1'>
                  <li>
                    Converted ~$11 million USD worth of stablecoins to ETH via Jupiter:
                    <ul className='ul-1'>
                      <li>
                        Conversion to ETH logs:
                        <ul className='ul-1'>
                          <li>$5.5 million USDC -&lt; 1848 ETH</li>
                          <li>$5.3 million USDT -&lt; 1769 ETH</li>
                          <li>$459k USDC -&lt; 155 ETH</li>
                        </ul>
                      </li>
                      
                      <li>
                        Bridge ETH to Ethereum via Wormhole logs:
                        <ul className='ul-1'>
                          <li>Transfer 1000 ETH</li>
                          <li>Transfer of 2618 ETH</li>
                          <li>Transfer of 155 ETH</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Converted $21M USDC to UST and bridge to Ethereum:
                    <ul className='ul-1'>
                      <li>
                        Conversion to UST
                      </li>
                      
                      <li>
                        Bridge UST to Ethereum via Wormhole
                      </li>
                    </ul>
                  </li>
                  <li>
                    Transferred $7.9M USDC to Ethereumn
                  </li>
                </ul>
              </li>
            </ol> 
            <span className='mb-1'>Hacker hailed as “Robinhood”</span>
            <span className='mb-2'>The hacker had embedded a hidden messsage on one of their’s transactions on Ethereum. <a className='link'>https://etherscan.io/tx/0xa8394d2e55042f84d096c72dd1075fa2648faf88e248c7992273b4d50a6a647b</a></span>
            <span className='mb-1'>By looking through the hacker’s address on Solana, they indeed have stuck to their word where we can see numerous transactions sending USDC to accounts!</span>
            <span className='mb-1'>We don’t have proof whether the hacker did donate money to charity or not.</span>
            <span className='mb-1'>Appendix:</span>
            <span className='mb-1'>Links:</span>

            <ul className='ul'>
              <li><a className='link'>GitHub - cashioapp/cashio: $CASH Rules Everything Around Me.</a></li>
              <li><a className='link'>arrowprotocol </a></li>
            </ul>

            Attack payload

            <ul className='ul'>
              <li>bank (faked): <a className='link'>5ahaayrV5epV3oKChn4S4F5oek2vzoMbRpuC2fB4Q2kv</a> (created by bankman program with faked crate_mint and faked crate_token)</li>
              <li>collateral (faked):<a className='link'> HrCe9oUYRJKpfWiUwrkRNCxHSRx8gDX1bSF98Aq8qqjq</a> (created by the token program with faked collateral.mint GCnK63zpqfGwpmikGBWRSMJLGLW8dsW97N4VAXKaUSSC)</li>
              <li>crate_token: <a className='link'>J77Nq48nbq4Etf1voss38R3dTdR3yD7y5F6W6TaVHvmb</a> (valid crate_token with valid CASH mint)</li>
              <li>crate_mint: <a className='link'>CASHVDm2wsJXfhj6VWxb7GiMdoLc17Du7paH4bNr5woT</a>  (CASH mint)</li>
              <li>crate_collateral_tokens (faked): <a className='link'>EAYzx8dqABiNdZKtfavg16rdyShHQB2k5hUa6UmXHiky</a>  (created by the token program with faked crate_collateral_tokens.mint == collateral.mint )</li>
              <li>arrow (faked): <a>HnWb284fT2yw2jjWyw6Ex7cf72PJvjBSYsK5H4fHEGpw</a> (created by the arrow program with faked arrow.mint == collateral.mint )</li>
              <li>saber_swap (faked): <a className='link'>8uBqLjfRrwKxDG92nxDVGbkhbsZfaBqJ8Y2wJoXuHmHU</a>  (faked swap_info account initialized by the Saber Stable Swap Program with faked pool_mint, reserve_a and reserve_b)</li>
              <li>pool_mint (faked): <a className='link'>GoSK6XvdKquQwVYokYz8sKhFgkJAYwjq4i8ttjeukBmp</a></li>
              <li>reserve_a (faked): <a className='link'>DBgB7Bw7mQ5Qk7VVcV51qL8FyLDsJDHV5bnJNsPSwVgL</a></li>
              <li>reserve_b (faked): <a className='link'>3efHXgB12zP1EzKivsYTZeqAWc5YYCio9Dri9XATFsu3</a></li>
              <li>token_program: TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA</li>
              <li>crate_token_program: CRATwLpu6YZEeiVq9ajjxs61wPQ9f29s1UoQR9siJCRs</li>
            </ul>  
        
        </div>
    </section>
    
  )
}
