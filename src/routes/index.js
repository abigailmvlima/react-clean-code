import { ConnectedRouter } from 'connected-react-router'
// import { Switch, Route } from 'react-router'
import { BrowserRouter, Router, Route, Switch, withRouter } from 'react-router-dom'

import history from '../app/history'
import NotFound from '../views/NotFound'
import Home from '../views/Home'
import Contact from '../views/Contact'
import WhoWeAre from '../views/WhoWeAre'
import TaskList from '../views/TaskList'


const Routes = () => {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route path={'/contato'} component={Contact} />
                <Route path={'/quemsomos'} component={WhoWeAre} />
                <Route path={'/tarefas'} component={TaskList} />
                <Route path={'/'} exact={true} component={Home} />
                <Route component={NotFound} />
            </Switch>
        </ConnectedRouter>
    )
}

export default Routes;