import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/action";
import { useState } from "react";
import { useEffect } from "react";

function Card({ name, image, onClose, id, addFav, removeFav, myFavorites }) {

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false)
      removeFav(id)
    } else {
      setIsFav(true)
      addFav(id) 
    }
    
  }
  useEffect(() => {
    myFavorites.forEach(fav => {
      if (fav.id === id) {
        setIsFav(true)
      }
    })
  },[myFavorites])
  
  console.log(myFavorites)
  return (
    <>
    {
      isFav ? <button onClick={handleFavorite}>❤️</button> : <button onClick={handleFavorite}>🤍</button>
    }
    <div className={style.card}>
        <div className={style.btnBox}>
          <button className={style.btn} onClick={() => onClose(id)}>
            x
          </button>
        </div>
        <Link to={`detail/${id}`}>
        <h2 className={style.h2}>{name}</h2>
        <div className={style.imgBox}>
          <img className={style.img} src={image} alt={name} />
        </div>
        </Link>
      </div>
      </>
  );
}

export const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  };
}

export const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (id) => dispatch(addFav(id)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
