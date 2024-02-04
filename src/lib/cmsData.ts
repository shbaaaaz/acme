import { GraphQLClient } from "graphql-request";
import { GET_PAGE_DETAILS, GET_SEO_DETAILS } from './queries/query'
import { PageMetadataType, PageType } from "@/utils/types";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_CMS_ENDPOINT as string, { cache: 'no-store' })

  export const fetchMetadata = async (pageName: string): Promise<PageMetadataType> => {
    try {
      const pageMetaData = await client.request<PageMetadataType>(GET_SEO_DETAILS, { title: pageName})
      return pageMetaData
    } catch (error: any) {
      if (error.response?.status === 404) {
        throw new Error("Sorry, couldn't find the resource you are looking for :(")
      } 
      else {
        throw new Error("Couldn't fetch the page metadata")
      } 
    }
  }

  export const fetchPageData = async (pageName: string): Promise<PageType> => {
    try {
      const pageData = await client.request<PageType>(GET_PAGE_DETAILS, { title: pageName});
      return pageData;
    } 
    catch (error: any) {
      if (error.response?.status === 404) {
        throw new Error("Sorry, couldn't find the resource you are looking for :(")
      } 
      else {
        throw new Error("Couldn't fetch the page data")
      } 
    }
  };  