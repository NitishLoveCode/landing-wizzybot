// import './childs/styles/fileCard.css'
import { RiDeleteBin6Line } from "react-icons/ri"

export default function FileCard({id, name, chars, data, deleteAction}) {
    return(
    <div className='border-[1px]  border-gray-400 h-fit my-2 rounded-md w-full p-4'>
        <div className='flex items-center justify-between'>
            <h3 className='text-[14px]'>Title: {name}</h3>
            <div className='flex items-center gap-2'>
                <h3 className='text-[14px]'>Length: {chars}</h3>
                <RiDeleteBin6Line className='cursor-pointer hover:text-red-400 active:scale-95' onClick={() => deleteAction(id)} />
            </div>
        </div>
        <div className='mt-2'>
            <h3 className="ellipsis-3-lines">{data}</h3>
        </div>
    </div>
    )
}