import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const HomeScreen = ({navigation}) => {
  return (
    <>
			<View>
				<View style = {styles.contenedor}>
					<Text style = {styles.titulo}>MIS SITIOS ARQUEOLOGICOS</Text>
					<TouchableHighlight
						style = {styles.botones}
						onPress = {()=> navigation.navigate('WebScreen', {
							sitio:"https://www.google.com/maps/place/Sitio+Arqueol%C3%B3gico+de+Casa+Blanca/@13.9879619,-89.6712439,15z/data=!4m2!3m1!1s0x0:0x221b7a610c4529d0?sa=X&ved=2ahUKEwim2evgq77oAhXSct8KHQM2C7UQ_BIwFXoECBoQCA"
						})}
					>
						<Text style = {styles.textoboton}>CASA BLANCA</Text>
					</TouchableHighlight>

					<TouchableHighlight
						style = {styles.botones}
						onPress = {()=> navigation.navigate('WebScreen', {
							sitio:"https://www.google.com/maps/place/Joya+de+Ceren/@13.8212866,-89.3642815,16z/data=!3m1!4b1!4m5!3m4!1s0x8f63212ab199a6dd:0x51207fe999d8c593!8m2!3d13.8222445!4d-89.3594449"
						})}
					>
						<Text style = {styles.textoboton}>JOYA DE CEREN</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style = {styles.botones}
						onPress = {()=> navigation.navigate('WebScreen', {
							sitio:"https://www.google.com/maps/place/Sitio+Arqueol%C3%B3gico+San+Andr%C3%A9s/@13.7962141,-89.3907935,15.81z/data=!4m5!3m4!1s0x8f63274327e121c5:0x3358c8e490976ea6!8m2!3d13.7971967!4d-89.3904928r"
						})}
					>
						<Text style = {styles.textoboton}>SAN ANDRES</Text>
					</TouchableHighlight>
				</View>
			</View>
    </>
  )
}

const styles = StyleSheet.create({
	contenedor: {		
		height: 250,
		margin: 10,
		alignItems:'center',
		padding: 10,
		marginTop: '50%'
	},
	titulo: {
		fontSize: 19,
		fontWeight: 'bold'
	},
	botones: {
		margin:15,
		borderWidth: 1,
		width: 200,
		alignItems: 'center',
		height: 30,
		borderRadius: 4,
		borderColor: '#abc',
		backgroundColor: '#abc'
	},
	textoboton: {
		marginTop: 5
	}
})
