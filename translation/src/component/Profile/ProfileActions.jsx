import { useUser } from "../../context/UserContext"




const ProfileActions = () => {

    const {user } = useUser()

    const handleClearHistoryClick = () => {

    }

    const handleLogoutClick = () => {

    }
    
    return (
        <>
            <p>ProfileActions</p>
            <ul>
                <li><button>Clear History</button></li>
                <li><button>Logout</button></li>
            </ul>

        </>
    )
}

export default ProfileActions