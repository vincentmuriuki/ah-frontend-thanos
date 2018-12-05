// redirect links at the bottom of signup and login pages
import React from 'react';

const generateRedirectLinks = (message, link, linkName) => (
  <div className="small mt-3">
    <span>{message}</span>
    <a href={`/${link}`}>{linkName}</a>
  </div>
);

export default generateRedirectLinks;
