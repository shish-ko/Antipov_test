import { Link } from "react-router-dom";
import { Like } from "./Like";

interface IUserCardProps {
  id: number,
  first_name: string,
  last_name: string,
  avatar: string
}

export const UserCard: React.FC<IUserCardProps> = ({id, first_name, last_name, avatar}) => {
  return (
    <Link to={`/user/${id}`} className="userCard">
      <img src={avatar} className="userCard__avatar" alt="user picture"/>
      <p className="userCard__name">{first_name} {last_name}</p>
      <Like id={id} />
    </Link>
  );
};