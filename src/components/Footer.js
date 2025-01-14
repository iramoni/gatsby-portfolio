import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Get in touch</h2>
        <p>
          If you would like to know more about the kind of work I 
          do or have questions or querys please do get in touch with me. 
          I look forward to hearing from you.
        </p>
        <ul className="contact">
          {config.socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <li key={url}>
                <a href={url}>
                  <i className={`fa ${icon}`}></i>
                </a>
              </li>
            );
          })}
        </ul>
        {/* <form method="post" action="/#">
          <div className="fields">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" />
            </li>
          </ul>
        </form> */}
        <ul className="copyright">
          <li>&copy; Suborna Jahan. All rights reserved.</li>
        </ul>
      </div>
    </section>
  );
}
