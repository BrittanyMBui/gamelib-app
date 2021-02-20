import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import GamesPage from '../pages/GamesPage';
import NewGamePage from '../pages/NewGamePage';

const routes = (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/games' component={GamesPage} />
        <Route path='/add-game' component={NewGamePage} />
    </Switch>
);

export default routes;