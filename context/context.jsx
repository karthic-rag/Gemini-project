import { createContext, useState } from "react";
import run from "../src/config/gemini";

export const Context = createContext();

const Contextprovider = (props) => {
    const [input,setinput] = useState("")
    const [recentprompt,setrecentprompts] = useState("")
    const [previouspro,setpreviouspro] = useState([])
    const [showresult,setshowresult] = useState(false)
    const [loading,setloading] = useState(false)
    const [resultData,setresultData] = useState("")
    
    const delaypara = (index,nextword) =>{
         setTimeout(function (){
            setresultData(prev=>prev+nextword)
         },75*index)
    }

    const newChat = () => {
        setrecentprompts(false)
        setshowresult(false)
    }
   
    const onSent = async(prompt) => {
        setloading(true)
        setresultData("")
        setshowresult(true)
        let respon ;
        if (prompt !== undefined)
            {
               respon = await run(prompt)
               setrecentprompts(prompt)
            }

        else
            {
                setpreviouspro(prev=>[...prev,input])
                setrecentprompts(input)
                respon = await run(input)
            }
        let responsearray = respon.split("**")
        let newarray = "";
        for (let i=0; i < responsearray.length;i++){
            if (i == 0 || i%2 !== 1)
            {
              newarray += responsearray[i];
            }

            else{
                newarray += "<b>"+responsearray[i]+"</b>"
            }
        }
        let newresponse = newarray.split("*").join("</br>")
        let typingeffect = newresponse.split(" ")

        for(let i = 0; i<typingeffect.length; i++)
            {
                const nextword = typingeffect[i]
                delaypara(i,nextword+" ")
            }
        setloading(false)
        setinput("")

        console.log(newarray)
    }

    const contextValue = {
          onSent,
          input,
          setinput,
          recentprompt,
          setrecentprompts,
          previouspro,
          setpreviouspro,
          showresult,
          setshowresult,
          loading,
          setloading,
          resultData,
          setresultData,
          newChat

    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}    
        </Context.Provider>

    )
       
}

export default Contextprovider