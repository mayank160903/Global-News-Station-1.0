import  React, { useState , useEffect } from 'react'

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div>
            <p style={{fontFamily: 'Raleway', fontWeight:'bolder'}}> Time : {date.toLocaleTimeString()}</p>
            <p style={{fontFamily: 'Raleway', fontWeight:'bolder'}}> Date : {date.toLocaleDateString()}</p>

        </div>
    )
}

export default DateTime