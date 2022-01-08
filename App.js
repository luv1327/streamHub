import 'react-native-gesture-handler';
import React, {useState} from 'react';
import Main from './src/screens/Main';
import Auth from './src/screens/Auth';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handleChange = () => setIsLoggedIn(prevState => !prevState);
  return isLoggedIn ? (
    <Main handleChange={handleChange} />
  ) : (
    <Auth handleChange={handleChange} />
  );
};

export default App;
