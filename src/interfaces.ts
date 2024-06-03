interface IAuthRes {
  token: string,
}

interface IUserData {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

interface IUserListRes {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: IUserData[]
}

export type { IAuthRes, IUserListRes, IUserData };
