import { createStore } from 'redux';
import { Provider} from 'react-redux';
import React,{ Component } from 'react';
import Router from '../router/index';

//store 沒什麽卵用
const testReducer = (state, action) => {
    if(!state) {
        return []
    }
    switch (action.type) {
        case 'NOTHING':
            return state;
        default:
            return state

    }
}

const store = createStore(testReducer)

export default class App extends Component {
    render() {
        return (
            <div>
                <Provider store = { store }>
                    <Router />
                </Provider>
            </div>
        )
    }
};
