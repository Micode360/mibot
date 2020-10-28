import React, { Component } from 'react';
import { connect } from 'react-redux';

class fccproject extends Component {

    handleChange = () => {
    //Adding quotes randomly.
       setTimeout(() => {
        const randomMachine = Math.floor(Math.random() * this.props.Quotes.length);
        document.getElementById('text').innerHTML = `"${this.props.Quotes[randomMachine].quote.toUpperCase()}"`;
        document.getElementById('author').innerHTML = this.props.Quotes[randomMachine].author.toUpperCase();
       }, 500);
    }
    

    handleClick = () => {
        const quote = document.querySelector('#text');
        const author = document.querySelector('#author');
        window.open(`https://twitter.com/intent/tweet?hashtags=quotes&related&text=${quote.textContent.toLowerCase()} ${author.textContent.toLowerCase()}`);
    }




    render() {
        // console.log(this.props);
        return (
            <main id=" shell" className="container">
            <svg className="quote" width="289" height="247" viewBox="0 0 289 247" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M128 0H0V128H71.4729C75.1213 145.774 75.6327 176.059 55 191V247C109.667 237.13 126.022 167.029 127.831 128H128V122V0Z" fill="#030303" fillOpacity="0.09"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M289 0H161V128H232.473C236.121 145.774 236.633 176.059 216 191V247C270.667 237.13 287.022 167.029 288.831 128H289V122V0Z" fill="#030303" fillOpacity="0.09"/>
            </svg>
            

            <div id="quote-box">
                    <div>
                        <span id="text">"{this.props.Quotes[1].quote.toUpperCase()}"</span>
                    </div>
                    <div>
                        <span id="author">-{this.props.Quotes[1].author}</span>
                    </div>
                    <div className="button-column">
                    <button onClick={this.handleClick} id="tweet-quote" ><i className="fa fa-twitter-square" aria-hidden="true"></i></button>
                    <button  onClick={this.handleChange} id="new-quote">New Quote</button></div>
                </div>
            </main>
        );
    }
}


const makeStateEqualToProps = (state) => {
    return {
        Quotes: state.section.quotes,
    }
}

export default connect(makeStateEqualToProps)(fccproject);