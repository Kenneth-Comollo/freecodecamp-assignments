import React from "react"

const QuoteBox = function() {
    return (
    <div id="quote-container" className="container-fluid">
        <div id="quote-box" className="border">
            <div id="text">QUOTE GOES HERE</div>
            <div id="author">author name</div>
            <button id="new-quote" className="btn">Click For New Quote</button>
        </div>
    </div>
    );
}


export default QuoteBox;