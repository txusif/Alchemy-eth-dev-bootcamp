const express = require('express');
const verifyProof = require('../utils/verifyProof');

const port = process.env.PORT || 1225;

const app = express();
app.use(express.json());

// TODO: hardcode a merkle root here representing the whole nice list
// paste the hex string in here, without the 0x prefix
const MERKLE_ROOT = `6fa5ef521987ee69734ba2199ce0120663a54b136f4b9e6bc93a589c2c5336b0`;

app.post('/gift', (req, res) => {
  // grab the parameters from the front-end here
  const body = req.body;
  
  const leaf = body.leaf;
  const proof = body.proof;

  // const MERKLE_ROOT = body.root;

  console.log(proof);
  console.log(leaf);
  console.log(MERKLE_ROOT);
  
  const isInTheList = verifyProof(proof, leaf, MERKLE_ROOT)
  console.log(isInTheList);
  // TODO: prove that a name is in the list 
  if(isInTheList) {
    res.send(`${leaf} You got a toy robot!`);
  }
  else {
    res.send(`${leaf} You are not on the list :(`);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
