import React from 'react';
import { Link } from 'react-router-dom';

function BotSpecs({ bot, onEnlist }) {
  return (
    <div>
      <h2>Bot Specifications</h2>
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <Link to="/">Back to List</Link>
      <button onClick={() => onEnlist(bot)}>Enlist Bot</button>
    </div>
  );
}

export default BotSpecs;
