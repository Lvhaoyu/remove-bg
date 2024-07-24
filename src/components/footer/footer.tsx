import styles from "./footer.module.css";
import { Icons } from "@/components/icons/icons";
import { Button, Modal } from "antd";
import { useState } from "react";

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        centered
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        closable={false}
        width={400}
        height={472}
      >
        <div className={styles.donateContainer}>
          <a href="https://www.buymeacoffee.com/chaoxdesign" target="_blank">
            <img src="/donate-content.png" alt="" />
          </a>
        </div>
      </Modal>
      <footer className={styles.footer}>
        <div className={styles.link}>
          📟&nbsp;<span className={styles.explain}>Built by</span>&nbsp;ChaoX
          Design. &nbsp;
          <span className={styles.explain}>
            The source code is available on
          </span>
          &nbsp;GitHub
          <a href="https://github.com/Lvhaoyu/remove-bg" target="_blank">
            <Icons.arrowUpRight width={18} height={18} />
          </a>
        </div>
        <div className={styles.donate}>
          <span>☕️ Support Us</span>
          <Button className={styles.btn} size="middle" onClick={showModal}>
            Support Us
          </Button>
        </div>
      </footer>
    </>
  );
};
