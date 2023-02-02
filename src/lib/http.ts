import { IArticle, ArticleCategory } from "@/types";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://5eed24da4cbc340016330f0d.mockapi.io/api",
});

export async function getArticles(filter?: ArticleCategory): Promise<IArticle[]> {
  const { data } = await instance.get("/articles", {
    params: {
      filter: filter || "",
    },
  });
  // throw new Error
  return data;
}
