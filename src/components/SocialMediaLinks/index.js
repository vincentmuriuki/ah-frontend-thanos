import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMediaLinks = () => (
  <div className="icons-group text-center">
    <FontAwesomeIcon className="icon" icon={['fab', 'facebook-f']} />
    <FontAwesomeIcon className="icon" icon={['fab', 'google']} />
  </div>
);

export default SocialMediaLinks;
