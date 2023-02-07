const logout = document.querySelector(".out");
const result = document.querySelector(".fit");
const bookmarks = document.querySelector(".bookmarks");
const bookmark = document.querySelector(".bookmark");
const input=document.querySelector('.finding')
const search=document.querySelector('.search')
let cup = [];

async function getdata() {
  let response = await fetch(`
  https://www.googleapis.com/books/v1/volumes?q=html&startIndex=20&maxResults=20&orderBy=newest`);
  let data = await response.json();
  console.log(data);
  result.innerHTML = "";
  for (let i = 0; i < data.items.length; i++) {
    result.append(
      creatcard(
        data.items[i].id,
        data.items[i].volumeInfo.imageLinks.thumbnail,
        data.items[i].volumeInfo.title,
        data.items[i].volumeInfo.authors,
        data.items[i].volumeInfo.publishedDate,
        data.items[i].volumeInfo.previewLink
      )
    );
    console.log(result);
  }
}

getdata();
function creatcard( image,avtor, title, sana,publishedDate) {
  const card = document.createElement("div");
  card.className = "cards";
  result.append(card);

  const img = document.createElement("img");
  const h2 = document.createElement("h2");
  h2.className = "h2";

  const p = document.createElement("p");
  p.className = "s1";
  const p2 = document.createElement("p");
  p2.className = "s";
  const btn2 = document.createElement("div");
btn2.className='btn'

  const moreinfo = document.createElement("button");
  moreinfo.className = "bookmark";
  const infomore = document.createElement("button");
  infomore.className = "moreinfo";
  const read = document.createElement("button");
  read.className = "read";
  const infrome= document.createElement('div')
  infrome.className='infrome'

  const xmark = document.createElement("i");
  xmark.className = "fa-solid fa-xmark";

  img.setAttribute("src", avtor);
  h2.innerHTML = title.slice(0,40);
  p.innerHTML = sana.slice(0,5);
  p2.innerHTML = publishedDate;
  moreinfo.textContent = "bookmark";
  
  infomore.textContent = "more info";
  read.textContent = "read";
  
  card.append(img);
  card.append(h2);
  card.append(p);
  card.append(p2);
  card.append(btn2)
  btn2.append(moreinfo);
  btn2.append(infomore);
  card.append(read);
//   moreinfo.addEventListener('click',()=>{
// bookmarks.append(cup);
    
//     cup.innerHTML=h2
//     cup.innerHTML=p2
//   })

  return card;
}
// function readp() {
  // infomore.addEventListener("click", () => {
  //   infrome.style.display = "block";
  // });
  // xmark.addEventListener("click", () => {
  //   infomore.style.display = "none";
  // });
// }
// readp();
/* <i class="fa-light fa-book-open"></i> */

/* <i class="fa-light fa-delete-left"></i> */

logout.addEventListener("click", () => {
  window.location.replace("./index.html");
});
