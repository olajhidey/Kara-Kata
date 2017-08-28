export interface User {
    email: string
    password: string
}

export interface Profile {
    fullname : string;
    phone: number
    storename : string
    location : string
    link ?: string
    bio ?: string
    tag : any
}
