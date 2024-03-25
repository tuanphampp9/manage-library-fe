import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { validateDateInput } from '../../utils/validateTime';
import { AuthorService } from '../../services/author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrl: './add-author.component.css',
})
export class AddAuthorComponent {
  public authorForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    date_of_birth: new FormControl(new Date(), [
      Validators.required,
      validateDateInput(),
    ]),
  });
  constructor(private authorService: AuthorService, private router: Router) {}
  get formAuthor(): FormGroup {
    return this.authorForm as FormGroup;
  }
  public getErrorMsg(controlName: string): string {
    const control = this.authorForm.get(controlName);
    if (control?.hasError('required')) {
      return 'Không được để trống';
    } else if (control?.hasError('dateNotValid')) {
      return 'Ngày sinh không hợp lệ';
    }
    return '';
  }
  public submitForm() {
    this.authorService.createAuthor(this.authorForm.value).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/author/list-author']);
    });
  }
}
