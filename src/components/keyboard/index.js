import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

import KeyCap from './keyCap';
import { defaultKeyConfigs, } from './utils';

type Props = {
	color?: String,
	keyConfig?: Array<Array>,
	onKeyPress?: Function,
};

function Keyboard(props: Props) {
	const { keyConfig, color, onKeyPress, } = props,
		containerStyle = { backgroundColor: color, };

	return <View style={[styles.container, containerStyle]}>
		{keyConfig.map((row, i) => {
			return <View key={i} style={styles.rowContainer}>
				{row.map((keyProps, y) => <KeyCap
					key={y}
					onPress={onKeyPress}
					{...keyProps}/>)}
			</View>;
		})}
	</View>;
}

Keyboard.defaultProps = {
	keyConfig: defaultKeyConfigs,
	color: 'transparent',
};

export default Keyboard;

const styles = StyleSheet.create({
	container: {
		borderRadius: 5,
		paddingVertical: 10,
		paddingHorizontal: 3,
	},
	rowContainer: {
		flexDirection: 'row',
	},
});
