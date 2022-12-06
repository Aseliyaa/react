import { useCallback, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useUserContext } from "../components/userContext";
import Info from "../components/Info";
import FetchUrl from "../components/FetchUrl";

export const loader = async () => {
  const notes = await FetchUrl(`http://localhost:5000/notes`);
  return { notes };
};

function CreateNote() {
  const navigate = useNavigate();
  const { notes } = useLoaderData();
  const user = useUserContext();
  const arrUser = [user];

  const [title, setTitle] = useState("");
  const handleSetTitle = useCallback((e) => setTitle(e.target.value), []);

  const [body, setBody] = useState("");
  const handleSetBody = useCallback((e) => setBody(e.target.value), []);

  const handleAddNote = async () => {
    let max = 0;
    if (notes.info.length > 0)
      max = notes.info.sort((a, b) => b.id - a.id)[0].id;

    const note = {
      title: title,
      body: body,
      userId: arrUser[0].user.id,
      createdAt: new Date().toLocaleString(),
      id: max + 1,
    };

    await fetch(`http://localhost:5000/notes`, {
      method: "POST",
      body: JSON.stringify(note),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((r) => r.json())
      .then(() => {
        navigate(`/note/${note.id}`);
      });
  };

  return (
    <div>
      <Info
        type="text"
        placeholder1="Name"
        value1={title}
        onChange1={handleSetTitle}
        placeholder2="Note text..."
        value2={body}
        onChange2={handleSetBody}
        onClick={handleAddNote}
        btnText="Create"
        title="Create new note"
      />
    </div>
  );
}

export default CreateNote;
