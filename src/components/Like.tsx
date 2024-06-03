import useLocalStorage from "use-local-storage";
import LikeIcon from '../assets/like.svg?react';

interface  ILikeProps {
  id: number
}

export const Like: React.FC<ILikeProps>=({id})=> {
  const [likesId, setLikesId] = useLocalStorage<number[]>('liked', []);
  const isLiked = likesId.includes(id);
  const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    isLiked ? setLikesId(likesId.filter(userId=> userId!==id)) : setLikesId(likesId.concat(id));
  };
  return (
    <div className="userCard__like" onClick={clickHandler}>
      <LikeIcon fill={isLiked ? "#512689" : "none"}/>
    </div>
  );
};