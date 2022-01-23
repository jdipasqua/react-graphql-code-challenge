import { render } from '@testing-library/react';
import App from '../App';
import { Router } from 'react-router';
import { createMemoryHistory } from "history";

describe('App Test Unit Case', () => {

    test('renders app', () => {
        const history = createMemoryHistory();

        render(
            <Router location={''} navigator={history}>
                <App />
            </Router>);
        expect(history.location.pathname).toBe("/");
    });

});





