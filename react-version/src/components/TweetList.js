/* TweetList.js */
import React from 'react';
function TweetList() {
  return (
    <section className="tweets">
      <article className="tweet">
        <header className="tweet--header">
          <img className="tweet--avatar" src="https://i.imgur.com/73hZDYK.png" alt="Avatar" />
          <h2 className="tweet--name">Newton</h2>
          <small className="tweet--handle">@SirIsaac</small>
        </header>

        <div className="tweet--body">
          <p>If I have seen further it is by standing on the shoulders of giants</p>
        </div>

      </article>

      <article className="tweet">
        <header className="tweet--header">
          <img className="tweet--avatar" src="https://i.imgur.com/nlhLi3I.png" alt="Avatar" />
          <h2 className="tweet--name">Descartes</h2>
          <small className="tweet--handle">@rd</small>
        </header>

        <div className="tweet--body">
          <p>Je pense, donc je suis</p>
        </div>

      </article>
    </section>
  );
}

export default TweetList;
