import { IUserData } from "src/interfaces"
import { UserCard } from "./UserCard"

interface IUserListProps {
  userList: IUserData[]
}

export const UserList:React.FC<IUserListProps> =({userList})=> {
  return userList.map(user=><UserCard {...user}/>
  )
}