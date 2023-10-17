import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/home';
import Contact from './components/contact';
import Navigation from './components/navigation';

const App = () => {
    return (
        <div>
            <h1>App</h1>
            <hr />

            <BrowserRouter>
                <Navigation />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/contact' component={Contact} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
