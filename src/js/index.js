import { Header } from "./components/header";
import { CURSOR } from "./components/cursor";
import { HeaderMenuScroll } from "./components/headerMenuScroll";
import { SCROLL } from "./components/scroll";
import { sectionContainer } from "./components/sectionContainer";
import { IntersectionObserverPolyfill } from "./components/IntersectionObserver-polyfill";
import { ShoesCard } from "./components/ShoesCards";
import { CardAnimation } from "./components/cardAnimation";
import { CursorEvent } from "./components/CursorEvent";
import "../css/style.css";
import "../Sass/boundAnimation.scss";
import "../Sass/drawer.scss";
import "../Sass/footer.scss";
import "../Sass/header.scss";
import "../Sass/productContainer.scss";
import "../Sass/shoesContainer.scss";
import "../Sass/mobile.scss";
import "../img/JACKET/ALPHA SV JACKET_24K Black.png";
import "../img/JACKET/ALPHA SV JACKET_Dynasty.png";
import "../img/JACKET/ALPHA SV JACKET_Glade.png";
import "../img/JACKET/ALPHA SV JACKET_Soulsonic.png";
import "../img/JACKET/ALPHA SV JACKET_Stratosphere.png";
import "../img/SHOES/Converse Chuck Taylor All-Star 70s Hi Obsidian.png";
import "../img/SHOES/Dr Martens 1460 8-eye boots in black.png";
import "../img/SHOES/Jordan 1 Retro High Shinedown Attention Attention PE.png";
import "../img/SHOES/New Balance CM996 BG.png";
import "../img/SHOES/NIKE Blazer Mid 77 Vintage1.png";
import "../img/SHOES/Yeezy Boost 350 V2 Sand Taupe.png";
import "../img/BEAMS.png";
import "../img/BEAMS_logo.png";
import "../img/brian-lundquist-APbQJD8wJLc-unsplash.jpg";

Header();
CURSOR();
IntersectionObserverPolyfill();
HeaderMenuScroll();
SCROLL();
sectionContainer();
ShoesCard();
CardAnimation();
CursorEvent();