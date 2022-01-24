import logo from './logo.svg';
import './App.css';
import Canada from "@svg-maps/canada";
import Usa from "@svg-maps/usa";
import "react-svg-map/lib/index.css";
import { SVGMap } from "react-svg-map";

function App() {
  return (
    <div className="App">
      <section id="usa">
        <h2>USA</h2>
        <br/>

        <div style={{
            width: "1000px"
        }}>
            <span style={{
                position: "absolute",
                zIndex: "2",
                background: "#fff",
                padding: "5px",
                borderRadius: "4px",
                boxShadow: "0 0 5px 2px #fff"
            }} id="usaText"></span>

            <SVGMap
                map={Usa}
                onLocationMouseOver={(value) => {
                    const {ariaLabel} = value.target;
                    const $text = document.getElementById("usaText");

                    $text.innerHTML = ariaLabel;
                    $text.style.opacity = "1";
                }}
                onLocationMouseOut={(value) => {
                    const $text = document.getElementById('usaText');

                    $text.style.opacity = "0";
                }}
                onLocationMouseMove={(value) => {
                    document.addEventListener('mousemove', (e) => {
                        const $text = document.getElementById('usaText');

                        $text.style.top = `${e.pageY - 70}px`;
                        $text.style.left = `${e.pageX}px`;
                    });
                }}
                onLocationClick={(value) => {
                    const {id, ariaLabel} = value.target;

                    console.log(id, ariaLabel);
                }}/>
        </div>
      </section>

      <hr/>

        <section id="canada">
            <h2>Canada</h2>
            <br/>

            <div style={{
                width: "1000px"
            }}>
                <span style={{
                    position: "absolute",
                    zIndex: "2",
                    background: "#fff",
                    padding: "5px",
                    borderRadius: "4px",
                    boxShadow: "0 0 5px 2px #fff"
                }} id="canadaText"></span>

                <SVGMap
                    map={Canada}
                    onLocationMouseOver={(value) => {
                        const {ariaLabel} = value.target;
                        const $text = document.getElementById("canadaText");

                        $text.innerHTML = ariaLabel;
                        $text.style.opacity = "1";
                    }}
                    onLocationMouseOut={(value) => {
                        const $text = document.getElementById('canadaText');

                        $text.style.opacity = "0";
                    }}
                    onLocationMouseMove={(value) => {
                        document.addEventListener('mousemove', (e) => {
                            const $text = document.getElementById('canadaText');

                            $text.style.top = `${e.pageY - 70}px`;
                            $text.style.left = `${e.pageX}px`;
                        });
                    }}
                    onLocationClick={(value) => {
                        const {id, ariaLabel} = value.target;

                        console.log(id, ariaLabel);
                    }}/>
            </div>
        </section>
    </div>
  );
}

export default App;
