import { useEffect } from "react";
import ProfileActions from "../component/Profile/ProfileActions";
import ProfileHeader from "../component/Profile/ProfileHeader";
import ProfileTranslationHistory from "../component/Profile/ProfileTranslationHistory";
import withAuth from "../component/hoc/withAuth";
import { useUser } from "../context/UserContext";

const Profile = () => {
  const { user, setUser } = useUser();

  return (
    <>
      <div className="container text-center p-1">
        <ProfileHeader username={user.username} />
      </div>
      <div className="container text-center p-3">
        <ProfileActions />
      </div>
      <div className="container text-center p-3">
        <ProfileTranslationHistory
          className="container"
          translations={user.translations}
        />
      </div>
    </>
  );
};

export default withAuth(Profile);
