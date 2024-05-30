import { useLoaderData } from "react-router-dom";
import { UserList } from "src/components/UserList";
import { API_URL } from "src/constants"
import { IUserListRes } from "src/interfaces";

export const IndexPage = () => {
  const loaderData = useLoaderData() as IUserListRes;

  return (
    <>
      <header className="header-container">
        <div className="main-container">
          <div className="nav">
            <span />
            <button className="navBtn">Выход</button>
          </div>
          <div className="indexHeader centerBlock">
            <h1 className="headerTitle centerText">Наша команда</h1>
            <p className="headerSubtitle headerSubtitle_main centerText">Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций. </p>
          </div>
        </div>
      </header>
      <main className="main-container userList">
        <UserList userList={loaderData.data} />
      </main>
    </>
  )
}

export const loader = async () => {
  const res = await fetch(API_URL + 'users/');
  const data = await res.json() as IUserListRes;
  return data
}