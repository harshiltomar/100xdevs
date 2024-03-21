import React, { useEffect, useState } from "react";

function isOnlines() {
  const [isOnline, setIsOnline] = useState();

  useEffect(() => {
    window.addEventListener("online", () => setIsOnline(true));
    window.addEventListener("offline", () => setIsOnline(false));
  });

  return isOnline;
}

function Browser() {
  //runs in every 5 seconds
  const isOnline = isOnlines(5);

  return (
    <>{isOnline ? "Online ho aap Sirji" : "Offo offline hogyi ji aap to"}</>
  );
}

export default Browser;
