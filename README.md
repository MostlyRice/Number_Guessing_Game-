# Purpose of this Git Repo
Gives a basic folder structure for node server usage. You will need to change sources links and files as needed for your projects, but this should give you a good starting point on a folder structure.

I will try to keep any and all files such as jquery up to date. The current one in this repo is 3.3.1.min.

Last Updated: `2/7/2018`

# Package.json and Express Install Commands
Once you have all your server files linked correctly in your code and in the right folders, please follow these steps to install your `package.json`, `package.lock.json`, `Express module` and `starting your server`.

- `npm init -y` will create the package.json file
- `npm install express --save` will install express
-  modify `package.json` file under scripts with `"start": "node server/server.js",`
- `npm start` will start node
- `node server/nameoffile.js` will run the js for the server, above I used `node server/server.js` as an example.
