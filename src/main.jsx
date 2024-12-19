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
import UpdateCampaign from "./Pages/UpdateCampaign.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import PrivateSign from "./PrivateRoute/PrivateSign.jsx";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://crowdcube-server-sigma.vercel.app/running-campaigns"),
      },
      {
        path: "/all-campaign",
        element: <AllCampaign></AllCampaign>,
        loader: () =>
          fetch("https://crowdcube-server-sigma.vercel.app/campaigns"),
      },
      {
        path: "/add-new-campaign",
        element: (
          <PrivateRoute>
            <AddNewCampaign></AddNewCampaign>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-campaigns/:email",
        element: (
          <PrivateRoute>
            <MyCampaign></MyCampaign>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://crowdcube-server-sigma.vercel.app/my-campaigns/${params.email}`
          ),
      },
      {
        path: "/my-donations/:email",
        element: (
          <PrivateRoute>
            <MyDonations></MyDonations>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://crowdcube-server-sigma.vercel.app/my-donations/${params.email}`
          ),
      },
      {
        path: "/login",
        element: (
          <PrivateSign>
            <Login></Login>
          </PrivateSign>
        ),
      },
      {
        path: "/register",
        element: (
          <PrivateSign>
            <Register></Register>
          </PrivateSign>
        ),
      },
      {
        path: "/campaigns/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://crowdcube-server-sigma.vercel.app/campaigns/${params.id}`
          ),
      },
      {
        path: "/update-campaign/:id",
        element: (
          <PrivateRoute>
            <UpdateCampaign></UpdateCampaign>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://crowdcube-server-sigma.vercel.app/campaigns/${params.id}`
          ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
