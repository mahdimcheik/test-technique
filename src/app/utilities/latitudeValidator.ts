import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function latitudeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    return !(value >= -90 && value <= 90) ? { validRange: true } : null;
  };
}

export function longitudeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    return !(value >= -180 && value <= 180) ? { validRange: true } : null;
  };
}

export function populationValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value || value <= 0) {
      return { validRange: true };
    }

    return null;
  };
}
