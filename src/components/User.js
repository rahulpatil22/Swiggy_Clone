import React, { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {}, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {}, [count2]);

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h1>Count2 = {count2}</h1>
      <h2>Name:{name}</h2>
      <h3>Location:Surat</h3>
      <h4>Contact:@rahulpatil</h4>
    </div>
  );
};

export default User;
