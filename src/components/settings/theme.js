import React, { useState } from "react";
import { Dropdown, Button } from "react-bootstrap";
import { translate } from "../../translations/translate";
// import { Button } from "bootstrap";

function Theme(props) {
  const { title, lang } = props;
  const [isOpen, setIsOpen] = useState(false);

  // Array de temas disponíveis
  const theme_array = [
    { id: "blue", text: translate({ lang: lang, info: "theme_blue" }) },
    { id: "yellow", text: translate({ lang: lang, info: "theme_yellow" }) },
  ];

  function handleSelect(selectedTheme) {
    console.log("Tema selecionado:", selectedTheme);
    // Aqui você pode adicionar a lógica para mudar o tema
    // Por exemplo, salvar no localStorage ou dispatch para o Redux
    localStorage.setItem("selected_theme", selectedTheme);

    // Fechar o dropdown após selecionar
    setIsOpen(false);

    // Se estiver usando Redux, você pode fazer:
    // dispatch(changeTheme(selectedTheme));
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
                onClick={() => handleSelect(item.text)}
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
