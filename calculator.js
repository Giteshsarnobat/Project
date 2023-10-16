
  const buttons = document.querySelectorAll("button");
  const Result = document.querySelector(".result");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      console.log(e.target);
      e.preventDefault();

      const num1 = parseFloat(document.querySelector("#num1").value);
      const num2 = parseFloat(document.querySelector("#num2").value);

      if (num1 < 0 || isNaN(num1)) {
        Result.innerHTML = `<span>Please give valid number1 ${num1} !</span>`;
        setTimeout(()=>{
          Result.innerHTML="";
          },3000);
      } else if (num2 < 0 || isNaN(num2)) {
        Result.innerHTML = `<span>Please give valid number2 ${num2} !</span>`;
        setTimeout(()=>{
          Result.innerHTML="";
          },3000);
      } else {
        if (e.target.innerHTML == "Add") {
          const result = num1 + num2;
          Result.style.backgroundColor = "orange";
          Result.style.color = "black";
          Result.textContent = `Result: ${result}`;
        } else {
          const result = num1 - num2;
          Result.style.backgroundColor = "greenyellow";
          Result.style.color = "black";
          Result.textContent = `Result: ${result}`;
        }
      }
    });
  });

