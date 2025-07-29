import React, { useState, useEffect } from "react";
import { Dropdown, Button } from "react-bootstrap";
import { translate } from "../../translations/translate";
// import { Button } from "bootstrap";
import { applyTheme } from "../../utils/themeManager"; // Adjust the import path as necessary
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../reducers/theme"; // ajuste o path conforme necessário

function Theme(props) {
  const { title, lang } = props;
  const [isOpen, setIsOpen] = useState(false);

  // Array de temas disponíveis
  const theme_array = [
    { id: "blue", text: translate({ lang: lang, info: "theme_blue" }) },
    { id: "yellow", text: translate({ lang: lang, info: "theme_yellow" }) },
  ];
  const theme = useSelector((state) => state.theme.currentTheme);
  const dispatch = useDispatch();

  function handleSelect(selectedTheme) {
    console.log("Tema selecionado:", selectedTheme);
    dispatch(setTheme(selectedTheme)); // Atualiza Redux + cookie
    applyTheme(selectedTheme);
    setIsOpen(false);
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ margin: "0px 10px" }} className="theme">
      <Dropdown show={isOpen} onToggle={setIsOpen}>
        <Dropdown.Toggle
          as={Button}
          className="mybutton button_fullcolor"
          onClick={toggleDropdown}
        >
          {translate({ lang: lang, info: title })}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {theme_array.map((item, i) => {
            return (
              <Dropdown.Item
                key={i}
                eventKey={item.id}
                onClick={() => handleSelect(item.id)}
              >
                <span>{item.text}</span>
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Theme;
