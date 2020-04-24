import React from 'react';

import './socialFollows.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faWhatsapp  } from "@fortawesome/free-brands-svg-icons"; 

function SocialFollows () {
    return(
        <div className="social-container">
        <div className="heading-follows">Follow Us</div>
        
        <a href="https://www.instagram.com/qh_inter_college/" className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="1x" />
        </a>
        <a href="https://www.whatsapp.com/" className="whatsapp social">
          <FontAwesomeIcon icon={faWhatsapp} size="1x" />
        </a>
        <a href="https://www.youtube.com/channel/UCGQ3bhduu-u_dmyMVRPRtkQ" className="youtube social">
          <FontAwesomeIcon icon={faYoutube} size="1x" />
        </a>
        <div className="developer" >Developed By Mohammad Sajid.</div>
      </div>
    );
}

export default SocialFollows;