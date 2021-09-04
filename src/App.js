import './settings/main.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as routes from './constants/routes';
import Main from './components/Main/Main';
import SignIn from './components/SignIn/SignIn';

const App =()=> {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.signIn} component={SignIn} />
        <Route exact path={routes.signUp} component={SignUp} />
        <Route exact path={routes.home} component={Main} />
          {/* <Route exact path={routes.projects} component={Projects} /> */}
          {/* <Route exact path={routes.add} component={Add} /> */}
      </Switch>
    </Router>
  );
}

export default App;
