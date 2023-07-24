const logo = `${process.env.PUBLIC_URL}/shared/logo.svg`;
const hamburger = `${process.env.PUBLIC_URL}/shared/icon-hamburger.svg`;
const close = `${process.env.PUBLIC_URL}/shared/icon-close.svg`

const bgConfig = [
  {
    name: "/",
    mobile: "bg-[image:url(../public/home/background-home-mobile.jpg)]",
    tablet: "sm:bg-[image:url(../public/home/background-home-tablet.jpg)]",
    desktop: "lg:bg-[image:url(../public/home/background-home-desktop.jpg)]",
  }, {
    name: "/destination",
    mobile: "bg-[image:url(../public/destination/background-destination-mobile.jpg)]",
    tablet: "sm:bg-[image:url(../public/destination/background-destination-tablet.jpg)]",
    desktop: "md:bg-[image:url(../public/destination/background-destination-desktop.jpg)]",
  }, {
    name: "/crew",
    mobile: "bg-[image:url(../public/crew/background-crew-mobile.jpg)]",
    tablet: "md:bg-[image:url(../public/crew/background-crew-tablet.jpg)]",
    desktop: "lg:bg-[image:url(../public/crew/background-crew-desktop.jpg)]",
  }, {
    name: "technology",
    mobile: "bg-[image:url(../public/technology/background-technology-mobile.jpg)]",
    tablet: "md:bg-[image:url(../public/technology/background-technology-tablet.jpg)]",
    desktop: "lg:bg-[image:url(../public/technology/background-technology-desktop.jpg)]",
  }
];

export { logo, bgConfig, hamburger, close }