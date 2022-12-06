import { useEffect } from "react";
import { Link } from "react-router-dom";
function InfoAlbum({ id, title, src, alt, url, className }) {
  return (
    <Link key={id} className={className} to={url}>
      <div className="flex flex-row flex  items-center">
        <img className="h-4 mt-2" src={src} alt={alt} />
        {title}
      </div>
    </Link>
  );
}

export default InfoAlbum;
