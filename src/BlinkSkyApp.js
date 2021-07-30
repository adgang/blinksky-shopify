import { useLocation } from 'react-router-dom';

export default function BlinkSkyApp(props) {
  const location = useLocation();
  console.log(location);

  return (
    <section>
      <h1>Welcome to Blinksky</h1>
    </section>
  );
}
