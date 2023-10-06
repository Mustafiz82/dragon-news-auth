import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Router, RouterProvider } from "react-router-dom";
import router from "./Router/Router.jsx";
import Context from "./Contest/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Context>
			<RouterProvider router={router}></RouterProvider>
		</Context>
	</React.StrictMode>
);
