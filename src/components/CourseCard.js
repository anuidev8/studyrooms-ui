import '../styles/courseCard.css'
import Rating from './Rating'



const CourseCard = ({ image,title,tag,user,hours,sections,price,discount }) =>{

        return(

            <article className="card course-card d-flex">
                 <div className="course-card__header position-relative d-flex">
                    <figure className="course-card-image position-absolute">
                        <img alt={title} src={image}  width="100%" height="100%"  />
                    </figure>
                    <div className="tag-wrapper d-flex">
                        <span className="course-card-tag position-absolute text--white">{tag}</span>
                    </div>
                </div>   
                <div className="course-card__body">
                    <div className="course-card__profile d-flex">
                        <figure className="course-card__profile profile-photo">
                            <img alt={user} src={user.photo}  loading="lazy" width="100%"/>
                        </figure>
                        <h5 className="profile-name">por {user.name}</h5>
                    </div>
                    <h3 className="course-card__title">
                        {title}
                    </h3>
                    <div className="course-card__rating">
                            <Rating number={'5.0'} />
                    </div>

              
                    <aside className="course-card__deatils d-flex">
                        <div className="course-time d-flex">
                            <svg strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" ><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z" /><path d="M13 7L11 7 11 12.414 14.293 15.707 15.707 14.293 13 11.586z" /></svg>
                            <h6>{hours} horas</h6>
                        </div>

                        <div className="course-sections d-flex">
                            <svg strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" ><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z" /><path d="M13 7L11 7 11 12.414 14.293 15.707 15.707 14.293 13 11.586z" /></svg>
                            <h6>{sections} secciones</h6>
                        </div>

                        <div className="course-price d-flex">
                            <h6>{price} <span className="discount position-relative">{discount}</span></h6>
                        </div>
                    </aside>
                    
                    <button className="button d-flex course-action-btn" >ver curso</button>
                </div>
            </article>

        )

}

export default CourseCard