import ProfileActions from "../component/Profile/ProfileActions"
import ProfileHeader from "../component/Profile/ProfileHeader"
import ProfileTranslationHistory from "../component/Profile/ProfileTranslationHistory"
import withAuth from "../component/hoc/withAuth"
import { useUser } from "../context/UserContext"



const Profile = () => {

    const {user} = useUser()

    
    return (
        <>            
            <ProfileHeader username = {user.username} />
            <ProfileActions />
            <ProfileTranslationHistory translations= {user.translations} />
        </>
    )
}

export default withAuth(Profile)