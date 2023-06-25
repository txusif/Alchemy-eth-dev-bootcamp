## ECDSA Node

This project is an example of using a client and server to facilitate transfers between different addresses. Since there is just a single server on the back-end handling transfers, this is clearly very centralized. We won't worry about distributed consensus for this project.

However, something that we would like to incoporate is Public Key Cryptography. By using Elliptic Curve Digital Signatures we can make it so the server only allows transfers that have been signed for by the person who owns the associated address.

### Video instructions
For an overview of this project as well as getting started instructions, check out the following video:

https://www.loom.com/share/0d3c74890b8e44a5918c4cacb3f646c4
 
### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application 
4. Now you should be able to visit the app at http://localhost:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder 
2. Run `npm install` to install all the depedencies 
3. Run `node index` to start the server 

The application should connect to the default server port (3042) automatically! 

To Test the wallet use the following:

[Live Project URL 🚀🚀🚀](https://ecdsa.netlify.app/)

```
private key: 07b45b5b4e324bab537617d7e788e73bdffdae5f9cb5f5b7414105cf5badbb4c
public key: 03478be8e98c2349c4aa13f8873f0a922b838335265ddf989764273ca720126cce
adddress: 1873466fc94065b9f33aa5bcd7fbaf6577239eda: 100
```

```
private key: fd65ea0e8ec1322a5b2dcec24f60f3cbe75021e4647e88102b229cbcde110431
public key: 037628fa94c72bf79283ffab1317f56cd506c091d0fe7ccef18f7ca0f6a3341571
adddress: 5657458397246847f13cdd3e7fcd4c6ace49ff2b: 50
```

```
private key: 7a4ca0a4e2750fa1643855261a336a615f3f1a440fa621a2de44c46545ab7863
public key: 02d451410723692057316bb4ca477f7eb97a5ed54ba2b7dbec700aa55812e6dcf2
adddress: c97ade9ec75fb015121e9383ce16c54be6c73dd1: 75
```

_Hint_ - Use [nodemon](https://www.npmjs.com/package/nodemon) instead of `node` to automatically restart the server on any changes.
