# Pokedex Express App (with Postgres SQL)

For this exercise, we'll upgrade from storing pokedex data in a plain JSON file to a fully fledged Postgres database. The end result we want is a CRUD app for pokemon with data saved into a database.

## Getting Started

1.  Fork and clone this repository to your computer
2.  Run `yarn install` to install dependencies
3.  Create a new Postgres database by running `createdb pokemons -U <your_username>`
4.  Run `psql -U <your_username> -d pokemons -a -f tables.sql` to create a `pokemon` table in the database
5.  Seed data into the newly created `pokemon` table by running `psql -U <your_username> -d pokemons -a -f seed.sql` (Note: this will run 3 INSERT queries to seed 3 pokemon into the table.)
6.  Look in the starter file called `index.js`, run `nodemon` to start local server on port 3000
7.  Open `localhost:3000` on your browser and see the home page

## Deliverables

The deliverable is an app that has CRUD functionality on pokemons.

* GET `/` should return HTML page showing all pokemons currently in database (specifically in the pokemon table within the database)
* GET `/:id` (eg. `/2`) should return HTML page showing information about pokemon with primary ID 2 (read: primary ID, not `num` property)
* GET `/new` should return HTML page showing a form to create a new pokemon - upon submit, it should send POST request to `/`
* POST `/` should create a new pokemon and insert a new entry in the pokemon table, and should redirect to the home page `/`
* GET `/:id/edit` (eg. `/2/edit`) should return HTML page showing a form pre-populated with that pokemon's data - upon submit, it should send PUT request to `/:id`
* The `/:id/edit` HTML page should also have a "Delete" button that when clicked, will send a DELETE request to `/:id` to delete the current pokemon
* PUT `/:id` should update the data of the pokemon with the specified ID, and should redirect to the pokemon detail page `/:id`
* DELETE `/:id` should delete the entry of the pokemon with the specified ID, and should redirect to the home page `/`

## Useful SQL commands

Note the proceeding commands should be run in a `psql` session on Terminal.

View all the data in a table:
```sql
SELECT * FROM pokemon;
```

Delete your database and start again if you made a mistake:
```sql
DROP DATABASE pokemons;
```

Or if you just need to reset the table:
```sql
DROP TABLE pokemons;
```
