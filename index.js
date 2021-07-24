// import React from 'react';
// import "./style.css";
// import Typewriter from 'typewriter-effect'

// function App() {
//     return (
//         <div className="App"> 
//         <Typewriter
//             onInit={(typewriter) => {
//                 typewriter.typeString("Hello").start();
//             }}
//         />
//         </div>
//     );
// }

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})


// export default App;

// document.body.appendChild(App());