import { Modifiers as i, generateGroup, generateManipulators, } from './utils';
import { GeekCapsConfig, } from '../../typeDefinition';

export default function getRules(globalConfigs: GeekCapsConfig) {
	const geekNavigation = generateGroup(globalConfigs, 'Geek Navigation', [
		...generateManipulators('h', 'left_arrow', [
			[[], [], 'Left arrow'],
			[[i.command], [i.shift], 'Left + Shift'],
			[[i.shift], [i.option], 'Left + Option'],
			[[i.command, i.shift], [i.option, i.shift], 'Left + Shift + Option'],
		]),
		...generateManipulators('j', 'down_arrow', [
			[[], [], 'Down arrow'],
			[[i.command], [i.shift], 'Down + Shift'],
			[[i.shift], [i.option], 'Down + Option'],
			[[i.command, i.shift], [i.option, i.shift], 'Down + Shift + Option'],
		]),
		...generateManipulators('l', 'right_arrow', [
			[[], [], 'Right arrow'],
			[[i.command], [i.shift], 'Right + Shift'],
			[[i.shift], [i.option], 'Right + Option'],
			[[i.command, i.shift], [i.option, i.shift], 'Right + Shift + Option'],
		]),
		...generateManipulators('k', 'up_arrow', [
			[[], [], 'Up arrow'],
			[[i.command], [i.shift], 'Up + Shift'],
			[[i.shift], [i.option], 'Up + Option'],
			[[i.command, i.shift], [i.option, i.shift], 'Up + Shift + Option'],
		]),
		...generateManipulators('y', 'page_up', [
			[[], [], 'Page jump (up)'],
			[[i.command], [i.shift], 'Select to page start'],
		]),
		...generateManipulators('p', 'page_down', [
			[[], [], 'Page jump (down)'],
			[[i.command], [i.shift]],
		]),
		...generateManipulators('u', 'left_arrow', [
			[[], [i.command], 'Line start jump'],
			[[i.command], [i.shift, i.command]],
		]),
		...generateManipulators('o', 'right_arrow', [
			[[], [i.command], 'Line end jump'],
			[[i.command], [i.shift, i.command]],
		]),
		...generateManipulators('u', 'tab', [
			[[i.shift], [i.ctrl, i.shift], 'Tab switch'],
		]),
		...generateManipulators('o', 'tab', [
			[[i.shift], [i.ctrl], 'Tab switch (reverse)'],
		]),
	]);

	const geekShifter = generateGroup(globalConfigs, 'Geek Shifter', [
		...generateManipulators('1', '1', [
			[[], [i.shift], 'Exclamation'],
		]),
		...generateManipulators('2', '2', [
			[[], [i.shift], 'At'],
		]),
		...generateManipulators('3', '3', [
			[[], [i.shift], 'Sharp'],
		]),
		...generateManipulators('4', '4', [
			[[], [i.shift], 'Dollar'],
		]),
		...generateManipulators('5', '5', [
			[[], [i.shift], 'Percent'],
		]),
		...generateManipulators('6', '6', [
			[[], [i.shift], 'Caret'],
		]),
		...generateManipulators('7', '7', [
			[[], [i.shift], 'Ampersand'],
		]),
		...generateManipulators('8', '8', [
			[[], [i.shift], 'Star'],
		]),
		...generateManipulators('9', '9', [
			[[], [i.shift], 'Left Round Bracket'],
		]),
		...generateManipulators('0', '0', [
			[[], [i.shift], 'Right Round Bracket'],
		]),
		...generateManipulators('hyphen', 'hyphen', [
			[[], [i.shift], 'Hyphen'],
		]),
		...generateManipulators('equal_sign', 'equal_sign', [
			[[], [i.shift], 'Plus'],
		]),
	]);

	const geekDeletion = generateGroup(globalConfigs, 'Geek Deletion', [
		...generateManipulators('n', 'delete_or_backspace', [
			[[], [i.option], 'Delete word'],
			[[i.command], [i.command], 'Delete line'],
		]),
		...generateManipulators('m', 'delete_or_backspace', [
			[[], [], 'Delete character'],
		]),
		...generateManipulators('m', 'delete_forward', [
			[[i.command], [], 'Delete character'],
		]),
	]);

	const geekWindowControl = generateGroup(globalConfigs, 'Geek Window Control', [
		...generateManipulators('tab', 'tab', [
			[[], [i.command], 'Switch Window'],
			[[i.command], [i.command, i.shift], 'Switch Window Reverse'],
		]),
		...generateManipulators('q', 'q', [
			[[], [i.command], 'Close Window'],
		]),
		...generateManipulators('q', 'escape', [
			[[i.command], [i.command, i.shift, i.option], 'Force Kill Application'],
		]),
		...generateManipulators('w', 'w', [
			[[], [i.command], 'Close Tab'],
		]),
		...generateManipulators('a', 'f11', [
			[[], []],
		]),
		...generateManipulators('a', 'f4', [
			[[i.command], [i.fn]],
		]),
		...generateManipulators('i', 'up_arrow', [
			[[], [i.ctrl]],
		]),
		...generateManipulators('o', 'right_arrow', [
			[[i.option], [i.ctrl]],
		]),
		...generateManipulators('u', 'left_arrow', [
			[[i.option], [i.ctrl]],
		]),
	]);

	const geekBash = generateGroup(globalConfigs, 'Geek Bash', [
		...generateManipulators('z', 'z', [
			[[], [i.ctrl], 'SIGTSTP'],
		]),
		...generateManipulators('x', 'x', [
			[[], [i.ctrl], 'IDE Run'],
		]),
		...generateManipulators('c', 'c', [
			[[], [i.ctrl], 'SIGINT'],
		]),
		...generateManipulators('v', 'v', [
			[[], [i.ctrl], 'Vim Prefix'],
		]),
		...generateManipulators('b', 'b', [
			[[], [i.ctrl], 'Tmux Prefix'],
		]),
		...generateManipulators('d', 'd', [
			[[], [i.ctrl], 'EOF'],
		]),
	]);

	const geekDeveloper = generateGroup(globalConfigs, 'Geek Developer', [
		...generateManipulators('spacebar', 'spacebar', [
			[[], [i.ctrl], 'Code completion toggle'],
		]),
		...generateManipulators('open_bracket', '9', [
			[[], [i.shift], 'Left Round Bracket'],
		]),
		...generateManipulators('close_bracket', '0', [
			[[], [i.shift], 'Right Round Bracket'],
		]),
		...generateManipulators('quote', 'equal_sign', [
			[[], [], 'EqualSign'],
			[[i.command], [i.shift], 'Plus'],
		]),
		...generateManipulators('semicolon', 'hyphen', [
			[[], [], 'Minus'],
			[[i.command], [i.shift], 'Hyphen'],
		]),
	]);

	const vimEditor = generateGroup(globalConfigs, 'Vim Editor', [
		...generateManipulators('s', 's', [
			[[], [i.ctrl], 'Ctrl + S, for i.e Lunarvim'],
		]),
	]);

	const geekMisc = generateGroup(globalConfigs, 'Geek Misc', [
		...generateManipulators('escape', 'grave_accent_and_tilde', [
			[[], [], 'Esc to `'],
			[[i.command], [i.shift], 'Esc to ~'],
		]),
		...generateManipulators('delete_or_backspace', 'delete_forward', [
			[[], [], 'Delete character backward'],
		]),
	]);

	return [
		geekNavigation,
		geekShifter,
		geekDeletion,
		geekWindowControl,
		geekBash,
		geekDeveloper,
		vimEditor,
		geekMisc,
	];
}
