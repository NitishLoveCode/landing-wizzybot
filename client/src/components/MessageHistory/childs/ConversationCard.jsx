import React from "react";

export default function ConversationCard(props) {
    /*
    PROPS:
    active| String: id of the chat that is currently being viewed
    id | String : id of current chat
    startTime | Time: Time when this chat was started
    messages| JSON Array: Each JSON object contains two messages. One by the user and one by the bot. The fields in the object are sender and <body className="">
    setActive | function: function to change the id of the conversation stored in active variable.
    */

    function timeSince(date) {

        var seconds = Math.floor((new Date() - date) / 1000);
        var interval = seconds / 31536000;
        if (interval > 1) {
            return Math.floor(interval) + " years";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " minutes";
        }
        return Math.floor(seconds) + " seconds";
    }

    return (

        <div onClick={()=>props.setActive(props.id)} className={(props.active === props.id ? 'bg-blue-200 ' : ' ') + "cursor-pointer block md:max-w-lg w-full p-4 border border-gray-200 dark:border-gray-400 shadow hover:bg-gray-300 "}    >
            <div className="flex justify-between space-x-3">
                <p className="mb-1 text-sm font-normal text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis ">{props.messages[1].sender === 'user' ? 'Customer' : 'Bot'}: {props.messages[1].body}</p>
                <p className="mb-1 text-sm font-normal text-gray-900">{timeSince(new Date(props.startTime))}</p>

            </div>
            <p className="font-light text-gray-900 text-left overflow-hidden overflow-ellipsis line-clamp-2" >{props.messages[2].sender === 'bot' ? 'ChatBot' : 'Customer'}: {props.messages[2].body}</p>
        </div>

    )
}