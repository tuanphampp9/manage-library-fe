import { AbstractControl, ValidatorFn } from '@angular/forms';

export function validateDateInput(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();
    // Check if selected date is greater than current date
    if (selectedDate > currentDate) {
      return { dateNotValid: true };
    }
    return null;
  };
}
