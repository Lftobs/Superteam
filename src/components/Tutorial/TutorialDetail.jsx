import React from 'react'
import { Contact } from '../Contact'
import { style } from '../../assets/Helper'
import '../../assets/styles/components/Tutorial/TutorialDetail.css'
import {useLocation} from 'react-router-dom'


export const TutorialDetail = () => {
    const { state } = useLocation()

    return (
    <>
        <section className='tutorial-detail'>
            <div className='content'>
                <div className='c-head'>
                    <h2>{state.data.title}</h2>
                    <h2 className='no'>{state.data.no}</h2>
                </div>
                <div className='c-img'>
                    <img src={state.data.img} />
                </div>
                <div className='c-txt'>
                    <p>Hello, this is a beginner friendly CTF designed to run you through how to capture the flag.</p>
                    <p>Your mission is to hack a contract - deployed on Solana devnet - that contains 1B tokens 🤑That is if you hack the contract, you will be able to withdraw all the funds from it! 😱</p>
                    <p>To start hacking:</p>
                    <ol>
                        <li>Create Game Wallet and then download the source code after clicking on commence mission</li>
                        <li>Noob to CTF's? We got you: beginner guide to CTF's on Solana</li>
                    </ol>
    
                </div>
                <button>Connect Your Wallet</button>
            </div>
        </section>
        
        < Contact styles={style} />
    </>
    
  )
}
