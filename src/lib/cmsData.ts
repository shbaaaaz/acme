import { GraphQLClient } from "graphql-request";
import { GET_PAGE_DETAILS } from './queries/query'
import { PageType } from "@/utils/types";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_CMS_ENDPOINT as string)



  export const fetchPageData = async (page: string): Promise<PageType> => {
    try {
      const response = await client.request<PageType>(GET_PAGE_DETAILS, { title: page});
      return response;
    } catch (error) {
      throw error;
    }
  };  