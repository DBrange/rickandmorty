import Card from "../Card/Card";
import style from './Cards.module.css'

export default function Cards({ characters, onClose }) {
  return (
    <div className={style.container}>
        <div className={style.charactersBox}>
        {characters.map((char, i) => (
        <Card
            key={char.id}
            id={char.id}
            name={char.name}
            image={char.image}
            onClose={onClose}
        />
        ))}
        </div>
    </div>
  );
}
