/** @type {import("tailwindcss").Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.tsx",
  ],
  theme: {
    fontFamily: {
      "sans": ["Noto Sans JP", "sans-serif"],
      "comfortaa": ["Comfortaa", "sans-serif"],
    },
  },
};
