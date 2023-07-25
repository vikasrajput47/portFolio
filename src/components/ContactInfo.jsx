import React from 'react'
import git from './img/git.png'
import In from './img/in.png'
import codechef from './img/codechef.png'
import gfg from './img/gfg.png'
import insta from './img/insta.png'
const ContactInfo = () => {
    const icons = [
        {
          link: 'https://github.com/vikasrajput47',
          src: git,
          alt: 'GitHub',
        },
        {
          link: 'https://www.linkedin.com/in/vikas-rajpoot-0908991b7/',
          src: In,
          alt: 'LinkedIn',
        },
        {
          link: 'https://www.codechef.com/users/vikasrajpoot47',
          src: codechef,
          alt: 'CodeChef',
        },
        {
          link: 'https://auth.geeksforgeeks.org/user/vikasrajpoot479',
          src: gfg,
          alt: 'GeeksforGeeks',
        },
        {
          link: 'https://www.instagram.com/vikasrajpoot4790/',
          src: insta,
          alt: 'Instagram',
        },
      ];
    
  return (
    <div>
        <ul className="icons">
            {icons.map((icon, index) => (
              <li key={index} className="insideIcon">
                <a href={icon.link} target="_blank">
                  <img className="iconImg" src={icon.src} alt={icon.alt} />
                </a>
              </li>
            ))}
          </ul>
    </div>
  )
}

export default ContactInfo;