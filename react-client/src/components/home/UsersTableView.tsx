import { User } from '../../models/User'
import { CustomGrid } from '../share/CustomGridComponent';

interface ColDef {
  label: string;
  key: string;
}

/**
 * Users Table View
 * @param users: User[] 
 * @returns CustomGridComponent 
 */
const UsersTableView = ({ users }: { users: User[] }) => {

  const columns: ColDef[] = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" }
  ];

  return (
    <CustomGrid title={"Users"} columns={columns} data={users}>
    </CustomGrid>)
};

export default UsersTableView;