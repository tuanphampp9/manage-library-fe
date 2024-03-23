import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { validateDateInput } from '../../utils/validateTime';
import { AuthorRes } from '../../interfaces/author-res';
import { AuthorService } from '../../services/author.service';
import { LibraryService } from '../../services/library.service';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { CategoryRes } from '../../interfaces/category-res';

@Component({
  selector: 'app-add-library',
  templateUrl: './add-library.component.html',
  styleUrl: './add-library.component.css',
})
export class AddLibraryComponent {
  public listAuthor: AuthorRes[] = new Array<AuthorRes>();
  public listCategory: CategoryRes[] = new Array<CategoryRes>();
  public libraryForm: FormGroup = new FormGroup({
    name_lib: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    list_book: new FormArray([
      this.formBuilder.group({
        isbn: ['', Validators.required],
        book_title: ['', Validators.required],
        description: ['', Validators.required],
        id_category: [1, Validators.required],
        date_of_publication: [new Date(), validateDateInput()],
        list_authors_id: [new Array(), Validators.required],
        list_url_images: [new Array()],
      }),
    ]),
  });
  public isLoadingImage: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private authorService: AuthorService,
    private libraryService: LibraryService,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.authorService.getListAuthor(5, 1).subscribe((data) => {
      this.listAuthor = data.authors_list;
    });
    this.categoryService.getListCategory(10, 1).subscribe((data) => {
      this.listCategory = data.categories_list;
    });
  }
  get getFormArr(): FormGroup[] {
    return (this.libraryForm.get('list_book') as FormArray)
      .controls as FormGroup[];
  }
  public submitForm() {
    this.libraryService
      .createLibrary(this.libraryForm.value)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['/library/list-library']);
      });
  }
  public onTagChange(selectedTags: string[] | Event): void {
    console.log(selectedTags);
  }
  public getErrorMsg(controlName: string): string {
    const control = this.libraryForm.get(controlName);
    if (control?.hasError('required')) {
      return 'Không được để trống';
    }
    return '';
  }
  public handleAddBook() {
    (this.libraryForm.get('list_book') as FormArray).push(
      this.formBuilder.group({
        isbn: ['', Validators.required],
        book_title: ['', Validators.required],
        description: ['', Validators.required],
        id_category: [1, Validators.required],
        date_of_publication: [new Date(), validateDateInput()],
        list_authors_id: [new Array(), Validators.required],
        list_url_images: [new Array()],
      })
    );
  }
  public handleRemoveBook(formId: number) {
    (this.libraryForm.get('list_book') as FormArray).removeAt(formId);
  }
  public handleUpload(event: Event, formIndex: number) {
    this.isLoadingImage = true;
    let formData: FormData = new FormData();
    const lengthFiles: any = (
      (event.target as HTMLInputElement).files as FileList
    ).length;
    for (let i: number = 0; i < lengthFiles; i++) {
      const valueFile = ((event.target as HTMLInputElement).files as FileList)[
        i
      ];
      formData.append('files', valueFile);
    }
    this.libraryService.uploadImage(formData).subscribe((data) => {
      (
        this.getFormArr[formIndex].get('list_url_images') as FormControl
      ).setValue(data);
      this.isLoadingImage = false;
    });
  }
}
