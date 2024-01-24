import React, { useState } from 'react';


function Contact(){ 

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6cd08edf-8610-4e24-8dd1-fd26f14122a9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
        setIsFormSubmitted(true);
      console.log("Success", res);
    }
};

    
    return (
        <div>
                  <section id="landing-page">
       
                 <div className="modal">
          <div className="modal__half modal__about">
              <h3 className="modal__title modal__title--about">Here's a bit about me.</h3>
              <h4 className="modal__sub-title modal__sub-title--about">Fullstack Developer</h4>
              <p className="modal__para">
                  I'm a <b className="orange">fullstack developer</b>  with a strong passion for developing websites from scratch with
                  great <b className="orange">user experiences</b>.
                
                  I currently work on <b className="orange">difficult developing problems</b>  trying to better my skills. 
              </p>
            

          </div>
          <div className="modal__half modal__contact">
            {/* <i className="fas fa-times modal__exit click" onclick="toggleModal()"></i> */}
            <h3 className="modal__title modal__title--contact">
                Let's have a chat!
            </h3>
            <h3 className="modal__sub-title modal__sub-title--contact">
                I'm currently open to new opportunities.
            </h3>
            <form id="contact__form" onSubmit={onSubmit}>
                <div className="form__item">
                    <label className="form__item--label">Name</label>
                    <input className="input" name="name" type="text"/> 
                </div>
                <div className="form__item">
                    <label className="form__item--label">Email</label>
                    <input className="input" name="email" type="email" />
                </div>
                <div className="form__item">
                    <label className="form__item--label">Message</label>
                    <textarea className="input" name="message" type="text" ></textarea>
                            </div>
                              <div className="h-captcha" data-captcha="true"></div>
                            <button type="submit" id="contact__submit" class="form__submit"> Send it my way</button>
                 
            </form>
            <div className="modal__overlay modal__overlay--loading">
                {/* <i className="fas fa-spinner"></i> */}
            </div>
            <div
            className={`modal__overlay modal__overlay--success ${
              isFormSubmitted ? "modal__overlay--visible" : ""
            }`}
          >
            Thanks for the message! Looking forward to speaking to you soon.
          </div>
          </div>
      </div>
            </section>
            <script src="https://web3forms.com/client/script.js" async defer></script>
        </div>
    );
}

export default Contact;
