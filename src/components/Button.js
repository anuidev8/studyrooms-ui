
import '../styles/button.css'

const Button = ({ title,bgcolor = "#fff",className,onClick }) =>{

    return(
        <>
        {
            onClick ? 
            <button className={`button d-flex ${className}`} style={{ backgroundColor:bgcolor }} onClick={(e)=>onClick(e)}>{title}</button>
            :<button className={`button d-flex ${className}`} style={{ backgroundColor:bgcolor }} >{title}</button>
            
        }
        
        </>

    )
}

export default Button