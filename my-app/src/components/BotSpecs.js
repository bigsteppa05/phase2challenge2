import React from 'react';
import { Link } from 'react-router-dom';

function BotSpecs({ bot }) {
  return (
    <div>
      <h2>Bot Specs</h2>
      <p>Name: {bot.name}</p>
      <p>Class: {bot.class}</p>
      <Link to="/">Back to list</Link>
    </div>
  );
}

export default BotSpecs;

