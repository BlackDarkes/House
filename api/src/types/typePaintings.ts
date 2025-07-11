import { ResultSetHeader } from "mysql2";

export interface IPaintings extends ResultSetHeader {
  id: number;
  image: string;
  author: string;
  title: string;
  param: string;
  price: string;
}
