import React, {useRef} from 'react'
import emailjs from 'emailjs-com'

const contactMe = () => {
    const form = useRef()

    let sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_svd3g0p', form.current, 'user_wyBd7jAtG8fKIQt3RhrJz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    //   form.current.reset
    }
    return (
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      );

}

export default contactMe