import { useLoaderData, useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";
import Info from "../components/Info";
import FetchUrl from "../components/FetchUrl";

export const loader = async ({ params: { id } }) => {
  const note = await FetchUrl(`http://localhost:5000/notes/${id}`);
  return { note };
};

function EditNote() {
  const { note } = useLoaderData();
  const navigate = useNavigate();

  const [title, setTitle] = useState(note.info.title);
  const handleSetTitle = useCallback((e) => setTitle(e.target.value), []);

  const [body, setBody] = useState(note.info.body);
  const handleSetBody = useCallback((e) => setBody(e.target.value), []);

  const handleSave = async () => {
    const updateNote = {
      body: body,
      title: title,
    };

    await fetch(`http://localhost:5000/notes/${note.info.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateNote),
    })
      .then((response) => response.json())
      .then(() => {
        navigate(`/note/${note.info.id}`);
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
        onClick={handleSave}
        btnText="Save"
        title="Edit note"
      />
    </div>
  );
}

export default EditNote;
