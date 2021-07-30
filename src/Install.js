import { Provider, TitleBar, useAppBridge } from '@shopify/app-bridge-react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, useLocation } from 'react-router-dom';

export default function Install(props) {
  console.log(props);
  console.log(
    process.env.REACT_APP_SHOPIFY_API_KEY,
    process.env.REACT_APP_SHOPIFY_API_SECRET_KEY,
    process.env.REACT_APP_BLINKSKY_HOST,
  );
  const app = useAppBridge();

  const location = useLocation();
  console.log(location);
  console.log(location.pathname);
  const queryParams = new URLSearchParams(location.search);
  const [hmac, shop, timestamp] = ['hmac', 'shop', 'timestamp'].map((c) =>
    queryParams.get(c),
  );
  var randomString = function (length) {
    var text = '';
    var possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };
  console.log(hmac, shop, timestamp);
  const scopes = ['write_orders', 'read_customers'].join(',');
  const nonce = randomString(8);

  const redirectUri = `https://${process.env.REACT_APP_BLINKSKY_HOST}/app`;

  useEffect(async () => {
    const state = await app.getState();
    console.log('got state');
    console.log(state);
  });

  const config = {
    apiKey: process.env.REACT_APP_SHOPIFY_API_KEY,
  };

  return (
    <section>
      <a
        href={`https://${shop}/admin/oauth/authorize?client_id=${config.apiKey}&scope=${scopes}&redirect_uri=${redirectUri}&state=${nonce}`}
      >
        Install
      </a>
    </section>
  );
}
