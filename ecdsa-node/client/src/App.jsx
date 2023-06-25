import Wallet from "./Wallet";
import Transfer from "./Transfer";
import "./App.scss";
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(0);
  const [publicKey, setPublicKey] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [ethAddress, setEthAddress] = useState("");

  return (
    <div className="app">
      <Wallet
        balance={balance}
        setBalance={setBalance}
        privateKey={privateKey}
        setPrivateKey={setPrivateKey}
        publicKey={publicKey}
        setPublicKey={setPublicKey}
        ethAddress={ethAddress}
        setEthAddress={setEthAddress}
      />

      <Transfer setBalance={setBalance} address={publicKey} privateKey={privateKey} />
    </div>
  );
}

export default App;
