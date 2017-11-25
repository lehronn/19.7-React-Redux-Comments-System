import React from 'react';
import Comment from 'Comment';

const CommentsList = ({comments}) => <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>;

export default CommentsList;

// CommentsList to jedna linijka kodu,
// której zadaniem jest mapowanie przekazanej
// tablicy z komentarzami na wyrenderowaną postać
// (widoczną listę komentarzy).
