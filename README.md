# push-menu

## Setup

I scaffolded the project with a [basic Parcel starter](https://github.com/thisoldbear/vanilla-parcel-starter) as this allowed me to use tech (Sass, JS modules, hot reloading) and a project structure I'm familiar with without reaching for something config heavy like Webpack.

[Live demo](https://push-menu-thisoldbear.netlify.com)

[Source](https://github.com/thisoldbear/push-menu)

### Install

```
npm install
```

### Run

To run in development mode:

```
npm start
```

## Approach

First off, I drew a basic sketch, as I couldn't remember if I'd ever made a push (from the left) menu before. Plenty of "push down" from the top menus though. 😅

I started by writing up most of the HTML, then moved on to styling the "no-js" version first.

I used BEM for class selectors as I'm most familiar with this.

I may have spent a little longer than I'd planned for on the styles, but wanted it to look *reasonably* good. 🙈

JavaScript wise, I tried to keep is as simple as possible.

I didn't end up writing *that much*, and opted for familiarity with:

- Using data attributes to target elements over class selectors
- Writing the component using a Class
- Event delegation from the parent element to it's children

I thought I'd enhance the task with a second level to the menu.

Overall the task took ~3 hours (a shade over the expected time I'm afraid).

## TODO(s) 📃

### Improve keyboard navigation

You can open/close the nav, tab around and open the sub menu.

However, being able to tab from "Mountains" to "Contact" in the menu, without focussing on the hidden sub menu would be great (see commented out code in `components/push-menu/index.js`).

### Page Push

I first used CSS `transform: translateX($nav-offset)` to "push" the `.page` over and reveal the offset nav, but I found that with this the menu did not remain "sticky" at the top when open, instead opting for transitioning using `left: $nav-offset`.

### Accessibility

As elements are being revealed/hidden, some aria roles (visible/hidden) would be in order, as well as hiding the nav toggle buttons.

The white text on red in the submenu (which looks pleasing to the eye) is [only marginally accessible at 18px](https://snook.ca/technical/colour_contrast/colour.html#fg=FFFFFF,bg=F95759).

### Double Quotes

Install a linter and configure prettier to remove all the double quotes in the JS. 🙁