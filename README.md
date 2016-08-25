# gulp-skeleton
A gulp skeleton project.

## Structure

The following files must exist in the root of the repo:
* Dockerfile.develop - Runs a webserver and gulp develop task. Maps the source directory into the container.
* Dockerfile.build - Runs gulp build task and outputs compiled code to the dist folder for deployment.
* Dockerfile.run - Runs a webserver with dist as the root directory.
* gulpfile.js
* package.json

The src folder should be the actively developed code. There are structured base repos for different project frameworks named "src-*". These include:
* src-angular - angular project
* src-ionic - Ionic

If one of these frameworks is used, it should be moved to src and the others can be removed.

The output of the gulp build process should be the "dist" folder.

## Usage

### package.json
This contains a list of accepted versions of various NPM modules. These can be removed but should not be changed
to different versions without justification.

### gulpfile.js
The following tasks must exist:
* develop - watch task to actively develop code
* build - used to build the code
* unittest - run unit testing
* inttest - run integration testing

Other tasks can be created as necessary but the above tasks are required to exist for automation.

### src
Copy the correct src-* project framework to the src directory, or use the generic src project.

### Docker build
To build the code, use Dockerfile.build to create an image that contains all of the build dependencies and will output a dist directory.

    docker build -t gulp-build -f Dockerfile.build .

    docker run -it -v $(pwd)/dist:/usr/src/app/dist gulp-build

The output of the "gulp build" will be in the dist directory once the docker container exits.
