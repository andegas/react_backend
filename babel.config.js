module.exports = api => {
    api.cache(false);
    return {
        presets: [
            ['@babel/preset-env',
                {
                    'targets': {
                        'node':'10'
                    }
                }],
            '@babel/preset-react'
        ],
        'plugins': [
            '@babel/plugin-proposal-class-properties',
        ]
    };
};