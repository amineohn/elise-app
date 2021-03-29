/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component {
    render() {
        return (
            <>
                <div className="logo fade-in">
                    <Link to="/"><img src="https://www.elise.com.fr/assets/templates/meridian/images/logo.jpg" /></Link>
                </div>
                <div className="App fade-in">
                    <div className="pos">
                        <div className="dot">
                            +
                        </div><br />
                        <div className="dot">
                            -
                        </div>
                        <select class="selection" name="test">
                            <option value="">Type de bennes</option>
                            <option value="test">test 1</option>
                            <option value="test">test 2</option>
                            <option value="test">test 3</option>
                            <option value="test">test 4</option>
                        </select>
                        <select class="selection" name="test">
                            <option value="">Caisse palette</option>
                            <option value="test">test 1</option>
                            <option value="test">test 2</option>
                            <option value="test">test 3</option>
                            <option value="test">test 4</option>
                        </select>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;