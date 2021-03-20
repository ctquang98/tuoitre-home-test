import React from 'react';
import style from './app.module.css';
import { useEmailValidate, usePasswordValidate } from './hooks';

function App() {
  const [email, setEmail, mailError] = useEmailValidate();
  const [password, setPassword, passwordError] = usePasswordValidate();

  return (
    <form className={style.formContainer}>
      <div>
        <p>Email</p>
        <input type="email" name="email" value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {
          mailError ? <p style={{ color: 'red' }}>Invalid Email</p> : null
        }
      </div>
      <div>
        <p>Password</p>
        <input type="password" name="password" value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {
          passwordError ? <p style={{ color: 'red' }}>Invalid Password</p> : null
        }
      </div>
    </form>
  );
}

export default App;