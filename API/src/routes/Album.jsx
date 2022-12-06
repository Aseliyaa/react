import { Suspense } from "react";
import { Await, useLoaderData, redirect } from "react-router-dom";
import Name from "../components/Name";
import FetchUrl from "../components/Api";
import InfoLink from "../components/InfoLink";
export const loader = async ({ params: { id } }) => {
  const album = await FetchUrl(
    `https://jsonplaceholder.typicode.com/albums/${id}`
  );
  const photos = await FetchUrl(
    `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
  );
  const users = await FetchUrl(
    `https://jsonplaceholder.typicode.com/albums/${id}`
  );
  const user = await FetchUrl(
    `https://jsonplaceholder.typicode.com/users/${users.info.userId}`
  );

  if (!album.info.id) {
    throw redirect(`*`);
  }

  const infoPromise = [album, photos, user];

  return { infoPromise };
};

export default function Album() {
  const { infoPromise } = useLoaderData();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Await resolve={infoPromise} errorElement={<div>Ooops!</div>}>
        {(infoPromise) => {
          return (
            <div>
              <Name name={infoPromise[0].info.title} />

              <div className="flex flex-row gap-1 text-stone-600">
                <p>Created by:</p>
                <InfoLink
                  className="hover:text-blue-500 underline"
                  url={`/users/${infoPromise[2].info.id}`}
                  name={infoPromise[2].info.name}
                />
              </div>

              <div className="grid grid-cols-3 gap-4 mt-4">
                {infoPromise[1].info.map((photo) => (
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
