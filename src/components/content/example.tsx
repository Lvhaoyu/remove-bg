import { Icons } from "../icons/icons";
import styles from "./example.module.css";

export const ExamplePicture = () => {
  return (
    <div className={styles.container}>
      <img src="/icon.png" alt="" />
      <Icons.add className={styles.add} />
      <p>
        <span>Click to Upload </span>or Drag Files Here PNC,JPG or WEBP file
      </p>
    </div>
  );
};
