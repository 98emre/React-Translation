const ProfileTranslationHistoryItem = ({ translation, onToggle }) => {
  const handleClick = () => {
    onToggle(translation);
  };
  return (
    <>
      <li
        className={
          "list-group-item list-group-item-action list-group-item-primary fs-2"
        }
        onClick={handleClick}
      >
        {translation}
      </li>
    </>
  );
};

export default ProfileTranslationHistoryItem;
