import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import axios from 'axios';
import {imageBaseUrl} from '../components/requests';
import {colors} from '../assets/colors/Colors';

const ImageSlider = ({navigation, fetchUrl}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(fetchUrl);
        setData(response.data?.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const movieImages = data.map(
    movie => `${imageBaseUrl}${movie.backdrop_path}`,
  );

  return (
    <View>
      <TouchableOpacity>
        <SliderBox
          images={movieImages.slice(0, 11)}
          // currentImageEmitter={index =>
          //   console.warn(`current pos is: ${index}`)
          // }
          sliderBoxHeight={200}
          dotColor={colors.mainText}
          inactiveDotColor={colors.inActiveColor}
          onCurrentImagePressed={index =>
            navigation.navigate('Details', {movie: data[index]})
          }
          circleLoop
          resizeMethod={'resize'}
          resizeMode={'cover'}
          ImageComponentStyle={{width: '100%', marginTop: 10}}
          imageLoadingColor={colors.mainText}
          dotStyle={{
            width: 8,
            height: 8,
            marginHorizontal: 0,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ImageSlider;
