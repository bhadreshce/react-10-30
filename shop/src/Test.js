import React, { Component } from 'react'

export default class Test extends Component {

    constructor(props) {
        super(props)
        this.state = { count: 0, name: "sidharth" }

    }

    componentDidMount() {
        console.log('hii this is did mount');

    }


    componentDidUpdate() {
        console.log('did update');
        if (this.state.count == 2) {
            document.body.style.backgroundColor = 'red'
        }

    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevProps);
        return null

    }

    shouldComponentUpdate() {
        if (this.state.count >= 4) {
            return false
        } else {
            return true
        }

    }

    componentWillUnmount() {
        console.log('component will unmount');

    }

    setIncreement() {
        this.setState({ count: ++this.state.count })
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setIncreement()
                }}>Increement</button>
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}
