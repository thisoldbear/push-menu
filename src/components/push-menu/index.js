const TOGGLE_SELECTOR = '[data-binding="push-menu-toggle"]';
const OPEN_SUB_SELECTOR = '[data-binding="push-menu-open-sub"]';
const CLOSE_SUB_SELECTOR = '[data-binding="push-menu-close-sub"]';

export default class PushMenu {
  constructor(context) {
    // The coomponent wrapper passed in
    this.context = context;

    // Toggle button ("assume" there is only one)
    this.toggle = this.context.querySelector(TOGGLE_SELECTOR);

    // Body ("assume" there is only one)
    this.body = document.querySelector("body");
  }

  init() {
    // Add a single even listener to the component
    // to delegate click events
    this.context.addEventListener("click", ({ target }) => {
      // Main toggle
      if (target.matches(TOGGLE_SELECTOR)) {
        // Toggle class on the component
        this.context.classList.toggle("push-menu--is-open");

        // Toggle class on the body (to slide the page)
        this.body.classList.toggle("menu-open");

        // Check for open elements, before removing class on open/close
        Array.from(this.context.querySelectorAll(".is-open")).map(
          openElement => {
            openElement.classList.remove("is-open");
          }
        );
      }

      // Open sub menu
      if (target.matches(OPEN_SUB_SELECTOR)) {
        const nextElement = target.nextElementSibling;

        // Remove open class from parent and focus first anchor
        nextElement.classList.toggle("is-open");
        nextElement.querySelector("a").focus();
      }

      // Close sub-menu toggle
      if (target.matches(CLOSE_SUB_SELECTOR)) {
        // Remove open class from parent
        target.closest("ul").classList.toggle("is-open");

        // Focus the open button again
        target
          .closest(".push-menu__list-item--has-children")
          .querySelector(OPEN_SUB_SELECTOR)
          .focus();
      }
    });

    // Attempt at keyboard nav, to "skip over" the submenu when tabbing between
    // It was skipping "Contact" and focussing on a link in the body :-S
    // > Home
    // > Mountains
    // > Contact

    // this.context.addEventListener("keydown", ({ target, keyCode }) => {
    //   if (target.matches(OPEN_SUB_SELECTOR) && keyCode === 9) {
    //     target.closest(".push-menu__list-item--has-children").nextElementSibling.querySelector("li > a").focus();
    //   }
    // });
  }
}
