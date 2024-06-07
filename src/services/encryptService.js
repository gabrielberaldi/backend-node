import bcrypt from 'bcrypt';

const saltRounds = 10;

class EncrypService {
  static hashPassword = async(password) =>  { 
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }
}

export default EncrypService;