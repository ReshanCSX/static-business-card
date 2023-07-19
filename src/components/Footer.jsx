import twitter_icon from '../images/Twitter-Icon.png'
import facebook_icon from '../images/Facebook-Icon.png'
import instagram_icon from '../images/Instagram-Icon.png'
import github_icon from '../images/GitHub-Icon.png'

export default function Footer(){
    return(
        <footer>
            <a href="https://www.twitter.com/ReshanCSX"><img src={twitter_icon}/></a>
            <a href="https://www.facebook.com/ReshanCSX"><img src={facebook_icon}/></a>
            <a href="https://www.instagram.com/ReshanCSX"><img src={instagram_icon}/></a>
            <a href="https://www.github.com/ReshanCSX"><img src={github_icon}/></a>
        </footer>
    )
}