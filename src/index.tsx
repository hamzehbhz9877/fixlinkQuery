import {render} from 'preact/compat';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'Store';
import App from 'App';

import "bootstrap/dist/css/bootstrap.rtl.min.css"

import 'Assets/css/main.css';


if( document.getElementById('root'))
{
    render(
        <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools />
        </QueryClientProvider>,document.getElementById('root') as Element
    );
}

