import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <div className="container mx-auto px-4 w-6/12">
      <header className="flex flex-row gap-6 text-lg mt-5 mr-10">
        <NavLink
          to="/"
          end={true}
          className={({ isActive }) =>
            isActive
              ? "font-bold text-black-900 ml-auto"
              : "font-medium text-stone-500 ml-auto"
          }
        >
          Albums
        </NavLink>
        <NavLink
          to="/users"
          end={true}
          className={({ isActive }) =>
            isActive
              ? "font-bold text-black-900 "
              : " font-medium text-stone-500 "
          }
        >
          Users
        </NavLink>
      </header>
      <main className="ml-10">
        <Outlet />
      </main>
      <footer className="mt-4 mb-4">
        <div>
          <hr></hr>
        </div>
        <div className="flex flex-row justify-between text-stone-400 mt-5">
          <div className="ml-10">Created by: Ruban Alexandra</div>
          <div className="mr-10">BSU: 2022</div>
        </div>
      </footer>
    </div>
  );
}
