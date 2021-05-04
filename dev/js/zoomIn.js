import { gsap } from "gsap";

export let zoomTL = gsap.timeline();

gsap.set("#BackgroundMoon",{transformOrigin:"top"});
gsap.set("#ForegroundCrater",{transformOrigin:"top"});
// gsap.set("#CowJetPack",{transformOrigin:"top"});

zoomTL.from("#BackgroundMoon",{duration:3, scale:10},"zoom")
    .from("#ForegroundCrater",{duration:3, scale:10},"zoom")
    // .from("#CowJetPack",{duration:3, scale:10}, "zoom")
