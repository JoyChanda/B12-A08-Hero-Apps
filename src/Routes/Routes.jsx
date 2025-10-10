import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AppsList from "../components/Appdashboard/Appdashboard";
import AppDetails from "../components/Appdashboard/AppDetails";
import MyInstallation from "../components/MyInstallation/MyInstallation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("appsData.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "apps",
        loader: () => fetch("appsData.json"),
        Component: AppsList,
      },
      {
        path: "app/:id",
        loader: async ({ params }) => {
          const res = await fetch("/appsData.json");
          const data = await res.json();
          const app = data.find((a) => a.id === Number(params.id));
          if (!app) throw new Response("App Not Found", { status: 404 });
          return app;
        },
        Component: AppDetails,
      },
    ],
  },
  {
    path: "/installation",
    Component: MyInstallation,
  },
]);
