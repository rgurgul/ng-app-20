import { ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static DateShoulddBePassed({ value }: any): ValidationErrors | null {
    console.log(value);
    
    return { DateShoulddBePassed: true };
  }
}
