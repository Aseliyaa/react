import { useLoaderData } from "react-router-dom";
import icon from "../img/album-icon.png";
import FetchUrl from "../components/Api";
import InfoAlbum from "../components/InfoAlbum";
export const loader = async () => {
  const albums = await FetchUrl(`https://jsonplaceholder.typicode.com/albums`);
  return { albums };
};

export default function Albums() {
  const { albums } = useLoaderData();

  return (
    <div className="flex flex-col gap-1 mt-4">
      {albums.info.map((album) => (
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
