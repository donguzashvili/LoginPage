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

let warning = document.getElementsByClassName("warning");

//checking password if validate by length
function validatePassword() {
  if (password.value.toLowerCase() != "tdgadmin") {
    password.style = "border: 1px solid red";

    for (let i = 0; i < warning.length; i++) {
      warning[0].style = "opacity: 1";
    }
  } else {
    for (let i = 0; i < warning.length; i++) {
      warning[0].style = "opacity: 0";
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

let forgotPass = document.getElementById("forgotPass");
let forgotPassForm = document.getElementById("forgot-pass-form-hide");
let userNameField = document.getElementById("userNameField");
let radios = document.getElementsByClassName("radios");

//hide login content and show forgot password content
forgotPass.addEventListener("click", () => {
  form.classList.add("form-hide");
  forgotPassForm.classList.add("forgot-pass-form-show");
});

forgotPassForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //check member validation

  if (userNameField.value.toLowerCase() != "tdgadmin") {
    userNameField.style = "border: 1px solid #FD0A50; ";

    for (let i = 0; i < warning.length; i++) {
      warning[1].style = "opacity: 1";
    }
  } else {
    for (let i = 0; i < warning.length; i++) {
      warning[1].style = "opacity: 0;display:none";
    }

    userNameField.classList.add("userNameDissapear");

    for (let i = 0; i < radios.length; i++) {
      radios[0].style = "position:unset; opacity:1; transform: translate(0,0);";
    }
    let number = document.getElementById("number");
    let mail = document.getElementById("mail");
    let button = document.getElementById("next");
    let mediaQuery = window.matchMedia("(max-width: 470px)");

    forgotPassForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (number.checked) {
        let smsField = document.getElementsByClassName("bySms");
        if (mediaQuery.matches) {
          button.style = "width: 85vw";
        }
        for (let i = 0; i < smsField.length; i++) {
          radios[i].style = "position: absolute; opacity: 0;";

          smsField[i].style =
            "position: unset; opacity: 1; transform: translate(0,0) ";
        }
      } else if (mail.checked) {
        let mailField = document.getElementsByClassName("byMail");
        for (let i = 0; i < mailField.length; i++) {
          radios[i].style = "position: absolute; opacity: 0;";

          mailField[i].style =
            "position: unset; opacity: 1; transform: translate(0,0)";
        }
      }
      button.innerHTML = "შესვლა";
    });
  }
});
