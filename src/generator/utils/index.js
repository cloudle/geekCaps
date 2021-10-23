import { merge, } from 'lodash';

export const generateConfigs = (configs, platform) => {
	return merge({
		capsKey: platformSelect({ win32: '', darwin: 'left_control' }, platform),
	}, configs);
};

export function platformSelect(options, platform) {
	return options[platform] || options.default;
}
