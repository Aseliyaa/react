import icon from "../img/album-icon.png";
import InfoAlbum from "../components/InfoAlbum";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchAlbums } from "../redux/albums/actions";
import {
  selectAlbums,
  selectError,
  selectLoading,
} from "../redux/albums/selectors";
import { useNavigate } from "react-router-dom";

export default function Albums() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const albums = useSelector(selectAlbums);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (error) navigate(`/404`);
    else if (!albums.length && !loading) dispatch(FetchAlbums());
  }, [FetchAlbums, error, loading, albums, navigate]);

  if (loading) return <div className="text-3xl">Loading...</div>;

  if (albums !== undefined)
    return (
      <div className="flex text-2xl flex-col gap-1 mt-4">
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
    );
}
