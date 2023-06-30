import { AiFillFacebook } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const socialIcons = [
  {
    id: 1,
    // icon: <BsFacebook />,
    color: "#3A589D",
    tooltip: "Share on Facebook",
    link: "https://facebook.com"
  }
]

export const product = {
  breadcrumbs: [
    {
      text: "Home",
      link: "https://google.com?q=home"
    },
    {
      text: "Shop",
      link: "https://google.com?q=shop"
    },
    {
      text: "Men",
      link: "https://google.com?q=men"
    },
    {
      text: "T-Shirts",
      link: "https://google.com?q=tshirt"
    },
  ],
  title: "Osaka Entry Tee Super 12",
  price: {
    sale: 29.00,
    regular: 39.00
  },
  summary: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas modi cum id maxime similique nam error eligendi, recusandae, velit ea numquam ab. Assumenda fugit sapiente distinctio obcaecati voluptates cumque rem.",
  categories: [
    {
      text: "Men",
      link: "#"
    },
    {
      text: "T-Shirt",
      link: "#"
    }
  ],
  tags: [
    {
      text: "Men",
      link: "#"
    },
    {
      text: "T-Shirt",
      link: "#"
    }
  ],
  share: socialIcons,
  images: [
    {
      thumb: "thumb-url",
      original: "original url",
      alt: "alt text",
      featured: true,
    },
    {
      thumb: "thumb-url",
      original: "original url",
      alt: "alt text",
      featured: false,
    }
  ],
  wishlist: true
}

const menus = [
  {
    id: 1,
    text: "Home",
    link: "#"
  },
  {
    id: 2,
    text: "Home Page 1",
    link: "#"
  },
  {
    id: 3,
    text: "Home Page 2",
    link: "#"
  },
  {
    id: 4,
    text: "Shop",
    link: "#"
  },
  {
    id: 5,
    text: "Two Column",
    link: "#"
  },
  {
    id: 6,
    text: "Single Column",
    link: "#"
  },
]

const childMap = [
  {
    id: 1,
    children: [2, 3]
  },
  {
    id: 4,
    children: [5, 6]
  }
]