import './Client.css'
import Company from './Company/Company'

export default function Client() {

    let clientInfo = [
        {src:'img/clients/client-1.png'},
        {src:'img/clients/client-2.png'},
        {src:'img/clients/client-3.png'},
        {src:'img/clients/client-4.png'},
        {src:'img/clients/client-5.png'},
        {src:'img/clients/client-6.png'},
        {src:'img/clients/client-7.png'},
        {src:'img/clients/client-8.png'}
    ]

  return (
    <section>
        <div className="container header-client">
            <h2>Clients</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa architecto cum itaque dolorum! Magnam aliquid doloribus, vitae nisi laboriosam similique adipisci dolorum ea nulla omnis sequi modi necessitatibus iure quas assumenda soluta explicabo veniam architecto excepturi, expedita minima ipsa reprehenderit!</p>
            <div className="clients">
                <Company {...clientInfo[0]}></Company>
                <Company {...clientInfo[1]}></Company>
                <Company {...clientInfo[2]}></Company>
                <Company {...clientInfo[3]}></Company>
                <Company {...clientInfo[4]}></Company>
                <Company {...clientInfo[5]}></Company>
                <Company {...clientInfo[6]}></Company>
                <Company {...clientInfo[7]}></Company>
            </div>
        </div>
    </section>
  )
}
