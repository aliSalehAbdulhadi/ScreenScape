const asyncFetch = async (url: any) => {
  const request = await fetch(`${url}`);
  const data = await request.json();

  return data;
};

export default asyncFetch;
