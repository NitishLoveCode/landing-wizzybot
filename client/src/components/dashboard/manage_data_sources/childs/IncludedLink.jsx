import { MdDeleteOutline } from "react-icons/md"
import { LuRefreshCw } from "react-icons/lu"
import LoadingDots from "../../../loading/LoadingDots"
import { useState } from "react";

export default function IncludedLink({ link, id, deleteAction }) {

    const [clicked, setClicked] = useState(false);


    return (
        <div className='w-[50vw] gap-2 flex items-center justify-between'>

            <div className='flex w-[40vw] border-[1px] rounded-md p-2 pl-4 pr-4 border-gray-800 items-center justify-between'>
                <div><h3>{link.link}</h3></div>
                {link.status && <div className='bg-blue-100 rounded-md p-[2px] pl-3 pr-3'><h3 className='text-sm'>Trained</h3></div>}
            </div>

            <div>
                <h3>{link.charCount}</h3>
            </div>

            {!clicked ?
                <div
                    className='cursor-pointer active:scale-95 hover:text-red-500'
                    onClick={() => {
                        setClicked(true)
                        deleteAction(link.id, setClicked)
                    }}
                >
                    <MdDeleteOutline className='text-2xl' />
                </div>
                :
                <LoadingDots size={1} color={'bg-black'} />

            }
            {/* 
            <div className='cursor-pointer active:scale-95'>
                <LuRefreshCw className='text-2xl' />
            </div> */}

        </div>
    )
}