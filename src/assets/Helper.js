export const scrollToTop = (top=0) => {
    window.scrollTo({
      top: top,
      behavior: 'smooth'
    })
}

export const scrollToSection = () => {
    const section = document.getElementById('#about')
    section.scrollIntoView({behavior: 'smooth'})
}

export const caseStudies = [
    {
        title: 'Cashio protocol - “Robinhood” hacker steals $52.8 million',
        content: 'Cashio - a protocol that builds a decentralized stablecoin $CASH - got hacked for $52M. The $CASH stablecoin, whose value is supposed to be pegged to $1 dollar, plummeted to a low of $0.0005 right after the exploit!',
        img: '/image 65.svg',
        id: 1
    },
    {
        title: 'Crema Protocol - hacked for $8.8M',
        content: 'Crema protocol - a DEX that uses concentrated liquidity - got hacked for $8.8M.',
        img: '/image 65 (1).svg',
        id: 2
    },
    {
        title: 'Jet Protocol - $25 million vulnerability',
        content: 'Jet - a protocol that builds a decentralised lending platform - suffered from a critical vulnerability where a hacker could have siphoned off $25 million!',
        img: '/image 66.svg',
        id: 3
    },
    {
        title: "Nirvana Protocol - treasury hacked for $3.2M, user's lose $10M",
        content: 'Nirvana vision is to build an investment protocol for a sustainable store of wealth. It primarily built 2 tokens:',
        img: '/image 65 (2).svg',
        id: 4
    },
    {
        title: 'Raydium Protocol - hacker gains god mode access to steal ~$4.4M',
        content: 'Raydium Protocol - hacker gains god mode access to steal ~$4.4M',
        img: '/image 67.svg',
        id: 5
    },
    {
        title: "Wormhole Protocol - hacker spoofs signatures to net $325 million",
        content: 'Wormhole - an interoperability protocol that allows transferring assets between different blockchains - got exploited for a whopping $325 million!',
        img: '/image 68.svg',
        id: 6
    }    
]

export const tutorials = [
    {
        img : '/ctf1.svg',
        no: 101,
        title: 'Steal a billy',
        content: 'Your mission is to hack a contract - deployed on Solana devnet - that contains 1B tokens 🤑That is if you hack the contract, you will be able to withdraw all the funds from it! 😱'
    },
    {
        img : '/ctf2.svg',
        no: 102,
        title: 'Lanzy',
        content: 'Hello, Your mission is to steal all funds from HelloSupersec\'s treasury.'
    },
    {
        img : '/ctf3.svg',
        no: 103,
        title: 'No Loss Lotery',
        content: 'Hello, Your mission is to “Win and Win“ only win.Empty the treasury to capture the flag!'
    },
    {
        img : '/ctf2.svg',
        no: 104,
        title: 'Bankrupt Solman',
        content: 'Your mission is to hack Solman Brothers - a bank that stores various forms of Solana in different vaults.Currently it has 3 vaults storing $1M worth of wormhole-wrapped SOL, sollet-wrapped SOL and lido-staked SOL respectively.'
    },
]

export const style = {
    bg: 'white',
    color: 'rgba(18, 45, 43, 1)'
}

export const tutorialsStyle = {
    bg: 'transparent',
    color: 'white',
    color2: 'var(--grey)'
}