// // // import logo from './logo.svg';
// // import './App.css';
// // import TextForm from './components/TextForm';
// // import Navbar from './components/Navbar';
// // import React,{useState} from 'react'
// // import Alert from './components/Alert';
// // // import About from './components/About';

// // // for react-router
// // // import{
// // //   BrowserRouter as Router,
// // //   Routes,
// // //   Route
// // // } from "react-router-dom";

// // let aboutText="About";
// // let name="Text Modifier Website";
// // function App() {
// //   const[mode,setMode]=useState("dark");
// //   const[alert,setAlert]=useState(null);

// //   const showAlert=(message,type)=>{
// //     setAlert({
// //       msg :message,
// //       type:type
// //     })

// //     setTimeout(()=>{
// //       setAlert(null);
// //     },2000)
// //   }

// //   const toggleMode=(cls)=>{
// //     if(mode==='light'){
// //       setMode('dark');
// //       document.body.style.backgroundColor='#042743';
// //       showAlert("Dark mode has been enabled","success");
// //       document.title='TextUtils - Dark Mode';

// //     }else{
// //       setMode('light');
// //       document.body.style.backgroundColor='white';
// //       showAlert("Light mode has been enabled","success");
// //       document.title='TextUtils - Light Mode';
// //     }
// //   }

// //   return (
// //     <>
// //       {/* <Router>  */}
// //   {/* <Navbar title={name} aboutText={aboutText} mode={mode} toggleMode={toggleMode} /> */}
// //   {/* <Alert alert={alert}/> */}
// //   <div className="container my-5">
// //   {/* <TextForm heading="Enter the text to Analyse" mode={mode} showAlert={showAlert}/> */}
// //     {/* <Routes>
// //       <Route  exact path='/about'>
// //       <About/>
// //       </Route>
// //       <Route exact path='/'>
// //       <TextForm heading="Enter the text to Analyse" mode={mode} showAlert={showAlert}/>
// //       </Route>
// //     </Routes> */}
 
// //   </div>
  
// //     {/* <Navbar title='Capitalizer'/>
// //     <div className='container'>
// //     <TextForm heading="Enter Text To Analyse"/>
// //     </div> */}
// //     {/* </Router> */}
// //     </>
    
    
// //      );
// // }

// // export default App;


// import './App.css';
// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// // import About from './components/About';
// import React, { useState } from 'react';
// import Alert from './components/Alert';
// // import {
// //   BrowserRouter as Router,
// //   Routes,
// //   Route
// // } from "react-router-dom";

 
// function App() {
//   const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
//   const [alert, setAlert] = useState(null);

//   const showAlert = (message, type)=>{
//       setAlert({
//         msg: message,
//         type: type
//       })
//       setTimeout(() => {
//           setAlert(null);
//       }, 1500);
//   }

//   const removeBodyClasses=()=>{
//     document.body.classList.remove('bg-light');
//     document.body.classList.remove('bg-dark');
//     document.body.classList.remove('bg-warning');
//     document.body.classList.remove('bg-danger');
//     document.body.classList.remove('bg-success');
//     document.body.classList.remove('bg-primary');
//   }

//   const toggleMode = (cls)=>{
//     console.log(cls);
//     removeBodyClasses();
//     document.body.classList.add('bg-'+cls);
//     if(mode === 'light'){
//       setMode('dark');
//       document.body.style.backgroundColor = '#042743';
//       // showAlert("Dark mode has been enabled", "success");
//     }
//     else if(mode === 'dark'){
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//       // showAlert("Light mode has been enabled", "success");
//     }
//     else{
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//       showAlert("New mode has been enabled", "success");
//     }
//   }
//   return (
//     <>
    
//     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
//     <Alert alert={alert}/>
//     <div className="container my-3">
    
//     {/* /users --> Component 1
//         /users/home --> Component 2 */}
//           {/* <Route exact path="/about">
//             <About mode={mode} />
//           </Route>
//           <Route exact path="/"> */}
//             <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
//           {/* </Route> */}
    
//     </div>
    
//     </> 
//   );
// }

// export default App;

import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App