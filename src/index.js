import "reset-css";
import "./styles.scss";

import PushMenu from "./components/push-menu";

// There's only one, but for multiple behaviors I would map over an array
// to create a new instance for each component
const pushMenuContext = document.querySelector('[data-behavior="push-menu"]');

// Initialise a new PushMenu instance, passing the element as "context"
const pushMenu = new PushMenu(pushMenuContext);

// Initialise
pushMenu.init();
