console.log("working just fine!")

//OOP - Inheritence
class MyHeader extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
     <h1>The Resume of ME :D</h1>
      <div id="navigation">
        <button onclick=""><img></img></button>
      </div>
    `
  }
}

class DarkToggle extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `<p>When I feel like it :P</p>`
  }
}

customElements.define('main-nav', MyHeader)
customElements.define('change-colour', DarkToggle)
