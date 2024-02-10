export const getAllCauses = async () => {
  const response = await fetch("/api/cause");
  const data = await response.json();
  return data;
};
