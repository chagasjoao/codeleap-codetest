export interface IPost {
  id: number;
  username: string;
  created_datetime: Date;
  title: string;
  content: string;
}

export interface Response {
  count: number;
  results: IPost[];
}
