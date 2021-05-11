import { gsap } from "gsap";


export let SpaceRockTL = gsap.timeline();


SpaceRockTL.to("#SpaceRock1", {duration:1,ease:"bounce.Out",y:"-=2000"})
           .to ("#SpaceRock2", {duration:1.5,ease:"bounce.Out",y:"-=2000"})
           .to ("#SpaceRock3", {duration:2,ease:"bounce.Out",y:"-=2000"});