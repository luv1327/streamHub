import React, {useState, createContext, useContext, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from './AuthContext';
import {Share} from 'react-native';
import Snackbar from 'react-native-snackbar';

const MovieContext = createContext();

const MovieProvider = ({children}) => {
  const {fireStoreUser} = useContext(AuthContext);
  const [downloadedVideos, setDownloadedVideos] = useState([]);
  const [watchlistedVideos, setWatchlistedVideos] = useState([]);
  const [errMessage, setErrMessage] = useState('');
  const [loading, setLoading] = useState(true);

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

  const onShare = async movieName => {
    try {
      const result = await Share.share({
        message: `Check out this movie ${movieName} I found FREE on StreamHub.Download the app to find more movies.`,
        url: `https://streamhub.streamhub.com`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared with activity type of result.activityType');
        } else {
          console.log('Shared');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Dismissed');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const isDownloaded = id => {
    const response = downloadedVideos?.map(movie => movie.movie.id).includes(id)
      ? true
      : false;
    return response;
  };

  const isWatchlisted = id => {
    const response = watchlistedVideos
      ?.map(movie => movie.movie.id)
      .includes(id)
      ? true
      : false;
    return response;
  };

  const handleWatchlist = movie => {
    firestore()
      .collection('Users')
      .doc(fireStoreUser?.email)
      .update({
        watchlistedVideos: firestore.FieldValue.arrayUnion({
          movie,
        }),
      })
      .then(() => console.log('Movie Added To Watchlist'))
      .catch(err => console.warn(err));
    Snackbar.show({
      text: 'Item Added To Watchlist',
      duration: Snackbar.LENGTH_SHORT,
    });
  };

  const handleDownload = movie => {
    firestore()
      .collection('Users')
      .doc(fireStoreUser?.email)
      .update({
        downloadedVideos: firestore.FieldValue.arrayUnion({
          movie,
        }),
      })
      .then(() => console.log('Movie Added To Downloads'))
      .catch(err => console.warn(err));
    Snackbar.show({
      text: 'Item Added To Downloads',
      duration: Snackbar.LENGTH_SHORT,
      fontFamily: 'Poppins-Regular',
    });
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
        onShare,
        loading,
        setLoading,
      }}>
      {children}
    </MovieContext.Provider>
  );
};

export {MovieContext, MovieProvider};
