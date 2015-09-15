var config = {
  local: {
    mode: 'local',
    port: 3000,
    language: 'en',
    github_token: 'ADD_YOUR_TOKEN_HERE',
    memcached_host: "127.0.0.1:11211",
    deployType:'development',
  },
  staging: {
    mode: 'staging',
    port: 3000,
    language: 'en',
    github_token: 'ADD_YOUR_TOKEN_HERE',
    memcached_host: "127.0.0.1:11211",
    deployType:'staging',
  },
  production: {
    mode: 'production',
    port: 3000,
    language: 'en',
    github_token: 'ADD_YOUR_TOKEN_HERE',
    memcached_host: "127.0.0.1:11211",
    deployType:'production',
  }
}

module.exports = function(mode) {
    console.log("CONFIG MODE:", process.env.NODE_ENV);
    return config[mode || process.env.NODE_ENV || 'local'] || config.local;
}();
