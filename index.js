const fs = require("fs/promises");

soma = (num1, num2) => {
  return new Promise((resolve, reject) => {
    const soma = num1 + num2;
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return reject("Não são números");
    }
    fs.appendFile("resultado.txt", `${num1} + ${num2} = ${soma}`);
    resolve(soma);
  });
};

soma(12, 27)
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error));
