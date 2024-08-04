const cardContainer = document.querySelector('.card-container'); 
const categoryBtn = document.querySelectorAll('.category-btn');

const data = [
    {
        id:0,
        img:"images/people/img1.png",
        title:"1) people  Title",
        header:"1)  people content",
        category:"people"
    },{
        id:1,
        img:"images/people/img2.png",
        title:"2) people  Title",
        header:"2)  people content",
        category:"people"
    },
    {
        id:2,
        img:"images/people/img3.png",
        title:"3) people  Title",
        header:"3)  people content",
        category:"people"
    },
    {
        id:3,
        img:"images/people/img4.png",
        title:"4) people  Title",
        header:"4)  people content",
        category:"people"
    },
    {
        id:4,
        img:"images/car/car1.jpg",
        title:"5) car  Title",
        header:"5)  car content",
        category:"car"
    },
    {
        id:5,
        img:"images/car/car2.webp",
        title:"6) car  Title",
        header:"6)  car content",
        category:"card"
    },
    {
        id:6,
        img:"images/car/car3.webp",
        title:"7) car  Title",
        header:"7)  car content",
        category:"car"
    },
    {
        id:7,
        img:"images/car/car4.webp",
        title:"8) car  Title",
        header:"8)  car content",
        category:"car"
    },
    {
        id:8,
        img:"images/car/car5.webp",
        title:"9) car  Title",
        header:"9)  car content",
        category:"car"
    },
    {
        id:9,
        img:"images/nature/nature1.jpg",
        title:"10) Nature  Title",
        header:"10)  Nature content",
        category:"nature"
    },
    {
        id:10,
        img:"images/nature/nature2.jpg",
        title:"11) Nature  Title",
        header:"11)  Nature content",
        category:"nature"
    },
    {
        id:11,
        img:"images/nature/nature3.jpg",
        title:"12) Nature  Title",
        header:"12)  Nature content",
        category:"nature"
    },
    {
        id:12,
        img:"images/nature/nature4.jpg",
        title:"13) Nature  Title",
        header:"13)  Nature content",
        category:"nature"
    }
]

const start_Task_3 = ()=>{


    renderCard(data);

    categoryBtn.forEach(btn=>{
        
        btn.addEventListener('click',filterCategory)
    })
}

const filterCategory = (e)=>{
    
    e.preventDefault();
    removeActiveFromCategoryBtn()
    e.target.classList.add('active')
    const selectedCategory = e.target.textContent.toLowerCase()
    


    const filteredCategory = data.filter(e=>{
      return  e.category == selectedCategory
    })
   
    let result = filteredCategory.length == 0 ? data : filteredCategory
cardContainer.innerHTML = ""

setTimeout(() => {
    renderCard(result)
}, 500);

     
}
const renderCard = (datas)=>{
    datas.forEach(data => {
           
        const createdCard = createCard(data);
        cardContainer.appendChild(createdCard)
    });

}

const createCard = (data)=>{

    const cardDiv = document.createElement('div');
    cardDiv.classList.add("card");
    const cardHeader = createCardHeader(data.img);
    const cardBody = createCardBody(data.title,data.header)



    
    cardDiv.appendChild(cardHeader)
    cardDiv.appendChild(cardBody)

    return cardDiv


}

const createCardHeader = (src)=>{

    const div = document.createElement("div");
    div.classList.add("card-header");

    const img = document.createElement("img");
    img.src = src;

    div.appendChild(img)


    return div


}

const createCardBody = (title,header)=>{

    const div = document.createElement('div');
    div.classList.add('card-body');

const h2 = document.createElement('h2');
h2.textContent=title;
const p = document.createElement('p');
p.textContent = header
div.appendChild(h2);
div.appendChild(p);
    return div
}

const removeActiveFromCategoryBtn = ()=>{
    categoryBtn.forEach(btn=>{
        btn.classList.remove("active")
    })
}

export default start_Task_3

