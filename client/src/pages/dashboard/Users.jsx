import { message } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../helpers/admins";
import DashTable from "../../components/DashTable";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [meta, setMeta] = useState({});
  const dispatch = useDispatch();
  const paginatedUsers = useSelector((state) => state.app.paginatedUsers);

  const getUsers = async (page = 1) => {
    if (paginatedUsers[page]) {
      setMeta(paginatedUsers[page].meta);
      setUsers(paginatedUsers[page].users);
      return paginatedUsers[page];
    }

    try {
      const data = await fetchUsers(page, dispatch);
      setMeta(data.meta);
      setUsers(data.users);
    } catch (error) {
      console.error(error);
      console.error("Failed to get users for page:", page);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleEdit = (user) => {
    message.success(`editing ${user?.username}`, 1);
  };

  const handleDelete = (user) => {
    message.error(`deleting ${user?.username}`, 1);
  };

  return (
    <DashTable 
      data={users}
      meta={meta}
      onPageChange={getUsers}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
}