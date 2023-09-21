import React, { useState } from "react";
import ConversationCard from "./ConversationCard";

export default function ConversationHistory(props) {
    const [active, setActive] = useState('');
    function chooseActive(id) {
        props.retrieveConvHis(id)
        setActive(id)
    }
    return (
        <div className={props.className + " sm:w-[30rem]"}>
            <div className="max-h-[34rem] overflow-y-auto  rounded-lg mt-4 lg:mx-0 w-[96vw] sm:w-[46vw] lg:w-[30vw] ">
                {props.messageHistory.length > 0 && <h2 className="text-xl md:text-2xl my-10 font-semibold">Here the conversations the chatbot had in this time:</h2>}
                {
                    props.messageHistory.map((message) => {
                        return <ConversationCard
                            startTime={message.startTime}
                            messages={message.conversation}
                            key={message.id}
                            id={message.id}
                            active={active}
                            setActive={chooseActive} />
                    })}
            </div></div>
    )
}