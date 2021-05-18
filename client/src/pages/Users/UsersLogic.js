import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import userOperations from "../../http/user/userOperations";
import Users from './Users'

export default function UsersLogic() {
  const dispatch = useDispatch();
  const getUsers = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(userOperations.getAllUsers());
  }, [dispatch]);

  return (
    <>
        <Users getUsers={getUsers} />
    </>
  );
}
