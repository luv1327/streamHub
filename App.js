import 'react-native-gesture-handler';
import React from 'react';
import Main from './src/screens/Main';
import {AuthProvider} from './src/context/AuthContext';
import {MovieProvider} from './src/context/MovieContext';

const App = () => {
  return (
    <AuthProvider>
      <MovieProvider>
        <Main />
      </MovieProvider>
    </AuthProvider>
  );
};

export default App;
