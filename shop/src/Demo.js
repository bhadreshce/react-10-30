import React, { Component } from 'react'

export default class Demo extends Component {

    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }



    setcounter() {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return <div>
            <button onClick={() => {
                this.setcounter()
            }}>increement</button>
            <h1>{this.state.count}</h1>
        </div>
    }
}
