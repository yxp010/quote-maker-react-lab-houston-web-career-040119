import React from 'react';
import { connect } from 'react-redux';
// import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

const QuoteCard = (props) =>
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          {props.content}
          {props.author}
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => props.upvoteQuote(props.id)}
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => props.downvoteQuote(props.id)}
          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => props.removeQuote(props.id)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {props.votes}
      </div>
    </div>
  </div>;

export default QuoteCard;
