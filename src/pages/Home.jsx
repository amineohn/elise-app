/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isBrowser } from "react-device-detect";
import Logo from "../components/Logo";
const url = 'https://localhost:8000/';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: null
        }
    }
    render() {
        fetch(url)
            .then(data => {
                this.setState({
                    message: data.message
                })
            })
            //.then((res) => res.json())=
            .catch((error) => console.log(error))
        if (isBrowser) {
            return <div class="error"><p class="error-text">This content is unavailable on browser</p></div>
        }
        return (
            <>
                <Logo />
                <div className="App fade-in">
                    <div className="pos">
                        <div className="position">
                            <button className="dot">
                                +
                        </button>
                            <br />
                            <button className="dot">
                                -
                        </button>
                            <select id="bennes" className="selection" name="typebennes">
                                <option value="">Type de bennes</option>
                                <option value="test">test 1</option>
                                <option value="test">test 2</option>
                                <option value="test">test 3</option>
                                <option value="test">test 4</option>
                            </select>
                            <select id="palette" className="selection" name="typepalette">
                                <option value="">Caisse palette</option>
                                <option value="test">test 1</option>
                                <option value="test">test 2</option>
                                <option value="test">test 3</option>
                                <option value="test">test 4</option>
                            </select>
                        </div>
                    </div>
                    <div className="isLogin">
                        <img className="user" src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" srcset="" />
                        <Link className="p-login" to="/login">
                            <p className="text">connecté en tant que Amine</p>
                        </Link>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;