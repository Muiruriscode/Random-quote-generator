const colors = [
'#16a085',
'#27ae60',
'#2c3e50',
'#f39c12',
'#e74c3c',
'#9b59b6',
'#FB6964',
'#342224',
'#472E32',
'#BDBB99',
'#77B1A9',
'#73A857'];

const MyComponent = () => {
  const [quotes, setQuotes] = React.useState({});
  const [colour, setColour] = React.useState('#16a085');
  React.useEffect(() => {
    handleSubmit();
  }, []);
  const handleSubmit = () => {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json').
    then(response => response.json()).
    then(json => {
      const id = Math.floor(Math.random() * json.quotes.length);
      json.quotes.filter((item, index) => {
        if (index === id) {
          setQuotes(item);
        }
      });});
    getColour();
  };

  const getColour = () => {
    const colourId = Math.floor(Math.random() * colors.length);
    colors.filter((item, index) => {
      if (index === colourId) {
        console.log(item);
        setColour(item);
      }
    });
  };
  const url = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
  encodeURIComponent('"' + quotes.quote + '" ' + quotes.author);
  document.querySelector("body").style.backgroundColor = colour;
  return /*#__PURE__*/(
    React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
    React.createElement("blockquote", null, /*#__PURE__*/
    React.createElement("p", { id: "text" }, /*#__PURE__*/React.createElement("i", { class: "fa fa-quote-left", "aria-hidden": "true" }), " ", quotes.quote), /*#__PURE__*/
    React.createElement("figcaption", { id: "author" }, quotes.author)), /*#__PURE__*/

    React.createElement("div", { class: "container" }, /*#__PURE__*/
    React.createElement("a", { href: url, target: "_top", id: "tweet-quote" }, /*#__PURE__*/React.createElement("i", { class: "fa fa-twitter fa-2x", "aria-hidden": "true" })), /*#__PURE__*/
    React.createElement("button", { type: "submit", id: "new-quote", onClick: handleSubmit, style: { "background": colour } }, "New quote"))));



};
ReactDOM.render( /*#__PURE__*/React.createElement(MyComponent, null), document.querySelector("#app"));