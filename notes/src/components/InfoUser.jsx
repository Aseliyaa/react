function InfoUser({ text, info }) {
  return (
    <div className="flex flex-row mt-4 gap-1">
      <p className="text-2xl font-medium text-stone-900">{text}</p>
      <p className="text-stone-500  font-medium text-2xl"> {info}</p>
    </div>
  );
}
export default InfoUser;
