import React, { Component } from 'react'
export default class Type extends Component {
    constructor() {
        super()
        this.state = { user: {} }
        this.onSubmit = this.handleSubmit.bind(this)
    }
    getNumber({ value, defaultValue }) {
        const num = parseInt(value, 10)
        return isNaN(num) ? defaultValue : num
    }
    getString({ value, defaultValue }) {
        const num = String(value, 10)
        return isNaN(num) ? defaultValue : num
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
                <div className="selected">
                    <select
                        className="selection"
                        name="type"
                        value={this.refs.type}
                    >
                        <option>Type</option>
                        <option value="caisse">Caisse</option>
                        <option value="palette">Palettes</option>
                    </select>
                    <select
                        className="selection"
                        name="matter"
                        value={this.refs.matter}
                    >
                        <option>Matière</option>
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
