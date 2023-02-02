import { IArticle, ArticleCategory, NewsletterBody } from "@/types";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://5eed24da4cbc340016330f0d.mockapi.io/api",
});

export async function getArticles(
  filter?: ArticleCategory
): Promise<IArticle[]> {
  const { data } = await instance.get("/articles", {
    params: {
      filter: filter || "",
    },
  });
  return data;
}

export async function suscribeNewletter(
  userData: NewsletterBody
): Promise<void> {
  const { data } = await instance.post("/newsletter", userData);
}
