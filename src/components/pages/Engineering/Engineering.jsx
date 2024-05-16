import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AnatomyBackButton from "../../layouts/AnatomyBackButton";
import transformer from "../../../assets/cardimages/transformer.gif";
import twinscrew from "../../../assets/cardimages/twinscrew.gif";
import syphone from "../../../assets/cardimages/syphone.gif";
import router from "../../../assets/cardimages/router.gif";
import molecule from "../../../assets/cardimages/molecule.gif";
import drone from "../../../assets/cardimages/drone.gif";
import fridge from "../../../assets/cardimages/fridge.jpg";
import xray from "../../../assets/cardimages/xray.gif";
import electrical from "../../../assets/cardimages/electrical.gif";
import camera from "../../../assets/cardimages/camera.gif";
import engine from "../../../assets/cardimages/4stroke.gif";
import dieselengine from "../../../assets/cardimages/dieselengine.gif";
import gs from "../../../assets/cardimages/gs.gif";
import lightsensor from "../../../assets/cardimages/lsensor.gif";
import steppermotor from "../../../assets/cardimages/steppermotor.gif";
import  microusb from "../../../assets/cardimages/microusbboard.gif";
import  dewalt from "../../../assets/cardimages/dewalt.gif";
import  drill from "../../../assets/cardimages/drill.gif";
import  arduinonano from "../../../assets/cardimages/arduino.gif";
import  nodemcumini from "../../../assets/cardimages/nodemcumini.gif";
import  sparkfunmotor from "../../../assets/cardimages/sparkfunmotor.gif";
import  raspberrypi from "../../../assets/cardimages/raspberrypi.gif";
import  v12combustion from "../../../assets/cardimages/v12combustion.gif";
import  anglegrinder from "../../../assets/cardimages/anglegrinder.gif";
import  rotaxe from "../../../assets/cardimages/rotaxe.jpg";
import  singlecylinder from "../../../assets/cardimages/singlecylinder.gif";
import  bikeselfstart from "../../../assets/cardimages/bikeselfstart.gif";
import  escalator from "../../../assets/cardimages/escalator.gif";
import  barretm82 from "../../../assets/cardimages/barretm82.gif";
import  blendermachine from "../../../assets/cardimages/blender.gif";
import  cylinderblock from "../../../assets/cardimages/cylinderblock.gif";
import  fivespeed from "../../../assets/cardimages/fivespeed.gif";
import  esp from "../../../assets/cardimages/esp.gif";
import  headphone from "../../../assets/cardimages/headphone.gif"; 
import  v6engine from "../../../assets/cardimages/v6engine.gif";
import  handdrill from "../../../assets/cardimages/handdrill.gif";
import  binocular from "../../../assets/cardimages/binocular.gif";
import  discbrake from "../../../assets/cardimages/discbrake.gif";
import  motor from "../../../assets/cardimages/motor.gif";
import  automaticairvalve from "../../../assets/cardimages/automaticairvalve.gif";
import  ertf from "../../../assets/cardimages/ertf.gif";
import  lipocharger from "../../../assets/cardimages/lipocharger.gif";
import  matek from "../../../assets/cardimages/matek.png";
import  rvalve from "../../../assets/cardimages/rvalve.gif";
import  drum from "../../../assets/cardimages/drum.gif";
import  wifi from "../../../assets/cardimages/wifi.jpg";
import  rod from "../../../assets/cardimages/rod.gif";
import  car from "../../../assets/cardimages/car.gif";
import  heat from "../../../assets/cardimages/heat.gif";
import  shock from "../../../assets/cardimages/shock.gif";
import  roller from "../../../assets/cardimages/roller.gif";
import  sonoff from "../../../assets/cardimages/sonoff.jpg";
import  storm from "../../../assets/cardimages/storm.jpg";
import  eye from "../../../assets/cardimages/eye.jpg";
import  charge from "../../../assets/cardimages/charge.png";
import  hobbywing from "../../../assets/cardimages/hobbywing.jpg";
import  mc from "../../../assets/cardimages/mc.gif";
import  alternator from "../../../assets/cardimages/alternator.gif";
import  cams from "../../../assets/cardimages/cams.gif";
import  carsteering from "../../../assets/cardimages/carsteering.png";
import suspensonImage from "../../../assets/cardimages/air suspension.jpg";
import  dprinter from "../../../assets/cardimages/dprinter.gif";
import vaircompressor from "../../../assets/cardimages/vaircompressor.gif";
import aircon from "../../../assets/cardimages/aircon.gif";
import  bananapi from "../../../assets/cardimages/bananapi.gif";
import  brutaldiyl from "../../../assets/cardimages/brutaldiyl.gif";
import  cctv from "../../../assets/cardimages/cctv.gif";
import  cnclathe from "../../../assets/cardimages/cnclathe.gif";
import  cpu from "../../../assets/cardimages/cpu.gif";
import  cpucooler from "../../../assets/cardimages/cpucooler.gif";
import  differentialsystem from "../../../assets/cardimages/differentialsystem.gif";
import  graphicscard from "../../../assets/cardimages/graphicscard.gif";
import  helicalsus from "../../../assets/cardimages/helicalsus.gif";
import  hydraulicb from "../../../assets/cardimages/hydraulicb.gif";
import  laptop from "../../../assets/cardimages/laptop.gif";
import  motherboard from "../../../assets/cardimages/motherboard.gif";
import  ram from "../../../assets/cardimages/ram.gif";
import  slidingmeshg from "../../../assets/cardimages/slidingmeshg.gif";
import  tv from "../../../assets/cardimages/tv.gif";
import  walkietal from "../../../assets/cardimages/walkietal.gif";
import  watercooler from "../../../assets/cardimages/watercooler.gif";






















const Engineering = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-gray-900 py-10">
        <div className="flex mt-10 ml-14">
          <Link to="/">
            <AnatomyBackButton />
          </Link>
        </div>

        <div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-4 justify-center items-center">
          <div className="w-72 shadow-xl flex flex-col gap-6 justify-center  items-center bg-zinc-900">
            <img src={transformer} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                Transformer
              </h5>
            </div>
            <Link to="/transformer" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>

          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={twinscrew} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                Twinscrew
              </h5>
            </div>
            <Link to="/twinscrew" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>

          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={syphone} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                Syphone
              </h5>
            </div>
            <Link to="/syphone" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>

          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={router} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                Router
              </h5>
            </div>
            <Link to="/router" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>
        </div>

        <div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-4 justify-center items-center ">
          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={molecule} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                Molecule
              </h5>
            </div>
            <Link to="/molecule" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>

          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={drone} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                Drone
              </h5>
            </div>
            <Link to="/drone" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>

          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={fridge} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                Fridge
              </h5>
            </div>
            <Link to="/fridge" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>
          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={xray} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                X-Ray Machine
              </h5>
            </div>
            <Link to="/xray" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>
        </div>

        <div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-4 justify-center items-center">
          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={electrical} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                Basic Electrical
              </h5>
            </div>
            <Link to="/electrical" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>

          <div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-4 justify-center items-center">
            <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
              <img src={engine} className="h-32 w-full" alt="" />
              <div className="p-3">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                  Four Stroke Engine
                </h5>
              </div>

              <span
                onClick={(e) => navigate("/fourstrokeengine")}
                className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg"
              >
                Explore
              </span>
            </div>

            <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
              <img src={dieselengine} className="h-32 w-full" alt="" />
              <div className="p-3">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                  Diesel engine
                </h5>
              </div>
              <Link to="/diesel" className="py-4">
                <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                  Explore
                </span>
              </Link>
            </div>

            <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
              <img src={camera} className="h-32 w-full" alt="" />
              <div className="p-3">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                  Camera
                </h5>
              </div>
              <Link to="/camera" className="py-4">
                <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                  Explore
                </span>
              </Link>
            </div>



    
          </div>


        

        </div>


        <div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-4 justify-center items-center">


        <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
        <img src={gs} className="h-32 w-full" alt="" />
        <div className="p-3">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
            Grain Separator
          </h5>
        </div>
        <Link to="/grainseparator" className="py-4">
          <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
            Explore
          </span>
        </Link>
      </div>

      

      <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
      <img src={rotaxe} className="h-32 w-full" alt="" />
      <div className="p-3">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
          Rotax-582 Engine
        </h5>
      </div>
      <Link to="/rotax" className="py-4">
        <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
          Explore
        </span>
      </Link>
    </div>

    
    <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
    <img src={lightsensor} className="h-32 w-full" alt="" />
    <div className="p-3">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
        Light Sensor
      </h5>
    </div>
    <Link to="/lightsensor" className="py-4">
      <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
        Explore
      </span>
    </Link>
  </div>



<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={steppermotor} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
    Stepper Motor
  </h5>
</div>
<Link to="/steppermotor" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

</div>



<div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-4 justify-center items-center">


<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={microusb} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
    Micro USB Board
  </h5>
</div>
<Link to="/microusb" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={dewalt} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
    Dewalt Wood Router
  </h5>
</div>
<Link to="/dewaltwoodrouter" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={drill} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
    Cordless Drill Machine
  </h5>
</div>
<Link to="/cordlessmachine" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={arduinonano} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
    Arduino Nano
  </h5>
</div>
<Link to="/arduinonano" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

</div> 


<div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-4 justify-center items-center">


<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={nodemcumini} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
    Node MCU Mini
  </h5>
</div>
<Link to="/nodemcumini" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={sparkfunmotor} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Sparkfun Qwiic Motor Driver
  </h5>
</div>
<Link to="/sparkfunmotor" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={raspberrypi} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Raspberry Pi Zero
  </h5>
</div>
<Link to="/raspberrypizero" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={v12combustion} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  V12 Combustion Engine
  </h5>
</div>
<Link to="/v12combustion" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

</div>

<div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-4 justify-center items-center">

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={singlecylinder} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Single Cylinder Engine
  </h5>
</div>
<Link to="/singlecylinder" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>



<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={anglegrinder} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Angle Grinder
  </h5>
</div>
<Link to="/anglegrinder" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>


<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={bikeselfstart} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Bike Self Start Motor
  </h5>
</div>
<Link to="/bikeselfstart" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={escalator} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Escalator
  </h5>
</div>
<Link to="/escalator" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>
</div>

<div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-1 justify-center items-center">


<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={barretm82} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Barret M82
  </h5>
</div>
<Link to="/barretm82" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>
<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={blendermachine} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Blender Machine
  </h5>
</div>
<Link to="/blendermachine" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={cylinderblock} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Cylinder Block Assembly
  </h5>
</div>
<Link to="/cylinderblockassembly" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={fivespeed} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Five Speed Transmission
  </h5>
</div>
<Link to="/fivespeed" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>
</div>

<div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-1 justify-center items-center">


<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={v6engine} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  V6 Engine
  </h5>
</div>
<Link to="/v6engine" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={discbrake} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Disc Brake
  </h5>
</div>
<Link to="/discbrake" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={esp} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  ESP8266-ESP01
  </h5>
</div>
<Link to="/esp" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={handdrill} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Hand Drill
  </h5>
</div>
<Link to="/handdrill" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

</div>


<div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-1 justify-center items-center">

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={headphone} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Headphone
  </h5>
</div>
<Link to="/headphone" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>


<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={motor} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Motorcycle Exhaust
  </h5>
</div>
<Link to="/motor" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>


<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={binocular} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Binocular
  </h5>
</div>
<Link to="/binocular" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore 
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={automaticairvalve} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Automatic Air Valve
  </h5>
</div>
<Link to="/automaticairvalve" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore 
  </span>
</Link>
</div>
</div>



<div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-1 justify-center items-center">

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={ertf} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  ERTFTM 1.54
  </h5>
</div>
<Link to="/ertftm" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>


<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={lipocharger} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Micro USB Lipo Charger
  </h5>
</div>
<Link to="/lipocharger" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>


<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={matek} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Matek Power Hub
  </h5>
</div>
<Link to="/matek" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore 
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={rvalve} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Refrigirator Valve
  </h5>
</div>
<Link to="/refrigiratorvalve" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore 
  </span>
</Link>
</div>
</div>

<div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-1 justify-center items-center">

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={rod} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Rod and Bearing
  </h5>
</div>
<Link to="/Rodandbearing" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={wifi} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Wifi Switch Relay
  </h5>
</div>
<Link to="/WifiRelaySwitch" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>


<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={drum} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Drum Break
  </h5>
</div>
<Link to="/Drumbreak" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={car} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Car Steering
  </h5>
</div>
<Link to="/Carsteering" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>
</div>

<div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-1 justify-center items-center">

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={heat} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Radiator Heat Exchanger
  </h5>
</div>
<Link to="/RadiatorHeatExchanger" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={shock} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Shock Absorber
  </h5>
</div>
<Link to="/ShockAbsorber" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={roller} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Roller Conveyor
  </h5>
</div>
<Link to="/RollerConveyor" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>


<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={sonoff} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Sonoff 7-32 Wifi
  </h5>
</div>
<Link to="/Sonoff" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>
</div>


<div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-1 justify-center items-center">

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={storm} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  ACS 712 Strom Sensor Arduino
  </h5>
</div>
<Link to="/StormSensor" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>


<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={eye} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Esp Eye
  </h5>
</div>
<Link to="/EspEye" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={charge} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  H961-u v6.0 Charging Module
  </h5>
</div>
<Link to="/chargingm" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>


<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={hobbywing} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Hobbywing X-rotor F4 Flight Controller
  </h5>
</div>
<Link to="/hobbywing" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>
</div>


<div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-1 justify-center items-center">

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={mc} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  ESP32 microcontroller
  </h5>
</div>
<Link to="/esp32mc" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>


<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={alternator} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Alternator
  </h5>
</div>
<Link to="/alternator" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={cams} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Camshaft
  </h5>
</div>
<Link to="/camshaft" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={carsteering} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Car
  </h5>
</div>
<Link to="/car" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>



</div>
{/* this is the ending */}





<div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-1 justify-center items-center">

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={carsteering} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  LSUDryer
  </h5>
</div>
<Link to="/lsu" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>



<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  suspenson
  </h5>
</div>
<Link to="/suspenson" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>


<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={differentialsystem} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Differential systen
  </h5>
</div>
<Link to="/dif" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>


<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Air-compressor
  </h5>
</div>
<Link to="/aircom" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>






</div>

<div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-1 justify-center items-center">

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  audrino
  </h5>
</div>
<Link to="/audrino" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={brutaldiyl} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Brutal 
  </h5>
</div>
<Link to="/brutual" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Hartnill Governor
  </h5>
</div>
<Link to="/hartnill" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={helicalsus} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Helical Suspenson
  </h5>
</div>
<Link to="/helical" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>


</div>



{/* ------------------------------------------------------------------------------------------------------------------------- */}

<div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-1 justify-center items-center">

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={hydraulicb} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Hydraulic Brake
  </h5>
</div>
<Link to="/hydbrake" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Ic Engine
  </h5>
</div>
<Link to="/ic" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={slidingmeshg} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Sliding mesh gear box
  </h5>
</div>
<Link to="/slidingmesh" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={dprinter} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   3d printer
  </h5>
</div>
<Link to="/3dprinter" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>





</div>

{/* -------------------------------------------------------------------------------------------------------------------------------- */}


<div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-1 justify-center items-center">

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={cnclathe} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Cnclathe
  </h5>
</div>
<Link to="/cnclathe" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Cnc-Turner
  </h5>
</div>
<Link to="/cncturner" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={cpu} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Cpu
  </h5>
</div>
<Link to="/cpu" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={cpucooler} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Cpu-Cooler
  </h5>
</div>
<Link to="/cpucooler" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>


</div>
{/* --------------------------------------------- */}

<div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-1 justify-center items-center">

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={graphicscard} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Graphics Card
  </h5>
</div>
<Link to="/graphicscard" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={motherboard} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Mother Board
  </h5>
</div>
<Link to="/motherboard" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={ram} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Ram
  </h5>
</div>
<Link to="/ram" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={cctv} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   CCTV
  </h5>
</div>
<Link to="/cctv" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

</div>
{/* ---------------------------------------------------------------------------------------------------------------------------- */}

<div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-1 justify-center items-center">

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={laptop} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Laptop
  </h5>
</div>
<Link to="/laptop" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={tv} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Television
  </h5>
</div>
<Link to="/tv" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>


<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Buck Converter
  </h5>
</div>
<Link to="/buckconverter" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={walkietal} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Walkie Talkie
  </h5>
</div>
<Link to="/walkitalki" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>


</div>
{/* -------------------------------------------------------------------- */}

<div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-1 justify-center items-center">

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={bananapi} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Banana pi BPS_MS
  </h5>
</div>
<Link to="/banana" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={aircon} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   AirConditionor
  </h5>
</div>
<Link to="/airconditionor" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   DC Regulated PowerSupply
  </h5>
</div>
<Link to="/dcpowersupply" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={watercooler} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Water Cooler
  </h5>
</div>
<Link to="/watercooler" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

</div>

{/* ----------------------------------------------------------------------------------------------------------- */}

</div>













































      
    </>
  );
};

export default Engineering;


