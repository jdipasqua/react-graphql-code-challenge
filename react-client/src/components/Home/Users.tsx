import { useEffect, useState } from 'react';

import UsersCardView from './UsersCardView';
import { useUsers } from './UsersRequest';
import { FormControl, FormLabel, Input, InputGroup, InputLeftElement, Switch, Wrap, WrapItem } from '@chakra-ui/react'
import UsersTableView from './UsersTableView';
import { SearchIcon } from '@chakra-ui/icons';
import { User } from '../../models/User';

function Users() {

  const [tableView, setTableView] = useState(true);

  const { isLoading, data, error } = useUsers();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data)
      setUsers(data.users);
  }, [data])

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>Error</div>

  const swicthChange = () => {
    setTableView(!tableView);
  }


  /**
   * 
   * this searcher is convinated name and email using as %like% condition
   * @param event 
   */
  const searchChange = (event: any) => {
    let value = event.target.value;
    let resurt = data.users.filter((item: User) => (
      item.name.toLowerCase() + item.email.toLowerCase()).indexOf(value.toLowerCase()) > -1
    );

    setUsers(resurt);
  }

  return (
    <>
      <Wrap>
        <WrapItem>
          <FormControl display='flex' alignItems='center'>
            <FormLabel htmlFor='cards-view' mb='0'>
              Cards View
            </FormLabel>
            <Switch id='email-alerts'
              onChange={swicthChange} />
          </FormControl>
        </WrapItem>
        <WrapItem>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<SearchIcon color='gray.300' />}
            />
            <Input type='tel' placeholder='Search name or email' onChange={searchChange} />
          </InputGroup>
        </WrapItem>
      </Wrap>

      {tableView ? <UsersTableView users={users} /> :
        <UsersCardView users={users}></UsersCardView>}
    </>)
};

export default Users;