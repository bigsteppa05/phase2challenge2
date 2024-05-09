import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';

function BotCollection({ handleEnlistment }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/bots')
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  return (
    <Route exact path="/">
      <div>
        <h2>Bot Collection</h2>
        <ul>
          {bots.map(bot => (
            <li key={bot.id}>
              <Link to={`/bot-specs/${bot.id}`}>{bot.name}</Link>
              <button onClick={() => handleEnlistment(bot.id)}>Enlist</button>
            </li>
          ))}
        </ul>
      </div>
    </Route>
  );
}

export default BotCollection;



