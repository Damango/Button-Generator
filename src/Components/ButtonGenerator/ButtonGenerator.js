import React, {useState, useEffect} from 'react';
import "./ButtonGenerator.css"
import TheButton from "../TheButton/TheButton"
import { render } from '@testing-library/react';
const ButtonGenerator = (props) => {


    const [theButtonText, setTheButtonText] = useState('Text');
    const [buttonStyles, setButtonStyles] = useState({
        backgroundColor: 'rgba(127, 140, 141,1.0)',
        fontFamily: "Roboto",
        fontWeight: 500,
        border: '0px solid transparent',
        borderRadius: 0, 
        transition: 0.3
    })

    const [hoverStyle, setHoverStyle] = useState()
    const [baseStyle, setBaseStyle] = useState()
    const [prevStyle, setPrevStyle] = useState()
    const [buttonIcon, setButtonIcon] = useState()
    const [borderToggle, setBorderToggle] = useState()

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
        setBorderToggle(true)
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
    let i;
    for(i = 0; i <fonts.length; i++){
        if(fonts[i] === buttonStyles.fontFamily){
            fonts.splice(i,1)
        }
    }

    if(fontDropDown === 1){
        return(fonts.map((font) =><div className="font-list-item" onClick={() => {changeFont(font)}}>{font}</div>))
    }

    else{
        return('')
    }

  

}


function changeFont(font){

    let oldStyle = buttonStyles;
    let newFont = {
        fontFamily: font
    }

    let newObject = Object.assign({},oldStyle, newFont)



    setButtonStyles(newObject)

}

function changeClass(path){

  
    

    if(path === 1){

     setButtonStyles(hoverStyle)
      
       
   
    }
    else{
      
        setButtonStyles(baseStyle)
        
       
    }



   

}


function changeFontWeight(){


    let inputField = document.querySelector('.font-weight-input').value
    inputField = parseInt(inputField)
    
    if(inputField >= 100){


        let oldStyle = buttonStyles;
        let newFontWeight = {
            fontWeight: inputField
        }
    
        let newObject = Object.assign({},oldStyle, newFontWeight)
    
    
    
        setButtonStyles(newObject)
    

    }

}


function borderSwitch(){

    let oldStyle = buttonStyles;
    let borderStyle = oldStyle.border
    setPrevStyle(oldStyle)
    let newObject

    if(borderToggle === false){

        let newBorder = {
            border: prevStyle.border
        }
    
        newObject = Object.assign({},oldStyle, newBorder)

        
    }

    if(borderToggle === true){
        let newBorder = {
            border: '0px solid transparent'
        }
    
        newObject = Object.assign({},oldStyle, newBorder)
    
        setBorderToggle(false)
    }
  
  

    setButtonStyles(newObject)

    console.log(newObject)

}





    return ( <div className="button-generator-container">

        <div className="button-editor">
            <h1>Button Text</h1>
            <input onInput={applyButtonText} placeholder="Enter Button Text" className="button-text-input"/>
            <h1>Background Color</h1>
            <div>{buttonStyles.backgroundColor}</div>
            <h1>Button Font</h1>
            <div className="fonts-drop-down-container">
            <div className="selected-font" onClick={() => {if(fontDropDown === 0){setFontDropDown(1)} else{setFontDropDown(0)}}}>{buttonStyles.fontFamily}  <div className="drop-down-list">{renderDropDown()}</div></div>
           <h3>Font Weight</h3>
           <input className="font-weight-input" onInput={changeFontWeight} defaultValue={buttonStyles.fontWeight}/>
            </div>


            <h1>Border Styles</h1>
            <div className="border-switch" onClick={borderSwitch}></div>
       
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