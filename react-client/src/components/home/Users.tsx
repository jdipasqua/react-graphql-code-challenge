import { useEffect, useState } from 'react';

import UsersCardView from './UsersCardView';
import { useUsers } from './UsersRequest';
import {
  FormControl, FormLabel, Input, InputGroup,
  InputLeftElement, Spinner, Switch, Wrap, WrapItem
} from '@chakra-ui/react'
import UsersTableView from './UsersTableView';
import { SearchIcon } from '@chakra-ui/icons';
import { User } from '../../models/User';
import { CustomAlertComponent } from '../share/CustomAlertComponent';

const Users = () => {

  const [tableView, setTableView] = useState(true);

  const { isLoading, data, error } = useUsers();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data)
      setUsers(data.users);
  }, [data]);

  if (isLoading) return (
    <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
      position={'fixed'}
      top={'30%'}
      left={'50%'} />);


  if (error) return (<CustomAlertComponent
    status={'error'}
    title={'Your connection is outdated!'}
    description={'Your experience may be degraded'}/>);

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
      <Wrap style={{ marginTop: 15, marginBottom: 15, marginLeft: 15 }}>

        <WrapItem justify='left'>
          <FormControl style={{ marginTop: 7 }} display='flex' alignItems='center'>
            <FormLabel htmlFor='cards-view' mb='0'>
              Cards View
            </FormLabel>
            <Switch data-testid="switch-table-view" id='card-view' onChange={swicthChange} />
          </FormControl>
        </WrapItem>

        <WrapItem style={{ marginLeft: 'auto', marginRight: 20 }}>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<SearchIcon color='gray.300' />}
            />
            <Input type='tel' placeholder='Search name or email' onChange={searchChange} />
          </InputGroup>
        </WrapItem>
      </Wrap>

      {tableView ? <UsersTableView users={users} /> : <UsersCardView users={users} />}
    </>);
};

export default Users;