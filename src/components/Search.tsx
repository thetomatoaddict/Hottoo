"use client";
import { DetailUser } from "@/model/user";
import { HashLoader } from "react-spinners";
import useSWR from "swr";
import Avatar from "./Avatar";
import { ChangeEvent, useState } from "react";
import NameCard from "./NameCard";
import useDebounce from "@/utility/debounce";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const {
    data: users,
    isLoading,
    error,
  } = useSWR<DetailUser[]>(`/api/search/${keyword}`);
  const { data: allUsers } = useSWR<DetailUser[]>(`/api/search`);
  const debouncedSearch = useDebounce(keyword, 1000);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <div>
      <form className="flex flex-col items-center justify-center">
        <label className="mb-2 text-xl font-medium text-gray-900">
          Search
        </label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[450px] p-2.5"
          onChange={onChange}
        />
      </form>
      <section className="flex justify-center">
        {isLoading ? (
          <div className="mt-4"><HashLoader color="#afffef" /></div>
        ) : (
            debouncedSearch === "" && (
            <ul>
              {allUsers?.map(
                ({
                  username,
                  name,
                  image,
                  followers,
                  following,
                }: DetailUser) => (
                  <li key={username} className="flex justify-center">
                    <NameCard
                      username={username}
                      name={name}
                      followers={followers}
                      image={image}
                      following={following}
                    />
                  </li>
                )
              )}
            </ul>
          )
        )}
        {debouncedSearch !== "" && (
          <ul>
            {users?.map(
              ({ username, name, image, followers, following }: DetailUser) => (
                <li key={username} className="flex justify-center">
                  <NameCard
                    username={username}
                    name={name}
                    followers={followers}
                    image={image}
                    following={following}
                  />
                </li>
              )
            )}
          </ul>
        )}
      </section>
    </div>
  );
}
