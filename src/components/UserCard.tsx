import { Link } from "react-router-dom"

interface IUserCardProps {
  id: number,
  first_name: string,
  last_name: string,
  avatar: string
}

export const UserCard: React.FC<IUserCardProps> = ({id, first_name, last_name, avatar}) => {
  return (
    <Link to={`/user/${id}`} className="userCard">
      <img src={avatar} className="userCard__avatar"/>
      <p className="userCard__name">{first_name} {last_name}</p>
    </Link>
  )
}