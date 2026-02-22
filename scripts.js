console.log("working just fine!")

//OOP - Inheritence
class MyHeader extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
     <h1>The Resume of ME :D</h1>
      <div id="navigationButtons">
        <button onclick="window.location.href = 'index.html'">Home</button>
        <button onclick="window.location.href = 'HTMLGames.html'">HTML Games</button>
        <button onclick="window.location.href = 'game1.html'">The Bridge</button>
        <button onclick="window.location.href = 'game2.html'">The Pizza Ria</button>
        <button onclick="window.location.href = 'game3.html'">Game #3</button>
      </div>
    `
  }
}

class MyFooter extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `<p>When I feel like it :P</p>`
  }
}

customElements.define('my-header', MyHeader)
customElements.define('my-footer', MyFooter)
