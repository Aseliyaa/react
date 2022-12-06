import { Link } from "react-router-dom";

function InfoLink({ name, url, className }) {
  return (
    <Link
      className={className}
      to={url}
    >
      {name}
    </Link>
  );
}

export default InfoLink;
