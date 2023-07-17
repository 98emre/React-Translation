import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem";

const ProfileTranslationHistory = ({ translations }) => {
  const availableTranslations = translations.map((translation, index) => {
    return (
      <ProfileTranslationHistoryItem
            key={index + "-" + translation}
            translation={translation}
            />
    );
  });

  return (
    <>
      <section>
        <p>Your History</p>
        <ul>
          {translations.length > 0 && availableTranslations}
          {translations.length === 0 && <p>Empty translation list of</p>}
        </ul>
      </section>
    </>
  );
};

export default ProfileTranslationHistory;
