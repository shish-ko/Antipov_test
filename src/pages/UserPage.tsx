import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { API_URL } from "constants";
import { IUserData } from "interfaces";
import { Header } from "~comps/Header";
import EmailIcon from '~assets/email.svg?react';
import PhoneIcon from '~assets/phone.svg?react';
import EditIcon from '~assets/edit.svg';
import { ChangeEvent, useState } from "react";

export const UserPage = () => {
  const { first_name, last_name, avatar, email } = useLoaderData() as IUserData;
  const [userPic, setUserPic] = useState(avatar);

  const uploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      setUserPic(e.target?.result as string);
    };
    const file = e.target.files?.[0];
    if(file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Header>
        <div className="userHeader">
          <div className="photoBlock">
            <img src={userPic} alt="user picture" className="photoBlock__img" />
            <div className="photoBlock__edit" >
              
              <label htmlFor="upload-photo" className="photoBlock__editIcon">
                <img src={EditIcon} alt="edit profile photo"  />
              </label>
              <input type='file' name="photo" accept="image/*" id="upload-photo" className="photoBlock__filePicker" onChange={uploadImage}/>
            </div>
          </div>
          <div className="userHeader__userData">
            <h1 className="headerTitle">{first_name} {last_name} </h1>
            <p className="userHeader__occupation">Партнер</p>
          </div>
        </div>
      </Header>
      <section className="main-container ">
        <div className="userContainer user">
          <div className="user__description">
            <p>
              Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших технологий и увеличивать продажи, используя самые современные аналитические инструменты.
            </p>
            <p>
              В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями. Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов — это осознание того, что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, что после окончания проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно".
            </p>
            <p>
              Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других бизнес-проектов.
            </p>
          </div>
          <div>
            <a href={`tel: +375290000000`} className="user__contact">
              <PhoneIcon />
              +375(29)0000000
            </a>
            <a href={`mailto: ${email}`} className="user__contact">
              <EmailIcon />
              {email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const res = await fetch(API_URL + `users/${params.id}`);
  const { data } = await res.json() as { data: IUserData };
  return data;
};