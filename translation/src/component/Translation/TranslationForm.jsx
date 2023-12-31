import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../../css/Translation.module.css";

const translateConfig = {
  required: true,
  maxLength: 40,
};

const TranslationForm = ({ onTranslation }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ translations }) => {
    onTranslation(translations);
    //Remove comment if you want the input field to clear after you submitted a translation
    //document.getElementById("translationForm").reset();
  };

  const errorMessage = (() => {
    if (!errors.translations) {
      return null;
    }

    if (errors.translations.type === "required")
      return <span> Some input text is needed to translate </span>;
    if (errors.translations.type === "maxLength")
      return <span> Max 40 characters </span>;
  })();

  return (
    <>
      <form
        id="translationForm"
        className="d-flex flex-column align-items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="translations" className="form-label"></label>
        <input
          type="text"
          {...register("translations", translateConfig)}
          className={`${styles.inputField} mb-3 input-lg`}
          placeholder="What do you wanna translate?"
        />
        <button type="submit" className="btn btn-primary btn-lg btn-block">
          Translate
        </button>
        <p className="text-danger p-1">{errorMessage}</p>
      </form>
    </>
  );
};

export default TranslationForm;
