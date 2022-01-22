import { User } from '../../models/User'
import { UserCard } from './UserCard';

/**
 * Users Card View show the users as a list of cards
 * @param users: User[] 
 * @returns UsersCardView 
 */
const UsersCardView = ({users}: {users: User[]}) => {

  return (
    <div>
      {users && users?.map((user: User) => {
        return <UserCard key={user.id} {...user} />
      })};
    </div>)
};

export default UsersCardView;