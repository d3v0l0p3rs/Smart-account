import React from 'react'

const ContactComponent: React.FC = (): JSX.Element => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="text-center">Ponte en contacto</h2>
          </div>
          <div className="col-lg-8">
            <form
              className="form-contact contact_form"
              action="contact_process.php"
              method="post"
              id="contactForm"
              noValidate={false}>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      className="form-control w-100"
                      name="message"
                      id="message"
                      cols={30}
                      rows={9}
                      // onFocus="this.placeholder = ''"
                      // onBlur="this.placeholder = 'Mensaje'"
                      placeholder=" Mensaje"
                      style={{ resize: 'none' }}></textarea>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control valid"
                      name="name"
                      id="name"
                      type="text"
                      // onFocus="this.placeholder = ''"
                      // onBlur="this.placeholder = 'Nombre'"
                      placeholder="Nombre"></input>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control valid"
                      name="email"
                      id="email"
                      type="email"
                      // onFocus="this.placeholder = ''"
                      // onBlur="this.placeholder = 'Correo'"
                      placeholder="Correo"></input>
                  </div>
                </div>
              </div>
              <div className="form-group mt-3">
                <button
                  type="submit"
                  className="button button-contactForm boxed-btn">
                  Enviar
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-3 offset-lg-1">
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-home"></i>
              </span>
              <div className="media-body">
                <h3>Cali, Colombia.</h3>
                <p>
                  Cra 1 #12-23 <br></br> Calima
                </p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-tablet"></i>
              </span>
              <div className="media-body">
                <h3>+57 315 1234567</h3>
                <p>
                  Lunes a viernes <br></br> 9am a 6pm
                </p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="fa fa-whatsapp"></i>
              </span>
              <div className="media-body">
                <h3>+57 314 9876543</h3>
                <p>
                  Lunes a viernes <br></br> 9am a 6pm
                </p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-email"></i>
              </span>
              <div className="media-body">
                <h3>contacto@SmartAccount.com</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { ContactComponent }
