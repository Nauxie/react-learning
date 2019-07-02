import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            isLoggedIn: false
        }
        
    }
    handleClick() {
        let invert = this.state.isLoggedIn
        this.setState({
            isLoggedIn: !invert
        })

    }
    render() {
        let status = ""
        let altstatus
        if (this.state.isLoggedIn) {
            status = "in"
            altstatus = "out"
        }
        else {
            status = "out"
            altstatus = "in"
        }
        
        return (
            <div>
                <button onClick={this.handleClick}>Log {altstatus}</button>
                <h1>You are currently logged {status}</h1>
                
            </div>
            
        )
    }
}
export default App