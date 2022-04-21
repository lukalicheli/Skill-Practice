# 📖 Initialize Projects using Node Package Manager (npm)

1. Initialize `package.json` by running `npm init` or `npm init -y`.
  
  * You should see a `package.json` file has been created after running the command.

  * Using the `-y` parameter will use the defaults for the configuration questions so that you don't have to take time to answers them.

2. Run `npm install inquirer` to download the `inquirer` package into the `node_modules` directory.
   
  * First, the command  will create a `node_modules` directory in the same folder as `package.json` if the `node_modules` folder doesn't already exist.

  * Then, `package.json` gets updated by adding `inquirer` to the list of `dependencies`.
  
  * You will also see a file named `package-lock.json` created. We don't need to worry about this file for now.  Refer to the [npm documentation on package-lock.json](https://docs.npmjs.com/cli/v8/configuring-npm/package-lock-json) if you want to know more about the purpose of the file.

3. Open `package.json` to verify that `inquirer` is listed under `dependencies`.
