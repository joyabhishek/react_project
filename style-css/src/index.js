import React from "react";
import ReactDOM from "react-dom";

function App() {
    let date = new Date()
    let hour = date.getHours()
    let timeOfDay

    let styles = {
      fontSize : 30
    }

    if (hour < 12){
        timeOfDay = "morning"
        styles.color = "#f39c12"
    }else if(hour > 12 && hour < 17){
        timeOfDay = "afternoon"
        styles.color = "#d35400"
    }else{
        timeOfDay = "night"
        styles.color = "#34495e"
    }

    return (
        <nav>
            <h1>This is navbar and this is Good <span  style={styles}>{timeOfDay}</span></h1>
        </nav>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))