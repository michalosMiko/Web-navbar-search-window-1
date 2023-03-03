import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import "./VoteComponentas.css"

// instalace**   npm install recharts
//               npm install react-icons

function VoteComponentas() {
  const [upvotes, setUpvotes] = useState(68);
  const [downvotes, setDownvotes] = useState(1);
  const [voted, setVoted] = useState(false);

  const data = [
    { name: "Palec nahoru", value: upvotes },
    { name: "Palec dolů", value: downvotes },
  ];
// popisky grafu
  const COLORS = ["green", "#e50914"];

  function handleUpvote() {
    setUpvotes((prevUpvotes) => prevUpvotes + 1);
    setVoted(true);
  }

  function handleDownvote() {
    setDownvotes((prevDownvotes) => prevDownvotes + 1);
    setVoted(true);
  }

  return (
    <div className="vote-box">
      <h2>Celkové hodnocení služby</h2>
      {!voted && (
        <div className="buttons">
          <button className="vote-button1" onClick={handleUpvote}>
            <FaThumbsUp /> Palec nahoru
          </button>
          <button className="vote-button2" onClick={handleDownvote}>
            <FaThumbsDown /> Palec dolů
          </button>
        </div>
      )}
      

      <PieChart className="pie-chart" width={400} height={400}>
        <Pie
          dataKey="value"
          data={data}
          fill="#8884d8"
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            // <Cell key={`cell-${index}`} className={`cell-${index}`} />
            // <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} className={entry.name === "Palec nahoru" ? "palec-nahoru" : "palec-dolu"} />
          
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default VoteComponentas;

