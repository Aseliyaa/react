import { NavLink, Outlet } from "react-router-dom";
import { useUserContext } from "../components/userContext";

export default function Layout() {
  const user = useUserContext();
  const handleLogout = () => {
    user.setUser({ email: "" });
  };
  const arrUser = [user];

  return (
    <div className="container mx-auto mt-10 w-7/12">
      <header className="flex  flex-row gap-6 text-lg mt-5 justify-between mb-10">
        <div className="text-2xl font-medium">
          Hello, {arrUser[0].user.email}!
        </div>
        <div className="flex text-2xl gap-8 ">
          <NavLink
            to="/about"
            end={true}
            className={({ isActive }) =>
              isActive
                ? "font-medium text-black-900 ml-auto"
                : "font-medium text-stone-500 ml-auto"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/notes"
            end={true}
            className={({ isActive }) =>
              isActive
                ? "font-medium text-black-900 "
                : " font-medium text-stone-500 "
            }
          >
            Notes
          </NavLink>

          <button onClick={handleLogout} className=" font-medium text-red-700 ">
            Log out
          </button>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
