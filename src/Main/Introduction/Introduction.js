import React ,{useState} from 'react'
import Describe from './Describe/Describe';
import './Introduction.css'
import ImgFeatures from './ImgFeatures/ImgFeatures';

function Introduction () {
    const [introduction , setIntroduction] = useState([
        {id:1 ,title:'modi sit est' ,body:'quis excepturi porro totam sint earum quo nulla perspici eius.', src:'img/features-1.png'},
        {id:2 ,title:'unde praesentium sed' ,body:'voluptas vel esse repudiandae quo excepturi', src:'img/features-2.png'},
        {id:3 ,title:'pariatur explicabo vel' ,body:'velit veniam ipsa sit nihi blanditis mollitia natus', src:'img/features-3.png'},
        {id:4 ,title:'nostrum qui quasi' ,body:'ration hic sepiente nostrum doloremque ilum nula praesentium id', src:'img/features-4.png'},
    ])
    const [imgSRC , setimgSRC] = useState('') 

    const clickHandler = (id) =>{
        let newIntro = introduction.find(item => {
            return item.id === id
        }) 
        setimgSRC(() => newIntro.src)
    }

    return (
        
        <section>
            <div class="container">
                <div class="wrapper">
                    <div class="wrapper-introduction">
                        {introduction.map(item =>(
                             <Describe onClicked={clickHandler} {...item}></Describe> 
                            ))
                        }
                    </div>
                    <ImgFeatures src={`${imgSRC ? imgSRC : 'img/features-1.png'}`}></ImgFeatures>
                </div>
                </div>   
        </section>
        
    );
}


export default Introduction