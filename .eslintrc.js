module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'parser': 'babel-eslint',
    'extends': [
        'eslint:recommended'
    ],
    'parserOptions': {
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
    ],
    'rules': {
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        'no-undef': 'off'
    }
};
