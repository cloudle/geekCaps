import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, } from 'react-native';

type Props = {
	caption?: String,
	color?: String,
	size?: Number,
	hidden?: Boolean,
	onPress?: Function,
};

function KeyCap(props: Props) {
	const { caption, color, size, hidden, onPress, } = props,
		containerStyle = hidden
			? { backgroundColor: 'transparent', }
			: { width: size * keyCapSize, backgroundColor: color, };

	return <TouchableOpacity
		activeOpacity={0.8}
		style={[styles.container, containerStyle]}
		onPress={onPress}>
		{!hidden && <Text style={styles.captionText}>{caption}</Text>}
	</TouchableOpacity>;
}

KeyCap.defaultProps = {
	caption: '?',
	color: '#2e2e2e',
	size: 1,
	hidden: false,
};

export default KeyCap;

const keyCapSize = 60;

const styles = StyleSheet.create({
	container: {
		width: keyCapSize,
		height: keyCapSize,
		borderRadius: 5,
		justifyContent: 'center',
		margin: 6,
	},
	captionText: {
		textAlign: 'center',
		color: '#ffffff',
	},
});
