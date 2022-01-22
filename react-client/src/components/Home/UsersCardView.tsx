import { User } from '../../models/User'
import { UserCard } from './UserCard';

/**
 * Users Card View show the users as a list of cards
 * @param users: User[] 
 * @returns UsersCardView 
 */
const UsersCardView = ({users}: {users: User[]}) => {

    console.log(users)

  return (
    <div>
      {users && users?.map((user: User) => {
        return <UserCard {...user} />
      })};
    </div>)
};

export default UsersCardView;