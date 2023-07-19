import profile_image from '../images/card-image.png'
import email_icon from '../images/email-icon.png'
import linkedin_icon from '../images/linkedin-icon.png'

export default function Info(){
    return(
        <header>
            <img src={profile_image} />
            <h1>ReshanCSX</h1>
            <h4>Full-Stack Developer</h4>
            <div className='contacts'>
                <button className='email'><img src={email_icon} /> Email</button>
                <button className='linkedin'><img src={linkedin_icon} /> LinkedIn</button>
            </div>
        </header>
    )
}