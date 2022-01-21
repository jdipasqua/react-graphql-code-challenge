
import { useUsers } from './UsersRequest';
import {User} from './../models/User'

function Users() {

    const {isLoading, data, status, error} = useUsers();
  
  return (
  
  <div>
    <h1>Users</h1>
    <p>{status}</p>
  
    <div>
        {data && data?.users?.map((user: User) => {
        return <p>{user.name}</p>})}
    </div>
    
    </div>
  
  )
  };

export default Users;