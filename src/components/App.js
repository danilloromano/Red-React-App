import React, { Component } from "react";
import Home from "../components/pages/Home/Home.js";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "../assets/defaults/reset.css";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import formReducer from '../redux/reducers/formReducer';

let store = createStore(formReducer);

class App extends Component {
    render() {
        return (
            <Router>
                <Provider store={store}>
                    <div className="app_container">
                        <Route exact path={'/'} component={() => <Home />} />
                    </div>
                </Provider>
            </Router>
        )
    }
}

export default App;