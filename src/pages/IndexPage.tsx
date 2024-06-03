import { useLoaderData } from "react-router-dom";

import { API_URL } from "constants"
import { IUserListRes } from "src/interfaces";
import { Header } from "~comps/Header";
import { UserList } from "~comps/UserList";
import { useState } from "react";
import { IUserData } from "interfaces";

export const IndexPage = () => {
  const loaderData = useLoaderData() as IUserListRes;
  const [users, setUsers] = useState<IUserData[]>(loaderData.data)
  const [page, setPage] = useState(1);

  const loadUsers = async () => {
    const newUsers = await loadPage(page+1);
    setUsers([...users, ...newUsers.data]);
    setPage(page + 1);
  }

  return (
    <>
      <Header>
        <div className="indexHeader centerBlock">
          <h1 className="headerTitle centerText">Наша команда</h1>
          <p className="headerSubtitle headerSubtitle_main centerText">Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций. </p>
        </div>
      </Header>
      <main className="main-container">
        <div className="userList">
          <UserList userList={users} />
        </div>
        <button 
          onClick={loadUsers} 
          className="userList__load" 
          disabled={loaderData.total_pages === page}
        >
          Загрузить ещё
        </button>
      </main>
    </>
  )
}

async function loadPage(page: number) {
  const res = await fetch(API_URL + `users?page=${page}`);
  const data = await res.json() as IUserListRes;
  return data
}
export async function loader() {
  const res = await fetch(API_URL + `users?page=1`);
  const data = await res.json() as IUserListRes;
  return data
}