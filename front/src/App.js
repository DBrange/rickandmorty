import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import { useNavigate } from "react-router-dom";
import Favorites from "./components/Favorites/Favorites";
import { useDispatch, useSelector } from "react-redux";
import { removeFav, addFav } from "./redux/action";
import axios from 'axios'


function App() {

  const dispatch = useDispatch();
  const fav = useSelector(state => state.myFavorites)
  
  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);

  const [form, setForm] = useState();


  const location = useLocation();

  const navigate = useNavigate();

  const username = "ejemplo@gmail.com";
  const password = "1Password";

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  let setError = false;

  const noRepeat = async (character) => {
    if (!characters.some((char) => char.id === parseInt(character))) {
      setError = false;
      try {
        
      } catch {
        
      }
      const result = await axios(`http://localhost:3001/rickandmorty/character/${character}`)
      const res = result.data;
          if (res.name) {
            setCharacters((oldChars) => [...oldChars, res]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
      } else {
      setError = true;
    }
  };
  // console.log(setError) // no se porque no puedoooo

  const charRandom = () => {
    let char = 0;
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let random = Math.ceil(Math.random() * data.info.count);
        char = random;
      });
  };
  // console.log(charRandom()) // AAAAAAAAA

  function onSearch(character) {
    noRepeat(character);
  }

  const onClose = (id) => {
    let filter = characters.filter((char) => char.id !== id);
    // let filterFav = fav.filter(char => char.id === id)
    setCharacters(filter);
    // dispatch(removeFav(filterFav[0]));
    
    // console.log(filterFav[0]);
  };

  return (
    <div>
      {location.pathname !== '/' && <Nav characters={characters} onSearch={onSearch} setError={setError} />}
      <Routes>
        <Route path="" element={<Form login={login} setForm={setForm} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="about" element={<About />} />
        <Route path="home/detail/:detailId" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
