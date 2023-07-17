import { useState } from "react";
import { useForm } from "react-hook-form";


const translateConfig = {
  required: true,
  maxLength: 40
}


const TranslationForm = ({onTranslation}) => {
  const { register, handleSubmit , formState: {errors}  } = useForm();
  const [counter,setCounter] = useState(0)

  const onSubmit = ({translations}) => {
    onTranslation(translations)
  };

  const errorMessage = (() => {
    if(!errors.translations){
        return null
    }

    if( errors.translations.type === "required") return <span> Some input text is needed to translate </span>
    if( errors.translations.type === "maxLength") return <span> Max 40 characters </span>

})()

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="translations">Translations </label>
          <input type="text" {...register("translations", translateConfig)} placeholder="text" />
          {errorMessage}
        </fieldset>

        <button type="submit" className="btn-primary">Translation</button>
      </form>
    </>
  );
};

export default TranslationForm;
