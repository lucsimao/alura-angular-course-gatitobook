import { FormGroup } from '@angular/forms';

interface UsuarioValid {
  senhaIgualUsuario: boolean;
}

export const usuarioSenhaIguaisValidator = (
  formGroup: FormGroup
): UsuarioValid | null => {
  const isFieldsNull = (...fields: string[]) => {
    for (let field of fields) {
      if (!field.trim()) return true;
    }
    return false;
  };

  const userName: string = formGroup.get('userName')?.value ?? '';
  const password: string = formGroup.get('password')?.value ?? '';

  if (isFieldsNull(userName, password)) {
    return null;
  }

  return userName !== password ? null : { senhaIgualUsuario: true };
};
