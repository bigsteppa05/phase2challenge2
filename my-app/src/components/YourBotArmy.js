import React from 'react';

function YourBotArmy({ yourBotArmy, onRelease }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div>
        {yourBotArmy.map(bot => (
          <div key={bot.id}>
            <h3>{bot.name}</h3>
            <p>Class: {bot.bot_class}</p>
            <button onClick={() => onRelease(bot)}>Release</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
