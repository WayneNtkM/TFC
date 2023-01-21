const validateLogin = ({ email, password }: { email: string; password: string }) =>
  !email || !password;

export default validateLogin;
