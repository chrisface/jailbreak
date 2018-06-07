import React from 'react';
import { Link } from 'react-router-dom';

const Freedom = () => (
  <div className="page_free">
    <div className="paperframe">
      <div className="paperframe_top" />
      <div className="content freedom">
        <img src="static/free.png" width="92" />
        <h2>
          You broke<br /> free!
        </h2>
        <p>
          Sweet sweet freedom!<br />
          Now get back and fight!
        </p>
        <div className="divider" />

        <Link to="/">
          <button className="button-default" type="button">
            Get out of here
          </button>
        </Link>
      </div>
      <div className="paperframe_bottom" />
    </div>
  </div>
);

export default Freedom;
