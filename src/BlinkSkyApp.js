import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function BlinkSkyApp(props) {
  const location = useLocation();
  console.log(location);
  // https://affectionate-albattani-a03799.netlify.app/app?code=36751e47e4af7005c889279346531fd6&hmac=03ce844c9f02ed4c5d03bcf55d1b0160b325b6cc5132f61414809ad24f7cf24f&host=YmF6aW5nYXN1cGVyc3RvcmUubXlzaG9waWZ5LmNvbS9hZG1pbg&shop=bazingasuperstore.myshopify.com&state=rLkjtLCi&timestamp=1627675107

  const queryParams = new URLSearchParams(location.search);
  const [confirmationCode, hmac, shop, timestamp, host, state] = [
    'code',
    'hmac',
    'shop',
    'timestamp',
    'host',
    'state',
  ].map((c) => queryParams.get(c));

  const getAccessToken = async () => {
    const url = `https://${shop}.myshopify.com/admin/oauth/access_token`;
    const response = await axios.post(url, {
      client_id: process.env.REACT_APP_SHOPIFY_API_KEY,
      client_secret: process.env.REACT_APP_SHOPIFY_API_SECRET_KEY,
      code: confirmationCode,
    });
    console.log(response);
    const accessToken = response.access_token;
    const scope = response.scope;
  };
  return (
    <section>
      <h1>Welcome to Blinksky</h1>
      <button onClick={getAccessToken}>Get Access Token</button>
    </section>
  );
}
