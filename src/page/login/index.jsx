import styles from './index.module.less';
import { useState } from 'react';
import { withRouter } from 'react-router';
import { login } from 'api';

function Login({ history }) {
  const [value, setValue] = useState('');
  let onInput = (event) => {
    let value = event.target.value;
    setValue(value);
  };
  let handleLogin = (event) => {
    if (value) {
      console.log('handleLogin', value);
      login({ code: value })
        .then((res) => {
          console.log('history', history);
          history.replace('/');
        })
        .catch((err) => {
          let message = err?.response?.data?.message;
          console.log('message', message);
        });
    }
  };
  return (
    <div className={styles.login}>
      <div className={styles.content}>
        <div className={styles.password}>
          <div className={styles.uiText}>口令</div>
          <input type="text" className={styles.input} value={value} onInput={onInput} placeholder="请输入口令" />
        </div>
        <div className={styles.line} />
        <div className={styles.jump} onClick={handleLogin}>
          立即登入
        </div>
      </div>
    </div>
  );
}

export default withRouter(Login);
