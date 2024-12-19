import styles from "./style.module.scss";
interface IProps {
  children: string;
}

const SectionHeadText = ({ children }: IProps) => {
  return <h2 className={styles["text"]}>{children}</h2>;
};

export default SectionHeadText;
