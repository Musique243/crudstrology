# CRUDSTROLOGY

## How to Start

- enter `sudo service mysql start` to start database in bash terminal
- enter mysql shell: `mysql -u root` && `CREATE DATABASE dbstrology` (until we automate this)
- make sure `seeder()` is being invoked in /server/index.js --> app.listen anonymous function
- remove _example_ from .env file and enter required keys 
- `npm run build` && `npm run start` in terminal to start server
- visit http://localhost:8080/ to see served page

## Tech Stack

- Project Management Software: Trello
- Deployment: AWS (EC2 Ubuntu)
- Front End: React (Style Lib: Bootstrap?)
- Server: Express
- Database: mySQL / Sequelize / Amazon RDS (deploy DB)
- Auth: Passport-OAuth2
- APIs: https://aztro.readthedocs.io/en/latest/# && https://zenquotes.io/ && https://robohash.org/ && https://tarot-api.onrender.com/api/v1/cards/random?n=1
- Linting: ESLint / AirBnB

## Dependencies

- All versions in package.json are "approximately equivalent to" (~) so if major releases are not aligned, you will need to `npm-check-update` or something to that effect.