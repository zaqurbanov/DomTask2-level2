const itemContainer = document.querySelector('.item');
const paginationContainer = document.querySelector('.pagination');

const data = [
    "item1","item2","item3","item4","item5","item6",
    "item7","item8","item9","item10","item11","item12",
    "item13","item14","item15","item16","item17","item18","item19","item20"
]
const perItem = 5
const start_Task_5 = ()=>{
const defaultData = data.slice(0,5)
    createPaginationBtn()
createItems(defaultData) 



}


const createItems = (data)=>{
    data.forEach(element => {
        const li = document.createElement('li');
        li.textContent = element
        itemContainer.appendChild(li);        
    });

}


const createPaginationBtn = ()=>{
    for (let i = 0; i < data.length/5; i++) {
        const button = document.createElement('button');
        button.classList.add('paginationBtn')
        button.textContent = i+1
        button.addEventListener("click",()=>{
                const newData = data.slice(i*perItem,i*perItem+5);
                clearActiveBtn()
                button.classList.add("active")
                itemContainer.innerHTML = ""
                createItems(newData)
        })
        paginationContainer.appendChild(button)
        
    }
}

const clearActiveBtn = (e)=>{
    const paginationBtn = document.querySelectorAll('.paginationBtn')
    paginationBtn.forEach(btn=>{
        btn.classList.remove('active')
    })
}

export default start_Task_5