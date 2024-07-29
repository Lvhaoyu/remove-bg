import styles from "./header.module.css";
import { Icons } from "../icons/icons";

import { Divider, Avatar, message } from "antd";

export const Header = () => {
  const handleClickTheme = () => {
    // const currentTheme = document.documentElement.getAttribute("data-theme");
    // if (currentTheme === "dark") {
    //   document.documentElement.setAttribute("data-theme", "light");
    // } else {
    //   document.documentElement.setAttribute("data-theme", "dark");
    // }
    message.info("darkmode is coming soon.");
    return false;
  };

  const handleClickFigma = () => {
    message.info("Figma Plugin is coming soon.");
    return false;
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Avatar shape="square" size={32} src="/site-logo.png" />
        <span className={styles.titleContent}>ChaoX Background Remover</span>
      </h1>
      <div className={styles.link}>
        <a href="#" onClick={handleClickFigma}>
          <Icons.figma width={18} height={18} />
        </a>
        <a href="https://x.com/ChaoXDesign" target="_blank">
          <Icons.X width={18} height={18} className={styles.icon} />
        </a>
        <a href="https://github.com/Lvhaoyu/remove-bg" target="_blank">
          <Icons.gitHub width={18} height={18} className={styles.icon} />
        </a>

        <Divider type="vertical" className={styles.divider} />
        <a href="#" onClick={handleClickTheme}>
          <Icons.moon width={18} height={18} />
        </a>
      </div>
    </header>
  );
};
