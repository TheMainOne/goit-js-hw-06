const input = document.querySelector("input[data-length]");

const onValidInputValue = (event) => {
  event.currentTarget.classList.add("valid");
  if (event.currentTarget.value.length >= 6) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.replace("invalid", "valid");
  } else {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.replace("valid", "invalid");
  }
};

input.addEventListener("blur", onValidInputValue);
