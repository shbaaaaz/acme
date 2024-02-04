import { GraphQLClient } from "graphql-request";
import { queryMap } from "./queries/queryMap";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_CMS_ENDPOINT as string)

export const fetchContent = async <T> (pageName: string, resourceType: string): Promise <T> => {
  try {
    const query = queryMap[resourceType]
    const content = await client.request<T>(query, { title: pageName});
    return content;
  } catch (error: any) {
    if (error.response?.status === 404) {
      throw new Error("Sorry, couldn't find the resource you are looking for :(")
    } 
    else {
      throw new Error(`Couldn't fetch the ${resourceType} content`)
    } 
  }
}