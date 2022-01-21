import { useQuery } from "react-query";
import request, { gql } from "graphql-request";

const API_URL = `http://localhost:4000/`;

export const useUsers = () => {
  return useQuery("users", async () => {
    const data = await request(
      API_URL,
      gql`
          query {
            users(query: "id") {
                id,
                name,
                email,
                phone,
                password,
                img
            }
          }
        `
    );
    return data;
  });
};