import React from 'react';
import Nav from '../components/Nav';

const Contact = () => {
    return (
        <div>
                  <section id="landing-page">
        <Nav />
       
                 <div className="modal">
          <div className="modal__half modal__about">
              <h3 className="modal__title modal__title--about">Here's a bit about me.</h3>
              <h4 className="modal__sub-title modal__sub-title--about">Fullstack Developer</h4>
              <p className="modal__para">
                  I'm a <b className="orange">fullstack developer</b>  with a strong passion for developing websites from scratch with
                  great <b className="orange">user experiences</b>.
                
                  I currently work on <b className="orange">difficult developing problems</b>  trying to better my skills. 
              </p>
              <div className="modal__languages">
                <figure className="modal__language">
                    <img className="modal__language--img" src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt=""/>
                     <span className="language__name">HTML</span>
                </figure>
                <figure className="modal__language">
                    <img className="modal__language--img" src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt=""/>
                    <span className="language__name">CSS</span>
                </figure>
                <figure className="modal__language" >
                    <img className="modal__language--img" src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Javascript_badge.svg" alt=""/>
                    <span className="language__name">JavaScript</span>
                </figure>
                <figure className="modal__language" >
                    <img className="modal__language--img" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt=""/>
                    <span className="language__name">React</span>
                </figure>
              </div>

          </div>
          <div className="modal__half modal__contact">
            {/* <i className="fas fa-times modal__exit click" onclick="toggleModal()"></i> */}
            <h3 className="modal__title modal__title--contact">
                Let's have a chat!
            </h3>
            <h3 className="modal__sub-title modal__sub-title--contact">
                I'm currently open to new opportunities.
            </h3>
            <form id="contact__form" onsubmit="contact(event)">
                <div className="form__item">
                    <label className="form__item--label">Name</label>
                    <input className="input" name="user_name" type="text"/> 
                </div>
                <div className="form__item">
                    <label className="form__item--label">Email</label>
                    <input className="input" name="user_email" type="email" />
                </div>
                <div className="form__item">
                    <label className="form__item--label">Message</label>
                    <textarea className="input" name="message" type="text" ></textarea>
                </div>
                <button id="contact__submit" class="form__submit">
                    Send it my way
                </button>
            </form>
            <div className="modal__overlay modal__overlay--loading">
                {/* <i className="fas fa-spinner"></i> */}
            </div>
             <div className="modal__overlay modal__overlay--success">
                Thanks for the message! Looking forward to speaking to you soon. 
             </div>
          </div>
      </div>
      </section>
        </div>
    );
}

export default Contact;
