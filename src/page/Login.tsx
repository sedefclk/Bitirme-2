import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserRepository } from './UserRepo';
import './Login.css';
import image55 from '../Material/login-arkaplan.png';

const Login = () => {
  const [uniquename, setUniqueName] = useState('');
  const [displayname, setDisplayName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const images = [image55];

  const handleLogin = async () => {
    const user = {
      uniquename,
      displayname,
      password
    };
    const userRepository = new UserRepository();
    console.log("user",user);
    const result = await userRepository.LoginControl(user);
    console.log("result",result);
    if (result) {
      console.log('KayÄ±t baÅŸarÄ±lÄ±', result);
      navigate('/MainPageLogin'); 
      
    } else {
      console.log('KayÄ±t baÅŸarÄ±sÄ±z',result);
    }
  };

  return (
    <div className="login-container">
      <h2>Giriş</h2>
      <label>Email:<input type="text" value={uniquename} onChange={(e) => setUniqueName(e.target.value)} /></label>
      <br />
      <label>İsim Soyisim:<input type="text" value={displayname} onChange={(e) => setDisplayName(e.target.value)} /></label>
      <br />
      <label>Şifre:<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></label>
      <br />
      <button onClick={handleLogin}>GiriÅŸ Yap</button>
    </div>
  );
};

export default Login;
