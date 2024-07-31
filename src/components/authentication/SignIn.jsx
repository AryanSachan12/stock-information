import { Link } from "react-router-dom";

import styles from './SignIn.module.css'

const SignIn = () => {
  return (
    <div className={styles.signIn}>
      <Link to='/main/dashboard' className={styles.link}>Sign In</Link>
    </div>
  );
};

export default SignIn;
