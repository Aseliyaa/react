import { Suspense, useEffect } from "react";
import { Await, useNavigate, useParams } from "react-router-dom";
import Name from "../components/Name";
import InfoLink from "../components/InfoLink";
import { connect } from "react-redux";
import { FetchAlbum } from "../redux/album/actions";
import {
  selectUser,
  selectPhotos,
  selectAlbum,
  selectError,
  selectLoading,
} from "../redux/album/selectors";

export default connect(mapStateToProps, mapDispatchToProps)(Album);
function mapStateToProps(state) {
  return {
    album: selectAlbum(state),
    user: selectUser(state),
    photos: selectPhotos(state),
    loading: selectLoading(state),
    error: selectError(state),
  };
}
function mapDispatchToProps(dispatch) {
  return {
    FetchAlbum: (id) => dispatch(FetchAlbum(id)),
  };
}

function Album({ user, photos, album, loading, error, FetchAlbum }) {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) navigate("/404");
    else if (!album && !loading) FetchAlbum(id);
  }, [FetchAlbum, album, error, loading, id, navigate]);

  if (loading) return <div className="text-3xl">Loading...</div>;

  if (album !== undefined)
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={album} errorElement={<div>Ooops!</div>}>
          {(album) => {
            return (
              <div>
                <Name name={album.title} />

                <div className="flex flex-row gap-1 text-stone-600 text-2xl">
                  <p>Created by:</p>
                  <InfoLink
                    className="hover:text-blue-500 underline"
                    url={`/users/${user.id}`}
                    name={user.name}
                  />
                </div>

                <div className="grid grid-cols-3 gap-4 mt-4">
                  {photos.map((photo) => (
                    <img key={photo.id} alt={photo.id} src={photo.url} />
                  ))}
                </div>
              </div>
            );
          }}
        </Await>
      </Suspense>
    );
}
