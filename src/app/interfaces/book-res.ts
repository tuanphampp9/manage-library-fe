import { AuthorRes } from './author-res';
import { CategoryRes } from './category-res';
interface images {
  id: number;
  image_url: string;
}
export interface BookRes {
  id: number;
  isbn: string;
  book_title: string;
  date_of_publication: string;
  category: CategoryRes;
  description?: string;
  images_list?: images[];
  authors_list?: AuthorRes[];
}
