import './Testimonials.css'
import MemberTest from './MemberTest/MemberTest'

export default function Testimonials() {

    let allMember = [
        {srcImg:'img/testimonials/testimonials-2.jpg' , name:'Sara Wilsson' , job:'Designer'},
        {srcImg:'img/testimonials/testimonials-3.jpg' , name:'Jena Karlis' , job:'Store Owner'},
        {srcImg:'img/testimonials/testimonials-4.jpg' , name:'Matt Brandon' , job:'Freelancer'}
    ]

  return (
    <section>
        <div className="container">
            <div className="header-Testimonials">
                <h2>Testimonials</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit corrupti tempora quaerat quod repellendus, recusandae illum quas est ut dicta laudantium accusamus debitis blanditiis nobis quibusdam ratione odit dolores praesentium totam! Laboriosam, accusamus quisquam veritatis optio facilis aliquam quia non!
                </p>
            </div>
            <div className="body-testimonials">
                <MemberTest {...allMember[0]}></MemberTest>
                <MemberTest {...allMember[1]}></MemberTest>
                <MemberTest {...allMember[2]}></MemberTest>
            </div>
        </div>
    </section>
  )
}
