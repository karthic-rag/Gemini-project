import React, { useContext } from 'react'
import './main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../../context/context'

function Main() {

    const {onSent,recentprompt,showresult,loading,resultData,setinput,input} = useContext(Context)

    return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            {!showresult ?
            <>
            <div className="greet">
                <p><span>Hello Curious</span></p>
                <p>How can I help You today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to next road trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggest best idea to make a new project </p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggest how to communicate easily in english</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Generate java code to implement random numbers</p>
                    <img src={assets.code_icon} alt="" />
                </div>
                </div>
            </>
            :
            <div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentprompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading? 
                    <div className='loader'>
                      <hr />
                      <hr />
                      <hr />   
                    </div>
                    : <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                    
                </div>
            </div>
            }
            
           
            <div className="main-bottom">
                <div className="search-box">
                <input onChange={(e) => setinput(e.target.value)} value={input} type='text' placeholder='Enter a prompt here' />
                
                
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img onClick={()=> onSent()} src={assets.send_icon} alt="" />
                </div>
                </div>
                <p className='bottom-info'>
                    Gemini may display inaccurate info, including about people, so double-check its responses.
                </p>
               
            </div>
        </div>
    </div>
  )
}

export default Main

