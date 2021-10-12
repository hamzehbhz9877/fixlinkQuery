import { BrowserRouter as Router } from 'react-router-dom';
import FixLink from 'fixlink';
import { useEffect } from 'react';
import { Intercept } from 'Services/httpService';
import AlertWrapper from 'Context/alert';
import Notification from 'Components/alert/notification';

function App() {
  useEffect(() => {
    Intercept();
  }, []);

  const baseUrl: HTMLBaseElement = document.getElementsByTagName(
    'base'
  )[0] as HTMLBaseElement;

  const baseName = baseUrl.getAttribute('href') as string;

  return (
    <Router basename={baseName}>
      <AlertWrapper>
        <FixLink />
        <Notification />
      </AlertWrapper>
    </Router>
  );
}

export default App;
