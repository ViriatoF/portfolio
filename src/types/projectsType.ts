import { UrlObject } from "url";

export type _Project = {
  image: string;
  title: string;
  stack: string[];
  codeUrl?: string | UrlObject |undefined;
  websiteUrl?: string | UrlObject |undefined;
};