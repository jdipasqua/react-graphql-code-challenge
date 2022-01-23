import { render } from "@testing-library/react";
import { User } from "../../../models/User";
import UsersCardView from "../UsersCardView";

const users: User[] = [{
    id: 'da921a0c-3d85-4705-bd0c-11371186d625',
    name: 'Sam Black',
    email: 'sam@astronomer.io',
    phone: '(555) 555-5555',
    password: 'EZz3mv7PU9HV3XLf',
    img: 'https://media-exp1.licdn.com/dms/image/D4E03AQG9FDJtkzRbKw/profile-displayphoto-shrink_200_200/0/1634326037029?e=1648080000&v=beta&t=gJm6ZwF_PXskcDH1-VKYsd4Y5RLxmAzLm4x6t-jUei0'
},
{
    id: '46c38661-a087-4d2c-a9cc-53d4b8f15abc',
    name: 'Vishwas Raman',
    email: 'vishwas@astronomer.io',
    phone: '(555) 555-5555',
    password: 'uw4DhXTnmzz8SJRX',
    img: 'https://media-exp1.licdn.com/dms/image/C4D03AQG3nuMQVNlzuA/profile-displayphoto-shrink_200_200/0/1516261660696?e=1648080000&v=beta&t=Yqg1_PPgTuue3Lqt4-gO__jMybqUoKhIhU5iiz3Z1qA'
}];


describe('UsersCardView Test Case', () => {


    //testing that the both users are rendering
    it('should render the Home', async() => {
        const {getByText} = await render(<UsersCardView users={users} />);
        const name = getByText(/Sam Black/i);       

        const nameV = getByText(/Vishwas Raman/i);       

        expect(name).toBeInTheDocument;
        expect(nameV).toBeInTheDocument;
    })
});