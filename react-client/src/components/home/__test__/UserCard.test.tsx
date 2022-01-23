import { render } from "@testing-library/react";
import { User } from "../../../models/User";

import { UserCard } from "../UserCard";

describe('UserCard Case Tests', () => {

    const user: User = {
        id: 'da921a0c-3d85-4705-bd0c-11371186d625',
        name: 'Sam Black',
        email: 'sam@astronomer.io',
        phone: '(555) 555-5555',
        password: 'EZz3mv7PU9HV3XLf',
        img: 'https://media-exp1.licdn.com/dms/image/D4E03AQG9FDJtkzRbKw/profile-displayphoto-shrink_200_200/0/1634326037029?e=1648080000&v=beta&t=gJm6ZwF_PXskcDH1-VKYsd4Y5RLxmAzLm4x6t-jUei0'
      };

    it('should render the UserCard', async () => {
        const {getByText} = await render(<UserCard {...user}/>);
        const name = getByText(/Sam Black/i);       

        expect(name).toBeInTheDocument;
      })
});