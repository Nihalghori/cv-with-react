import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import myImage from './myImage.jpg';

function Hi() {
  return <div>
    <header className= "header">
      <h1 >MUHAMMAD NIHAL GHOURI</h1>
      <img width="150px"src={myImage} alt="" className='img' />
      <h2>FULLSTACK DEVELOPER</h2>
      <p>With a passion for technology and a strong technical background, I am a qualified full-stack developer.<br></br> 
 I have gained hands-on experience in various technical domains.<br></br> I seamlessly integrate training 
        and professional expertise to comprehend and suggest solutions to complex business requirements.</p>
 
    </header>
    <h2 className = "info">CONTACT INFORMATION</h2>
    <ul>
    <li className = "list"><b>PHONE : 03113841096</b></li>
    <li className = "list"><b>Email : nihal1@gmail.com</b></li>
    <li className = "list"><b>Address : XYZ karachi</b></li>
    <li className = "list"><b>CNIC : 12233XXXXX</b></li>
    </ul>
    <h2 className = "info">EDUCATION</h2>
    <h3>Intermediate :</h3>
    <p className = "para2"><li>Gulshan Degree boys and girls collage</li></p>
    <h3>Matriculation :</h3>
    <p className = "para3"><li>Metropolis Education System</li></p>
    <h2 className = "info">OBJECTIVE</h2>
    <p className = "para4">'Experienced information technology professional in search of a position that allows me to apply my management <br></br> and technical skills to achieve corporate goals, 
      develop improved processes for managing IT requests and accomplish projects more efficiently.</p>
      <div >
      <h2 className = "info2">SKILLS</h2>
      <li className = "list2"><b>TEam work ⭐⭐⭐⭐☆</b></li>
    <li className = "list2"><b>Time management ⭐⭐⭐⭐☆</b></li>
    <li className = "list2"><b>Frontend ⭐⭐⭐⭐☆</b></li>
    <li className = "list2"><b>Backend ⭐⭐⭐⭐☆</b></li>
    <li className = "list2"><b> Graphic designing ⭐⭐⭐⭐☆</b></li>
      </div>   
  </div>;
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));
