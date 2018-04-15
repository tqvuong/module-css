module.exports = {
	extends: 'nau',
	rules: {
		'global-require': 'off',
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'never',
			},
		],
		'consistent-return': 'off',
		'new-cap': 'off',
		'no-param-reassign': 'off',
		'no-shadow': 'off',
	},
	globals: {
		window: true,
		$: true,
		FB: true,
		document: true,
	},
};
