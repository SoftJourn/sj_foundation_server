# SJ Foundation api server 
Server RESTful api application to work with foundation projects and donations. Built by [Restify](http://restify.com/)
## Start project
### Required dependencies
Mysql, Nodejs latest, yarn
### Create database, run migrations and seeds
Change database credentials to your own. Database config file path **./db/database.json**. 
Then create db and run migrations and seeds
```sh
$ yarn createDb
$ yarn migrateDb
$ yarn seedDb
```
All migrations history will be saved into **./sequelize-meta.json** file. Do not modify it manually!
To undo migration or seed use special **sequelize-cli** commands. See documentation about [migrations](http://docs.sequelizejs.com/manual/tutorial/migrations.html) and [sequelize-cli](https://github.com/sequelize/cli)
### Run project for development
Install dependencies
```sh
$ yarn
```
Run project
```sh
$ ENV=development yarn start
```
### Routes
| Resource | Route |
| ------ | ------ |
| Project | */projects/:id* |
| Comment | */projects/:id/comments/:id* |
| User | */users/:id* |
| Category | */category/:id* |
**TODO**: Need to use [Swagger](https://swagger.io/) for api documentation
