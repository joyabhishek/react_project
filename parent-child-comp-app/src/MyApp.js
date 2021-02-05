import React from "react"
import AwesomeHeader from "./AwesomeHeader"
import AwesomeFooter from "./AwesomeFooter"
import MainContent from "./MainContent"

function MyApp() {
    return(
        
        <div>
            <AwesomeFooter />
            <MainContent />
            <AwesomeHeader />
        </div>
    )
}

export default MyApp