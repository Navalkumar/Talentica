import React, { Component } from 'react';
import Rupee from "../img/rupee.png";
import Line from "../img/line.png";

class Pricing extends Component {
    render() {
        return (
            <section id="pricing">
            <h2>Pricing</h2>
            <img id="line" src={Line}></img>
           <p className="mb-5 pb-2" id="sub-head">Check out our attractive pricing plan Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta fringilla ullamcorper.</p>
           <div id="circle" className="d-flex flex-column align-items-center justify-content-center">
               <div className="price-parent d-flex align-items-start">
                   <img id="rupee" src={Rupee}></img>
               <p id="price" className="m-0">6000</p>
               </div>
               <p id="price-text" className="m-0">per month for single desk</p>
               <p id="tax" className="m-0">plus taxes as applicable</p>
           </div>
           <button class="mt-5" id="get-started">Get Started</button>
        </section>
            )
        }
    }
    
export default Pricing
    