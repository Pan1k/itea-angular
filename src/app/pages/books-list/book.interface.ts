export interface IBook {
  id: number;
  title: string;
  img: string;
  author: string;
  postInfo: string;
}

export interface IBookUpdate {
  id: number;
  book: IBook;
}
