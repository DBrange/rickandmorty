import { useState } from 'react'
import style from './Form.module.css';
import { validation } from './validation';

export default function Form({login, setForm}) {

  const [userData, setUserData] = useState({
    username: '',
    password: ''
  })

  const [errors, setErrors] = useState({
    username: '',
    password: ''
  })

  
  
  const handlerInputChange = (e) => {
    let { value, name } = e.target;
    
    setUserData({
      ...userData,
      [name]: value
    })

    setErrors(
      validation({
        ...userData,
        [name]: value
      })
    )
  }

  const handlerSubmit = () => {
    login(userData);
  }


  return (
    <div className={style.container}>
      <div className={style.login}>
        <div className={style.inputBox}>
          <label className={style.label} htmlFor="username">
            Nombre de Usuario
          </label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handlerInputChange}
          />
          {errors.username && (
            <span className={style.span}>{errors.username}</span>
          )}
        </div>
        <div className={style.inputBox}>
          <label className={style.label} htmlFor="password">
            Contaseña
          </label>
          <input
            type="text"
            name="password"
            value={userData.password}
            onChange={handlerInputChange}
          />
          {errors.password && (
            <span className={style.span}>{errors.password}</span>
          )}
        </div>
        <button onClick={handlerSubmit}>Ingresar</button>
      </div>
    </div>
  );
}