import { useState } from 'react';

export const useRegisterFormValidation = () => {
  const [formState, setFormState] = useState({ fullName: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const onFormChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (formState.fullName.length < 4) {
      newErrors.fullName = 'The full name must be at least 4 characters long.';
      valid = false;
    }

    /*
      ^: Coincide con el inicio de la cadena.
      [a-zA-Z0-9._-]+: Coincide con uno o más caracteres alfabéticos, dígitos, puntos, guiones bajos o guiones.
      @: Coincide con el símbolo '@'.
      [a-zA-Z0-9.-]+: Coincide con uno o más caracteres alfabéticos, dígitos, puntos o guiones en el dominio del correo electrónico.
      \.: Coincide con un punto literal.
      [a-zA-Z]{2,4}: Coincide con de 2 a 4 caracteres alfabéticos en el dominio de nivel superior (TLD).
      $: Coincide con el final de la cadena.
    */
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address.';
      valid = false;
    }

    if (formState.password.length < 6) {
      newErrors.password = 'The password must be at least 6 characters long.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  return {
    formState,
    onFormChange,
    errors,
    validateForm,
  };
};
