import { gsap } from "gsap";

export let zoomTL = gsap.timeline();

zoomTL.from("#BackgroundMoon",{duration:6, scale:10},"zoom")
