import { useForm } from "react-hook-form";

const TranslationForm = ({onTranslation}) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = ({translations}) => {
    onTranslation(translations)
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="translations">Translations </label>
          <input type="text" {...register("translations")} placeholder="text" />
        </fieldset>

        <button type="submit">Translation</button>
      </form>
    </>
  );
};

export default TranslationForm;
