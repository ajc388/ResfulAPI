// Update with your config settings.

module.exports = {

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
        min : 2, 
        max : 10
    },
    migrations: {
        tableName: 'migrations'
    }
};
