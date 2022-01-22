import { User } from '../../models/User'
import { UserCard } from './UserCard';

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