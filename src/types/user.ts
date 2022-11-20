interface IUserType  {
    id: string | null,
    type: string | null,
    login: string | null,
    name: string | null,
    token?: any
}

export type UserType = Partial<IUserType>
