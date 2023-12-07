import Link from '../../../Footer/Link/Link'
import './TeamMember.css'

export default function TeamMember({src , name , job}) {
  return (
    <div >
        <div class="Tw">
            <img src={src}>
            </img>
            <div class="ab-Tw">
                <h3>{name}</h3>
                <span class="diff"></span>
                <p>{job}</p>
                <div class="social-team">
                  <i class="icofont-twitter"></i>
                  <i class="icofont-facebook"></i>
                  <i class="icofont-instagram"></i>
                  <i class="icofont-linkedin"></i>
                </div>
            </div>
        </div>
    </div>
  )
}
