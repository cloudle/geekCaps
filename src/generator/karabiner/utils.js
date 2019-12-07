import { isObject, } from 'lodash';
import type { GeekCapsConfig } from '../../typeDefinition';

export function generateGroup(globalConfigs: GeekCapsConfig, description, manipulators) {
	return {
		description,
		manipulators,
	};
}

export function generateManipulator(fromInput, toInput, type = 'basic') {
	const fromConfig = extractKeyConfig(fromInput),
		targetConfig = extractKeyConfig(toInput),
		from = {
			key_code: fromConfig.key,
			modifiers: {
				mandatory: [
					...fromConfig.modifiers,
					...essentialModifiers,
					'right_shift',
				],
			},
		},
		to = { key_code: targetConfig.key };

	if (targetConfig.modifiers.length > 0) {
		to.modifiers = targetConfig.modifiers;
	}

	return { from, to, type };
}

export function generateManipulators(fromKey, toKey, variations = [[]], type = 'basic') {
	return variations.map(([fromModifiers, toModifiers]) => {
		const from = {
				key_code: fromKey,
				modifiers: {
					mandatory: [
						...essentialModifiers,
						'right_shift',
					],
				}
			},
			to = { key_code: toKey };

		if (fromModifiers && fromModifiers.length > 0) {
			from.modifiers.mandatory = fromModifiers.map(i => i.key).concat(from.modifiers.mandatory);
		}

		if (toModifiers && toModifiers.length > 0) {
			to.modifiers = toModifiers.map(i => i.key);
		}

		return { from, to, type, };
	});
}

function extractKeyConfig(option) {
	if (isObject(option)) {
		if (!option.key) throw new Error({ message: 'key is required!', payload: option });
		if (!option.modifiers) option.modifiers = [];

		return option;
	}

	return { key: option, modifiers: [] };
}

export const essentialModifiers = [
	'right_command',
	'right_control',
	'right_option',
];

export const Modifiers = {
	shift: {
		key: 'left_shift',
	},
	command: {
		key: 'left_command',
	},
	option: {
		key: 'left_option',
	},
	ctrl: {
		key: 'left_control',
	},
	fn: {
		key: 'fn',
	},
};
