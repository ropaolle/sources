/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ['row-span-2', 'row-span-3', 'row-span-4'],
  theme: {
    extend: {

      screens: {
        // '3xl': '1600px',
        'tv': '2000px',
      },

      colors: {
        seb: {
          // header: '#1a1a1a',
          // dude: '#43302b',
          green: '#60cd18',
          darkgreen1: '#45b400',
          darkgreen2: '#308800',
          yellow: '#ffc500',
          darkyellow1: '#ffb400',
          darkyellow2: '#f8a000',
          purple: '#673ab6',
          darkpurple1: '#4f2c99',
          darkpurple2: '#3f2587',
          red: '#f03529',
          darkred1: '#d81a1a',
          darkred2: '#bb000c',
          blue: '#41b0ee',
          darkblue1: '#0092e1',
          darkblue2: '#007ac7',
          grey1: '#1a1a1a',
          grey2: '#333',
          grey3: '#494949',
          grey4: '#868686',
          grey5: '#adadad',
          grey6: '#cecece',
          grey7: '#dedede',
          grey8: '#e9e9e9',
          grey9: '#f8f8f8',
          // norm
          white: '#fff',
          black: '#000',
          text: '#333',
          link: '#0062bc',
          linkhover: '#0062bc',
          linkvisited: '#673ab6',
          bggrey: '#eee',
          // amh
          prod: `#228B22`,
          acc: `#0099cc`,
          systest: `#778899`
        },
      }
    },
  },
  plugins: [
    /** @type {import('tailwindcss/types/config').PluginCreator} */
    ({ addUtilities }) => {
      addUtilities({
        ".vertical-writing-lr": { "writing-mode": "vertical-lr" },
      });
    }
  ]
}

//   },
//   plugins: [require("tailwindcss-animate"), /* require('@tailwindcss/typography'), */],
// }


