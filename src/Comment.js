import React from 'react';
import './Comment.css';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment}) =>
  <li>
    {text} <span>votes: {votes}</span>
    <button onClick={() => thumbUpComment(id)}>Thumb up</button>
    <button onClick={() => thumbDownComment(id)}>Thumb up</button>
  </li>;

export default Comment;

// Komponent ten nie zawiera żadnej logiki ani
// stanu wewnętrznego. Możemy więc stworzyć
// czystą arrow function, która zwróci po prostu
// element <li> z danymi komentarza. Zauważ, że zastosowaliśmy
// również destrukturyzację na propsach tak, aby
// dostać się do odpowiednich fragmentów obiektu.
