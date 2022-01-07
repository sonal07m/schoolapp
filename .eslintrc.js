module.exports = {
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'env': {
        'jest': true,
    },
    'rules': {
        'no-use-before-define': 'off',
        "no-shadow": "off",
        'react/jsx-filename-extension': 'off',
        'global-require': 'off',
        'no-useless-escape': 'off',
        'react/prop-types': 'off',
        'comma-dangle': 'off',
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    },
    'globals': {
        "fetch": false
    }
}
