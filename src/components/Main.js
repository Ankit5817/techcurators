import React,{useState} from 'react'
import './main.css'

export default function Main() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();

    const [answer, setAnswer] = useState("script");
    
    let send = ()=>{
        let ans = document.getElementById("tex").value;
        let cor = document.getElementById('cor');
        let incor = document.getElementById('incor');
        let ques2 = document.getElementById('ques2');

        if(ans !== `${answer}`){
            incor.style.display = "block";
            document.getElementById("tex").value='';
            setTimeout(() => {
                incor.style.display = "none";
            }, 2000);
            
        }
        else{
            cor.style.display = "block";
            ques2.style.display = "block";
            setAnswer('float');
            document.getElementById("tex").value='';
            setTimeout(() => {
                cor.style.display = "none";
            }, 2000);
            
        }
    }

    return (
        <div className='main' >
            <div className="top">
                <div className="hamburger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <img className='lg' src="https://www.techcurators.in/wp-content/uploads/2021/07/logo-yellow-no-border-220x68.png" alt="" />
            </div>
            
            <div>
                <span className='name'>Cairo</span>
                <span>{hour}:{min}</span>
            </div>
            <span className='ques'>1. Inside which HTML element do we put the JavaScript?</span>
            <div>
                <button>scripting</button>
                <button>script</button>
                <button>js</button>
                <button>javaScript</button>
            </div>
            
            <div id='ques2'>
                <div>
                    <span className='name'>Cairo</span>
                    <span>{hour}:{min}</span>
                </div>
                <span className='q2'>2. Which is not valid data type in Javascript?</span>
                <div>
                    <button>Undefinded</button>
                    <button>Boolean</button>
                    <button>float</button>
                    <button>Number</button>
                </div>
            </div>
            

            <span id='cor' className='response'>Correct!!!</span>
            <span id='incor' className='response'>Incorrect, Try Again!!!</span>
            <div className='msg'>
                <input type="text" className='txt' id='tex' placeholder='Enter Your Answer'/>
                <button className='send' onClick={send}>Send</button>
            </div>
        </div>
    )
}
