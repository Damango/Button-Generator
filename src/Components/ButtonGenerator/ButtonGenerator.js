import React, {useState, useEffect} from 'react';
import "./ButtonGenerator.css"
import TheButton from "../TheButton/TheButton"
import { render } from '@testing-library/react';
const ButtonGenerator = (props) => {


    const [theButtonText, setTheButtonText] = useState('Text');
    const [buttonStyles, setButtonStyles] = useState({
        backgroundColor: 'gray',
        fontFamily: "Roboto",
        fontWeight: 500,
        border: 'none',
        borderRadius: 0, 
        transition: 0.3
    })

    const [hoverStyle, setHoverStyle] = useState()
    const [baseStyle, setBaseStyle] = useState()
    const [buttonIcon, setButtonIcon] = useState()

    const [fontDropDown, setFontDropDown] = useState(0)



function applyButtonText(){
    let theInput = document.querySelector('.button-text-input');

    setTheButtonText(theInput.value)

}



function generateButton(){


    let newStyle;

    //Generate Background Color
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let a = 1
    let theColor = `rgba(${r}, ${g}, ${b}, ${a})`

    //Generate Font

    let fonts = ['Poppins','Roboto','Montserrat', 'Kanit', 'Open Sans']
    let weights = [300, 500, 600, 700]
    let pickedFont = fonts[Math.floor(Math.random() * fonts.length)];
    let pickedWeight = weights[Math.floor(Math.random() * weights.length)]



    //Generate Border
    let borderRadius = Math.floor(Math.random() * 15)
    let borderBool = Math.floor(Math.random() * 2)
    let theBorder
    if(borderBool === 1){
        let r2 = Math.floor(Math.random() * 255);
        let g2 = Math.floor(Math.random() * 255);
        let b2 = Math.floor(Math.random() * 255);
        let a2 = 1
        theBorder = '2px solid ' + `rgba(${r2}, ${g2}, ${b2}, ${a2})`
    }



    //Generate Icon
    let icons = [<i class="fas fa-check"></i>, <i class="fas fa-check-circle"></i>, <i class="fas fa-comment-dots"></i>, <i class="fas fa-cog"></i>, <i class="fas fa-file-archive"></i>,<i class="fas fa-folder"></i>, <i class="fab fa-git-alt"></i>, <i class="fab fa-itunes-note"></i>, <i class="fas fa-meteor"></i>, <i class="fas fa-shopping-cart"></i>, <i class="far fa-trash-alt"></i>]

    let pickedIcon = icons[Math.floor(Math.random() * icons.length)]
    setButtonIcon(pickedIcon)
    newStyle = {
        backgroundColor: theColor,
        fontFamily: pickedFont,
        fontWeight: pickedWeight,
        border: theBorder,
        borderRadius: borderRadius, 
        transition: 0.3
    }

    setButtonStyles(newStyle)
    setBaseStyle(newStyle)




//Generate Hover


let hoverStyle;


let r2 = Math.floor(Math.random() * 255);
let g2 = Math.floor(Math.random() * 255);
let b2 = Math.floor(Math.random() * 255);

let theColor2 = `rgba(${r2}, ${g2}, ${b2}, ${a})`


hoverStyle = {
    backgroundColor: theColor2,
    fontFamily: newStyle.fontFamily,
    fontWeight: newStyle.fontWeight
};


setHoverStyle(hoverStyle)



console.log(hoverStyle)
console.log(buttonStyles)




}


function renderDropDown(){


    let fonts = ['Poppins','Roboto','Montserrat', 'Kanit', 'Open Sans']

    if(fontDropDown === 1){
        return(fonts.map((font) =><div className="font-list-item">{font}</div>))
    }

    else{
        return('')
    }

  

}

function changeClass(path){

  
    

    if(path === 1){

     setButtonStyles(hoverStyle)
      
       
   
    }
    else{
      
        setButtonStyles(baseStyle)
        
       
    }



   

}





    return ( <div className="button-generator-container">

        <div className="button-editor">
            <h1>Button Text</h1>
            <input onInput={applyButtonText} placeholder="Enter Button Text" className="button-text-input"/>
   
            <h1>Button Font</h1>
            <div className="fonts-drop-down-container">
            <div className="selected-font" onClick={() => {if(fontDropDown === 0){setFontDropDown(1)} else{setFontDropDown(0)}}}>{'FUCK'}  <div className="drop-down-list">{renderDropDown()}</div></div>
           
            </div>
       
            <span>Before or After Text</span>
            <span> "Grid of icons to choose from"</span>
            <button className="generate-button"  onClick={generateButton}>Generate Button</button>
        </div>
        <div className="button-viewer">
            <TheButton icon={buttonIcon} buttonText={theButtonText} theStyles={buttonStyles} changeClass={changeClass}/>
        </div>





    </div> );
}
 
export default ButtonGenerator;