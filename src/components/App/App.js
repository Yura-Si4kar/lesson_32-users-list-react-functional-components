import '../../css/index.css';

import React, { useEffect, useState } from 'react'
import UsersForm from '../UsersForm/UsersForm';
import UsersList from '../UsersList/UsersList';
import { deleteUsers, getUsersList, addUserInList } from '../../api';

export default function App() {
  const [list, setList] = useState([]);
  
  useEffect(() => {
    getUsersList().then(data => setList(data));
  }, []);

  return (
    <>
      <UsersList
        list={list}
        deleteItem={deleteUser}
        onEditBtnClick={editUser}
        editItem={editUser}
      />
      <UsersForm
        onAddUsers={addUser}
      />
    </>
  )

  function addUser(users) {
    addUserInList(users)
      .then((data) => {
        setList([...list, data]);
      });
  }

  function deleteUser (id){
    deleteUsers(id);
    
    setList(
      list.filter(users => users.id !== id),
    );
  }

  function editUser(id) {
    console.log('edit', id)
  }
}
