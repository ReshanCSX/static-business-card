import profile_image from '../images/card-image.png'
import email_icon from '../images/email-icon.png'
import linkedin_icon from '../images/linkedin-icon.png'

export default function Info(){

    function mailHandler(){
        window.location.href = 'mailto:reshan@example.com';
    }

    function linkedInHandler(){
        window.open('https://www.linkedin.com/in/reshancsx/', '_blank');
    }
      

    return(

        <header>
            <img src={profile_image} />
            <h1>ReshanCSX</h1>
            <h4>Full-Stack Developer</h4>
            <div className='contacts'>
                <button className='email' onClick={mailHandler}><img src={email_icon} /> Email</button>
                <button className='linkedin' onClick={linkedInHandler}><img src={linkedin_icon} /> LinkedIn</button>
            </div>
        </header>
    )
}