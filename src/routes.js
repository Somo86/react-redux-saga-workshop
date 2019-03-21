import React from 'react';
import {Route, Switch} from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import BasicComponent from './views/basicComponent';
import ReduxComponent from './views/reduxComponent';
import SagaComponent from './views/sagaComponent';
import HOCPattern from './views/patterns/HOC';
import CompoundComponent from './views/patterns/CompundComponents';
import RenderPropsComponent from './views/patterns/renderProps';
import {ProviderPattern} from './views/patterns/providerPattern';

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={BasicComponent} />
            <Route path="/hoc-pattern" exact component={HOCPattern} />
            <Route path="/compound-pattern" exact component={CompoundComponent} />
            <Route path="/renderprops-pattern" exact component={RenderPropsComponent} />
            <Route path="/provider-pattern" exact component={ProviderPattern} />
            <Route path="/redux-component" exact component={ReduxComponent} />
            <Route path="/saga-component" exact component={SagaComponent} />
        </Switch>
    </Router>
);
