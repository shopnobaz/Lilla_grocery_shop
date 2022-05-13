// use the build in mini web server in node - http
const http = require('http');

// Use the built in execSync commando that can run 
// command line/bash commands
const {execSync} = require('child_process');

const path = require('path');

const port = process.env.PORT // || 9876;

// Read the deployment key / secret from environment
const secret = process.env.DEPLOYMENT_KEY;

// If there is no port shut down
if(!port){
  console.warn("No PORT environment variable provided!");
  process.exit(1);
}

// If there is not secret - shut down
if(!secret){
  console.log('You need to provide the deployment key as an environment variable'); 
  process.exit(1);
}

// Path to db-template
const dbTemplatePath = path.join(__dirname, 'database', 'products-template.db');
const dbPath = path.join(__dirname, 'database', 'products.db');



//A  funcction that does all necessary git checkout, cleanup etc
function checkout(){
    execSync('git pull');
    execSync('npm install'); // install new npm modules mentioned in package.json
    execSync('rm ' + dbPath); // remove the database
    execSync('cp ' + dbTemplatePath + ' ' + dbPath); // copy dbTemplate to db
    //execSync('npm run build'); // build the dist folder that will be served
    execSync('pm2 restart main-main'); // restart our main app
    console.log('Pulled, copied db and restarted the server');
}

// Set up a small server that only check out things if know
// the secret hash
const server = http.createServer(function (req, res) {
  res.end('Ok');
  if (req.url === '/' + secret) {
    checkout();
  }
});

// Start up the server 
 
server.listen(port, () => console.log('Listening on http://localhost:' + port));