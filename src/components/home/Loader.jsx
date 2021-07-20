import { Component } from 'react'

export default class Loader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
        }
    }
    componentDidMount() {
        this.timerHandle = setTimeout(
            () => this.setState({ loading: false }),
            3500
        )
    }

    componentWillUnmount() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle)
            this.timerHandle = 0
        }
    }
    render() {
        return <h1>flex in'</h1>
    }
}
