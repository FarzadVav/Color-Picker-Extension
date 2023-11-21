document.querySelector(".pick").addEventListener("click", () => {
  const resultElement = document.querySelector(".result");

  if (!window.EyeDropper) {
    resultElement.textContent =
      "Your browser does not support the EyeDropper API";
    return;
  }

  const eyeDropper = new EyeDropper();

  eyeDropper
    .open()
    .then((result) => {
      resultElement.textContent = result.sRGBHex;
      resultElement.style.backgroundColor = result.sRGBHex;
      document.body.style.borderColor = `${result.sRGBHex}45`
    })
    .catch((e) => {
      resultElement.textContent = e;
    });
});
