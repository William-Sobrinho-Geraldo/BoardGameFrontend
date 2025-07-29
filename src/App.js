import React, { useEffect } from "react";
import { applyTheme } from "./utils/themeManager"; // Adjust the import path as necessary
import { io } from "socket.io-client";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/fonts.css";
import "./css/special_occasions.css";
import "./css/style.css";

import Page from "./components/pages/page";

const socket = io();
// useEffect(() => {
//   const savedTheme = localStorage.getItem("selected_theme") || "yellow";
//   applyTheme(savedTheme);
// }, []);

function App() {
  let my_console = (function () {
    let oldConsole = null;
    function enable() {
      if (oldConsole == null) return;
      window["console"]["log"] = oldConsole;
      window["console"]["warn"] = oldConsole;
      window["console"]["error"] = oldConsole;
    }
    function disable() {
      oldConsole = console.log;
      window["console"]["log"] = function () {};
      window["console"]["warn"] = function () {};
      window["console"]["error"] = function () {};
    }
    return { enable, disable };
  })();

  useEffect(() => {
    //my_console.disable()
    socket.connect();
    return () => {
      socket.disconnect();
    };
  }, []);

  // setInterval(function(){
  // 	socket.emit('heartbeat', { data: "ping" })
  // }, 15000)

  return <Page socket={socket} />;
}

export default App;
