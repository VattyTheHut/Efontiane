// import React from "react"
// import Button  from "/Users/vatekehcorlon/viscosity_va0.1/viscosity/client/src/componets/Button/Button.js"

// import "./Comingsoon.css"



// class Comingsoon extends React.Component{

//     constructor(props){
//         super(props)


//         getInitialState: ()=> {

//             let now = new Date().getTime();
//             let launchDate = new Date(this.props.date).getTime();
//             let distance = launchDate - now; 


//             timeCal = {
//                 days: Math.floor( distance / (1000 * 60 * 60 * 24) ),
//                 hours: Math.floor( (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) ),
//                 mins: Math.floor( (distance % (1000 * 60 * 60)) / (1000 * 60) ), 
//                 seconds: Math.floor( (distance % (1000 * 60)) / 1000)
//             }

//             // This is called before our render function. The object that is 
//             // returned is assigned to this.state, so we can use it later.
    
//             return { timeCal };
//         },

//         componentDidMount: () =>{

//             // componentDidMount is called by react when the component 
//             // has been rendered on the page. We can set the interval here:
    
//             this.timer = setInterval(this.tick, 1000)
//         },

//         componentWillUnmount: () =>{

//             // This method is called immediately before the component is removed
//             // from the page and destroyed. We can clear the interval here:
    
//             clearInterval(this.timer);
//         },


//         tick: function() => {

//             // This function is called every 50 ms. It updates the 
//             // elapsed counter. Calling setState causes the component to be re-rendered
    
//             this.setState({elapsed: new Date() - this.props.start});
//         },


//     }




//     render(){

        
            

//         //  // Update every second
//         //  (function intvl(){ 
//         //      setInterval(() => {
//         //     // Get todays date and time (ms)
//         //     now = new Date().getTime();
//         //     distance = launchDate - now; 

//         //     console.log( {days: days, hours: hours, mins: mins, seconds: seconds} )
//         //     days = Math.floor( distance / (1000 * 60 * 60 * 24) ); 
//         //     hours = Math.floor( (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) ); 
//         //     mins = Math.floor( (distance % (1000 * 60 * 60)) / (1000 * 60) ); 
//         //     seconds = Math.floor( (distance % (1000 * 60)) / 1000); 


//         //     // If launch date is reached
//         //     if (distance < 0) {
//         //       // Stop countdown
//         //       clearInterval(intvl());
//         //       // Style and output text
//         //       countdown.style.color = '#17a2b8';
//         //       countdown.innerHTML = 'Launched!';
//         //     }
//         //   }, 1000);
//         // })


        
        

//         return(
//             <div className="comingsoon">
//                 <section className="landing">
//                     <div className="landing-inner">
//                         <h1>VALON</h1>
//                         <p>A social network for developers</p>
//                         <h1>Coming Soon</h1>
//                         <div className="countdown">
//                             <div>{ `${days}` }<span>Days</span></div> 
//                             <div>{ `${hours}` }<span>Hours</span></div>
//                             <div>{ `${mins}` }<span>Minutes</span></div>
//                             <div>{ `${seconds}` }<span>Seconds</span></div>
//                         </div>
//                     </div>
//                 </section> 
//             </div>
//         )
//     }

// }

// export default Comingsoon;


