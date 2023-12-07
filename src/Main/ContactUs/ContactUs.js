import './ContactUs.css'
import InputTags from './InputTags/InputTags'


export default function ContactUs() {

  let inputInfo = [
    {className: 'username-inpt',
     totalClass: 'userName',
     innerTag: 'Your Name',
     typeOfInpt: 'text',
     classNameInpts: 'inpt'
    },
    {className: 'Email-inpt',
     totalClass: 'Email',
     innerTag: 'Your Email',
     typeOfInpt: 'email',
     classNameInpts: 'inpt'
    },
    {className: 'Email-inpt',
    totalClass: 'Email',
    innerTag: 'Your Email',
    typeOfInpt: 'email',
    classNameInpts: 'inpt'
    }
  ]

  return (
    <div className='ContactUs'>
        <div className='container'>
            <div className='header-contact-us'>
              <h2>Contact Us</h2>
            </div>

            <div className='wrapper-contact'>

              <div className='job-contact'>

                <div className='detail-contact-job'>
                  <i class="icofont-google-map"></i>
                  <div className='info-job-contact'>
                    <h4>Location :</h4>
                    <p>No. 350, Hafez Ave, Valiasr square, Tehran,Iran 1591634311</p>
                  </div>
                </div>

                <div className='detail-contact-job'>
                  <i class="icofont-envelope"></i>
                  <div className='info-job-contact'>
                    <h4>Email:</h4>
                    <p>intrel@aut.ac.ir</p>
                  </div>
                </div>

                <div className='detail-contact-job'>
                  <i class="icofont-phone"></i>
                  <div className='info-job-contact'>
                    <h4>Call:</h4>
                    <p>+98 (21)64540</p>
                  </div>
                </div>

                <img src="img/map.jpg" alt="" />

              </div>

              <div className='client-contact job-contact'>

                <div className='Emname-inpt'>
                  <InputTags {...inputInfo[0]}></InputTags>
                  <InputTags {...inputInfo[1]}></InputTags>
                </div>
                <div className='subject-inpt'>
                  <label htmlFor="subject">Subject</label>
                  <input type="text" className='inpt' name='subject' id='subject'/>
                </div>
                <div className='message-area'>
                  <label htmlFor="message">message</label>
                  <textarea name="message" id="message" cols="30" rows="10"></textarea>
                </div>
                
                <div className='width-btn'>
                  <button className='btn-client'>Send Message</button>
                </div>
              </div>
            </div>

        </div>
    </div>
  )
}
