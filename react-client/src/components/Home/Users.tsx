import { useState } from 'react';
import { User } from '../../models/User'
import { UserCard } from './UserCard';
import UsersCardView from './UsersCardView';
import { useUsers } from './UsersRequest';
import { Switch } from '@chakra-ui/react'

function Users() {

  const [tableView, setTableView] = useState(false);

  const { isLoading, data, error } = useUsers();

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>Error</div>

  const swicthChange = () => {
    setTableView(!tableView);
  }

  return (
    <>
      {tableView ? <>Cards View</> : <>Table View</>}
      <Switch id='email-alerts'
        onChange={swicthChange} />
      {tableView ? <div>table</div> :
        <UsersCardView users={data?.users}></UsersCardView>}
    </>)
};

export default Users;