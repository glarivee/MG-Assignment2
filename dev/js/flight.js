import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);

export let flightTL = gsap.timeline();

flightTL.to("#CowJetPack", {
    duration: 7,
    motionPath: {
        path: "#myflightpath",
        align:"#myflightpath",
        alignOrigin: [0.5, 0.5],
        autoRotate: 2
    },
    ease: "none",
    scale:1
});

