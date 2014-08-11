## google-app-engine-react-backbone

A starter app that servers a single page app made in React.js with urls from backbone.js

## Set-up

Dependencies
  1. node/npm
  2. python 2.7
  3. dev_appserver.py

#### Build the client code

```
cd google-app-engine-react-backbone
npm -g install gulp  #(only need to do this once)
npm install
gulp
```

In the future you'll usually only need to run `gulp` unless you add a dependency. The `gulp` command will continue to run and re-build things for you as you change files.

#### Start the gae server

```
cd google-app-engine-react-backbone
dev_appserver.py server/
```

#### And you're done!

Open your browser to [http://localhost:8080](http://localhost:8080)

## Technologies

#### Google App Engine

Back-end used for model definitions and rest endpoints. Auto-scale ftw!

#### React.js

Used to create all front end code.

#### React-Bootstrap

Make things pretty. See code snippets [here](http://react-bootstrap.github.io/components.html).

#### gulp/browserify

Module management and bundling.

#### backbone.js

Url routing and history (not used to its fullest potential)
