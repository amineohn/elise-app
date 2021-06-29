import React, { Component } from 'react'
import Icons from '@components/Icons'
export default class AddWeight extends Component {
    state = {
        data: null,
    }
    componentDidMount() {
        this.callAPI()
            .then((res) =>
                this.setState({
                    data: res.data,
                })
            )
            .catch((err) => console.log(err))
    }
    callAPI = async () => {
        const response = await fetch(
            `${process.env.API}/add/${type}/${weight}/${matter}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Request-Method': 'GET',
                    Accept: 'application/json',
                },
            }
        )
        const body = await response.text()

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body
    }
    render() {
        const { data } = this.state
        return (
            <div className="data">
                <input
                    className="enter"
                    type="number"
                    placeholder="Saisir un poids"
                />
                &nbsp;
                <button className="enter-submit poids gray">
                    <Icons icon="login" />
                    Ajouter
                </button>
            </div>
        )
    }
}
