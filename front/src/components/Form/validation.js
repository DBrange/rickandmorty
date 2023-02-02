
const regex = {
  username: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
};

export const validation = (input) => {
  let error = {};
  if (!regex.username.test(input.username)) error.username = 'Email invalido';
  if (!regex.password.test(input.password)) error.password = 'Contraseña incorrecta, debe contener un minimo de 8 caracteres, una letra mayuscula, una letra minuscula y un numero';

  return error;
}