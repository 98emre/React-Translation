import { useEffect } from "react";
import ProfileActions from "../component/Profile/ProfileActions";
import ProfileHeader from "../component/Profile/ProfileHeader";
import ProfileTranslationHistory from "../component/Profile/ProfileTranslationHistory";
import withAuth from "../component/hoc/withAuth";
import { useUser } from "../context/UserContext";
import styles from "../css/Profile.module.css"

const Profile = () => {
  const { user, setUser } = useUser();

  return (
    <>
      <div className={styles.container}>
        <div className="container text-center p-3">
          <ProfileHeader username={user.username} />
        </div>
        <div className="container text-center">
          <ProfileActions />
        </div>
        <div className="container text-center p-3">
          <ProfileTranslationHistory
            className="container"
            translations={user.translations}
          />
        </div>
      </div>
    </>
  );
};

export default withAuth(Profile);
