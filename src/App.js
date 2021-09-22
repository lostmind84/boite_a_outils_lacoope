import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <script
        type="text/javascript"
        src="https://app.mailjet.com/statics/js/iframeResizer.min.js"
      ></script>
      <iframe
        class="mj-w-res-iframe"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://app.mailjet.com/widget/iframe/6iJy/KE7"
        width="100%"
      ></iframe>
    </div>
  );
}

export default App;
