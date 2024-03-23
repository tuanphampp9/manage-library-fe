export interface BookDto {}

export interface bookParams {
  isbn: string;
  book_title: string;
  category: string;
  date_of_publication_from?: string;
  date_of_publication_to?: string;
}
