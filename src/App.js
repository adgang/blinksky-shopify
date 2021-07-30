import { Provider, TitleBar } from '@shopify/app-bridge-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlinkSkyApp from './BlinkSkyApp';
import Install from './Install';

export default function App(props) {
  console.log(props);
  const config = {
    apiKey: 'ad3b7566c6dd1cdf9ff2878bf50265b2',
    shopOrigin: 'bazingasuperstore.myshopify.com',
    host: Buffer.from('affectionate-albattani-a03799.netlify.app').toString(
      'base64',
    ),
  };

  return (
    <>
      <h1>Blah</h1>
      <Router>
        <Provider config={config}>
          <Switch>
            <Route path="/preferences" exact component={Install}></Route>
            <Route path="/" exact component={Install}></Route>
            <Route path="/app" exact component={BlinkSkyApp}></Route>
            <Route path="/welcome" exact component={Install}></Route>
          </Switch>
        </Provider>
      </Router>
    </>
  );
}
