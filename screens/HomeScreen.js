import React, { useEffect } from 'react';
import { StyleSheet, Image, View, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavFavourites from '../components/NavFavourites';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { setDestination, setOrigin } from '../slices/navSlice';
import { useDispatch } from 'react-redux';

const HomeScreen = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			setOrigin({
				location: {
					lat: 37.78825,
					lng: -122.4324,
				},
				description: 'Hola',
			})
		);

		dispatch(setDestination(null));
	}, []);

	return (
		<SafeAreaView style={tw`bg-white h-full`}>
			<View style={tw`p-5`}>
				<Image
					style={{
						width: 100,
						height: 100,
						resizeMode: 'contain',
					}}
					source={{
						uri: 'https://links.papareact.com/gzs',
					}}
				/>

				<GooglePlacesAutocomplete
					placeholder="Where From?"
					styles={{
						container: {
							flex: 0,
						},
						textInput: {
							fontSize: 18,
						},
					}}
					onPress={(data, details = null) => {
						/* dispatch(
							setOrigin({
								location: details.geometry.location,
								description: data.description,
							})
						);
						dispatch(setDestination(null)); */
						console.log(data);
						console.log(details);
					}}
					fetchDetails={true}
					returnKeyType={'search'}
					enablePoweredByContainer={false}
					query={{
						key: 'AIzaSyAMbyl991C5lyM_x35smqnXwDkYt4ssSb4',
						language: 'en',
					}}
					nearbyPlacesAPI="GooglePlacesSearch"
					debounce={400}
				/>

				<NavOptions />
				<NavFavourites />
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
