// Update with your config settings.

module.exports = {
    development: {
        client: 'postgresql',
        connection : 
        {
            host     : 'localhost',
            user     : 'postgres',
            password : 'xUbuntu1337!',
            database : 'todo'
        },
        pool : 
        {
            min : 1, 
            max : 3
        },
        migrations: {
            tableName: 'migrations'
        },
        seeds: {
            directory: 'seeds'
        }
    },
    production : {
        client : 'postgresql',
        connection : {
            host     : 'localhost',
            user     : 'postgres',
            password : 'xUbuntu1337!',
            database : 'todo'
        },
        pool : {
            min : 2,
            max : 10
        },
        migrations: {
          tableName: 'migrations'
        },
        seeds: {
            directory: 'seeds'
        }
    }
};
