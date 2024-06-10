module.exports = {
    apps: [
        {
            name: 'api',
            script: 'server.js',
            watch: true,
            ignore_watch: ['node_modules', 'resources/uploads'],
            env: {
                NODE_ENV: 'development',
                PORT: 3001
            },
            env_production: {
                NODE_ENV: 'production',
                PORT: 3001
            }
        }
    ]
};
