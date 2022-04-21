# HW 19: J.A.T.E Solution

The following changes were made in order to satisfy the acceptance requirements:

* `package.json`: The root package.json file was updated with several npm run scripts to support efficient development, creating the build, and deploying to Heroku.

* `client/webpack.config.js`: Configure loaders and plugins to bundle CSS, html, JavaScript modules, a manifest.json, and a service worker.

* `client/index.html`: Update the title of the page to use the title from the HtmlWebpackPlugin.

* `client/src-sw.js`: Add caching strategy for assets using Workbox.

* `client/src/js/database`: Update the `putDb` and `getDb` methods.

* `client/src/js/install.js`: Add logic to initialize the install button.
