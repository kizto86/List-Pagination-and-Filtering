/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//var x = document.getElementById("myDIV").querySelectorAll("h3");

//let h3 = document.querySelectorAll(".student-details")[0];

/*let names = document.getElementsByClassName("student-details");

for (let i = 0; i < names.length; i++) {
  names[i].style.backgroundColor = "red";
}*/

/*let studentNames = document.querySelectorAll("h3");
for (let i = 0; i < studentNames.length; i++) {
  studentNames[i].style.backgroundColor = "red";
}*/
/**
 * Select the parent element of the list items and assigning it to a constant
 */

const listUl = document.querySelectorAll(".student-list")[0];

console.log(listUl);

/**
 * select the children element and assigning it to a constant
 */

const listLi = listUl.children;

/**
 * defines the numbers of items per page
 */

const studentPerPage = 10;

/**
 * The showPage function
 * max and min variable set the high and low number of student per page which is used in the if conditions.The for loop, loops through the list length.If the condition is true 10 students are displayed.
 * @param {*} list
 * @param {*} page
 */

const showPage = (list, page) => {
  const max = page * studentPerPage;
  const min = (page + 1) * studentPerPage;

  for (let i = 0; i < list.length; i++) {
    if (i >= max && i < min) {
      list[i].style.display = "block";
    } else {
      list[i].style.display = "none";
    }
  }
};

showPage(listLi, 0);
/*** 
Create the pagination buttons dynamic and append them to the page 
via the appendPageLinks function
***/

const appendPageLinks = list => {
  /*Assigning the total number of list item to a variable*/
  const totalNumber = listLi.length;

  /**
   * Divides the total number of list item by 10 and round up the result to its nearest integer
   */

  const maxPage = Math.ceil(totalNumber / studentPerPage);

  /**
   * Create a div for the pagination
   */

  const paginationDiv = document.createElement("div");

  /**
   * Assign a class name to the pagination div
   */

  paginationDiv.className = "pagination";
  const mainPage = document.querySelector(".page");

  /**
   * Appending the div to the page
   */

  mainPage.appendChild(paginationDiv);

  /**
   * Create a ul to store the pagination links
   */

  const divUi = document.createElement("ul");

  /*Appending the ul to the page */
  paginationDiv.appendChild(divUi);

  /*Select the anchor element and assigning it to a constant*/
  const anchorList = document.getElementsByTagName("A");
  /***
Looping over the page and creating the li and link tag
***/
  for (let i = 0; i < maxPage; i++) {
    /*Create List items*/
    const divLi = document.createElement("li");

    /*Create link tag*/

    const Link = document.createElement("a");

    /*Append the li to the ul*/
    divUi.appendChild(divLi);
    Link.href = "#";

    /*define and increment the text content of the link tag*/
    Link.textContent = i + 1;

    /*Append the link to the ul*/
    divLi.appendChild(Link);

    /**
     * Adding an Event listener to each a tag,that call the showPage function to display the appropriate page
     */

    Link.addEventListener("click", event => {
      /**
       * Loop over pagination links to remove active class from all links
       */

      for (let i = 0; i < anchorList.length; i++) {
        anchorList[i].className = "";

        /**
         * Add the active class to the link that was just clicked
         */

        event.target.className = "active";
      }
      showPage(listLi, i);
    });
  }

  /**
   * Defines the first anchor item as active
   */

  anchorList[0].className = "active";
};

appendPageLinks();

//search field
/*const searchInput = document.createElement("input");
searchInput.setAttribute("type", "text");
searchInput.setAttribute("id", "search-input");
searchInput.setAttribute("class", "student-search");
searchInput.placeholder = "Type name here....";
const searchDiv = document.getElementsByClassName("page-header cf")[0];
searchDiv.appendChild(searchInput);

const search = document.getElementById("search-input");

const searchField = (inputElement, names) => {
  for (let i = 0; i < names.length; i++) {
    if (
      inputElement.value.length !== 0 &&
      names[i].textContent
        .toLowerCase()
        .includes(inputElement.value.toLowerCase())
    ) {
    }
  }
};

var button = document.createElement("BUTTON");
button.innerHTML = "search";
button.setAttribute("class", "student-search");
searchDiv.appendChild(button);

button.addEventListener("click", event => {
  searchField(searchInput, studentNames);
  console.log("hello");
});*/

//create element function
const createElement = elementType => {
  const element = document.createElement(elementType);
  return element;
};

let studentNames = document.querySelectorAll("h3");
//dom element creation
const searchDiv = createElement("div");
searchDiv.className = "student-search";
const inputElement = createElement("input");
inputElement.placeholder = "Search for student....";
const button = createElement("button");
button.textContent = "Search";
//append element
const searchAnchor = document.querySelector("h2").parentNode;
searchAnchor.appendChild(searchDiv);
searchDiv.appendChild(inputElement);
searchDiv.appendChild(button);

const searchField = (inputElement, names) => {
  for (let i = 0; i < names.length; i++) {
    if (
      inputElement.value.length !== 0 &&
      names[i].textContent
        .toLowerCase()
        .includes(inputElement.value.toLowerCase())
    ) {
    }
  }
};
