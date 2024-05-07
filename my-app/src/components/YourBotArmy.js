import React from 'react';
import Bot from './Bott';

function YourBotArmy({ yourBotArmy, onRelease, onDischarge }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="army-container">
        {yourBotArmy.map((bot) => (
          <div className="bot-card army-bot">
            <img src={bot.avatar_url} alt={bot.name} className="medium-bot" />
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <div className="bot-class">
              <p>Class: {bot.bot_class}</p>
            </div>
            <button onClick={() => onRelease(bot)}>Release</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;