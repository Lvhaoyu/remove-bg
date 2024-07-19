import styles from "./header.module.css";
import { Icons } from "../icons/icons";

import { Divider } from "antd";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Icons.logo width={32} height={32} />
        <span className={styles.titleContent}>Bg Remove</span>
      </h1>
      <div className={styles.link}>
        <a href="">
          <Icons.figma width={24} height={24} />
        </a>
        <a href="">
          <Icons.X width={24} height={24} className={styles.icon} />
        </a>
        <a href="">
          <Icons.gitHub width={24} height={24} className={styles.icon} />
        </a>

        <Divider type="vertical" className={styles.divider} />
        <a href="">
          <Icons.moon width={24} height={24} />
        </a>
      </div>
    </header>
  );
};
