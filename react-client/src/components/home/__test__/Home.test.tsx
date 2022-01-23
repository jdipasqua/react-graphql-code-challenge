import { render } from "@testing-library/react";
import Home from "../Home";


/**
 * mocking the User component
 */
jest.mock('../users', () => {
    return {
        __esModule: true,
        Users: () => {
            return <div></div>
        },
        default: () => {
            return <div></div>
        }
    }
})

describe('Home Test Unit Case', () => {

    it('should render the Home', () => {
        const screen = render(<Home/>);

        expect(screen).toBeDefined;
      })
});