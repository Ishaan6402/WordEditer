import React, { useState } from 'react';

export default function TextForm(props) {

    const [text, setText] = useState('');

    let handleUpClick = () => {
        if (text !== '') {
            let temptext = text.toUpperCase();
            setText(temptext);
            props.showAlert("Text Converted To UpperCase", "success");
        }
        else {
            props.showAlert("Enter Some Text First To Convert It Into UpperCase !!!", "danger");
        }

    }

    let handleLoClick = () => {
        if (text !== '') {
            let temptext = text.toLowerCase();
            setText(temptext);
            props.showAlert("Text Converted To LowerCase", "success");
        }
        else {
            props.showAlert("Enter Some Text First To Convert It Into LowerCase !!!", "danger");
        }

    }

    const speak = () => {
        if (text !== '') {
            let msg = new SpeechSynthesisUtterance();
            msg.text = text;
            window.speechSynthesis.speak(msg);
        }
        else {
            props.showAlert("Enter Some Text First !!!", "danger");
        }
    }

    const handleCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied To ClipBoard", "success");
    }

    const handleClear = () => {
        if (text !== '') {
            setText('');
        }
        else {
            props.showAlert("Enter Some Text First !!!", "danger");
        }
    }
    const handleSpaces = () => {
        if (text !== '') {
            var temptext = text.split(' ');
            var ttext = '';
            temptext.forEach((textObj) => {
                if (textObj !== '') {
                    ttext += textObj + ' ';
                }
            });
            setText(ttext);
            props.showAlert("Extra Spaces Removed", "success");
        }
        else {
            props.showAlert("Enter Some Text First !!!", "danger");
        }

    }

    const handleEmail = () => {
        if (text !== '') {
            let temp = text.match(/[a-zA-z0-9._-]+@+[a-zA-z0-9._-]+.com/g)[0];
            setText(temp);
            props.showAlert("Email-ID's Extracted", "success");
        }
        else {
            props.showAlert("Enter Some Text First !!!", "danger");
        }
    }

    return (
        <>
            <div>
                <div className="container">
                    <div className="heading-container" style={{ display: "flex", justifyContent: "center" }}>
                        <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' , textDecoration:"underline double"}}>{props.heading.toUpperCase()}</h1>
                    </div>
                    <div className="mb-3 my-3">
                        <textarea className="form-control" value={text} onChange={(e) => { setText(e.target.value) }} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8">{text}</textarea>
                    </div>
                    <div className="button-container" style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
                        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert To LowerCase</button>
                        <button className="btn btn-primary mx-2 my-1" onClick={speak}>Speak</button>
                        <button className="btn btn-info mx-2 my-1" onClick={handleCopy}>Copy Text</button>
                        <button className="btn btn-warning mx-2 my-1" onClick={handleSpaces}>Remove Extra Spaces</button>
                        <button className="btn btn-success mx-2 my-1" onClick={handleEmail}>Extract Email</button>
                        <button className="btn btn-danger mx-2 my-1" onClick={handleClear}>Clear</button>
                    </div>
                </div>
                <div className="container">
                    <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black'  , textDecoration:"underline"}}>YOUR TEXT SUMMARY</h1>
                    <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Number Of Words In Above Text : {text.split(' ').filter((Obj) => { return Obj.length !== 0 }).length}</p>
                    <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Number Of Characters In Above Text : {text.length}</p>
                    <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}> Time To Read Full Text : {0.008 * text.split(' ').filter((Obj) => { return Obj.length !== 0 }).length} Minutes</p>
                    <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black'  , textDecoration:"underline"}}>PREVIEW OF ABOVE TEXT</h1>
                    <h6 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{text.length > 0 ? text : "Enter Something In TextArea To Preview It Here Please !!!"}</h6>
                </div>
            </div>
        </>
    )
}
