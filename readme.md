# Part 10 - Building an app
---
## 1. Get up and running
### - Create a fresh directory in your system, and clone this repo.

```bash
git clone https://github.com/Nazzanuk/front-end-final.git
```    

### - From the root directory of your repo, get the project started.

You may need to install the following globally as prerequisites:

```bash
npm install -g bower gulp
```    

Run the following in your terminal at the root of the repo into it. 

```bash
npm install # This uses the package.json to automatically fetch the correct dependencies.
bower install # This uses the bower.json to automatically fetch the correct front-end dependencies.
gulp dev # This starts a gulp task to automatically generate the release directory.
```

This should be all you need to start the server at `http://localhost:4000`.

---
## 2. Add a search screen
Add another screen to the application which has a similar structure to the About page. Call it *Search*.