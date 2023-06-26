import { QueryKey, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { DocumentNode } from "graphql";
import request, { Variables } from "graphql-request";

export const useGQL = <T>(
  key: QueryKey,
  query: DocumentNode,
  variables?: Variables,
  config?: UseQueryOptions<T>
) => {
  const endpoint = process.env.NEXT_API!;
  const fetchData = async (): Promise<T> =>
    await request(endpoint, query, variables);

  return useQuery<T>(key, fetchData, config);
};
