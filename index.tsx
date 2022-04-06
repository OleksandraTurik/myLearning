import React, { useEffect, useState } from 'react';
import './style.css';
import ReactDOM from 'react-dom';
import { PostList } from './Hello';

function MyForm() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [question, setQuestion] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Success: ${name}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Enter your surname:
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </label>
        <br />

        <label>
          Enter your question:
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </label>

        <br />
        <input type="submit" />
      </form>
      <PostList />
    </div>
  );
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
