import { useRef, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { tailwind } from './lib/tailwind';
import { useHover } from "react-native-web-hooks";
import SignatureScreen from 'react-native-signature-canvas';
// const socket = require('engine.io-client')('ws://localhost');
// import socket from '@types/engine.io-client'
import socketio from 'socket.io-client';
// import WebSocket from '@types/ws';

export default function App() {
  	const isHovered = useHover(ref);
	const ref = useRef();

	useEffect(() => {
		console.log('Dodo baik banget')
		const ws = socketio('localhost:8080');
		// ws.on('open', () => {
		// 	console.log('Andre jaat')
		// 	ws.send('something');
		// 	// ws.on('message', (data) => { console.log('UWUUU') });
		// 	// ws.on('close', () => {});
		// });
		ws.on('open', 'HAHAHAH', (error) => {
			console.log('Andre jaat')
            if(error) console.log(error)
		});
		ws.emit('join', { title: 'Heloo' }, (error) => {
			console.log('Andre jaat')
            if(error) console.log(error)
		});
		
		ws.emit('sendMessage', 'HAHAH', () => {
			console.log('Andre jaat2x')
		})
		// const ws = new WebSocket('ws://localhost:8080');
		// 	ws.on('open', function open() {
		// 	ws.send('something');
		// });

		// ws.on('message', function incoming(data) {
		// 	console.log(`received: ${data}`);
		// });
	}, [])

	const handleSignature = signature => {
		console.log(signature);
		// onOK(signature);
		// console.log(img)
	};

	const handleEmpty = () => {
		console.log('Empty');
	}

	const handleClear = () => {
		console.log('clear success!');
	}

	const handleEnd = () => {
		ref.current.readSignature();
	}

  return (
    <View style={tailwind('bg-brown flex-1 items-center justify-center hover:bg-orange', { hover: isHovered })}>
		{/* <Text ref={ref} style={tailwind('text-white')}>Open up App.js to start working on your app!</Text>
		<StatusBar style="auto" /> */}
		{/* <Canvas ref={this.handleCanvas} /> */}
		{/* <canvas></canvas> */}
		<SignatureScreen
			ref={ref}
			// onEnd={handleEnd}
			onEnd={handleSignature}
			// onOK={handleSignature}
			onEmpty={handleEmpty}
			onClear={handleClear}
			autoClear={false}
			descriptionText="Draw Here"
		/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// import React, { Component, useState } from 'react';
// import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// // import geofire from 'geofire-common'
// import FusedLocation from 'react-native-fused-location';

// export default function App () {
//   const [location, setLocation] = useState(null)

// 	const findCoordinates = () => {
// 		navigator.geolocation.getCurrentPosition(
// 			position => {
// 				const location = JSON.stringify(position);

//         setLocation(location)

// 			},
// 			error => Alert.alert(error.message),
// 			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
// 		);
//   };
// 		return (
// 			<View style={styles.container}>
// 				<TouchableOpacity onPress={findCoordinates}>
// 					<Text style={styles.welcome}>Find My Coords?</Text>
// 					<Text>Location: {location}</Text>
// 				</TouchableOpacity>
// 			</View>
// 		);
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF'
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10
//   }
// })