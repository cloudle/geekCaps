import React, { Component } from 'react';
import { StyleSheet, View, } from 'react-native';
import { connect } from 'react-redux';

import EmulatedKeyboard from '../../components/keyboard';
import * as appActions from '../../store/action/app';

type Props = {
	counter?: string,
	dispatch?: Function,
};

@connect(({ app }) => {
	return {
		counter: app.counter,
	};
})

class HomeScene extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<EmulatedKeyboard color="#4c4c4c"/>
		</View>;
	}
}

export default HomeScene;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#292929',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
