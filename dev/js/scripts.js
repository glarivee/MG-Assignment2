import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

import { zoomTL } from "./zoomIn"
import { CowJetPackTL } from "./CowJetPack"
import { liftOffTL } from "./liftOff"

let mainTL = gsap.timeline();

mainTL.add(zoomTL)
        .add(CowJetPackTL)
        .add(liftOffTL, "-=1") 




GSDevTools.create();
