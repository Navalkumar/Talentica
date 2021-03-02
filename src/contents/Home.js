import React, { Component } from 'react';
import BottomScroll from "../img/bottom-scroll.svg";
class Home extends Component {
    bottomFun(){
        window.scrollTo(0,document.body.scrollHeight);
    }
    render() {
        return (
                <section id="home" class="w-100">
                    <h2>Best Co-working Space at Best Price</h2>
                    <p>Expect the best-in-class! An Alley with a record of successful startups is launching a top-notch co-working space with exclusive amenities, only for tech startups. Recreate history at Bootstrap Alley.</p>
                    <button class="mt-4" id="get-started">Get Started</button>
                    <img onClick={this.bottomFun.bind(this)} id="bottom-scroll" alt="...." src={BottomScroll}></img>

                </section>
        );
    }
}

export default Home
