import { useState } from 'react';
import server from './server';
import { toHex, utf8ToBytes } from 'ethereum-cryptography/utils';

import { keccak256 } from 'ethereum-cryptography/keccak';
import * as secp from 'ethereum-cryptography/secp256k1';

function Transfer({ setBalance, address, privateKey }) {
	const [sendAmount, setSendAmount] = useState("");
	const [recipient, setRecipient] = useState("");

	const setValue = (setter) => (evt) => setter(evt.target.value);

	async function transfer(evt) {
		evt.preventDefault();

		try {
			console.log(`Private Key: ${privateKey}`);
			console.log(`Public Key Address: ${address}`);
			console.log(`Transaction Amount: ${sendAmount}`);
			console.log(`Recipient: ${recipient}`);

			const intentMessage = address + "_" + sendAmount + "_" + recipient;
			const intentMessageHash = toHex(keccak256(utf8ToBytes(intentMessage)));
			console.log(`Intent Msg Hex: ${intentMessageHash}`);

			const signature = secp.secp256k1.sign(intentMessageHash, privateKey);
			console.log(`Signature: ${signature.s}`);

			const jsonSignature = JSON.stringify(signature, (key, value) => 
				typeof value === "bigint" ? value.toString() : value
			);

			const { data: { balance }} = await server.post(`send`, {
				signature: jsonSignature,
				senderPublicKey: address,
				intentMessageHash: intentMessageHash,
				amount: parseInt(sendAmount),
				recipient
			});

			setBalance(balance);
		} catch (ex) {
			console.log(ex.response.data.message);
			alert(ex.response.data.message);
		}
	}

	return (
		<form className='container transfer' onSubmit={transfer}>
			<h1>Send Transaction</h1>

			<label>
				Send Amount
				<input
					placeholder='1, 2, 3...'
					value={sendAmount}
					onChange={setValue(setSendAmount)}
				></input>
			</label>

			<label>
				Recipient
				<input
					placeholder='Type an address, for example: 0x2'
					value={recipient}
					onChange={setValue(setRecipient)}
				></input>
			</label>

			<input type='submit' className='button' value='Transfer' />
		</form>
	);
}

export default Transfer;
