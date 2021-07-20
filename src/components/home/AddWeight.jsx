import React, { Component } from 'react'
import Icons from '@components/Icons'
export default class AddWeight extends Component {
    constructor() {
        super()
        this.state = {}
        this.onSubmit = this.handleSubmit.bind(this)
    }
    getNumber({ value, defaults }) {
        const number = parseInt(value, 10)
        return isNaN(number) ? defaults : number
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
            .then((body) => body)
    }
    render() {
        return (
            <div className="mt-5 flex">
                <form className="flex justify-center" onSubmit={this.onSubmit}>
                    <input
                        className="outline-none placeholder-black rounded-2xl p-2 text-black border-2 border-orange-400 hover:border-orange-600 transition w-44"
                        type="number"
                        placeholder="Saisir un poids"
                        ref="weight"
                    />
                    &nbsp;
                    <button className="outline-none bg-gray-800 flex p-2 rounded-2xl hover:bg-gray-700 transition border-2 border-transparent">
                        <Icons icon="login" />
                        Ajouter
                    </button>
                </form>
            </div>
        )
    }
}
