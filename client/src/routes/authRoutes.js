import Homepage from "../pages/Homepage"
import Signup from "../pages/Signup"

const authRoutes = [
    {
        name: <Signup/>,
        path: 'signup'
    },
    {
        name: <Homepage/>,
        path: 'home'
    },
]

export default authRoutes