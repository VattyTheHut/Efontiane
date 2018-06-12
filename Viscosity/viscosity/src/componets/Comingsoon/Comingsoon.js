import React from "react"
import "./Comingsoon.css"
import { $ } from 'jquery';


class Comingsoon extends React.Component{
    render(){
        // window['jQuery'] = window['$'] = $;


        // $(document).ready(() => {   
        //     // Get the date
        //     function e() {
        //         var e = new Date;
        //         e.setDate(e.getDate() + 20);
          
        //         var dd = e.getDate();
        //         var mm = e.getMonth() + 1;
        //         var y = e.getFullYear();
          
        //         var futureFormattedDate = mm + "/" + dd + "/" + y + ' 12:00:00';
          
        //         return futureFormattedDate;
        //     }
          
        //     $('.countdown').downCount({
        //         date: e(),
        //         offset: -4
        //     });
        //   });


        return(
            <div className="comingsoon">
            <div id="particles-js"></div>
            <div id="container">
               <div id="comming-soon">
                  <span>Blog comming Soon!</span>
                  <ul class="countdown">
                     <li>
                        <span class="days">OO</span>
                        <p class="under-t">days</p>
                     </li>
                     <li>
                        <span class="hours">OO</span>
                        <p class="under-t">hours</p>
                     </li>
                     <li>
                        <span class="minutes">OO</span>
                        <p class="under-t">minutes</p>
                     </li>
                     <li>
                        <span class="seconds">OO</span>
                        <p class="under-t">seconds</p>
                     </li>
                  </ul>
               </div>
               </div>
               
            </div>
        )
    }

}

export default Comingsoon;


