interface Post {
  id: string;
  title: string;
  description: string;
  tags: string[];
}
interface getPostsDtoRes {
  posts: Post[];
  current_page: number;
  total_page: number;
  page_size: number;
  total: number;
}

interface createPostsDtoReq {
  title: string;
  description: string;
  tags: string[];
}
export { Post, getPostsDtoRes, createPostsDtoReq };
