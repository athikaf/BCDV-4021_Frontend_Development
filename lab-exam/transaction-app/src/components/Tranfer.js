import React, { useState } from "react";
import Receipt from "./Receipt";

function Transfer() {
  const sender = "0x2849234wkrnwkfniuy4234k34n232n4kj23n4";
  const receiver = "0x284y4234k34n232n4kj23n4234wkrnwkfniu";
  const txnID = "0x234b2jrj34g3nbtehi1312jh3k12benb4j23b4k1j2b3kj1b23k";
  const blockID = "0xn23b4j23b4hj2b5jh3b45nb41n23khj12k3jk1n3kj1b43124";
  const blockNumber = "10";
  const gasUsed = "22134";

  const [amount, setAmount] = useState("");
  const [showReceipt, setShowReceipt] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowReceipt(true);
  };
  return (
    <div>
      <div className="transfer-div">
        <h1>Transfer</h1>
        <div>
          <p>From: {sender}</p>
          <p>To: {receiver}</p>
          <form>
            <label for="amount">Amount: </label>
            <input
              type="number"
              id="amount"
              value={amount}
              placeholder="Enter amount"
              min="1"
              onChange={(e) => setAmount(e.target.value)}
            />
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
      {showReceipt && (
        <Receipt
          txnHash={txnID}
          blockHash={blockID}
          bNo={blockNumber}
          from={sender}
          to={receiver}
          amount={amount}
          gas={gasUsed}
        />
      )}
    </div>
  );
}

export default Transfer;
