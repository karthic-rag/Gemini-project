import React, { useContext } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
import { Context } from "../../../context/context";

function Sidebar() {
  const [extent , setextent] = useState(false)
  const {onSent,previouspro,setrecentprompts,newChat} = useContext(Context)

  const loadprompt = async (prompt) =>{
    setrecentprompts(prompt)
    await onSent(prompt)
  }

   return (
    <div className="Sidebar">
      <div className="top">
        <img  onClick={() => setextent(pre => !pre)} className="menu" src={assets.menu_icon} alt="" />
        <div className="new-chat" onClick={()=> newChat()}>
          <img src={assets.plus_icon} alt="" />
          {extent?<p>New Chart</p> : null}
        </div>
        {extent? <div className="recent">
          <p className="recent-title">Recent</p>
          {previouspro.map((item,index)=>{
            return(
              <div className="recent-entry" onClick={()=> loadprompt(item)}>
              <img src={assets.message_icon} alt="" />
              <p>{item.slice(0,18)}...</p>
            </div>
            )
          })}
          
        </div> : null}
       
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extent?<p>Help</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extent ?<p>History</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extent ?<p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
