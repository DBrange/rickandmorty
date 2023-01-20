import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from './Nav.module.css'

export default function Nav({onSearch, setError}) {
  return (
    <>
    <Link to='/home'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/favorites'>Favorites</Link>
      <Link to='/'>Log Out</Link>
    <div className={style.container}>
      <SearchBar onSearh={onSearch} setError={ setError } />
    </div>
    </>
  )
}