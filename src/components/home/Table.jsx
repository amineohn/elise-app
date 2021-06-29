import React, { Component } from 'react'
import Icons from '@components/Icons'
export default class Table extends Component {
    state = {
        data: null,
        edit: false,
    }
    componentDidMount() {
        this.callAPI()
            .then((res) =>
                this.setState({
                    weight: res.weight,
                    type: res.type,
                    metter: res.metter,
                    data: res.data,
                })
            )
            .catch((err) => console.log(err))
    }
    callAPI = async () => {
        const response = await fetch(`${process.env.API}/list`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Request-Method': 'GET',
                Accept: 'application/json',
            },
        })
        const body = await response.json()

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body
    }

    render() {
        const data = [
            {
                type: this.state.type,
                weight: this.state.weight,
                metter: this.state.metter,
                edit: this.state.edit,
            },
        ]

        return (
            <>
                {data.map((item) => (
                    <tr>
                        <>
                            <td>{item.type}</td>
                            <td>{item.metter}</td>
                            <td>
                                {item.weight}
                                <button
                                    className={
                                        item.edit
                                            ? 'valid orange'
                                            : 'valid gray'
                                    }
                                    type="submit"
                                >
                                    <Icons
                                        icon={item.edit ? 'add' : 'delete'}
                                    />
                                </button>
                            </td>
                        </>
                    </tr>
                ))}
            </>
        )
    }
}
