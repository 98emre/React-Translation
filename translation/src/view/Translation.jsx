import { useState } from "react";
import withAuth from "../component/hoc/withAuth";
import TranslationForm from "../component/Translation/TranslationForm";

const Translation = () => {
  const [translation, setTranslation] = useState("");

  const handleTranslation = (data) => {
    setTranslation(data);
  };

  return (
    <>
      <p>Translation View</p>
      <section id="translations">
        <TranslationForm onTranslation={handleTranslation} />
      </section>
      {!translation && <p>No Translation</p>}
      {translation && <p>{translation}</p>}
    </>
  );
};

export default withAuth(Translation);
