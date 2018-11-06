import React, { Component } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './Styles/LoginScreenStyles';

export default class LoginScreen extends Component {

	static navigationOptions = {
		drawerLockMode: 'locked-closed',
		drawerLabel: () => null
	};

	render() {
		const {navigate} = this.props.navigation;

		return (
			<View style={styles.container}>

            <View style={styles.containerLogo}>
				   <Image style={styles.imageLogo} source={require('../Images/unichristus.png')}/>
				</View>

				<KeyboardAvoidingView behavior="padding" style={styles.containerLogin}>
               <View style={styles.containerInput}>
						<Icon name="user" size={20} color="#fff" style={styles.inlineIcon} />
						<TextInput placeholder="Digite sua matrícula" style={styles.textInput}
						/>
					</View>

					<View style={styles.containerInput}>
						<Icon name="lock" size={20} color="#fff" style={styles.inlineIcon} />
						<TextInput secureTextEntry placeholder="Digite sua senha" style={styles.textInput}
						/>
					</View>

					<TouchableOpacity style={styles.buttonContainer} onPress={() => navigate('Home')}>
                  <Text style={styles.buttonText}>ENTRAR</Text>
					</TouchableOpacity>
				</KeyboardAvoidingView>
			</View>
		);
	}
}
