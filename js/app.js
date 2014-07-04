(function() {
  define([], function() {
    var App;
    return App = (function() {
      function App() {
        console.log("Running...");
        window.addEventListener("devicelight", function(e) {
          var html, indicator;
          html = document.getElementsByTagName("html")[0];
          indicator = document.getElementsById("indicator");
          if (e.value < 50) {
            html.classList.add("dark");
            html.classList.remove("light");
            indicator.innerHTML("Dark");
            return console.log("dark");
          } else {
            html.classList.add("light");
            html.classList.remove("dark");
            indicator.innerHTML("Light");
            return console.log("light");
          }
        });
      }

      return App;

    })();
  });

}).call(this);

//# sourceMappingURL=maps/app.js.map