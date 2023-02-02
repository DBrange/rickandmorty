import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from './Nav.module.css'

export default function Nav({onSearch, setError}) {
  return (
    <div className={style.container}>
    <Link to='/home' className={style.link}>Home</Link>
      <Link to='/about' className={style.link}>About</Link>
      <Link to='/favorites' className={style.link}>Favorites</Link>
      <Link to='/' className={style.link}>Log Out</Link>
    <div className={style.search}>
      <SearchBar onSearh={onSearch} setError={ setError } />
    </div>
    </div>
  )
}