// Update with your config settings.
const settings = require('./settings')

module.exports = {

  development: {
    client: 'pg',
    connection:   { 
      user: settings.user , database: settings.database, password: settings.password , host: settings.hostname
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'test_db',
      user:     'development',
      password: 'development'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'test_db',
      user:     'development',
      password: 'development'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
