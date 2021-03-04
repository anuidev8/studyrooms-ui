
import '../styles/testimonials.css'
import mark from '../images/section-5/testimonials-icon.svg'

const Testimonials = ({user,message}) =>{

    return(

        <blockquote className="card testimonials d-flex justify-content" >
            <figure className="testimonials__mark">
                <img alt="qoutation marks" src={mark} width="100%" />
            </figure>
            <p className="testimonials__message text--white text-center"> 
               {message} 
            </p>

            <div className="testimonials__profile  text-center">
                        <figure className="profile-photo d-flex justify-content">
                            <img alt={user} src={user.photo}  loading="lazy" width="100%"/>
                        </figure>
                        <h5 className="text--white name">{user.name}</h5>
                        <h5 className="text--tomato role">{user.role}</h5>
            </div>
        </blockquote>

    )

}

export default Testimonials