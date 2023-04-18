import styles from './index.less';
import logo from '@/assets/favicon.ico';

export const Header = () => {
  return (
    <div
      className={styles.headerWrapper}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <img src={logo} />
      <span className={styles.headerTitle}>产业链图谱及知识应用</span>
    </div>
  );
};
