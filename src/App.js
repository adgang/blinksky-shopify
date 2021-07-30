import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlinkSkyApp from './BlinkSkyApp';
import Install from './Install';

export default function App(props) {
  console.log(props);

  return (
    <>
      <h1>Blah</h1>
      <Router>
        <Switch>
          <Route path="/preferences" exact component={Install}></Route>
          <Route path="/" exact component={Install}></Route>
          <Route path="/app" exact component={BlinkSkyApp}></Route>
          <Route path="/welcome" exact component={Install}></Route>
        </Switch>
      </Router>
    </>
  );
}
