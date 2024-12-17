import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage.jsx";
import Home from "./Pages/Home.jsx";
import AllCampaign from "./Pages/AllCampaign.jsx";
import AddNewCampaign from "./Pages/AddNewCampaign.jsx";
import MyCampaign from "./Pages/MyCampaign.jsx";
import MyDonations from "./Pages/MyDonations.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Details from "./Pages/Details.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-campaign",
        element: <AllCampaign></AllCampaign>,
        loader: () => fetch('http://localhost:5000/campaigns')
      },
      {
        path: "/add-new-campaign",
        element: <AddNewCampaign></AddNewCampaign>,
      },
      {
        path: "/my-campaigns/:email",
        element: <MyCampaign></MyCampaign>,
        loader: ({params}) => fetch(`http://localhost:5000/my-campaigns/${params.email}`) 
      },
      {
        path: "/my-donations",
        element: <MyDonations></MyDonations>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/campaigns/:id",
        element: <Details></Details>,
        loader: ({params}) => fetch(`http://localhost:5000/campaigns/${params.id}`)
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
