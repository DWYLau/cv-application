import React from "react"
import ReactDOM from "react-dom/client"
import CV from "./CV.tsx"
import Header from "./Header.tsx"
import "../styles/index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <CV />
  </React.StrictMode>
)
