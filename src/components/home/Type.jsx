import React, { Component } from 'react'
export default class Type extends Component {
    constructor() {
        super()
        this.state = { user: {} }
        this.onSubmit = this.handleSubmit.bind(this)
    }

    getNumber({ value, defaults }) {
        const number = parseInt(value, 10)
        return isNaN(number) ? defaults : number
    }
    getString({ value, defaults }) {
        const number = String(value, 10)
        return isNaN(number) ? defaults : number
    }
    handleChange(event) {
        //this.setState({category: event.target.value});
    }
    async handleSubmit(e) {
        e.preventDefault()
        let type = await this.getString(this.refs.type)
        let matter = await this.getNumber(this.refs.matter)
        await fetch(`http://localhost:3001/type/${type}/${matter}`, {
            method: 'POST',
            data: {
                type: type,
                matter: matter,
            },
        })
            .then((response) => response.json())
            .then((body) => console.log(body))
    }
    render() {
        return (
            <>
                <div className="text-black space-x-2 flex justify-center xl:items-center">
                    <select
                        onChange={this.handleSubmit}
                        className="outline-none appearance-none p-3 rounded-2xl border-2 border-orange-600 hover:border-orange-400 transition"
                        name="text-black grid grid-flow-col auto-cols-max"
                        value={this.refs.type}
                    >
                        <option>Type</option>
                        <option value="caisse">Caisse</option>
                        <option value="palette">Palettes</option>
                    </select>
                    <select
                        onChange={this.handleSubmit}
                        className="outline-none appearance-none p-3 rounded-2xl border-2 border-orange-600 hover:border-orange-400 transition"
                        name="matter"
                        value={this.refs.matter}
                    >
                        <option>Matière</option>
                        <option>--- Matières ---</option>
                        <option value="pet">PET</option>
                        <option value="canettes">Canettes</option>
                        <option value="dee">DEE</option>
                        <option value="papier">Papier</option>
                        <option value="carton">Carton</option>
                        <option value="">--- Spécifique ---</option>
                        <option value="dib">DIB</option>
                        <option value="">--- Désarchivage ---</option>
                    </select>
                </div>
            </>
        )
    }
}
