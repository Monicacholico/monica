import React from 'React/index';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Hello from "./Hello";
import App from './App';
import NotFound from "./NotFound";




const Router = () => (
    <BrowserRouter>
        <Switch>

            <Route exact path="/" component = {Hello}/>
            <Route exact path="/mycontent" component = {App}/>
            <Route component={NotFound}/>
        </Switch>

    </BrowserRouter>
);

export default Router;