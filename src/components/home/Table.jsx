import React, { Component } from 'react'
import Icons from '@components/Icons'
export default class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }

    callAPI = async () => {
        const response = await fetch(`${process.env.API}/list`, {
            method: 'GET',
            headers: {
                mode:
                    process.env.NODE_ENV === 'production' ? 'cors' : 'no-cors',
                'Content-Type': 'application/json',
                'Access-Control-Request-Method': 'GET',
                Accept: 'application/json',
                'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers':
                    'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
            },
        })
        const body = await response.json()

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body
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

    render() {
        const { data } = this.state
        return (
            <>
                {data.map((item) => (
                    <tr>
                        <>
                            <td>{item.type}</td>
                            <td>{item.matter}</td>
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
