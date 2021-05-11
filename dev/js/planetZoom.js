import { gsap } from "gsap";

gsap.set("#Planet",{transformOrigin:"center"});


export let PlanetZoomInTL = gsap.timeline();
PlanetZoomInTL.fromTo("#Planet",{alpha:0, scale:0.25},{alpha:1, duration:2, scale:5, y:"-=800", x:"+=300",ease:"none"})

export let PlanetZoomOutTL = gsap.timeline();
PlanetZoomOutTL.to(["#Planet","#CowJetPack"],{duration:3, y:"+=-150" , x:"+=-240"})
               .to(["#Planet","#CowJetPack"], {opacity:0});
            
