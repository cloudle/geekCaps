import { writeFile, } from 'fs';
import util from 'util';
import generateOtherRules from './rules';
import { generateConfigs, } from '../utils';
import { generateGroup, essentialModifiers } from './utils';
import { GeekCapsConfig, } from '../../typeDefinition';

const gitUrl = 'https://raw.githubusercontent.com/cloudle/geekCaps/master/exports/karabiner.json';

module.exports = function (configs: GeekCapsConfig = {}) {
	const globalConfigs = generateConfigs(configs, 'darwin'),
		{ capsKey, } = globalConfigs,
		capsFrom = { key_code: capsKey, modifiers: { optional: ['any'], }, },
		capsTo = [{ key_code: 'right_shift', modifiers: essentialModifiers, }],
		capsManipulators = [{
			from: capsFrom,
			to: capsTo,
			to_if_alone: [{ key_code: 'caps_lock' }],
			type: 'basic',
		}],
		capsRule = generateGroup(globalConfigs, 'CapsLock to GeekCaps', capsManipulators),
		rules = [capsRule, ...generateOtherRules(globalConfigs)];

	const karabinerConfigs = {
		title: 'GeekCaps Enhancement',
		author: 'Cloud Le (lehaoson@gmail.com)',
		homepage: 'https://github.com/cloudle/geekCaps',
		hostpage: 'https://pqrs.org/osx/karabiner/complex_modifications/',
		manual: 'https://github.com/cloudle/geekCaps/blob/master/exports/',
		import_url: `karabiner://karabiner/assets/complex_modifications/import?url=${gitUrl}`,
		rules,
	};

	writeFile('/Users/le/.config/karabiner/assets/complex_modifications/capslock.json',
		JSON.stringify(karabinerConfigs, null, '\t'),
		() => {
			console.log('Write success!');
		});
};
