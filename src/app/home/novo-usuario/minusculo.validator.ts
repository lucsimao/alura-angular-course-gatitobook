import { AbstractControl } from '@angular/forms';

export const minusculoValidator = (control: AbstractControl) =>
  control?.value === control?.value?.toLowerCase() ? null : { minusculo: true };
