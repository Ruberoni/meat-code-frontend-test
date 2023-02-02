import styles from "@/styles/SocialButton.module.css";
import classNames from "classnames";

export interface SocialButton
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  colorScheme?: "primary" | "secondary" | "danger";
}

const SocialButton = ({
  colorScheme = "primary",
  ...anchorProps
}: SocialButton) => {
  return (
    <a
      href="#"
      {...anchorProps}
      className={classNames(styles.socialButton, {
        [styles.primaryColorScheme]: colorScheme === "primary",
        [styles.secondaryColorScheme]: colorScheme === "secondary",
        [styles.dangerColorScheme]: colorScheme === "danger",
      })}
    >
      {anchorProps.children}
    </a>
  );
};

export default SocialButton;
