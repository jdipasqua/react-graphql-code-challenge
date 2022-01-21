
import { useUsers } from './UsersRequest';

function Users() {

    const {isLoading, data, status, error} = useUsers();
  
    console.log(data);
  
  return (
  
  <div>
    <h1>Users</h1>
    <p>{status}</p>
  
    <div>
        {data && data?.users?.map((user: any) => {
        return <p>{user.name}</p>})}
    </div>
    
    </div>
  
  )
  };

export default Users;