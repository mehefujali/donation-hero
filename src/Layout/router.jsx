import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import AuthLayout from "../page/AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import ForgetPassword from "../components/ForgetPassword";
import DonationCampaigns from "../page/DonationCampaigns";
import WinterDetails from "../page/WinterDetails";
import Dashboard from "../components/Dashboard";
import UpdateProfile from "../components/UpdateProfile";
import ErrorPage from "../page/ErrorPage";
import HowToHelp from "../components/HowToHelp";


const router = createBrowserRouter([
    {
        errorElement : <ErrorPage></ErrorPage>
    },
    {
      path: "/",
      element: <Home></Home>,
    },
    {
        path: '/donationCamp',
        element: <DonationCampaigns></DonationCampaigns>
    },
    {
        path: '/alldonation/:id',
        element: <WinterDetails></WinterDetails>,
        loader: () => fetch('../winter.json')
    },
    {
        path: 'auth',
        element:<AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element:<Register></Register>
            },
            {
                path: '/auth/forgetpassword',
                element: <ForgetPassword></ForgetPassword>
            },
            
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
    },
    {
        path: 'updateprofile',
        element: <UpdateProfile></UpdateProfile>
    },
    {
        path: 'help',
        element: <HowToHelp></HowToHelp>
    }
  ]);
export default router;