const plugin = require("tailwindcss/plugin");

const focusedSiblingPlugin = plugin(({ addVariant, e }) => {
  addVariant("focused-sibling", ({ container }) => {
    container.walkRules((rule) => {
      rule.selector = `:focus + .focused-sibling\\:${rule.selector.slice(1)}`;
    });
  });
});

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-gray': '#DDDEE1',
        'dark-gray': '#7F8283',
        'dark-blue': '#343C44',
        'orange': '#EF6E12',
        'brown': '#A15B38',
      },
      width: {
        'fit-content': 'fit-content'
      }
    },
  },
  variants: {
    extend: {
      transformOrigin: ['focused-sibling'],
      scale: ['focused-sibling'],
      display: ['group-hover']
    },
  },
  plugins: [focusedSiblingPlugin],
}
  