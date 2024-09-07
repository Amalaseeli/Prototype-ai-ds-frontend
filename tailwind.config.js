/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Mukta-Bold':['Mukta-Bold', 'sans-serif'],
        'Mukta-ExtraBold':['Mukta-ExtraBold','sans-serif'],
        'Mukta-ExtraLight':['Mukta-ExtraLight', 'sans-serif'],
        'Mukta-Light':['Mukta-Light', 'sans-serif'],
        'Mukta-Medium':['Mukta-Medium', 'sans-serif'],
        'Mukta-Regular':['Mukta-Regular', 'sans-serif'],
        'Mukta-SemiBold':['Mukta-SemiBold', 'sans-serif'],
        'Roboto-Medium':['Roboto-Medium', 'sans-serif'],
        'Roboto-Black':['Roboto-Black', 'sans-serif'],
        'Roboto-BlackItalic':['Roboto-BlackItalic', 'sans-serif'],
        'Roboto-Bold':['Roboto-Bold', 'sans-serif'],
        'Roboto-BoldItalic':['Roboto-BoldItalic', 'sans-serif'],
        'Roboto-Italic':['Roboto-Italic', 'sans-serif'],
        'Roboto-Light':['Roboto-Light', 'sans-serif'],
        'Roboto-LightItalic':['Roboto-LightItalic', 'sans-serif'],
        'Roboto-MediumItalic':['Roboto-MediumItalic', 'sans-serif'],
        'Roboto-Regular':['Roboto-Regular', 'sans-serif'],
        'Roboto-Thin':['Roboto-Thin', 'sans-serif'],
        'Roboto-ThinItalic':['Roboto-ThinItalic', 'sans-serif']
      },

    },
  },
  plugins: [],
}