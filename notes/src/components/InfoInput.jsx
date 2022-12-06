function InfoInput({
  type1,
  type2,
  onChange1,
  placeholder1,
  placeholder2,
  value1,
  value2,
  onChange2,
}) {
  return (
    <div className="flex flex-col items-center gap-1 mt-4  gap-4">
      <div className="bg-stone-200  text-2xl rounded-sm">
        <input
          type={type1}
          className="bg-stone-200 w-[400px] py-3 px-4  "
          placeholder={placeholder1}
          value={value1}
          onChange={onChange1}
        />
      </div>
      <div className="bg-stone-200  text-2xl rounded-sm">
        <input
          className="bg-stone-200 w-[400px] py-3 px-4  "
          placeholder={placeholder2}
          type={type2}
          value={value2}
          onChange={onChange2}
        />
      </div>
    </div>
  );
}

export default InfoInput;
