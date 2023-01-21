import * as bcrypt from 'bcryptjs';

export default function hashPassword(password: string) {
  return bcrypt.hashSync(password, 10);
}
