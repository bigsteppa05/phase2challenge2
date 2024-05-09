import React from 'react';

function YourBotArmy({ army, handleRelease, handleDischarge }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <ul>
        {army.map(bot => (
          <li key={bot.id}>
            {bot.name} - {bot.class}
            <button onClick={() => handleRelease(bot.id)}>Release</button>
            <button onClick={() => handleDischarge(bot.id)}>Discharge</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default YourBotArmy;



