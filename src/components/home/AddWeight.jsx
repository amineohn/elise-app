import React, { Component } from 'react'
import Icons from '@components/Icons'
export default class AddWeight extends Component {
    constructor() {
        super()
        this.state = { user: {} }
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
            .then((body) => console.log(body))
    }
    render() {
        const weight = this.refs.weight
        if (typeof weight == undefined) {
            return <h1>error!!!</h1>
        }
        return (
            <div className="mt-5">
                <form className="flex justify-center" onSubmit={this.onSubmit}>
                    <input
                        className="outline-none placeholder-black rounded-2xl p-2 text-black border-2 border-orange-600 hover:border-orange-400 transition"
                        type="number"
                        placeholder="Saisir un poids"
                        ref="weight"
                    />
                    &nbsp;
                    <button className="outline-none bg-gray-800 flex p-2 rounded-2xl hover:bg-gray-700 transition border-2 border-gray-900 hover:border-gray-800">
                        <Icons icon="login" />
                        Ajouter
                    </button>
                    {() => {
                        if (!weight && weight == 0) {
                            return (
                                <h5 className="classes orange">
                                    Veillez saisir une valeur
                                </h5>
                            )
                        }
                    }}
                </form>
            </div>
        )
    }
}
