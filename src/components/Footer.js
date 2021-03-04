

import '../styles/footer.css'
import primaryBrand from '../images/footer/primary-brand.svg'
import Button from '../components/Button'

const Footer = () =>{

    
 
    const onSendEmail = (e) =>{
        e.preventDefault()
        let { email } = e.target
        email.value = ''
        email.placeholder = ''
        
        setTimeout(() => {
            email.placeholder = 'Email enviado'
            setTimeout(() => {
                email.placeholder = ''
            }, 900);
            email.classList.add('placeholder')
        },900);
        const emailicon = document.getElementById('emailicon')
        emailicon.classList.add('translate-icon')
        emailicon.addEventListener('animationend',()=>{
            email.placeholder = 'Igrese su email'
            email.classList.remove('placeholder')
            emailicon.classList.remove('translate-icon')
        })
    }
    return(

        <footer className="footer position-relative">
            <div className="footer-divider"></div>
            <div className="footer-container">
            <div className="wrapper">
                <div className="grid-3">
                      <div className="grid-item">
                          <a href="/" className="brand">
                              <img alt="studyrooms" src={primaryBrand} width="100%" loading="lazy" />  
                          </a>
                          <p className="footer-text-description text--white">
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidun.
                          </p>
                             <form onSubmit={onSendEmail}>
                                <fieldset className="email-input-box position-relative">
                                        <svg id="emailicon" className="email-icon position-absolute" strokeWidth={0} viewBox="0 0 24 24"  ><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                                        <input type="email" name="email"  id="email" className="email-input" placeholder="Ingrese su email"  />
                                
                                        <Button title="Enviar" bgcolor="#FBAD49" className="email-button text--white position-absolute"  
                                     />

                                </fieldset>
                                <div className="terms-box">
                                    <input type="checkbox" id="terms" name="terms" />
                                    <label htmlFor="terms" className="text--white label-terms">Acepto los términos y condiciones</label>
                                </div>
                            </form>   
                
                     </div>
                     <div className="grid-item our-section d-flex ">
                         <h2 className="text--primary">Nosotros</h2>
                         <div className="list-wrapper d-flex">
                            <ul className="our-list">
                                <li className="list-item">
                                    <a href="/" className="list-link text--white">Nuestros valores</a>
                                </li>
                                <li className="list-item">
                                    <a href="/"  className="list-link text--white">Nuestros Aliados</a>
                                </li>
                                <li className="list-item">
                                    <a href="/" className="list-link text--white">Ser un aliado</a>
                                </li>
                                <li className="list-item">
                                    <a href="/" className="list-link text--white">Trabaja con nosotros</a>
                                </li>
                                <li className="list-item">
                                    <a href="/" className="list-link text--white">Blog</a>
                                </li>
                            </ul>

                         </div>
                     </div>
                     <div className="grid-item d-flex">
                        <h2 className="text--primary">Contacto</h2>
                            <div className="list-wrapper d-flex">
                                <ul className="our-list">
                                    <li className="list-item contact-item  d-flex">
                                        <i className="contact-icon phone-icon">
                                            <svg strokeWidth={0} viewBox="0 0 512 512"  ><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" /></svg>
                                            
                                        </i>
                                        <a href="/" className="list-link text--white">
                                            <span>Phone</span>
                                            <br />
                                            444 777 0000
                                        </a>
                                       
                                    </li>
                                    <li className="list-item contact-item  d-flex">
                                        <i className="contact-icon address-icon">
                                            <svg  strokeWidth={0} viewBox="0 0 384 512" ><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" /></svg>

                                        </i>
                                        <a href="/" className="list-link text--white">
                                            <span>Dirección</span>
                                            <br />
                                            Colombia - Bogotá
                                        </a>
                                       
                                    </li>
                                    <li className="list-item contact-item  d-flex">
                                        <i className="contact-icon mail-icon">
                                            <svg strokeWidth={0} viewBox="0 0 512 512"><path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z" /></svg>
                                            
                                        </i>
                                        <a href="/" className="list-link text--white">
                                            <span>Email</span>
                                            <br />
                                            contacto@mail.co
                                        </a>
                                       
                                    </li>
                                </ul>

                         </div>
                     </div>  
                </div>
            </div>

            </div>
            <aside className="socialmedia-footer">
                <div className="socialmedia-wrapper d-flex">
                        <h3 className="copyright-text">2021 StudyRooms All rights reserved.</h3> 
                        <div className="socialmedias d-flex">
                            <a className="socialmedia-link" href="/#">
                                <svg  strokeWidth={0} viewBox="0 0 320 512" ><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
                            </a>
                            

                            <a className="socialmedia-link instagram-icon" href="/#">
                                <svg strokeWidth={0} viewBox="0 0 1024 1024" ><path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" /></svg>
                            </a>


                            <a className="socialmedia-link linkedin-icon" href="/#">
                    
                                <svg strokeWidth={0} viewBox="0 0 1024 1024" ><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" /></svg>
                            </a>

                            <a className="socialmedia-link twitter-icon" href="/#">
                                
                                <svg strokeWidth={0} viewBox="0 0 1024 1024"  ><path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z" /></svg>
                            </a>
                        </div>
                </div>

            </aside>
        </footer>

    )
}

export default Footer