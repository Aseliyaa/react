import { Link } from "react-router-dom";

function Info({
  type,
  placeholder1,
  placeholder2,
  value1,
  value2,
  onChange1,
  onChange2,
  onClick,
  btnText,
  title,
}) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-[25%]">
        <Link to="/notes" className="bg-stone-200 text-xl  text-center">
          <div className="px-8 py-2 text-xl bg-stone-200">Back</div>
        </Link>
        <div className="text-5xl font-medium">{title}</div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col  gap-2 ">
          <input
            type={type}
            className="w-[100%] h-[50px] px-4 mt-5 bg-stone-200 text-3xl"
            placeholder={placeholder1}
            value={value1}
            onChange={onChange1}
          />
          <textarea
            type={type}
            className="w-[100%]  h-[350px] t py-2 px-4 mt-5 bg-stone-200 text-3xl  "
            placeholder={placeholder2}
            value={value2}
            onChange={onChange2}
          />
        </div>
      </div>
      <div className="mt-5 ">
        <button
          className="text-2xl bg-stone-200 mx-[43%] py-2 px-10 "
          onClick={onClick}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default Info;
