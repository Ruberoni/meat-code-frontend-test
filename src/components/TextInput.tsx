import React, { ForwardedRef } from "react";
import styles from "@/styles/TextInput.module.css";

export interface TextInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: any;
}

const TextInput = (
  { label, error, ...inputProps }: TextInput,
  ref: ForwardedRef<HTMLInputElement>
) => {
  if (label) {
    return (
      <div className={styles.inputContainer}>
        <label className={styles.label}>
          {label}
          <input
            {...inputProps}
            aria-invalid={error ? "true" : "false"}
            type={inputProps.type || "text"}
            className={styles.textInput}
            ref={ref}
          />
        </label>
        {error?.type === "required" && (
          <p role="alert" className={styles.errorMessage}>
            Este campo es requerido
          </p>
        )}
        {error?.message && (
          <p role="alert" className={styles.errorMessage}>
            {error?.message}
          </p>
        )}
      </div>
    );
  }
  return (
    <div className={styles.inputContainer}>
      <input
        {...inputProps}
        aria-invalid={error ? "true" : "false"}
        type={inputProps.type || "text"}
        className={styles.textInput}
        ref={ref}
      />
      {error?.type === "required" && (
        <p role="alert" className={styles.errorMessage}>
          Este campo es requerido
        </p>
      )}
      {error?.message && (
        <p role="alert" className={styles.errorMessage}>
          {error?.message}
        </p>
      )}
    </div>
  );
};

export default React.forwardRef<HTMLInputElement, TextInput>(TextInput);
