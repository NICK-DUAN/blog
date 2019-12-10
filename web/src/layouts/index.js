import styles from './index.css';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>For 张聪</h1>
      {props.children}
      <p className={styles.foot}>By 段黎明</p>
    </div>
  );
}

export default BasicLayout;
