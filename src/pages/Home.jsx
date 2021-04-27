/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isBrowser } from "react-device-detect";
const url = 'https://localhost:8000/';//test?

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
            //.then((res) => res.json())
            .catch((error) => console.log(error))
        if (isBrowser) {
            return <div class="error"><p class="error-text">This content is unavailable on browser</p></div>
        }
        return (
            <>
                <div className="logo fade-in">
                    <Link to="/"><img src="https://www.elise.com.fr/assets/templates/meridian/images/logo.jpg" /></Link>
                </div>
                <div className="App fade-in">
                    <div className="pos">
                        <div className="position">
                            <div className="dot">
                                +
                        </div><br />
                            <div className="dot">
                                -
                        </div>
                            <select className="selection" name="test">
                                <option value="">Type de bennes</option>
                                <option value="test">test 1</option>
                                <option value="test">test 2</option>
                                <option value="test">test 3</option>
                                <option value="test">test 4</option>
                            </select>
                            <select className="selection" name="test">
                                <option value="">Caisse palette</option>
                                <option value="test">test 1</option>
                                <option value="test">test 2</option>
                                <option value="test">test 3</option>
                                <option value="test">test 4</option>
                            </select>
                        </div>
                    </div>
                    <div className="isLogin">
                        <div className="user"></div>
                        <p className="text">connecté en tant que Amine</p>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;