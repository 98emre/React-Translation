import { useState } from "react";
import withAuth from "../component/hoc/withAuth";
import TranslationForm from "../component/Translation/TranslationForm";
import { addTranslation } from "../api/translation";
import { useUser } from "../context/UserContext";
import { STORAGE_USER_KEY } from "../utils/storageKey";
import { storageSave } from "../utils/storage";
import TranslationDisplay from "../component/Translation/TranslationDisplay";

const Translation = () => {
  const [translation, setTranslation] = useState("");

  const { user, setUser } = useUser()


  const handleTranslation = async (translation) => {
    if(user.translations.length >= 10){
      user.translations.shift();
    }

    const [error, updateUser] = await addTranslation(user,translation)
    if(error !== null){
        alert("Translation Error " + error)
        return;
    }
    
    setTranslation(translation)
    storageSave(STORAGE_USER_KEY,updateUser)
    setUser(updateUser)

  }

  return (
    <>
      <p>Translation View</p>
      <section id="translations">
        <TranslationForm onTranslation={handleTranslation} />
      </section>
      <TranslationDisplay translations = {translation}/>
  
    </>
  );
};

export default withAuth(Translation);
