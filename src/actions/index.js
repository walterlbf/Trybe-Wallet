// Coloque aqui suas actions
export const USER_DATA = 'USER_DATA';

export function userLogin({ email }) {
  return {
    type: USER_DATA,
    email,
  };
}
