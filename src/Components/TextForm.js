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

    return (
        <>
            <div className="container">
                <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h1>
                <div className="mb-3 my-3">
                    <textarea className="form-control" value={text} onChange={(e) => { setText(e.target.value) }} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8">{text}</textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={speak}>Speak</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="container">
                <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Your Text Summary</h1>
                <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{text.split(' ').length} Words and {text.length} Characters</p>
                <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{0.008 * text.split(' ')} Minutes to Read Full Text</p>
                <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Preview Of Your Text :</h1>
                <h6 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{text.length > 0 ? text : "Enter Something In TextArea To Preview It Here Please !!!"}</h6>
            </div>
        </>
    )
}
