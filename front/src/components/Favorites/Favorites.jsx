import { connect } from "react-redux";
import Card from "../Card/Card";

function Favorites({myFavorites}) {
  return (
    <>
      {
        myFavorites.map(fav => {
          return (
            <Card
            key={fav.id}
            id={fav.id}
            name={fav.name}
            image={fav.image}
            />
            )
        })
      }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, null)(Favorites)