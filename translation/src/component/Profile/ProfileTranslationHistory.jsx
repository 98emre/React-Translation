import { useState } from "react";
import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem";
import TranslationItem from "../Translation/TranslationItem";

const ProfileTranslationHistory = ({ translations }) => {
  const [selectedTranslation, setSelectedTranslation] = useState("");

  const handleToggle = (additionalInfo) => {
    setSelectedTranslation(additionalInfo);
    console.log(`Toggled with additional info: ${additionalInfo}`);
  };

  const availableTranslations = translations.map((translation, index) => {
    return (
      <ProfileTranslationHistoryItem
        key={index + "-" + translation}
        translation={translation}
        onToggle={handleToggle}
      />
    );
  });

  const renderTranslation = selectedTranslation
    .split("")
    .map((_letter, index) => {
      const key = `${index}-${_letter}-${Math.random()}`;
      if (_letter === " ") _letter = "_SPACE_";
      return <TranslationItem key={key} letter={_letter} animIndex={index} />;
    });

  return (
    <>
      <section>
        <h4 className="loginBigText">Your History</h4>
        <ul className="list-group">
          {translations.length > 0 && availableTranslations}
          {translations.length === 0 && <p className="text-danger">Empty translation list</p>}
        </ul>
        <div className="p-3 border">
          {selectedTranslation.length > 0 &&
            translations.length > 0 &&
            renderTranslation}
        </div>
      </section>
    </>
  );
};

export default ProfileTranslationHistory;
