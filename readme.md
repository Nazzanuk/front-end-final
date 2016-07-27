# Part 10 - Building an app
---
## 1. Get up and running
### - Create a fresh directory in your system, and clone this repo.

```bash
git clone https://github.com/Nazzanuk/front-end-final.git .
```    

### - From the root directory of your repo, get the project started.

You may need to install the following globally as prerequisites:

```bash
npm install -g bower gulp nodemon
```    

Run the following in your terminal at the root of the repo into it. 

```bash
npm install # This uses the package.json to automatically fetch the correct dependencies.
bower install # This uses the bower.json to automatically fetch the correct front-end dependencies.
gulp dev # This starts a gulp task to automatically generate the release directory.
```

---
## 2. Add a search screen

**NOTE: For now ignore the `server` directory completely!**

### - Add another screen to the application which has a similar structure to the About page. Call it **Search**.

This screen should appear in the top navigation alongside `Home` and `About`.

You will need to make changes to:
- `screens` directory
- `menu.es6`
- `routes.es6`

---
## 3. Search for anime

### - Add an input to this screen

This input will be the query in a search made to `https://jsonp.afeld.me/?url=http://hummingbird.me/api/v1/search/anime?query=YOUR_QUERY`.

### - For each result, print the `cover_image` returned in the json.

Use the `API` service and the `API.load` function to make a request

---
## 4. Make the results sexy

### - Create a directive that will take an anime result object and present it well with the following information:

- title
- url
- cover_image
- synopsis
- show_type
- age_rating

### - Use this directive when showing each of your results.

---
## 5. Favourites

### - Create another screen called Favourites

### - Create a service called `favourites`

This service will allow you to pass information between controllers and directives.

### - Create the ability to add a search result to your favourites

This should be done by storing and exposing the data in your service

--
## 6. Server interaction

### - Start the server

Run `nodemon server.js` in the `server` folder after first navigating into that directory.

Your server should now be running at `http://localhost:4000`, even though it will have some errors for now.

### - Set up your database connection

Do this by creating an mLabs account or using an existing one.

Connect to your database and confirm that it works.

### - 