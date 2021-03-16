module.exports = {
    "development": {
        "username": "test",
        "password": "test",
        "database": "challenge",
        "host": "127.0.0.1",
        "port": 3306,
        "dialect": "mysql",
        "define": {
            timestamps: true,
            underscored: true,
            underscoredAll: true
        }
    },
    "test": {
        "username": "test",
        "password": "test",
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": "test",
        "password": "test",
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
}
