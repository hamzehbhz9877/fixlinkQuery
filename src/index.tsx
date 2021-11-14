import {render} from 'react-dom';
import {ReactQueryDevtools} from 'react-query/devtools';
import {QueryClientProvider} from 'react-query';
import {queryClient} from 'Store';
import App from 'App';

import "Assets/css/bootstrap/bootstrap-rtl.css"
import 'Assets/css/main.css';


render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools />
  </QueryClientProvider>,
  document.getElementById('root') as Element
);


