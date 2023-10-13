import React from "react";

function Transfer() {
  const sender = "0x2849234wkrnwkfniuy4234k34n232n4kj23n4";
  const receiver = "0x284y4234k34n232n4kj23n4234wkrnwkfniu";

  const handleSubmit = () => {};
  return (
    <div>
      <h1>Transfer</h1>
      <div>
        <p>From: {sender}</p>
        <p>To: {receiver}</p>
        <form>
          <label for="amount">Amount: </label>
          <input type="number" id="amount" placeholder="Enter amount" min="1" />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Transfer;
