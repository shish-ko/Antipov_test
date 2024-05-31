import { LoaderFunctionArgs, useLoaderData } from "react-router-dom"
import { API_URL } from "constants"
import { IUserData } from "interfaces"
import { Header } from "~comps/Header";

export const UserPage = () => {
  const {first_name, last_name, avatar, email} = useLoaderData() as IUserData;

  return (
    <>
      <Header>
        <div className="userHeader">
          <img src={avatar} alt="userPic" />
          <div className="userHeader">
            <h1 className="headerTitle">{first_name} {last_name} </h1>
            <p>Не халявщик, а партнер</p> 
          </div>
        </div>
      </Header>
    <section className="main-container ">
    </section>
  </>
  )
}

export const loader = async ({params}: LoaderFunctionArgs) => {
  const res = await fetch(API_URL+ `users/${params.id}`);
  const {data} = await res.json() as {data: IUserData};
  return data;
}