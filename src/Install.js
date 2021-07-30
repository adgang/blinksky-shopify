import { Provider, TitleBar, useAppBridge } from '@shopify/app-bridge-react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, useLocation } from 'react-router-dom';

export default function Install(props) {
  console.log(props);
  const app = useAppBridge();

  const location = useLocation();
  console.log(location);
  const queryParams = new URLSearchParams(location.search);
  const [hmac, shop, timestamp] = ['hmac', 'shop', 'timestamp'].map((c) =>
    queryParams.get(c),
  );
  console.log(hmac, shop, timestamp);
  const scopes = ['write_orders', 'read_customers'].join(',');
  const nonce = 2;
  const redirectUri = 'https://localhost:3000/welcome';

  useEffect(async () => {
    const state = await app.getState();
    console.log('got state');
    console.log(state);
  });

  const config = {
    apiKey: 'ad3b7566c6dd1cdf9ff2878bf50265b2',
    shopOrigin: shop,
    host: Buffer.from('//localhost:3000').toString('base64'),
  };

  return (
    <section>
      <Provider config={config}>
        <TitleBar title="My page title" />
        <TitleBar title="My page title" />]
      </Provider>
      <a
        href={`https://${shop}/admin/oauth/authorize?client_id=${config.apiKey}&scope=${scopes}&redirect_uri=${redirectUri}&state=${nonce}`}
      >
        Install
      </a>
    </section>
  );
}
