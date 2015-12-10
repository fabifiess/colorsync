# colorsync
Choose color and see it synced on all connected devices

Click, drag, touch or touchmove on the canvas and see the background color change into the color of the underlying image at your mouse / finger position.
The color gets updated on each connected device over a node.js webserver using express and socket.io.

To start:
Open a terminal application, route to the directory where app.js is in and start the application with node app.js.
Then open your browser at localhost:3000 and the browser of a touch device on <ip_of_server_computer>:3000
