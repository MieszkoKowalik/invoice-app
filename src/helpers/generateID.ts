export const generateID = () => {
  let id = "";

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < 6; i++) {
    if (i < 2) {
      id += letters.charAt(Math.floor(Math.random() * letters.length));
    } else {
      id += Math.floor(Math.random() * 10);
    }
  }
  return id;
};
