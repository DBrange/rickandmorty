const { Router } = require('express');
const character = Router();
const {
  getCharById,
  getFav,
  postFav,
  deleteFavId,
  getDetail,
} = require("../controllers/index");

character.get('/character/:id', getCharById)
// character.get('/character/:id', (req, res) => {
//   const { id } = req.params;
//   try {
//     const char = getCharById(id);
//     res.status(200).json(char)

//   } catch (err) {
//     res.status(500).json({error: err.message})
//   }
// })

character.get('/detail/:detailId', getDetail)
// character.get('/detail:detailId', (req, res) => {
//   const { detailId } = req.params;
//   try {
//     const detail = getDetail(detailId);
//     res.status(200).json(detail);

//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// })

character.get('/fav', getFav)
// character.get('/fav', (req, res) => {
//   try {
//     const fav = getFav();
//     res.status(200).json(fav);

//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// })

character.post('/fav', postFav)
// character.post('/fav', (req, res) => {
//   const allFavs = req.body;
//   try {
//     const fav = postFav(allFavs);
//     res.status(200).json({status: 'ok'})
  
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// })

character.delete('/fav/:id', deleteFavId)
// character.delete('/fav/:id', (req, res) => {
//   const { id } = req.params;
//   try {
//     const favDelete = deleteFavId(id)
//     res.status(200).json(favDelete)

//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// })


module.exports = character;