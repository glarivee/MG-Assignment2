import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

import { zoomTL } from "./zoomIn"
import { CowJetPackTL } from "./CowJetPack"
import { liftOffTL } from "./liftOff"
import { flightTL } from "./flight"
import { PlanetZoomInTL } from "./planetZoom"
import { SpaceRockTL } from "./SpaceRocks" ; 
import { PlanetZoomOutTL} from "./planetZoom"

let mainTL = gsap.timeline();

mainTL.add(zoomTL)
        .add(CowJetPackTL)
        .add(liftOffTL, "-=1") 
        .add(flightTL, "myflightpath")
        .add(SpaceRockTL, "myflightpath")
        .add(PlanetZoomInTL, "myflightpath")
        .add(PlanetZoomOutTL);




GSDevTools.create();
