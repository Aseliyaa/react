const FetchUrl = async (url) => {
  const info = await fetch(`${url}`).then((response) => response.json());
  return { info };
};

export default FetchUrl;
