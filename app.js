const newImage = document.createElement('img');
newImage.setAttribute('src', 'https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg');
document.body.appendChild(newImage);

let myBtn = document.getElementById('btn');
myBtn.addEventListener('click', e =>{ 
    e.target.remove()
})


let usersList = document.getElementById('user-list');

const users = [
    {
      id: 7,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg"
    },
    {
      id: 8,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg"
    },
    {
      id: 9,
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: "https://reqres.in/img/faces/9-image.jpg"
    },
    {
      id: 10,
      email: "byron.fields@reqres.in",
      first_name: "Byron",
      last_name: "Fields",
      avatar: "https://reqres.in/img/faces/10-image.jpg"
    },
];
 
let itemsHTML = '';


users.map(user => {
    return itemsHTML = itemsHTML + `
    <div class="user_list_item">
        <img class="item_img" src="${user.avatar}" alt="person_image">
        <h3 class="title">${ user.first_name } ${ user.last_name }</h3>
        <hr>
        <div class="button_box">
            <button class="delete_btn"><img src="./images/icon remove.png" alt="delete_icon"></button>
            <button><img src="./images/information icon.jpg" alt="info_icon"></button>
        </div>
    </div>
`
})

usersList.innerHTML = itemsHTML;


let allButtons = document.getElementsByClassName('delete_btn')
console.log(allButtons)
for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", e=>{
      e.target.parentElement.parentElement.remove()
    })   
}


const candles =  [18, 90, 90, 13, 90, 75, 90, 8, 90, 43];
function birthdayCakeCandles(candlesArr) {
    let maxHeight = Math.max(...candlesArr);
    const result = candlesArr.filter(c => c === maxHeight)
    return result.length;
}

birthdayCakeCandles(candles)
