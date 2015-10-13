module.exports = 
{
    // dev : {
    //     client : 'postgresql',
    //  connection : {
    //          host     : 'localhost',
    //      user     : 'postgres',
    //      password : 'xUbuntu1337!',
    //      database : 'todo'
    //  },
    //     pool : {
    //      min : 1,
    //      max : 1
    //     },
    //     migrations: {
    //       tableName: 'migrations'
    //     }
    // },
    // //Update with production details
    // prod : {
    //     client : 'postgresql',
    //     connection : {
    //         host     : 'localhost',
    //         user     : 'postgres',
    //         password : 'xUbuntu1337!',
    //         database : 'todo'
    //     },
    //     pool : {
    //         min : 2,
    //         max : 10
    //     },
    //     migrations: {
    //       tableName: 'migrations'
    //     }
    // }

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
    }
};