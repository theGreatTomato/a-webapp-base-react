import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import path from '../static/routeUrl';
import Home from '../pages/Home';
import Gift from '../pages/Gift';
import Short from '../pages/Short';
import My from '../pages/My';
import Login from '../pages/My/Login';  
import GRZL from '../pages/My/grzl';
import DDCX from '../pages/My/ddcx';
import BDDQTS from '../pages/My/bddqts';
import KF from '../pages/My/kf/index';
import ZXZX from '../pages/My/kf/zxzx';
import CJWT from '../pages/My/kf/cjwt';
import LXWM from '../pages/My/lxwm/index';

export default class Routers extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path= {path} exact component = { Home } />
                        <Route path={`${path}gift/`} exact  component = { Gift } />
                        <Route path={`${path}short/`} exact  component = { Short } />
                        <Route path={`${path}my/`} exact  component = { My } />
                        <Route path={`${path}my/login`} exact  component = { Login } />
                        <Route path={`${path}my/grzl`} exact  component = { GRZL } />
                        <Route path={`${path}my/ddcx`} exact  component = { DDCX } />
                        <Route path={`${path}my/bddqts`} exact  component = { BDDQTS } />
                        <Route path={`${path}my/lxwm`} exact  component = { LXWM } />
                        <Route path={`${path}my/kf`} exact  component = { KF } />
                        <Route path={`${path}my/kf/zxzx`} exact  component = { ZXZX } />
                        <Route path={`${path}my/kf/cjwt`} exact  component = { CJWT } />
                        <Route path={`${path}404/`} component = { NoFind } />
                        <Redirect from={`${path}*`} to = '/yijia/build/404' />
                    </Switch>
                </Router>
            </div>
        )
    }
};

class NoFind extends Component {
    render() {
        return(
            <div>
                404 找不到；额
            </div>
        )
    }
}
