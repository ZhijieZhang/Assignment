import React from 'react';

import './Link.css';

const Link = ({ href, children }) => (
  <a
    className="link"
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {children}
  </a>
);

export default Link;