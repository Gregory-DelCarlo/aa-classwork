
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
const dogLinks = dogLinkCreator();

function attachDogLinks() {

  const ul = document.querySelectorAll(".drop-down-dog-list")[0];
  dogLinks.forEach(dog => {
    // debugger
    ul.appendChild(dog);
  });
}

function handleEnter() {
  // previously used a passed in element, but we can just use dogLinks array 
  // since it's always the same elements 
  dogLinks.forEach(dog => {
    dog.setAttribute("style", "display:block");
  });
};

function handleLeave() {
  dogLinks.forEach(dog => {
    dog.setAttribute("style", "display:none");
  });
};

attachDogLinks();

// dogsList changed to dogsNav because the dog's list isn't selectable by default
const dogsNav = document.getElementsByClassName("drop-down-dog-nav")[0];
dogsNav.addEventListener( "mouseenter", () => {
  handleEnter();
});

dogsNav.addEventListener( "mouseleave", () => {
  handleLeave();
});


