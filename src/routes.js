import React from 'react';
import {Route, Switch} from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import BasicComponent from './views/basicComponent';
import ReduxComponent from './views/reduxComponent';

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={BasicComponent} />
            <Route path="/redux-component" exact component={ReduxComponent} />
            <Route path="/saga-component" exact component={ReduxComponent} />
        </Switch>
    </Router>
);