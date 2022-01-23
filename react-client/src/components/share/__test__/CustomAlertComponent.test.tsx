import { render } from "@testing-library/react";
import { CustomAlertComponent } from "../CustomAlertComponent";

describe('CustomAlertComponent Test Case', () => {

    //testing that the alert is rendering
    it('should render the Alert', async () => {
        const { getByText } = await render(<CustomAlertComponent 
            status={'error'}
            title={'Your connection is outdated!'}
            description={'Your experience may be degraded'} />);

        const title = getByText(/Your connection is outdated!/i);
        const description = getByText(/Your experience may be degraded/i);

        expect(title).toBeInTheDocument;
        expect(description).toBeInTheDocument;
    });
});