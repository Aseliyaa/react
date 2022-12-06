import { Suspense } from "react";
import { Await, useLoaderData, redirect } from "react-router-dom";
import icon from "../img/album-icon.png";
import Name from "../components/Name";
import FetchUrl from "../components/Api";
import InfoUser from "../components/InfoUser";
import InfoAlbum from "../components/InfoAlbum";

export const loader = async ({ params: { id } }) => {
  const user = await FetchUrl(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const albums = await FetchUrl(
    `https://jsonplaceholder.typicode.com/albums?userId=${id}`
  );

  if (!user.info.id) {
    throw redirect(`*`);
  }

  const infoPromise = [user, albums];
  return { infoPromise };
};

export default function User() {
  const { infoPromise } = useLoaderData();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Await resolve={infoPromise} errorElement={<div>Ooops!</div>}>
        {(infoPromise) => {
          return (
            <div>
              <Name name={infoPromise[0].info.name} />

              <InfoUser
                username={infoPromise[0].info.username}
                email={infoPromise[0].info.email}
                phone={infoPromise[0].info.phone}
                website={infoPromise[0].info.website}
              />

              <div className="text-lg font-medium text-black mt-4">Albums:</div>
              <div className="flex flex-col gap-1">
                {infoPromise[1].info.map((album) => (
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
