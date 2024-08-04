const volumeBox = document.querySelector('.volume-box');
const colorBox = document.querySelector('.volume-color');
const volumeResult = document.querySelector('.volume-result')
const incerement = document.getElementById('increment');
const decrement = document.getElementById('decrement')
const volumeWidth = parseInt( getComputedStyle(volumeBox).width)
const start_Task_4 =()=>{
    volumeBox.addEventListener('click',(e)=>{
let selectedOfset = e.offsetX
        changeColorBoxWidth(selectedOfset)

        showDisplay(selectedOfset)
    })

    incerement.addEventListener("click",getIncrementValue)
    decrement.addEventListener('click',getDecrementValue)

}

const showDisplay = (selectedOfset)=>{
    let result = Math.floor( selectedOfset*100 /volumeWidth)
   

        volumeResult.textContent =result + "%"
   

}

const getIncrementValue = ()=>{

    let width =getColorBoxWidth()
    width-=5
    changeColorBoxWidth(width)
    showDisplay(width)

    
}

const getDecrementValue = ()=>{
    let width =getColorBoxWidth()
    width += 5;
    changeColorBoxWidth(width) 
    showDisplay(width)
}
const changeColorBoxWidth = (selectedOfset)=>{
    if(selectedOfset < volumeWidth && selectedOfset>0){


        colorBox.style.width = selectedOfset+"px";
    }

}

const getColorBoxWidth = ()=>{
    return  parseInt( getComputedStyle(colorBox).width)
    
}

// 300px 100% 
// 150px ?
export default start_Task_4