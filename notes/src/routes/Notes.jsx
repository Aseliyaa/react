import icon1 from "../img/pen.png";
import icon2 from "../img/del.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useUserContext } from "../components/userContext";
import NoteComponent from "../components/NoteComponent";
function Notes() {
  const { user } = useUserContext();
  const [notes, setNotes] = useState([]);
  const reversed = [...notes].reverse();

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/notes/${id}`, {
      method: "DELETE",
      body: JSON.stringify(notes),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());

    fetch(`http://localhost:5000/notes?userId=${user.id}`)
      .then((r) => r.json())
      .then((r) => setNotes(r));
  };

  useEffect(() => {
    fetch(`http://localhost:5000/notes?userId=${user.id}`)
      .then((r) => r.json())
      .then((r) => setNotes(r));
  }, [user.id]);

  return (
    <div className="flex flex-col items-center">
      <div className="text-5xl font-medium">Notes</div>
      <Link
        to="/create/"
        className="text-3xl bg-stone-200 pt-2 pb-2 pl-10 pr-10 mt-5"
      >
        Add new note
      </Link>

      {reversed.map((note) => (
        <div
          key={note.id}
          className="flex flex-row justify-between w-[100%] bg-stone-200 mt-5 items-center"
        >
          <Link to={`/note/${note.id}`}>
            <input
              type="text"
              className="bg-stone-200 py-3 w-[1050px] px-4 text-3xl cursor-pointer"
              readOnly={true}
              value={note.title}
            />
          </Link>
          <NoteComponent
            className="flex flex-row w-[70px] gap-2 pr-4"
            onclick={() => handleDelete(note.id)}
            url={`/edit/${note.id}`}
            alt="icon"
            src1={icon2}
            src2={icon1}
          />
        </div>
      ))}
    </div>
  );
}
export default Notes;
