import server from './server';
import { toHex} from 'ethereum-cryptography/utils';
import * as secp from 'ethereum-cryptography/secp256k1';
import { keccak256 } from "ethereum-cryptography/keccak";

function Wallet({ balance, setBalance, privateKey, setPrivateKey, publicKey, setPublicKey, ethAddress, setEthAddress }) {

	async function onChange(evt) {
		const privateKey = evt.target.value;
		setPrivateKey(privateKey);

		const publicKey = secp.secp256k1.getPublicKey(privateKey);
		const publicKeyHex = toHex(publicKey);
		setPublicKey(publicKeyHex);

		const ethAddress = toHex(keccak256(publicKey.slice(1)).slice(-20));
		setEthAddress(ethAddress);

		if (ethAddress) {
			const {
				data: { balance },
			} = await server.get(`balance/${ethAddress}`);
			setBalance(balance);
		} else {
			setBalance(0);
		}
	}

	return (
		<div className='container wallet'>
			<h1>Your Wallet</h1>

			<label>
				Private Key
				<input placeholder='Type a private key' value={privateKey} onChange={onChange} ></input>
			</label>

			<div>
				Public Key Address: {publicKey}
			</div>

			<div>
				Address: {ethAddress}
			</div>

			<div className='balance'>Balance: {balance}</div>
		</div>
	);
}

export default Wallet;
