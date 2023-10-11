# Himanshu Goyal (20JE0420) IIT Dhanbad - Frontend Assignment - Quicksell
- [Linkdin](https://www.linkedin.com/in/himanshu-goyal-a971941bb/) 
- Email : 20je0420@ee.iitism.ac.in 
- Phone : +91-7412972658

## Setup : 

1. Creating a Node project
```shell
npm init -y
```

2. Installing Babel dependencies
```shell
npm install --save-dev @babel/core babel-loader @babel/cli @babel/preset-env @babel/preset-react
```

3. Installing Webpack dependencies  (Bundler)
```shell
npm install --save-dev @babel/core babel-loader @babel/cli @babel/preset-env @babel/preset-react
```

4. Installing React dependencies
```shell
npm install react react-dom 
```

5. Now configuring Babel by making .babelrc
6. Now configuring webpack by making an webpack.config.js
7. Adding scripts in package.json
```shell
"scripts": {
    "start": "webpack-dev-server .",
    "build": "webpack ."
  }
```

## Steps : 

1. First I am making ```public``` folder and creating ```index.html``` file and adding a div with id="board";
2. Now making an ```src``` folder and adding a react component ```App.js``` file.
3. In the root folder I am making an ```index.js``` and this is the entry of our kanban react app. 