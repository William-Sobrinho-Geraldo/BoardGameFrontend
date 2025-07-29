// src/utils/themeManager.js

import { themes } from "../css/styles/themes";

export function applyTheme(themeName) {
  const theme = themes[themeName];
  if (!theme) return;

  const root = document.documentElement;
  Object.entries(theme).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });

  localStorage.setItem("selected_theme", themeName);
}
