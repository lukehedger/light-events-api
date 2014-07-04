define [], () ->

	class App

		constructor: ->

			console.log "Running..."

			window.addEventListener "devicelight", (e) ->
				html = document.getElementsByTagName("html")[0]
				indicator = document.getElementsById "indicator"

				if e.value < 50
					html.classList.add "dark"
					html.classList.remove "light"
					indicator.innerHTML "Dark"
					console.log "dark"
				else
					html.classList.add "light"
					html.classList.remove "dark"
					indicator.innerHTML "Light"
					console.log "light"