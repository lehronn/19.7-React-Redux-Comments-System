import React from 'react';

const Comment = ({text, votes}) =>
<li{text} <span>votes: {votes}</span></li>;

export default Comment;

// Komponent ten nie zawiera żadnej logiki ani
// stanu wewnętrznego. Możemy więc stworzyć
// czystą arrow function, która zwróci po prostu
// element <li> z danymi komentarza. Zauważ, że zastosowaliśmy
// również destrukturyzację na propsach tak, aby
// dostać się do odpowiednich fragmentów obiektu.
