import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        
    }
    
    render() {
        let status = ""
        if (this.state.isLoggedIn) {
            status = "in"
        }
        else {
            status = "out"
        }
        
        return (
            <div>
                <h1>You are currently logged {status}</h1>
            </div>
            
        )
    }
}
export default App