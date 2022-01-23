import { fireEvent, render } from "@testing-library/react";
import { Nav } from "../Nav";

describe('Nav Case Tests', () => {

    it('should render the Navbar', async () => {
        const { getByText, getByTestId } = await render(<Nav />);
        const name = getByText(/Challenge Jorge/i);
        const HomeButton = getByText(/Home/i);

        const themeButton = await getByTestId('theme-button');
        const sunIcon = await getByTestId('sun-icon');


        expect(name).toBeInTheDocument;
        expect(HomeButton).toBeInTheDocument;
        expect(sunIcon).toBeInTheDocument;

        //click theme button
        fireEvent.click(themeButton);
    });
});