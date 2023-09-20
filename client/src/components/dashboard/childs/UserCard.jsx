export default function UserCard({ id, conversationId, active, setActive, name, messages, time}) {

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

        <div
            className='border-b-[1px] cursor-pointer active:scale-95 hover:bg-gray-100 pb-1 flex items-center w-[95%]'
            onClick={()=>setActive(id)}
        >

            <div className='w-full ml-2 flex flex-col'>
                <div className='flex justify-between w-full'>
                    <div><h3>{messages.slice(-1)[0].sender === 'bot' ? 'ChatBot' : 'Customer'}</h3></div>
                    <div><h3 className='text-sm'>{timeSince(new Date(time))} ago</h3></div>
                </div>
                <div>
                    <h3 className='text-sm'>{messages.slice(-1)[0].body}</h3>
                </div>
            </div>
        </div>

    )
}