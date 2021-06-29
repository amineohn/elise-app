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
