import React, { useEffect, useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import '../styles/Calendar.css';

export default function DatePicker(props) {
    

    useEffect(()=>props.sendToBackend(props.date), props.date)
    const [windowWidth, setWindowWidth] = useState(
 window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth( window.innerWidth);
        };

        // Register the window resize listener
        window.addEventListener('resize', handleResize);

        // This is the cleanup function that React will run when
        // component unmounts
        return () => {
            // Unregister the window resize listener
            window.removeEventListener('resize', handleResize);
        };

    }, []); // Empty array causes this `useEffect` to run once on mount/unmount


    return(
        <>
    
    <div className="absolute left-[1vw] lg:left-44 z-40">
        {/* <div className={`absolute sm:ml-40 border-[1px] ${windowWidth <= 1024 ?  'w-full h-full' :'w-[50%]  left-[10%]' }`}> */}
            <DateRangePicker 
                onChange={item => { props.setDate([item.selection])}}
                showSelectionPreview={false}
                moveRangeOnFirstSelection={false} //makes selection easier, otherwise it will always try to select dates when you hover.
                months={2}
                ranges={props.date}
                direction={windowWidth <= 830 ? "vertical": "horizontal"}
                inputRanges={[]}
                className={'w-screen h-full rounded-3xl opacity-95' }
                staticRanges={windowWidth <= 490 ? []: undefined}
            />
        {/* </div> */}
    </div>
    </>
    )

}