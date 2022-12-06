import { useLoaderData } from "react-router-dom";
import FetchUrl from "../components/Api";
import InfoLink from "../components/InfoLink";

export const loader = async () => {
  const users = await FetchUrl(`https://jsonplaceholder.typicode.com/users`);
  return { users };
};

export default function Users() {
  const { users } = useLoaderData();

  return (
    <div className="flex flex-col gap-1 mt-4">
      {users.info.map((user) => (
        <InfoLink
          key={user.id}
          className="text-stone-600 hover:text-blue-600 underline"
          name={user.name}
          url={`/users/${user.id}`}
        />
      ))}
    </div>
  );
}
