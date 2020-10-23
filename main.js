
;(() => {
  const price = document.querySelector("body > div > div > .login-form > input.price");
  const result = document.querySelector("body > div > div > .login-form > input.result");
  price.oninput = () => {
    const { value } = price
    result.value = +value === 0 ? null : ((+value*0.95 + 0.5)|0)
  }
})();