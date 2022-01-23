import { fireEvent, render } from "@testing-library/react";

import Users from "../Users";

/**
 * mocking the usersCardsView component
 */
jest.mock('../UsersCardView', () => {
    return {
        __esModule: true,
        Users: () => {
            return <div>usersCardsView</div>
        },
        default: () => {
            return <div>usersCardsView</div>
        }
    }
});

/**
 * mocking the usersTableView component
 */
jest.mock('../usersTableView', () => {
    return {
        __esModule: true,
        Users: () => {
            return <div>UsersTableView</div>
        },
        default: () => {
            return <div>UsersTableView</div>
        }
    }
});

/**
 * mocking the usersTableView component
 */
jest.mock('../usersRequest', () => {
    return {
        __esModule: true,
        useUsers: () => {
            return <div></div>
        },
        default: () => {
            return <div></div>
        }
    }
});

describe('Users Test Unit Case', () => {

    //testing that all components are rendering
    it('should render the Users using table view by default', async () => {
        const { getByText, getByPlaceholderText } = await render(<Users />);
        const table = getByText(/UsersTableView/i);
        const switchLabel = getByText(/Cards View/i);
        const searchPlaceholder = getByPlaceholderText(/Search name or email/i);

        expect(table).toBeInTheDocument;
        expect(switchLabel).toBeInTheDocument;
        expect(searchPlaceholder).toBeInTheDocument;
    });

    //switch-table-view

    it('should render the Users using cards view by default', async () => {
        const { getByTestId, getByText } = await render(<Users />);

        //get the swiitch element
        const switchElement = getByTestId('switch-table-view');

        //triggered the click
        await fireEvent.click(switchElement);

        const cards = getByText(/usersCardsView/i);

        //checking that cards is rendering
        expect(cards).toBeInTheDocument;
    });
    
});