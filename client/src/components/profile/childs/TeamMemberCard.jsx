import {BiSolidUserCircle} from 'react-icons/bi';

export default function TeamMemberCard({ name, email, owner, img, deleteAction }) {
    return (
        <div>
            <div className='w-[82vw] sm:w-full flex justify-between px-2 sm:px-10 sm:pr-24 pt-4 pb-2 sm:gap-8'>

                <div className='flex items-center gap-4'>
                    <div>
                        <div className='w-12 h-12 sm:w-16 sm:h-16 active:scale-95 cursor-pointer rounded-full items-center justify-center '>
                            {img ?
                            <img className='w-12 h-12 sm:w-16 sm:h-16 rounded-full' src={img} alt="user" /> :
                            <BiSolidUserCircle className={'text-main '} size={65}/>
                        }
                        </div>
                    </div>
                    <div>
                        <h3 className='text-sm sm:text-md'>{name}</h3>
                        <h3 className='text-sm sm:text-md text-gray-500'>{email}</h3>
                    </div>
                </div>
                <div>
                    {
                        owner ?
                            <h3 className='text-sm sm:text-md'>OWNER</h3> :
                            <button 
                            className="bg-red-500 text-white p-2 px-3 rounded-md"
                            onClick={()=>{deleteAction(email)}}
                            >Remove</button>
                    }
                </div>
            </div>
        </div>
    )
}