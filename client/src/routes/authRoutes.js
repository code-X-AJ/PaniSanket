import Homepage from "../pages/Homepage"
import Home from "../pages/Home"
import Signup from "../pages/Signup"
import Login from "../pages/Login"
import Reporting from "../pages/Reporting"
import Notify from '../pages/Notify'
import MonthlyReport from '../pages/MonthlyReport'

const authRoutes = [
    {
        name: <Signup />,
        path: 'signup'
    },
    {
        name: <Login />,
        path: 'login'
    },
    // {
    //     name: <Homepage />,
    //     path: ''
    // },
    {
        name: <Home />,
        path: ''
    },
    {
        name: <Reporting/>,
        path: 'report'
    },
    {
        name: <Notify/>,
        path: 'notify'
    },
    {
        name: <MonthlyReport/>,
        path: 'monthlyreport'    }
]

export default authRoutes