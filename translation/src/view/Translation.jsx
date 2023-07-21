import { useState } from "react";
import withAuth from "../component/hoc/withAuth";
import TranslationForm from "../component/Translation/TranslationForm";
import { addTranslation } from "../api/translation";
import { useUser } from "../context/UserContext";
import { STORAGE_USER_KEY } from "../utils/storageKey";
import { storageSave } from "../utils/storage";
import TranslationDisplay from "../component/Translation/TranslationDisplay";
import styles from "../css/Translation.module.css";

const Translation = () => {
  const [translation, setTranslation] = useState("");

  const { user, setUser } = useUser();

  const handleTranslation = async (translation) => {
    if (user.translations.length >= 10) {
      user.translations.shift();
    }

    const [error, updateUser] = await addTranslation(user, translation);
    if (error !== null) {
      alert("Translation Error " + error);
      return;
    }
    const translationCont = document.getElementById("translationContainer");
    translationCont.style.animationPlayState = "running";

    const robotLogo = document.getElementById("robotLogoTranslation");
    robotLogo.style.animationPlayState = "running";

    function resetAnimationDuration() {
      translationCont.style.animationPlayState = "paused";
      robotLogo.style.animationPlayState = "paused";
    }

    setTimeout(
      resetAnimationDuration,
      translation.split("").length * 0.2 * 1000
    );

    setTranslation(translation);
    storageSave(STORAGE_USER_KEY, updateUser);
    setUser(updateUser);
  };
  return (
    <>
      <div className={styles.container}>
        <br />
        <div className="container text-center">
          <img
            id="robotLogoTranslation"
            src="Logo2.png"
            className={`${styles.imgLogo} ${styles.jumpAnim}`}
          />
        </div>

        <div className="container p-3">
          <TranslationForm onTranslation={handleTranslation} />
        </div>

        <div
          id="translationContainer"
          className={`container ${styles.translationContainer} p-4`}
        >
          <TranslationDisplay translations={translation} />
        </div>
      </div>
    </>
  );
};

export default withAuth(Translation);
