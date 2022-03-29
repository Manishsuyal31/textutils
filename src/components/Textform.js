import React, { useState } from 'react'
import PropTypes from 'prop-types';

export default function Textform(props) {
    const [text, setText] = useState('')
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText)
    }
    return (
        <>
            <div className='container my-3' style={{color: props.mode==='light'?'black':'#fff'}}>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label my-4">{props.heading}</label>
                    <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="15" placeholder='ENTER TEXT HERE' style={{backgroundColor: props.mode==='light'?'white':'grey'}}></textarea>
                    <button className='btn btn-primary my-3' onClick={handleUpClick}>CONVERT TO UPPERCASE</button>
                    <button className='btn btn-primary my-3 mx-3' onClick={handleLoClick}>CONVERT TO LOWERCASE</button>
                    <button className='btn btn-danger my-3' onClick={handleClearClick}>CLEAR TEXT</button>
                </div>
            </div>
            <div className="container" style={{color: props.mode==='light'?'black':'#fff'}}>
                <div>
                    <label htmlFor="wordCount"><strong>CHARACTERS AND WORD COUNT : </strong></label>
                    <span id='wordCount'> {text.length} CHARACTERS AND {text.split(/\s+/).filter((element) => { return element.length != 0 }).length} WORDS</span>
                </div>
                <div className='mt-2'>
                    <label htmlFor="readTime"><strong>TOTAL READING TIME : </strong></label>
                    <span id='readTime'> {0.008 * text.split(' ').length} MINUTES APPROX</span>
                </div>
            </div>
        </>
    )
}
Textform.propTypes = { heading: PropTypes.string.isRequired }
Textform.defaultProps = { heading: "TITLE OF TEXTBOX HERE" }