import { gsap } from "gsap";

gsap.set("#CowJetPack",{transformOrigin:"center"});


export let liftOffTL = gsap.timeline();

liftOffTL.to("#CowJetPack",{duration:0.15, rotation:-5, ease:"none"})
            .to("#CowJetPack",{duration:0.15, rotation:5, yoyo:true, repeat:5, ease:"none"})
            .to("#CowJetPack",{duration:0.15, rotation:-20,ease:"none"})
            .to("#CowJetPack",{duration:3, y:"-=400", scale:.50, ease: "power3.in"},"upAndAway")
            .to("#ForegroundCrater",{duration:5, y:"+=800", ease: "power3.in"},'upAndAway')
            .to("#Planet",{duration:5, y:"+=1100", ease: "power3.in"},'upAndAway') 
            .to("#BackgroundMoon",{duration:5, y:"+=900", ease: "power3.in"},'upAndAway')
            .to("#SpaceRock1",{duration:5, y:"+=1100", ease: "power3.in"},'upAndAway')
            .to("#SpaceRock2",{duration:5, y:"+=1100", ease: "power3.in"},'upAndAway')
            .to("#SpaceRock3",{duration:5, y:"+=1100", ease: "power3.in"},'upAndAway');

      
  
