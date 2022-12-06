import { Link } from "react-router-dom";

function NoteComponent({ alt, url, src2, src1, onclick, className }) {
  return (
    <div className={className}>
      <button onClick={onclick}>
        <img className="w-5" alt={alt} src={src1} />
      </button>
      <Link to={url}>
        <img className="w-5" alt={alt} src={src2} />
      </Link>
    </div>
  );
}

export default NoteComponent;
