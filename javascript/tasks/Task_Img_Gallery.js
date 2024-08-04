
const galleryImg = document.querySelector('.galleryImg');
const mainImg = document.querySelector('.mainImg');
const left = document.querySelector('.left');
const galleryList = [
    {
        src:"images/img1.png",
        alt:"image1"
    },
    {
        src:"images/img2.png",
        alt:"image2"
    },
    {
        src:"images/img3.png",
        alt:"image3"
    },
    {
        src:"images/img4.png",
        alt:"image4"
    },
    {
        src:"images/img5.png",
        alt:"image5"
    },
    {
        src:"images/img6.png",
        alt:"image6"
    }
    
]

const start_Task_2 = ()=>{


    renderGallery();

}
let defaultimg = 1
const renderGallery = ()=>{
    
        renderMainImg(defaultimg)

        galleryList.forEach((image,index)=>{

            const imgContainer = createImg(image,index)

            galleryImg.appendChild(imgContainer)
        })

        



}

const incrementMainImg=()=>{
    defaultimg--
    if(defaultimg<0){
        defaultimg = galleryList.length-1
    }

    const allImg = document.querySelectorAll('.imgg')
    clearImgActive(allImg)
    allImg[defaultimg].classList.add("active")
    renderMainImg(defaultimg)
}

const decrementMainImg = ()=>{

    defaultimg++
    if(defaultimg>galleryList.length-1){
        defaultimg = 0
    }

    const allImg = document.querySelectorAll('.imgg')
    clearImgActive(allImg)
    allImg[defaultimg].classList.add("active")
    renderMainImg(defaultimg)

}



const renderMainImg = (imgIndex)=>{
        mainImg.innerHTML=""
      const img =   createMainImg(imgIndex)
      const leftIcon = document.createElement('i');
      leftIcon.className="fa-solid fa-chevron-left left";

        leftIcon.addEventListener('click',incrementMainImg)
      const rightIcon = document.createElement("i");
      rightIcon.className="fa-solid fa-angle-right right";

      rightIcon.addEventListener("click",decrementMainImg)
      mainImg.appendChild(rightIcon)
      mainImg.appendChild(leftIcon)
      mainImg.appendChild(img)

}

const createMainImg = (imgIndex)=>{
    const img = document.createElement('img');
    img.src = galleryList[imgIndex].src;
    img.alt = galleryList[imgIndex].alt;
    
    return img

}
const createImg = (image,index)=>{

    const div = document.createElement('div');
    div.classList.add('image');

    div.id = `id-${index}`;

    div.addEventListener('click',getChangeMainImgByImgGallery)
    const img = document.createElement('img')
    img.classList.add("imgg")    
    img.src = image.src;
    img.alt = image.alt
    img.addEventListener('click',()=>{
        const allImg = document.querySelectorAll('.imgg')
        clearImgActive(allImg)
        
        img.classList.add("active")
    })
    div.appendChild(img)
    return div

}

const clearImgActive =(imgList)=>{
    imgList.forEach(img=>{
        img.classList.remove('active')
    })
}
const getChangeMainImgByImgGallery = (e)=>{
    const id = e.target.closest('.image').id.split('-')[1]
    mainImg.innerHTML = ""
renderMainImg(id)
}

export default start_Task_2