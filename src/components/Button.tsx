import styles from "@/styles/Button.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button = ({ loading, ...buttonProps }: ButtonProps) => {
  return <button {...buttonProps} className={styles.button}>{buttonProps.children}</button>;
};

export default Button;
