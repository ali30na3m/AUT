import './MemberTest.css'

export default function MemberTest({srcImg , name , job}) {
  return (
    <div >
        <div className="desc-member">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus rerum itaque non quaerat saepe ex expedita dicta quibusdam magni vel perferendis amet accusamus illum voluptatibus, id, animi aut quae! Molestias adipisci temporibus quas ipsa velit.</p>
        <div className="memberT"> 
            <img src={srcImg}/>
            <span className="name-member-T">{name}</span>
            <span className="member-job">{job}</span>
        </div>
        </div>
    </div>
  )
}
