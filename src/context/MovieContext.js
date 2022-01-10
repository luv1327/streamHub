import React, {useState, createContext, useContext, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from './AuthContext';

const MovieContext = createContext();

const MovieProvider = ({children}) => {
  const {fireStoreUser} = useContext(AuthContext);
  const [downloadedVideos, setDownloadedVideos] = useState([]);
  const [watchlistedVideos, setWatchlistedVideos] = useState([]);
  const [errMessage, setErrMessage] = useState('');

  useEffect(() => {
    const subscriber = firestore()
      .collection('Users')
      .doc(fireStoreUser?.email)
      .onSnapshot(documentSnapshot => {
        setWatchlistedVideos(documentSnapshot?.data()?.watchlistedVideos);
        setDownloadedVideos(documentSnapshot?.data()?.downloadedVideos);
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, [fireStoreUser?.email]);

  const isDownloaded = id => {
    const response = downloadedVideos.map(movie => movie.movie.id).includes(id)
      ? true
      : false;
    return response;
  };

  const isWatchlisted = id => {
    const response = watchlistedVideos.map(movie => movie.movie.id).includes(id)
      ? true
      : false;
    return response;
  };

  const handleWatchlist = movie => {
    firestore()
      .collection('Users')
      .doc(fireStoreUser.email)
      .update({
        watchlistedVideos: firestore.FieldValue.arrayUnion({
          movie,
        }),
      })
      .then(() => console.log('Movie Added To Watchlist'))
      .catch(err => console.warn(err));
  };

  const handleDownload = movie => {
    firestore()
      .collection('Users')
      .doc(fireStoreUser.email)
      .update({
        downloadedVideos: firestore.FieldValue.arrayUnion({
          movie,
        }),
      })
      .then(() => console.log('Movie Added To Downloads'))
      .catch(err => console.warn(err));
  };

  return (
    <MovieContext.Provider
      value={{
        handleDownload,
        handleWatchlist,
        watchlistedVideos,
        setWatchlistedVideos,
        downloadedVideos,
        setDownloadedVideos,
        isDownloaded,
        isWatchlisted,
        errMessage,
        setErrMessage,
      }}>
      {children}
    </MovieContext.Provider>
  );
};

export {MovieContext, MovieProvider};
