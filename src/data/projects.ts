const projects = [
  {
    name: "Regnkartan.se",
    description: "En hemsida som visualiserar regn i realtid. Backenden är skriven i Python och hämtar väderdata från METs öppna API. Frontenden är skriven i vanlig javascript utan några ramverk. Servern hostar jag själv på en Raspberry Pi.",
    link: "https://regnkartan.se",
    image: "/images/regnkartan.png",
  },
  {
    name: "Regnkollen.se",
    description: "Ett lite älre projekt som jag gjorde för några år sedan. Hemsidan visar väderprognoser från både SMHI och YR sida vid sida för att enkelt kunna jämföra prognoserna. Hemsidan är skriven i React och hostas med GitHub pages.",
    link: "https://regnkollen.se",
    image: "/images/regnkollen.png",
  },
  {
    name: "Microchart",
    description: "Ett lite mer hårdvarunära projekt som använder en RPi Pico W kopplad till en E-ink skärm för att hämta och visualisera kommande elpriser. Projektet är skrivet i MicroPython och hämtar data från ett REST API.",
    link: "https://github.com/f-i-l-i-p/microchart",
    image: "/images/microchart.jpg",
  },
  {
    name: "Recept",
    description: "En hemsida för att samla och dela recept. Hemsidan är skriven i React och hostas med GitHub pages, backenden är skriven i python och hostades på Heroku.",
    link: "https://github.com/f-i-l-i-p/recipes-backend",
  },
];

export default projects;
