import { Link, useLoaderData, useNavigate } from "react-router-dom";
import icon1 from "../img/pen.png";
import icon2 from "../img/del.png";
import NoteComponent from "../components/NoteComponent";
import FetchUrl from "../components/FetchUrl";

export const loader = async ({ params: { id } }) => {
  const note = await FetchUrl(`http://localhost:5000/notes/${id}`);
  return { note };
};

function Note() {
  const { note } = useLoaderData();
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/notes/${id}`, {
      method: "DELETE",
      body: JSON.stringify(note.info),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/notes");
      });
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row  justify-between">
        <Link to="/notes">
          <div className="px-8 py-2 text-xl bg-stone-200">Back</div>
        </Link>
        <input
          type="text"
          value={note.info.title}
          readOnly={true}
          className="text-5xl align-center font-medium"
        />
        <NoteComponent
          className="flex flex-row gap-2 items-center"
          onclick={() => handleDelete(note.info.id)}
          url={`/edit/${note.info.id}`}
          alt="icon"
          src1={icon2}
          src2={icon1}
        />
      </div>
      <div className="w-[100%] h-[400px] font-[400] px-8 py-5 mt-10 bg-stone-200 text-3xl align-top rounded-sm">
        {note.info.body}
      </div>
    </div>
  );
}

export default Note;
