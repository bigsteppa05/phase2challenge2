import React from 'react';

function Bot({ bot, onAddToArmy, isAdded }) {
  return (
    <div className={`bot-card ${isAdded ? 'added' : ''}`}>
      <img src={bot.avatar_url} alt={bot.name} className="medium-bot" />
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <div className="bot-class">
        <p>Class: {bot.bot_class}</p>
      </div>
      <button onClick={() => onAddToArmy(bot)}>Add to Army</button>
    </div>
  );
}

export default Bot;