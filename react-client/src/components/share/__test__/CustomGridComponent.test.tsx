import { render } from "@testing-library/react";
import { User } from "../../../models/User";
import { CustomGrid } from "../CustomGridComponent";

interface ColDef {
    label: string;
    key: string;
}

describe('CustomGridComponent Test Case', () => {

    const columns: ColDef[] = [
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "phone", label: "Phone" }
    ];

    const users: User[] = [{
        id: '29cd5658-cced-4fe2-9ed1-70c5b35f36c8',
        name: 'Ryan Hamilton',
        email: 'ryan.hamilton@astronomer.io',
        phone: '(555) 555-5555',
        password: 'hmt2eY2LHDjHMRDw',
        img: 'https://media-exp1.licdn.com/dms/image/C5603AQG3x-pvSJd4aA/profile-displayphoto-shrink_200_200/0/1516253993353?e=1648080000&v=beta&t=lX6ztgxnJ0w55CvCOgBwjkJ9xXXhyLJ26YCPqji2wh8'
    },
    {
        id: '81d1fd8e-c224-4189-b593-092d9e2430e1',
        name: 'Adam Vandover',
        email: 'adam@astronomer.io',
        phone: '(555) 555-5555',
        password: 'rPPdcaQuQ2QfVKs3',
        img: 'https://media-exp1.licdn.com/dms/image/C5603AQE5OR-oOeS-Ag/profile-displayphoto-shrink_200_200/0/1573929278205?e=1648080000&v=beta&t=HRuyLxscHotq_Xd3UaZmZlfpzm46Mw1UKOt9Y82IoE0'
    },];

    //testing CustomGrid is creating the table
    it('should render the Alert', async () => {
        const { getByText } = await render(<CustomGrid
            title={"Test"} columns={columns} data={users} />);

        const title = getByText(/Test/i);
        const ryan = getByText(/Ryan Hamilton/i);       

        const adam = getByText(/Adam Vandover/i);   

        expect(title).toBeInTheDocument;
        expect(ryan).toBeInTheDocument;
        expect(adam).toBeInTheDocument;
    });
});