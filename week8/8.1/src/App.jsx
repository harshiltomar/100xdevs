import { useState } from "react";
import "./App.css";
import { RevenueCard } from "./components/RevenueCard";

function App() {
  return (
    <>
      <RevenueCard
        title={"Amont Pending"}
        amount={"92.312.20"}
        orderCount={13}
      />
      <div className="bg-white rounded shadow-md p-4">
        <div>Amount Pending?</div>
        <div className="flex justify-between">
          <div>$100</div>
          {13 ? (
            <div>
              {13} orders&apos;s {">"}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
