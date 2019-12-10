import styles from './index.css';
import { Button } from 'antd';

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>
          <Button type="primary" style={{marginLeft: '-40px'}}><a href="/history">
            去说说
          </a></Button>
        </li>
      </ul>
    </div>
  );
}
