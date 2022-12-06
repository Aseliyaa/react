import { useUserContext } from "../components/userContext";
import { Link } from "react-router-dom";
import InfoUser from "../components/InfoUser";
function About() {
  const { user } = useUserContext();

  return (
    <div className="flex flex-col items-center">
      <div className="text-5xl font-medium mt-20 ">About me</div>

      <InfoUser text="Email:" info={user.email} />
      <InfoUser text="Date sign up:" info={user.createdAt} />

      <Link to="/notes" className="text-2xl bg-stone-200 py-3 px-16 mt-6">
        Go to notes
      </Link>
    </div>
  );
}

export default About;
