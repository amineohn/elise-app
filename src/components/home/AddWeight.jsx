import React, { Component } from 'react'
import Icons from '@components/Icons'
export default class AddWeight extends Component {
    constructor() {
        super()
        this.state = { user: {} }
        this.onSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault()
        var self = this
        let weight = Number(self.refs.weight)
        fetch(`http://localhost:3001/add/${weight}`, {
            method: 'POST',
            data: {
                weight: self.refs.weight,
            },
        })
            .then((response) => response.json())
            .then((body) => console.log(body))
    }
    render() {
        return (
            <form className="data" onSubmit={this.onSubmit}>
                <input
                    className="enter"
                    type="number"
                    placeholder="Saisir un poids"
                    ref="weight"
                />
                &nbsp;
                <button className="enter-submit poids gray">
                    <Icons icon="login" />
                    Ajouter
                </button>
            </form>
        )
    }
}
