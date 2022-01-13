import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [fireStoreUser, setFireStoreUser] = useState(null);
  const [errMessage, setErrMessage] = useState('');

  const login = async () => {
    try {
      if (email.length > 3 && password.length > 3) {
        const response = await auth().signInWithEmailAndPassword(
          email,
          password,
        );
        setUser(response.user);
        await firestore()
          .collection('Users')
          .doc(email)
          .get()
          .then(documentSnapshot => {
            if (documentSnapshot.exists) {
              console.log(documentSnapshot.data());
              setFireStoreUser(documentSnapshot.data());
            }
          })
          .catch(err => console.log(err));
      } else {
        setErrMessage('Please enter valid email and password');
      }
    } catch (err) {
      setErrMessage('Please Enter Valid Email And Password');
    }
  };

  const register = async () => {
    try {
      if (email.length > 3 && password.length > 3 && username.length > 0) {
        const response = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );
        setUser(response.user);
        await firestore()
          .collection('Users')
          .doc(email)
          .set({
            //Capitalizing first letter of the username
            username: username.charAt(0).toUpperCase() + username.slice(1),
            email,
            imageUrl: '',
            downloadedVideos: [],
            watchlistedVideos: [],
          })
          .catch(err => console.warn(err));
        await firestore()
          .collection('Users')
          .doc(email)
          .get()
          .then(documentSnapshot => {
            if (documentSnapshot.exists) {
              setFireStoreUser(documentSnapshot.data());
            }
          })
          .catch(err => console.log(err));
      } else {
        setErrMessage('Please enter valid email and password');
      }
    } catch (err) {
      setErrMessage('Please Enter Valid Email And Password');
    }
  };

  const logout = async () => {
    try {
      await auth().signOut();
    } catch (err) {
      console.warn(errMessage);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
        email,
        setEmail,
        user,
        setUser,
        login,
        register,
        logout,
        fireStoreUser,
        setFireStoreUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthProvider, AuthContext};
