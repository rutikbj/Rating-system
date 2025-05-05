export const isEmailValid = (email) => /.+@.+\..+/.test(email);
export const isPasswordStrong = (password) => /^(?=.*[A-Z])(?=.*[!@#$&*]).{8,16}$/.test(password);
