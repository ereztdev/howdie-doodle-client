# Howdie Doodle
## Multi-User streaming chat and canvas drawer
![](https://github.com/ereztdev/howdie-doodle-client/blob/master/public/imgs/howdie_doodle1.gif?raw=true)
### CLIENT
### pre-requisites
- **Node.JS** -  if you don;t have it, you can [download it right here](https://nodejs.org/dist/v12.16.2/node-v12.16.2-x64.msi).
- **Howdie Doodle server** -  you will need the [Howdie Doodle server](https://github.com/ereztdev/howdie-doodle-server),

### Installation procedures
* Either download or clone (`git clone https://github.com/ereztdev/howdie-doodle-client.git`) this repo into your webserver 
* Switch into the repo directory where you pulled the repo: `cd howdie-doodle-client`
* `npm install` to install node.js dependencies
* `npm run start` to transpile all frontend assets and run a node server.
* Run sockets server (Howdie Doodle server) you've cloned earlier.
* The node server will run on `http://localhost:8080/` by default.