// Reducer Path - регистрируется в store
// Bace Query - отвечает за взаимодействие с API
// Endpoints
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const firstApi = createApi({
  reducerPath: "firstApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://swapi.dev/api",
  }),
  endpoints: (builder) => ({
    getFilms: builder.query({
      query: () => "/films?format=json",
    }),
    getFilmById: builder.query({
      query: (id) => `/films/${id}?format=json`,
    }),
    getPeople: builder.query({
      query: (page) => `/people?page=${page}&format=json`,
    }),
  }),
});

export const { useGetFilmsQuery, useGetFilmByIdQuery, useGetPeopleQuery } =
  firstApi;
