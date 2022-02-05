import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from '@env'
import { setDestination } from '../slices/navSlice';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const NavigateCard = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  return (
    <View style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, Vinu</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
            <GooglePlacesAutocomplete
                placeholder='Where to?'
                styles={toInpuBoxStyles}
                fetchDetails={true}
                enablePoweredByContainer={false}
                onPress={(data, deatils = null)=>{
                    dispatch(setDestination({
                        location:"North America",
                        description: "North America",
                    }))
                    navigation.navigate('RideOptionsCard')
                }}
                query={{
                    key: GOOGLE_MAPS_API_KEY,
                    language: 'en'
                }}
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
            />
        </View>
      </View>
    </View>
  );
};

export default NavigateCard;

const toInpuBoxStyles = StyleSheet.create({
    container : {
        backgroundColor :"white",
        paddingTop:20,
        flex: 0,
    },
    textInput : {
        backgroundColor : '#DDDDDF',
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer : {
        paddingHorizontal :20,
        paddingBottom: 0
    }
});
