import cat1 from "./images/cat-1.jpg";
import cat2 from "./images/cat-2.jpg";
import cat3 from "./images/default.jpg";
import turtle1 from "./images/turtle-1.jpg";
import dog1 from "./images/dog-1.jpg";


export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "Jiji",
      slug: "jiji-0234",
      type: "cat",
      about:
        "Don't take it personally, I hate everyone.",
      favorites: [
        "sharp cheddar",
        "my stuffed toy",
        "lying in the sun"
      ],
      images: [
        {
          fields: {
            file: {
              url: cat1
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "Eek",
      slug: "eek-9857",
      type: "cat",
      about:
        "Mighty hunter, blacker than the night, cuddle monster.",
      favorites: [
        "lemon yogurt",
        "beads",
        "lots of attention",
        "hunting"
      ],
      images: [
        {
          fields: {
            file: {
              url: cat2
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      name: "Maru",
      slug: "maru-4357",
      type: "cat",
      about:
        "I am very chill but also love to explore and try new things.",
      favorites: [
        "boxes of any kind",
        "agility exercises",
        "my friend Hanna"
      ],
      images: [
        {
          fields: {
            file: {
              url: cat3
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      name: "Jippy",
      slug: "jippy-5869",
      type: "turtle",
      about:
        "I spend my days watching the world go by outside the window.",
      favorites: [
        "digging under the rose bushes",
        "meal worms",
        "sunsets"
      ],
      images: [
        {
          fields: {
            file: {
              url: turtle1
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "4"
    },
    fields: {
      name: "Milky",
      slug: "milky-4754",
      type: "dog",
      about:
        "My brother calls me polar bear",
      favorites: [
        "dog parks",
        "snow",
        "playing with my cat brothers"
      ],
      images: [
        {
          fields: {
            file: {
              url: dog1
            }
          }
        }
      ]
    }
  }
];
