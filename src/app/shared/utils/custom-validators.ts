import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static atLeastOneShouldBeSelected({ controls }: any): ValidationErrors | null {
    if (Object.values(controls).some(({ value }: any) => !!value)) {
      return null;
    }
    /* if ()) {
        return null;
    } */
    return { atLeastOneShouldBeSelected: true };
  }
  static DateShoulddBePassed({ value }: any): ValidationErrors | null {
    if (Date.now() > Date.parse(value)) {
      return null;
    }
    return { DateShoulddBePassed: true };
  }
}
