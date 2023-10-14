import React from "react";

function Receipt(props) {
  return (
    <div>
      <h1>Receipt</h1>
      <div>
        <p>Transaction Hash: {props.txnHash}</p>
        <p>Block Hash: {props.blockHash}</p>
        <p>Block Number: {props.bNo}</p>
        <p>From: {props.from}</p>
        <p>To: {props.to}</p>
        <p>Amount: {props.amount}</p>
        <p>Gas used: {props.gas}</p>
      </div>
    </div>
  );
}

export default Receipt;
