export default async function getTData(train_no: string) {
  const res = await fetch(
    `http://localhost:3000/api/train/train_no?train_no=${train_no}`
  );

  if (!res.ok) throw new Error("failed to fetch user");

  const userData = await res.json(); // Parse the JSON data

  return userData;
}
