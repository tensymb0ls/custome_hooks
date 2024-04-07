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
  // Другие свойства...
}

const StarWars = () => {
  // useSearchParams - использует значение параметра, передаваемого в теле запроса. (здесь - page)
  const [page, setPage] = useSearchParams();

  const { data, error, isLoading } = useGetPeopleQuery(page.get("page") || 1);
  console.log(data);

  return (
    <div>
      <h1>People</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data?.results.map((item: Person) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      )}
      <Pagination />
    </div>
  );
};

export default StarWars;
