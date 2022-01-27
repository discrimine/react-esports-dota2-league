import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Main from "./pages/Main";
import Teams from "./pages/Teams";
import Info from "./pages/Info";
import Events from "./pages/Events";
import Statistics from "./pages/Statistics";

const EternityRouter = () => {
    return(
        <Router>
            <React.Fragment>
                <Switch>
                    <Route
                        exact
                        path={`/`}
                        render={props => (
                            <Main {...props} />
                        )}
                    />
                    <Route
                        exact
                        path={`/teams/`}
                        render={props => (
                            <Teams {...props} />
                        )}
                    />
                    <Route
                        exact
                        path={`/events/`}
                        render={props => (
                            <Events {...props} />
                        )}
                    />
                    <Route
                        exact
                        path={`/statistics/`}
                        render={props => (
                            <Statistics {...props} />
                        )}
                    />
                    <Route
                        exact
                        path={`/info/`}
                        render={props => (
                            <Info {...props} />
                        )}
                    />
                    <Route render={() => <Redirect to="/" />} />
                </Switch>
            </React.Fragment>
        </Router>
    )
}

export default EternityRouter;