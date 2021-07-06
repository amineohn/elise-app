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
        const fetchType = await fetch(
            `http://localhost:3001/type/${type}/${matter}`,
            {
                method: 'POST',
                data: {
                    type: type,
                    matter: matter,
                },
            }
        )
            .then((response) => response.json())
            .then((body) => console.log(body))

        if (!weight && weight.length == 0) {
            return (
                <div className="bots">
                    <h5 className="texts">no more results.</h5>
                </div>
            )
        }
        return fetchType
    }
    render() {
        const bennes = [
            {
                bennes: '2000kg',
                value: 'deuxtonnes',
            },
        ]
        const palette = [
            {
                value: '660L (37kg)',
                poids: 'poids',
            },
        ]
        return (
            <>
                <div className="selected">
                    <select
                        onSubmit={this.onSubmit}
                        ref="type"
                        className="selection"
                        name="type"
                    >
                        <option>Type</option>
                        {bennes.map((item) => (
                            <>
                                <option value={item.value}>
                                    {item.bennes}
                                </option>
                            </>
                        ))}
                    </select>
                    <select
                        ref="matter"
                        className="selection"
                        name="matter"
                        onSubmit={this.onSubmit}
                    >
                        <option>Matière</option>
                        {palette.map((item) => (
                            <>
                                <option value={item.poids}>{item.value}</option>
                            </>
                        ))}
                    </select>
                </div>
            </>
        )
    }
}
