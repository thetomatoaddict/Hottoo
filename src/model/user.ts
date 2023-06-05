export type User = {
    name : string;
    username : string;
    email : string;
    image? : string;
}

export type SimpleUser = Pick<User, 'username' | 'image'>;
export type DetailUser = User & {
    following : SimpleUser[];
    followers : SimpleUser[];
    bookmarks : string[];
}

export type UserPageType = {
    username: string;
    name: string;
    image? : string;
    following: number;
    followers: number;
    posts : number;
}