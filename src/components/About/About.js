import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import profilePhoto from '../../Headshot_Ridhi.JPG'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className="about__text">
      <div className="about image">
        <img src={profilePhoto} alt="Ridhi's profile"
          style={{
            width: 300,
            height: 300,
            borderRadius: 300 / 2
          }}/>
      </div>

      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}!</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc' >{description && description}</p>

      <div className='about__contact center'>

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
      
    </div>
    // <div className='about center'>


    // </div>
  )
}

export default About
