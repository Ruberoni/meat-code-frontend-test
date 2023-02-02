import TextInput from "./TextInput";
import styles from "@/styles/ContactUsSection.module.css";
import { useForm } from "react-hook-form";
import Button from "./Button";
import { NewsletterBody } from "@/types";
import { useSuscribeNewsletter } from "@/hooks";

const ContactUsSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsletterBody>({ mode: "onBlur" });
  const { loading, suscribeNewletter } = useSuscribeNewsletter();
  const onSubmit = (data: NewsletterBody) => {
    console.log(data);
    suscribeNewletter(data);
  };
  useForm;

  return (
    <div className={styles.container}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
        id="suscribe"
        noValidate
      >
        <div className={styles.formGroup}>
          <TextInput
            label="Nombre"
            {...register("firstname", { required: true })}
            error={errors.firstname}
          />
          <TextInput
            label="Apellido"
            {...register("lastname", { required: true })}
            error={errors.lastname}
          />
        </div>
        <div className={styles.formGroup}>
          <TextInput
            label="Mail"
            type="email"
            {...register("email", {
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "El campo debe ser un email",
              },
            })}
            error={errors.email}
          />
          <TextInput
            label="Teléfono"
            type="tel"
            {...register("phone", {
              required: true,
              pattern: {
                value: /^[0-9]*$/,
                message: "El campo debe ser un número",
              },
            })}
            error={errors.phone}
          />
        </div>
      </form>
      <Button form="suscribe" disabled={loading}>
        Submit
      </Button>
    </div>
  );
};

export default ContactUsSection;
