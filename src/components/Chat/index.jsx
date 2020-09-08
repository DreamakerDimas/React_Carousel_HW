import React, { useState, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer';

const data = {
  users: [
    {
      id: 1,
      name: 'Tom',
    },
    {
      id: 2,
      name: 'Anna',
    },
  ],

  messages: [
    {
      userId: 1,
      body: 'some text',
    },
    {
      userId: 1,
      body: 'some text',
    },
    {
      userId: 1,
      body: 'some text',
    },
    {
      userId: 2,
      body: 'some text',
    },
    {
      userId: 2,
      body: 'some text',
    },
    {
      userId: 2,
      body: 'some text',
    },
  ],
};

const getData = () => data;

function Chat(props) {
  const [state, dispatch] = useReducer(reducer, {
    users: new Map(),
    messages: [],
  });

  useEffect(() => {
    const data = getData();
    dispatch({
      type: 'GET_SUCCESS',
      data,
    });
  }, []);
  const { messages } = state;
  return (
    <ul>
      {messages.map((u, index) => (
        <li key={index}>{JSON.stringify(u)}</li>
      ))}
    </ul>
  );
}

export default Chat;
