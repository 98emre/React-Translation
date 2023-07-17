import withAuth from "../component/hoc/withAuth"



const Profile = () => {
    
    return (
        <>
            <p>Profile View</p>
            {
                <ul>
                    <li>1</li>
                    <li>2</li>
                </ul>
            }
            <button>Clear History</button>
        </>
    )
}

export default withAuth(Profile)