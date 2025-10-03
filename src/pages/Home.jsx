import UserList from '../components/UserList';
import UserForm from '../components/UserForm';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addUser } from "../redux/usersSlice";

export default function Home() {
   const dispatch = useDispatch();

  const addUserHandler = (user) => {
    dispatch(addUser(user));
  };

    return (
        <div>
            <UserForm addUser={addUserHandler} />
            <UserList />
        </div>
    );
}
