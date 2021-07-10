//animation effect
window.onload = () => {
  let form = document.getElementsByClassName("login");
  let logo = document.getElementById("logoImg");
  for (let i = 0; i < form.length; i++) {
    form[i].style = "bottom: 0; opacity: 1";
    logo.style = "top: calc(50% - 138px/2); opacity: 1";
  }
};

let passVisibility = document.getElementById("toggle-visible");
let password = document.getElementById("password");

//toggle password visibility
passVisibility.addEventListener("click", () => {
  //checking password type
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});

//checking password if validate by length
function validatePassword() {
  let warning = document.getElementsByClassName("warning");

  if (password.value.length < 8) {
    password.style = "border: 1px solid red";

    for (let i = 0; i < warning.length; i++) {
      warning[i].style = "opacity: 1";
    }
  } else {
    for (let i = 0; i < warning.length; i++) {
      warning[i].style = "opacity: 0";
    }

    password.style = "border: 1px solid #5fb2ff";
  }
}

let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validatePassword();
});

//styiling select

let defaultSelect = document.getElementsByClassName("select");

for (let i = 0; i < defaultSelect.length; i++) {
  let elem = defaultSelect[i].getElementsByTagName("select")[0];
  // For each element create div that will act as the selected item
  let div = document.createElement("DIV");
  div.setAttribute("class", "selected");
  div.innerHTML = elem.options[elem.selectedIndex].innerHTML;
  defaultSelect[i].appendChild(div);

  //For each element, create div new DIV that will contain the option list
  let newElem = document.createElement("DIV");
  newElem.setAttribute("class", "select-items hide");
  for (let j = 0; j < elem.length; j++) {
    /* For each option in the original select element,
    create div new DIV that will act as an option item: */

    let newDiv = document.createElement("DIV");
    newDiv.innerHTML = elem.options[j].innerHTML;
    newDiv.addEventListener("click", function (e) {
      /* When an item is clicked, update the original select box,
        and the selected item: */

      let grandParent =
        this.parentNode.parentNode.getElementsByTagName("select")[0];
      let sibling = this.parentNode.previousSibling;

      for (let i = 0; i < grandParent.length; i++) {
        if (grandParent.options[i].innerHTML == this.innerHTML) {
          grandParent.selectedIndex = i;
          sibling.innerHTML = this.innerHTML;
          let parentItem =
            this.parentNode.getElementsByClassName("same-as-selected");

          for (let k = 0; k < parentItem.length; k++) {
            parentItem[k].removeAttribute("class");
          }

          this.setAttribute("class", "same-as-selected");
          break;
        }
      }

      sibling.click();
    });

    newElem.appendChild(newDiv);
  }

  defaultSelect[i].appendChild(newElem);
  div.addEventListener("click", function (e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("hide");
    this.classList.toggle("arrow-active");

    //toggle arrow rotation
    let arrow = document.getElementsByClassName("selected");
    for (let i = 0; i < arrow.length; i++) {
      if (arrow[0].classList.contains("arrow-active")) {
        arrow[i].classList.add("arrowUp");
      } else {
        arrow[i].classList.remove("arrowUp");
      }
    }
  });
}

//close select menu
function closeAllSelect(elem) {
  let array = [];
  let selectItems = document.getElementsByClassName("select-items");
  let selected = document.getElementsByClassName("selected");

  for (let i = 0; i < selected.length; i++) {
    document.getElementsByClassName("selected")[0].classList.remove("arrowUp");

    if (elem == selected[i]) {
      array.push(i);
    } else {
      selected[i].classList.remove("arrow-active");
    }
  }

  for (i = 0; i < selectItems.length; i++) {
    if (array.indexOf(i)) {
      selectItems[i].classList.add("hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);

//change content to forgot password
let forgotPass = document.getElementById("forgotPass");

//ak gavcherdi da minda rom forma gakres da dagaviwkdat parolis kontenti gachndes
forgotPass.addEventListener("click", () => {
  console.log(document.getElementById("form").style);
  form.style = "opacity: 0!important, bottom: 50%!important";
});
