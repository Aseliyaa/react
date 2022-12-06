import { Suspense, useEffect } from "react";
import { Await, useNavigate, useParams } from "react-router-dom";
import icon from "../img/album-icon.png";
import InfoUser from "../components/InfoUser";
import InfoAlbum from "../components/InfoAlbum";
import Name from "../components/Name";
import { FetchUser } from "../redux/user/actions";
import { connect } from "react-redux";
import {
  selectAlbums,
  selectError,
  selectLoading,
  selectUser,
} from "../redux/user/selectors";

export default connect(mapStateToProps, mapDispatchToProps)(User);
function mapStateToProps(state) {
  return {
    user: selectUser(state),
    albums: selectAlbums(state),
    loading: selectLoading(state),
    error: selectError(state),
  };
}
function mapDispatchToProps(dispatch) {
  return {
    FetchUser: (id) => dispatch(FetchUser(id)),
  };
}

function User({ user, albums, loading, error, FetchUser }) {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (error) navigate(`/404`);
    else if (!user && !loading) FetchUser(id);
  }, [FetchUser, navigate, user, id, error, loading]);

  if (loading) return <div className="text-3xl">Loading...</div>;

  if (user !== undefined)
    return (
      <Suspense fallback={<div className="text-3xl">Loading...</div>}>
        <Await resolve={user} errorElement={<div>Ooops!</div>}>
          {(user) => {
            return (
              <div>
                <Name name={user.name} />

                <InfoUser
                  username={user.username}
                  email={user.email}
                  phone={user.phone}
                  website={user.website}
                />

                <div className="text-2xl font-medium text-black mt-4">
                  Albums:
                </div>
                <div className="flex flex-col gap-1 text-2xl">
                  {albums.map((album) => (
                    <InfoAlbum
                      className="text-stone-600 hover:text-blue-600 underline"
                      key={album.id}
                      id={album.id}
                      title={album.title}
                      src={icon}
                      alt="icon"
                      url={`/albums/${album.id}`}
                    />
                  ))}
                </div>
              </div>
            );
          }}
        </Await>
      </Suspense>
    );
}
