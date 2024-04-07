import React, { useEffect, useState } from "react";
import {
  useGetFilmByIdQuery,
  useGetFilmsQuery,
  useGetPeopleQuery,
} from "../../api/api";
import { useSearchParams } from "react-router-dom";
import Pagination from "../Pagination/Pagination";

interface Person {
  name: string;
  gender: string;
  birth_year: string;
  created: string;
}

const StarWars = () => {
  // useSearchParams - использует значение параметра, передаваемого в теле запроса. (здесь - page)
  const [page, setPage] = useSearchParams();

  const { data, error, isLoading } = useGetPeopleQuery(page.get("page") || 1);
  console.log(data);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center py-5">People</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul role="list" className="divide-y divide-gray-100">
          {data?.results.map((item: Person) => (
            <li key={item.name} className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrM_hjDdzBnt5moE7V5856FGOKSJH-fgL4WlqH4N2Auw&s"
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-lg font-semibold leading-6 text-gray-900">
                    {item.name}
                  </p>
                  <p className="mt-1 truncate text-sm leading-5 text-gray-500">
                    Gender: {item.gender}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">
                  <span className="text-gray-400">Birth year:</span>{" "}
                  {item.birth_year}
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  <span className="text-gray-400">Created:</span>{" "}
                  <time dateTime="2023-01-23T13:23Z">{item.created}</time>
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
      <Pagination />
    </div>
  );
};

export default StarWars;
