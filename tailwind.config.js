/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        mont:"'Montserrat',sans-serif"
      },
      colors:{
        light_g:"hsl(240, 78%, 98%)",
        light_g_2:"hsl(234, 14%, 74%)",
        grayish_b:"hsl(233, 13%, 49%)",
        dark_g:"hsl(232, 13%, 33%)",
        gardinent_1:"hsl(236, 72%, 79%)",
        gardinent_2:"hsl(237, 63%, 64%)"
      }
    },
  },
  plugins: [],
}
