import React, { useState } from "react";
import Receipt from "./Receipt";

function Transfer() {
  const sender = "0x2849234wkrnwkfniuy4234k34n232n4kj23n4";
  const receiver = "0x284y4234k34n232n4kj23n4234wkrnwkfniu";

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
      {showReceipt && <Receipt />}
    </div>
  );
}

export default Transfer;
