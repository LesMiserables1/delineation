import React, { Component } from 'react';
import {
    Image,
    Text,
    StyleSheet,
    View,
    Dimensions
} from 'react-native';

var { height } = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default class VerticalStackLayout extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.box, styles.header]}>
                    <Text style={styles.headerText}>
                        It's My First Mobile Apps
            </Text>
                </View>
                <View style={[styles.box, styles.body]}>
                    <Image style={styles.logo} source={require('..src/assets/Group1.png')} />
                    <Text style={styles.bodyText}>
                        Sekolah Tinggi Teknologi Wastukancana Purwakarta
            </Text>
                </View>
                <View style={[styles.box, styles.footer]}>
                    <Text style={styles.footerText}>
                        Nim : 171351225 | Nama : Yoga Pranamulya | Kelas : Malam C
            </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    box: {
        flex: 1,
    },
    header: {
        flex: 3,
        backgroundColor: 'steelblue'
    },
    body: {
        flex: 10,
        padding: 10,
        backgroundColor: 'skyblue'
    },
    footer: {
        flex: 1,
        backgroundColor: 'steelblue'
    },
    headerText: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        lineHeight: 180
    },
    bodyText: {
        textAlign: 'center',
        position: 'relative',
        top: 60,
        fontSize: 25,
        fontWeight: 'bold',
    },
    footerText: {
        color: 'powderblue',
        textAlign: 'center',
        fontSize: 15
    },
    logo: {
        marginLeft: 'auto',
        marginRight: 'auto',
        top: 55,
        height: 250,
        width: 250,
    }
});