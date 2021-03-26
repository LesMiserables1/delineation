import { useRef, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { tailwind } from './lib/tailwind';
import { useHover } from "react-native-web-hooks";
import SignatureScreen from 'react-native-signature-canvas';
// import Canvas from 'react-native-canvas';
import { WebView } from 'react-native-webview';
import Paint from './Paint'
import Canvas from 'react-native-canvas';
import { TouchableOpacity } from "react-native-gesture-handler";
// import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';
// import  {PanGestureHandler} from 'react-native-gesture-handler'
// import { Draw, DrawRef } from "benjeau/react-native-draw";

export default function App() {
  	const isHovered = useHover(ref);
	const ref = useRef();
	var socket = new WebSocket('wss://ws-pjpb.herokuapp.com/');

	useEffect(() => {

        socket.onopen = () => socket.send(new Date().toGMTString());

        socket.onmessage = ({data}) => {
			console.log('Data Masuk', data)
			// console.log(ref.current)
			// console.log(ref.curent.value)
			// ref.current.value = data
            // console.log('Data masuk', data);

            // this.setState({echo: data});

            // setTimeout(() => {
            //     socket.send(new Date().toGMTString());
            // }, 3000);
        } 
	}, [])

	const handleSignature = signature => {
		console.log("signature");
		socket.send(signature);
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

	const jsCode = `
		document.querySelector('h1').style.backgroundColor = 'red';
		var canvas, ctx, flag = false,
        prevX = 0,
        currX = 0,
        prevY = 0,
        currY = 0,
        dot_flag = false;

		var x = "black",
			y = 2;
		
		function init() {
			canvas = document.getElementById('can');
			ctx = canvas.getContext("2d");
			w = canvas.width;
			h = canvas.height;
			console.log(canvas)
		
			canvas.addEventListener("mousemove", function (e) {
				findxy('move', e)
			}, false);
			canvas.addEventListener("mousedown", function (e) {
				findxy('down', e)
			}, false);
			canvas.addEventListener("mouseup", function (e) {
				findxy('up', e)
			}, false);
			canvas.addEventListener("mouseout", function (e) {
				findxy('out', e)
			}, false);
		}
		
		function color(obj) {
			switch (obj.id) {
				case "green":
					x = "green";
					break;
				case "blue":
					x = "blue";
					break;
				case "red":
					x = "red";
					break;
				case "yellow":
					x = "yellow";
					break;
				case "orange":
					x = "orange";
					break;
				case "black":
					x = "black";
					break;
				case "white":
					x = "white";
					break;
			}
			if (x == "white") y = 14;
			else y = 2;
		
		}
		
		function draw() {
			ctx.beginPath();
			ctx.moveTo(prevX, prevY);
			ctx.lineTo(currX, currY);
			ctx.strokeStyle = x;
			ctx.lineWidth = y;
			ctx.stroke();
			ctx.closePath();
		}
		
		function erase() {
			var m = confirm("Want to clear");
			if (m) {
				ctx.clearRect(0, 0, w, h);
				document.getElementById("canvasimg").style.display = "none";
			}
		}
		
		function save() {
			document.getElementById("canvasimg").style.border = "2px solid";
			var dataURL = canvas.toDataURL();
			document.getElementById("canvasimg").src = dataURL;
			document.getElementById("canvasimg").style.display = "inline";
		}
		
		function findxy(res, e) {
			if (res == 'down') {
				prevX = currX;
				prevY = currY;
				currX = e.clientX - canvas.offsetLeft;
				currY = e.clientY - canvas.offsetTop;
		
				flag = true;
				dot_flag = true;
				if (dot_flag) {
					ctx.beginPath();
					ctx.fillStyle = x;
					ctx.fillRect(currX, currY, 2, 2);
					ctx.closePath();
					dot_flag = false;
				}
			}
			if (res == 'up' || res == "out") {
				flag = false;
			}
			if (res == 'move') {
				if (flag) {
					prevX = currX;
					prevY = currY;
					currX = e.clientX - canvas.offsetLeft;
					currY = e.clientY - canvas.offsetTop;
					draw();
				}
			}
		}
		init()
	`;

	const handleCanvas = (canvas) => {
		const ctx = canvas.getContext('2d');
		ctx.fillStyle = 'purple';
		ctx.fillRect(0, 0, 100, 100);
	}

	const pressHandler = () => {
		console.log('Hi')
	}

	// const [number, setNumber] = useState(0)
	// const [timer, setTimer] = useState()

	// const addOne = () => {
	// 	// this.setState({number: this.state.number+1});
	// 	// this.timer = setTimeout(this.addOne, 200);
	// 	setNumber(prevState => prevState + 1)
		
	// }

	// const stopTimer = () => {
	// 	clearTimeout(this.timer);
	// }

	const renderContent = () => {
		return (
			<WebView
			ref={ref}
			originWhitelist={['*']}
			source={{ html: '<canvas id="can" width="400" height="400" style="position:absolute;top:10%;left:10%;border:2px solid;"></canvas><h1 style="margin-top: 100px">Halo</h1>' }}
			javaScriptEnabledAndroid={true}
			injectedJavaScript={jsCode}
			onMessage={event => {
				alert(event.nativeEvent.data);
			  }}
		/>
		);
	}

	return (
		// <View style={tailwind('bg-brown flex-1 items-center justify-center hover:bg-orange', { hover: isHovered })}>
		// 	{/* <Text onPress={pressHandler}>Haloo</Text> */}
		// 	<TouchableOpacity onPressIn={addOne} onPressOut={stopTimer}>
		// 		<Icon name="plus-circle" size={30} color={'white'} />
		// 	</TouchableOpacity>
		// 	{/* <SignatureScreen
		// 		ref={ref}
		// 		onEnd={handleEnd}
		// 		onOK={handleSignature}
		// 		onEmpty={handleEmpty}
		// 		onClear={handleClear}
		// 		autoClear={false}
		// 		descriptionText="Draw Here"
		// 	/> */}
		// 	{/* <Canvas ref={handleCanvas}/> */}
			
		// </View>

		// <View style={tailwind('bg-brown flex-1 items-center justify-center hover:bg-orange', { hover: isHovered })}>
		// 	{
		// 		renderContent()
		// 	}
		// </View>

		// <WebView
		// 	ref={ref}
		// 	originWhitelist={['*']}
		// 	source={{ html: '<canvas id="can" width="400" height="400" style="position:absolute;top:10%;left:10%;border:2px solid;"></canvas><h1 style="margin-top: 100px">Halo</h1>' }}
		// 	javaScriptEnabledAndroid={true}
		// 	injectedJavaScript={jsCode}
		// />
		// <WebView
		// 	html={Paint}
		// 	// style={this.props.style}
		// 	javaScriptEnabledAndroid={true}
		// />
		// <Canvas ref={handleCanvas} />
		// <View style={{ flex: 1, flexDirection: 'row' }}>
        //   <SketchCanvas
        //     style={{ flex: 1 }}
        //     strokeColor={'red'}
        //     strokeWidth={7}
        //   />
		// </View>

		<WebView
			ref={ref}
			originWhitelist={['*']}
			html={Paint}
			javaScriptEnabledAndroid={true}
		/>
	);
}