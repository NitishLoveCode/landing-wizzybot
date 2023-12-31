import React, { useState } from "react";
import "./styles/chatbubble.css"

function ChatBubble(props) {
    /*
    props: 
        message -- JSON: containing sender and message body
        id: number: unique id for each message and same as value key prop of the message
        typing: boolean: let's the user know if currently message is being typed or not
    */

    return (
        <>
            {props.typing && <div className="bg-stone-200 bot rounded-lg p-3.5 m-3.5 w-fit chatBubble text-right bot">
                <div className="flex justify-center space-x-2 animate-breathe">
                    <div className="h-1 w-1 bg-black rounded-full"></div>
                    <div className="h-1 w-1 bg-black rounded-full"></div>
                    <div className="h-1 w-1 bg-black rounded-full"></div>
                </div>
            </div>}

            {props.typing !== true && <div 
            style = {props.botColor !== undefined && props.userColor !== undefined ? (props.message.sender=== 'bot' ? {backgroundColor: props.botColor} : {backgroundColor: props.userColor}) : {} }
            className={props.message.sender === "bot" ? `bg-stone-200 self-start rounded-lg p-3.5 m-3.5 w-fit chatBubble text-right bot` : "bg-blue-500 self-end text-white rounded-lg p-3.5 m-3.5 w-fit chatBubble user"}>
                <p className="text-left">{props.message.body}</p>
            </div>}
        </>
    )
}

export default ChatBubble;