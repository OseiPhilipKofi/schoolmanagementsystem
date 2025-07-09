import { useState } from "react";

const Resizeobserver = (params) => {
    const [isLarger, setIsLarger ] = useState(false);
    const [isSmaller, setIsSmaller ] = useState(false);

        new ResizeObserver(element =>{

            if(window.innerWidth >= 1200 ){
                setIsLarger(true);
                // console.log('islarger');

            }else{
                setIsLarger(false);
                // console.log('notLarger');
            }
            if(window.innerWidth  < 600 ){
                setIsSmaller(true);
                // console.log('isSmaller');
            }else{
                setIsSmaller(false);
                // console.log('notSmaller');
            }
        }).observe(params);
    return{ isLarger, isSmaller }
}

export default Resizeobserver;