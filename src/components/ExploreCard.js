
import '../styles/exploreCard.css'

const ExploreCard = ({ icon,title,description }) =>{

        return(

            <article className="card exp-card d-flex justify-content position-relative">
                <i className="exp-card__icon">
                    {icon}
                </i>
                <h3 className="exp-card__title">{title}</h3>
                <p className="exp-card__description text--gray text-center">
                    {description}
                </p>
                <div className="exp-card__underline position-absolute"></div>
                <div className="exp-card__action-wrapper position-absolute">
                <a className="exp-card__action  d-flex justify-content " href="/">
                    <svg  strokeWidth={0} viewBox="0 0 16 16" height="1.5em" width="1.5em" ><path fillRule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clipRule="evenodd" /><path fillRule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clipRule="evenodd" /></svg>
                </a>

                </div>
            </article>
        )

}

export default ExploreCard