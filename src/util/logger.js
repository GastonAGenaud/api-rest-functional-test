const log4j = require('log4js');

log4j.configure({
    appenders: {
        'fc-bdd': {
            type: 'stdout', //stdout -> para console log || file -> para Appender log
            maxLogSize: 10485760,
            backups: 3,
            compress: true,
            layout: {
                type: 'pattern',
                pattern: '%d %p [ %c ] [%h] %m'
            }
        }
    },
    categories: {default: {appenders: ['fc-bdd'], level: 'ALL'}}
});

const log = log4j.getLogger('fc-bdd');

exports.log = log;