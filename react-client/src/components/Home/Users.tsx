import { useState } from 'react';

import UsersCardView from './UsersCardView';
import { useUsers } from './UsersRequest';
import { FormControl, FormLabel, Switch } from '@chakra-ui/react'
import UsersTableView from './UsersTableView';

function Users() {

  const [tableView, setTableView] = useState(true);

  const { isLoading, data, error } = useUsers();

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>Error</div>

  const swicthChange = () => {
    setTableView(!tableView);
  }

  return (
    <>
      <FormControl display='flex' alignItems='center'>
        <FormLabel htmlFor='cards-view' mb='0'>
          Cards View
        </FormLabel>
        <Switch id='email-alerts'
          onChange={swicthChange} />
      </FormControl>
      {tableView ? <UsersTableView users={data?.users} /> :
        <UsersCardView users={data?.users}></UsersCardView>}
    </>)
};

export default Users;