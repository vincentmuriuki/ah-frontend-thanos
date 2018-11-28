module.exports = {
	parser: 'babel-eslint',
	extends: [
		'plugin:flowtype/recommended',
		'plugin:jest/recommended',
		'plugin:react/recommended',
		'airbnb',
		'prettier',
		'prettier/flowtype',
		'prettier/react',
	],
	plugins: [
		'react',
		'flowtype',
		'prettier',
		'import',
	],
	env: {
		es6: true,
		browser: true,
		node: true
	},
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		jsx: true,
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
		},
	},
	rules: {
		"react/jsx-indent": ["error", 2],
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
		"jsx-a11y/label-has-for": [ 2, {
            "components": [ "Label" ],
            "required": {
                "some": [ "nesting", "id" ]
            },
            "allowChildren": false
        }],
		"curly": [2, "multi-line"],
		"import/no-extraneous-dependencies": ["error", { "devDependencies": true }]
	}
}
