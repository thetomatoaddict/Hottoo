import { client } from "./sanity";

type OauthUser = {
  id: string;
  email: string;
  name: string;
  username: string;
  image?: string | null;
};

export async function addUser({ id, email, name, image, username }: OauthUser) {
  return client.createIfNotExists({
    _id: id,
    _type: "user",
    username,
    name,
    email,
    image,
    following: [],
    followers: [],
    bookmarks: [],
  });
}

export async function getUser(username: string) {
  return client.fetch(
    `*[_type == "user" && username == "${username}"][0]{
        ...,
        "id":_id,
        following[]->{username,image},
        followers[]->{username,image},
        "bookmarks":bookmarks[]->_id
    }`
  );
}

export async function GetUserList(keyword:string) {
  return client.fetch(
    `*[_type == "user" && [username, name] match "*${keyword}*"]{
      ...,
      "id":_id,
      following[]->{username,image},
      followers[]->{username,image},
      "bookmarks":bookmarks[]->_id
  }`
  );
}

export async function FindUser(username:string) {
  return client.fetch(
    `*[_type == "user" && username match "${username}"][0]{
      ...,
      "id":_id,
      "following": count(following),
      "follower": count(follower),
      "posts" : count(*[_type =="post" && author->username == "${username}"])
  }`
  );
}

export async function GetAllUserList() {
  return client.fetch(
    `*[_type == "user"]{
      ...,
      "id":_id,
      following[]->{username,image},
      followers[]->{username,image},
      "bookmarks":bookmarks[]->_id
  }`
  );
}

export async function addFollowing({ id, email, name, image, username }: OauthUser) {
  return client.patch({
      id: "remingtons",
      insert: {
        after: "people[-1]",
        items: [
          {
            _type: "reference",
            _ref: "person-1234"
          }
        ]
      }
  });
}
