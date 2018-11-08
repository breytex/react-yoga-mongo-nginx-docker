# Hello
This is a sample dev stack for getting into React + GraphQL. It's built on:
* [create-react-app](https://github.com/facebook/create-react-app)
* [graphql-yoga](https://github.com/prisma/graphql-yoga)
* mongoDB
    * [mongoose](https://github.com/Automattic/mongoose)
* nginx
* docker (docker-compose)

You can start building your first react-graphql-app in <5min.

# Install
Install [docker](https://www.docker.com/) on your machine.

Put 
```
127.0.0.1 localdev.net
```
into your `/etc/hosts` (or windows equivalent)

Run in your cli:
```bash
$ cd react-yoga-mongo-nginx-docker

# downloads docker images and installs npm packages inside all containers
$ docker-compose build 

# seed testdata into mongodb
# fails sometimes (because mongodb is not up yet). Just try a second time.
$ cd ../
$ docker-compose run --rm backend npm run seed

$ docker-compose up    

# optional:

# install packages locally to enable lint and package autocompletion
$ cd frontend 
$ npm install   

# ... same for backend                            
$ cd ../backend
$ npm install           
                
```

Open [localdev.net](localdev.net) in your browser :)
You should see a spinning react logo and some foo bar testdata on the screen.
(If you don't see the testdata, run the seed command from above or check console outputs for database problems)

Happy coding!

# Development
More useful commands:
```
# install package inside the docker containers
docker-compose run --rm frontend npm install --save package-name
docker-compose run --rm backend npm install --save package-name
# (remember that node_modules folders locally and inside the containers are disconnected)
```

# Random tips
* work on the mongodb schema at `backend/db/models/*`
* use the mongod cli or a gui (like `brew cask install robo-3t`) to dive into the database
    * username: graphql
    * password: yoga123
    * password: graphqlYoga
    * localhost:27017
    * can be changed in docker-compose.yml
* work on the graphQL schema at `backend/graphql/schema.graphql`
    * go to http://localdev.net/api/playground to try out stuff with your graphql api


# Todos
* Deployment scripts: gonna deliver when I finish my first own project based on this stack


# Troubleshooting

## Failed to start mongodb
### Error
```
Creating react-yoga-mongo-nginx-docker_mongo_1 ... error

ERROR: for react-yoga-mongo-nginx-docker_mongo_1  Cannot start service mongo: driver failed programming external connectivity on endpoint react-yoga-mongo-nginx-docker_mongo_1 (7c2c2943d6b6394f85403767dd3fb7d04d05a07d1eff7ad7ef145bf327e80d5f): Error starting userland proxy: listen tcp 0.0.0.0:27017: bind: address already in use

ERROR: for mongo  Cannot start service mongo: driver failed programming external connectivity on endpoint react-yoga-mongo-nginx-docker_mongo_1 (7c2c2943d6b6394f85403767dd3fb7d04d05a07d1eff7ad7ef145bf327e80d5f): Error starting userland proxy: listen tcp 0.0.0.0:27017: bind: address already in use
ERROR: Encountered errors while bringing up the project.
```

### Solution
Stop your existing mongodb server.