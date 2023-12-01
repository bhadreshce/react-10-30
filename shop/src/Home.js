import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { task: [{ name: "rutvik" }] }
    }

    addTask() {

        this.setState({ task: [...this.state.task, { name: document.getElementById('input').value }] })

    }

    componentDidUpdate() {
        console.log(this.state.task);

    }
    render() {
        return <>
            <input type="text" id='input' /><button onClick={() => {
                this.addTask()
            }}>Add</button>
            {this.state.task.map((result) => {
                return <>
                    <h1>{result.name}</h1>
                </>
            })}</>
    }
}
