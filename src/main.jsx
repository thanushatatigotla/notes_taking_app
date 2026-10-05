import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './global.css';
import { useContext } from "react";
import Notecontext from "./Notecontext";
createRoot(document.getElementById("root")).render(<Notecontext><App/></Notecontext>
)