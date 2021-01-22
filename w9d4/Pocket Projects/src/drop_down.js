
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};


function dogLinkCreator() {
  const ul = [];
  const keys = Object.keys(dogs);

  keys.forEach( key => {
    const a = document.createElement("a");
    const li = document.createElement("li");
  
    a.innerHTML = key;
    a.href = dogs[key];

    li.classList.add("dog-link");
    li.appendChild(a);

    ul.push(li);
  });
  return ul;
} 

function attachDogLinks() {
  const dogLinks = dogLinkCreator();

  const ul = document.querySelectorAll(".drop-down-dog-list")[0];
  dogLinks.forEach(dog => {
    ul.appendChild(dog);
  });
}

attachDogLinks();

