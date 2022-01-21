
import { useUsers } from '../UsersRequest';
import { User } from '../../models/User'
import { UserCard } from '../UserCard';

function Users() {

  const { isLoading, data, error } = useUsers();

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>Error</div>

  return (
    <div>
      {data && data?.users?.map((user: User) => {
        return <UserCard {...user} />
      })};
    </div>)
};

export default Users;