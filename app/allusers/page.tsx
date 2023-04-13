"use client";

import { useState, useEffect } from "react";

const GetAllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      setUsers(data);
    };

    getUser();
  }, []);

  type User = {
    id: number;
    login: string;
  };
};

export default GetAllUsers;
