import React from 'react';

const EMAIL = 'hola@ahnafya.com';

const EmailLink = () => (
  <div className="inline-container">
    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
  </div>
);

export default EmailLink;
