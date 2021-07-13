import React, { Component } from 'react'
import Icons from '@components/Icons'
export default class AddWeight extends Component {
    constructor() {
        super()
        this.state = { user: {} }
        this.onSubmit = this.handleSubmit.bind(this)
    }
    getNumber({ value, defaultValue }) {
        const num = parseInt(value, 10)
        return isNaN(num) ? defaultValue : num
    }
    async handleSubmit(e) {
        e.preventDefault()
        let weight = await this.getNumber(this.refs.weight)
        fetch(`http://localhost:3001/add/${weight}`, {
            method: 'POST',
            data: {
                weight: weight,
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
                {() => {
                    const weight = this.refs.weight
                    if (!weight && weight.length == 0) {
                        return (
                            <h5 className="classes orange">
                                Veillez saisir une valeur
                            </h5>
                        )
                    }
                }}
            </form>
        )
    }
}
