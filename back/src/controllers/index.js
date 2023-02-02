const axios = require("axios");

let fav = [];

const getCharById = async (req, res) => {
  const { id } = req.params;
  if (!id) throw Error('Not found');
  try {
    const result = await axios(`https://rickandmortyapi.com/api/character/${id}`)
    const characterApi = result.data;
        const char = {
          image: characterApi.image,
          name: characterApi.name,
          gender: characterApi.gender,
          species: characterApi.species,
          id: characterApi.id,
        };
        res.status(200).json(char)
    
  } catch (err) {
    res.status(500).json({erro: err.message})
  }

};

const getDetail = async (req, res) => {
  const { detailId } = req.params;
  if (!detailId) throw Error("Not found");
  try {
    const result = await axios(`https://rickandmortyapi.com/api/character/${detailId}`)
    const detailApi = result.data;
  
        const char = {
          image: detailApi.image,
          name: detailApi.name,
          gender: detailApi.gender,
          species: detailApi.species,
          id: detailApi.id,
          status: detailApi.status,
          origin: detailApi.origin,
        };
        res.status(200).json(char)
    
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

const getFav = (req, res) => {
  // if (!fav.length) throw Error("You not have any fav characters");
  res.status(200).json(fav)
};

const postFav = (req, res) => {
  const allFavs = req.body;
  fav.push(allFavs);
  console.log(fav)
  res.status(200).json(allFavs)
};

const deleteFavId = (req, res) => {
  const { id } = req.params;
  const findChar = fav.find(el => el.id == id);
  if (!findChar) throw Error('Not have any fav character with that id');
  const filterFavs = fav.filter(el => el.id != id);
  fav = filterFavs
  
  res.status(200).json(findChar)
};

module.exports = {
  getCharById,
  getFav,
  postFav,
  deleteFavId,
  getDetail,
};
