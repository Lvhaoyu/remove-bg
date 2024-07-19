import styles from "./footer.module.css";
import { Icons } from "@/components/icons/icons";
import { Button } from "antd";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.link}>
        📟&nbsp;<span className={styles.explain}>Built by</span>&nbsp;ChaoX
        Design. &nbsp;
        <span className={styles.explain}>The source code is available on</span>
        &nbsp;GitHub
        <Icons.arrowUpRight />
      </div>
      <div className={styles.donate}>
        <span>☕️ Support Us</span>
        <Button className={styles.btn} size="middle">
          Support Us
        </Button>
      </div>
    </footer>
  );
};
