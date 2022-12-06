import InfoLink from "../components/InfoLink";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchUsers } from "../redux/users/actions";
import {
  selectError,
  selectLoading,
  selectUsers,
} from "../redux/users/selectors";
import { useNavigate } from "react-router-dom";

export default function Users() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector(selectUsers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (error) navigate(`/404`);
    else if (!users.length && !loading) dispatch(FetchUsers());
  }, [FetchUsers, error, users, loading]);

  if (loading) return <div className="text-3xl">Loading...</div>;

  if (users !== undefined)
    return (
      <div className="flex flex-col gap-1 mt-4 text-2xl">
        {users.map((user) => (
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
