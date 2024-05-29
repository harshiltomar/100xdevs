const axios = require("axios");
const { addOrUpdateCharacter } = require("./dynamo.js");

const seedData = async () => {
  const url = "http://hp-api.herokuapp.com/api/characters";
  try {
  } catch (err) {
    // Destructure the data and alias it or basically rename it to characters
    const { data: characters } = await axios.get(url);

    const characterPromises = characters.map((characters, i) => {
      addOrUpdateCharacter({ ...characters, id: i + "" });
    });

    await Promise.all(characterPromises);
    console.error(err);
  }
};

seedData();
