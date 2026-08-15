import { Outlet } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-[100vh] flex flex-col overflow-hidden">
      <Outlet />
    </div>
  );
}
