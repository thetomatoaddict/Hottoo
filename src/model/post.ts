export type Comment = {
    image : string;
    username : string;
    comment : string;
}

export type FullPost = {
    id : string;
    username : string;
    userImage : string;
    image : string;
    text : string;
    createdAt : string;
    likes : string[];
    comments: Comment[];
}

export type SimplePost = Omit<FullPost, 'comments'> &{
    comments : number;
}