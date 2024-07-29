const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getLowercase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}
//Başlangıçta seçili karakter türlerinden en az birer tane ekler.
function generatePassword() {
  const len = lenEl.value;

  let password = "";

  if (upperEl.checked) {
    //checkbox'ların seçili olup olmadığını kontrol eder.
    password += getUppercase();
  }

  if (lowerEl.checked) {
    password += getLowercase();
  }

  if (numberEl.checked) {
    password += getNumber();
  }

  if (symbolEl.checked) {
    password += getSymbol();
  }

  for (let i = password.length; i < len; i++) {
    const x = generateX();
    password += x;
  }

  pwEl.innerText = password;
}
//Şifrenin uzunluğu kadar rastgele karakterler eklemek için generateX fonksiyonunu kullanır.
function generateX() {
  const xs = [];
  if (upperEl.checked) {
    xs.push(getUppercase());
  }

  if (lowerEl.checked) {
    xs.push(getLowercase());
  }

  if (numberEl.checked) {
    xs.push(getNumber());
  }

  if (symbolEl.checked) {
    xs.push(getSymbol());
  }

  if (xs.length === 0) return "";

  return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener("click", generatePassword);

copyEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = pwEl.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select(); //textarea içindeki metni seçer. Bu, metni kopyalamak için gerekli bir adımdır.
  document.execCommand("copy"); // Tarayıcıya, seçilen metni kopyalaması komutunu verir.
  textarea.remove(); // Bu, kullanıcı tarafından görülmeyecek şekilde geçici olarak eklenen textarea elementini temizler.
  alert("Password copied to clipboard");
});
