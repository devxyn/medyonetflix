import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { AuthContextProvider } from "./context/AuthContext";
import { SpeedInsights } from "@vercel/speed-insights/next";

function App() {
  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={router} />
        <SpeedInsights />
      </AuthContextProvider>
    </>
  );
}

export default App;
