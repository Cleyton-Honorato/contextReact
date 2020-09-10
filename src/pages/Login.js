import React, { useContext } from 'react';

import { Context } from '../Context/AuthContext';

export default function Login() {
  const { authenticated, handlerLogin } = useContext(Context);

  return (
    <button type="button" onClick={handlerLogin}>Entrar</button>
  ); 
}