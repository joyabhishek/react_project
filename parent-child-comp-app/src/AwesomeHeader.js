import React from "react"
import "./style.css"

function AwesomeHeader()
{
    let date = new Date()
    let hour = date.getHours()
    let timeOfDay

    if (hour < 12){
        timeOfDay = "morning"
    }else if(hour > 12 && hour < 17){
        timeOfDay = "afternoon"
    }else{
        timeOfDay = "night"
    }

    return (
        <nav className="navclass">
            <h1>This is navbar and this is Good {timeOfDay}</h1>
        </nav>
    )
}

export default AwesomeHeader