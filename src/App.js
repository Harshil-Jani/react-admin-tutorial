import * as React from "react";
import { Admin, Resource,fetchUtils} from "react-admin";
import { UserList } from "./users";
import { Posts, PostEdit, PostCreate } from "./posts";
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import dataProvider from "./dataProvider";

function App() {

  return <Admin authProvider={authProvider} dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="users" list={UserList} icon={UserIcon} />
    <Resource name="posts" list={Posts} icon={PostIcon} edit={PostEdit} create={PostCreate} />
  </Admin>
}

export default App;
