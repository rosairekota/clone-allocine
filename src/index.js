import React from "react";
import ReactDOM from "react-dom";
import "./index.styles";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";

const client = new QueryClient();

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<QueryClientProvider client={client}>
				<App />
			</QueryClientProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
