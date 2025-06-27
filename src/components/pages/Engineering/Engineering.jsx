import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AnatomyBackButton from "../../layouts/AnatomyBackButton";
import transformer from "../../../assets/cardimages/transformer.gif";
import twinscrew from "../../../assets/cardimages/twinscrew.gif";
import syphone from "../../../assets/cardimages/syphone.gif";
import router from "../../../assets/cardimages/router.gif";
import DBconnector from "../../../assets/cardimages/DBconnector.png";
import DisplayST from "../../../assets/cardimages/DisplayST.png";
import Gamingmouse from "../../../assets/cardimages/Gamingmouse.png";
import MicrometalLathe from "../../../assets/cardimages/MicrometalLathe.png";
import MicroSD from "../../../assets/cardimages/MicroSD.png";
import MiniatureverticalSystem from "../../../assets/cardimages/MicroSD.png";
import PlanetaryGear from "../../../assets/cardimages/PlanetaryGear.png";
import RaspberryPICamera from "../../../assets/cardimages/RaspberryPICamera.png";
import XiaoESP from "../../../assets/cardimages/XiaoESP.png";
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
import Aircompressor from "../../../assets/cardimages/Air-compressor.png";
import ANPRC from "../../../assets/cardimages/ANPRC 148 Radio.png";
import BailingMachine from "../../../assets/cardimages/Bailing Machine.png";
import BombaTyphoon from "../../../assets/cardimages/Bomba Typhoon Wilden.png";
import ConcreteMixer from "../../../assets/cardimages/Concrete Mixer.png";
import CornSheller from "../../../assets/cardimages/Corn Sheller.png";
import DCRegulated from "../../../assets/cardimages/DC Regulated PowerSupply.png";
import ElectricLinear from "../../../assets/cardimages/ElectricLinearActuator.png";
import Excavator from "../../../assets/cardimages/Excavator.png";
import GasolineGenerator from "../../../assets/cardimages/Gasoline Generator.png";
import Hartnell from "../../../assets/cardimages/Hartnell Governor.png";
import ICEngine from "../../../assets/cardimages/Ic Engine.png";
import LadaAluminium from "../../../assets/cardimages/Lada Aluminium Front.png";
import MetalLed from "../../../assets/cardimages/Metal LED Illuminated Latching.png";
import MicroLathe from "../../../assets/cardimages/Micro Lathe.png";
import Miniaturecircuit from "../../../assets/cardimages/Miniature Circuit Breaker.png";
import Multimeter from "../../../assets/cardimages/Multimeter.png";
import Oceangate from "../../../assets/cardimages/OceanGate Titan Submersible.png";
import Oscilloscope from "../../../assets/cardimages/Oscilloscope.png";
import PlasticWaste from "../../../assets/cardimages/Plastic Waste Crusher.png";
import RaspberryPI_5 from "../../../assets/cardimages/Raspberry PI-5.png";
import RibbonMixer from "../../../assets/cardimages/RibbonMixerMachine.png";
import RicePeeler from "../../../assets/cardimages/Rice Peeler.png";






















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



        <div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-4 justify-center items-center">


<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={DBconnector} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
    DB9 Connector Male
  </h5>
</div>
<Link to="/db" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={DisplayST} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
    Display ST7789V2
  </h5>
</div>
<Link to="/displayst" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={MicrometalLathe} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
    Micro Metal Lathe
  </h5>
</div>
<Link to="/MMlathe" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={MicroSD} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
    Micro SD Card And Holder
  </h5>
</div>
<Link to="/SDcard" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

</div> 


        <div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-4 justify-center items-center ">
          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={MiniatureverticalSystem} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                Miniature Vertical System Engine
              </h5>
            </div>
            <Link to="/mvse" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>

          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={PlanetaryGear} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
              Planetary Gear System
              </h5>
            </div>
            <Link to="/planetarygear" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>

          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={RaspberryPICamera} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                Raspberry PI Camera
              </h5>
            </div>
            <Link to="/Picamera" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>
          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={XiaoESP} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
              Seed Studio Xiao Esp32-C3
              </h5>
            </div>
            <Link to="/xiaoesp" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>
        </div>


        <div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-4 justify-center items-center ">
          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={MiniatureverticalSystem} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
              Bender Assembly
              </h5>
            </div>
            <Link to="/BenderA" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>

          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={PlanetaryGear} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
              Double Action Oscillating
              </h5>
            </div>
            <Link to="/DAOSC" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>

          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={RaspberryPICamera} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
              Front Frame Tracking Fixture
              </h5>
            </div>
            <Link to="/FFTF" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>
          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={XiaoESP} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
              GalvanoMeter
              </h5>
            </div>
            <Link to="/Galvano" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>
        </div>


        <div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-4 justify-center items-center ">
          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={MiniatureverticalSystem} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
              Game Controller
              </h5>
            </div>
            <Link to="/GameC" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>

          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={PlanetaryGear} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
              Lake Cleaning Machine
              </h5>
            </div>
            <Link to="/LakeCM" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>

          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={RaspberryPICamera} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
              Linkages
              </h5>
            </div>
            <Link to="/Linkages" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>
          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={XiaoESP} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
              Low Leak Connector
              </h5>
            </div>
            <Link to="/LowLeakC" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>
        </div>


        <div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-4 justify-center items-center ">
          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={MiniatureverticalSystem} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
              AIR G18-G17 Nozzle
              </h5>
            </div>
            <Link to="/AGN" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>

          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={PlanetaryGear} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
              BKS Euro Lock
              </h5>
            </div>
            <Link to="/bkslock" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>

          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={RaspberryPICamera} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
              CNC-3018
              </h5>
            </div>
            <Link to="/cNc" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>
          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={XiaoESP} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
              Fishing Reel
              </h5>
            </div>
            <Link to="/freel" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>
        </div>


        <div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-4 justify-center items-center ">
          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={MiniatureverticalSystem} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
              Air Pressure Gauge
              </h5>
            </div>
            <Link to="/apg" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>

          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={PlanetaryGear} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
              Caster Wheel
              </h5>
            </div>
            <Link to="/casterw" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>

          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={RaspberryPICamera} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
              Cortex3D CoreXY 3D Printer
              </h5>
            </div>
            <Link to="/cortexp" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>

          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={XiaoESP} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
              Digital Scientific Calculator
              </h5>
            </div>
            <Link to="/dsc" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>
        </div>


        <div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-4 justify-center items-center ">
          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={MiniatureverticalSystem} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
              Hydraulic Jack
              </h5>
            </div>
            <Link to="/Hyjack" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>

          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={PlanetaryGear} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
              Hydraulic Press 50T
              </h5>
            </div>
            <Link to="/hp50t" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>

          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={RaspberryPICamera} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
              Manual Pipe Bending Hydraulic Machine
              </h5>
            </div>
            <Link to="/mpbhm" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>

          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={XiaoESP} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
              Odroid XU4
              </h5>
            </div>
            <Link to="/odroid" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>
        </div>


        <div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-4 justify-center items-center ">
          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={MiniatureverticalSystem} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
              Pump Complete Extude
              </h5>
            </div>
            <Link to="/pumpco" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>

          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={PlanetaryGear} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
              Quick Charger TPS61088
              </h5>
            </div>
            <Link to="/Qtps" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>

          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={RaspberryPICamera} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
              Raspberry Pi Simplified Single Solid
              </h5>
            </div>
            <Link to="/Rpsss" className="py-4">
              <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
                Explore
              </span>
            </Link>
          </div>

          <div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
            <img src={XiaoESP} className="h-32 w-full" alt="" />
            <div className="p-3">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
              SME Power Generation
              </h5>
            </div>
            <Link to="/smepg" className="py-4">
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
    AC Motor
  </h5>
</div>
<Link to="/acm" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={dewalt} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
    Brake Caliper
  </h5>
</div>
<Link to="/bcali" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={drill} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Car Starting Syatem
  </h5>
</div>
<Link to="/cssy" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={arduinonano} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  CarSuspension
  </h5>
</div>
<Link to="/csus" className="py-4">
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
  Carburetor
  </h5>
</div>
<Link to="/carbu" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={dewalt} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
    Car Closer Door
  </h5>
</div>
<Link to="/ccd" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={drill} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Chain Conveyor
  </h5>
</div>
<Link to="/chaincon" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={arduinonano} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Diagonal Press
  </h5>
</div>
<Link to="/diagonal" className="py-4">
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
  GD 80F
  </h5>
</div>
<Link to="/gdf" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={dewalt} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
    High Pressure Pump
  </h5>
</div>
<Link to="/hpump" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={drill} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Hokken Telescope
  </h5>
</div>
<Link to="/hokken" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={arduinonano} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  IOT Aurdino Mega Case LCD
  </h5>
</div>
<Link to="/iamcl" className="py-4">
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
  Maxsun King Matx Motherboard
  </h5>
</div>
<Link to="/mkmm" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={dewalt} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Piston Valveless
  </h5>
</div>
<Link to="/pistonv" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={drill} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Precision Seeder
  </h5>
</div>
<Link to="/presee" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={arduinonano} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Rear Differential
  </h5>
</div>
<Link to="/rearD" className="py-4">
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
<img src={Aircompressor} className="h-32 w-full" alt="" />
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
<img src={Hartnell} className="h-32 w-full" alt="" />
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
<img src={ICEngine} className="h-32 w-full" alt="" />
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
<img src={ConcreteMixer} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Concrete Mixer
  </h5>
</div>
<Link to="/concretemixer" className="py-4">
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
<img src={DCRegulated} className="h-32 w-full" alt="" />
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

<div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-1 justify-center items-center">

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={Multimeter} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Multimeter
  </h5>
</div>
<Link to="/multimeter" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={Oscilloscope} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Oscilloscope
  </h5>
</div>
<Link to="/oscilloscope" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={aircon} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   ATM Machine
  </h5>
</div>
<Link to="/atmmachine" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={ANPRC} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   ANPRC 148 Radio
  </h5>
</div>
<Link to="/anprcradio" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

</div>

<div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-1 justify-center items-center">

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={CornSheller} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Corn Sheller
  </h5>
</div>
<Link to="/cornsheller" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={MicroLathe} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Micro Lathe
  </h5>
</div>
<Link to="/microlathe" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>


<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={PlasticWaste} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Plastic Waste Crusher
  </h5>
</div>
<Link to="/plasticwaste" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={RicePeeler} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Rice Peeler
  </h5>
</div>
<Link to="/ricepeeler" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>


</div>

<div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-1 justify-center items-center">

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={Miniaturecircuit} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  2 Pole Miniature Circuit Breaker
  </h5>
</div>
<Link to="/mcb" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={GasolineGenerator} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Gasoline Generator
  </h5>
</div>
<Link to="/gasolineg" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={Oceangate} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  OceanGate Titan Submersible
  </h5>
</div>
<Link to="/Oceangate" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={BailingMachine} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Bailing Machine
  </h5>
</div>
<Link to="/BailingMachine" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>


</div>


<div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-1 justify-center items-center">

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={BombaTyphoon} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Bomba Typhoon Wilden
  </h5>
</div>
<Link to="/Bombatyphoon" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Generator And Planetary Gearbox
  </h5>
</div>
<Link to="/plangear" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={LadaAluminium} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Lada Aluminium Front And Ventilated Brake
  </h5>
</div>
<Link to="/aluminium" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={MetalLed} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Metal LED Illuminated Latching
  </h5>
</div>
<Link to="/metalLED" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>


</div>


<div className="md:flex-col sm:flex-col lg:flex lg:flex-row gap-4 my-10 mx-1 justify-center items-center">

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={RaspberryPI_5} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Raspberry PI-5
  </h5>
</div>
<Link to="/raspb" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={RibbonMixer} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Ribbon Mixer Machine
  </h5>
</div>
<Link to="/ribbon" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={Excavator} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Excavator
  </h5>
</div>
<Link to="/excavator" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={ElectricLinear} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Electric Linear Actuator
  </h5>
</div>
<Link to="/electricl" className="py-4">
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
  Arty-Z7
  </h5>
</div>
<Link to="/arty" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Gear Speed Reducer
  </h5>
</div>
<Link to="/gears" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Bluetooth PCB MH-M38
  </h5>
</div>
<Link to="/bpcb" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Aliexpress BT30 ATC
  </h5>
</div>
<Link to="/bt30" className="py-4">
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
  BT40 Spindel
  </h5>
</div>
<Link to="/bts" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   CNC MACHINE
  </h5>
</div>
<Link to="/cnm" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   MR106L 22N Rocket Engine
  </h5>
</div>
<Link to="/rengine" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  NovaBot-Industrial Robot
  </h5>
</div>
<Link to="/novab" className="py-4">
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
  Packard Merlin
  </h5>
</div>
<Link to="/packard" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   RESISTOR
  </h5>
</div>
<Link to="/resist" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Robotic Manipulator
  </h5>
</div>
<Link to="/roma" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Air Gripper
  </h5>
</div>
<Link to="/airg" className="py-4">
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
  Butterfly Valve
  </h5>
</div>
<Link to="/butterv" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Hydraulic Bottle Jack
  </h5>
</div>
<Link to="/hbj" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Hydraulic Press
  </h5>
</div>
<Link to="/hpress" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Lathe Tailstock
  </h5>
</div>
<Link to="/ltail" className="py-4">
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
  AmmoniaOil
  </h5>
</div>
<Link to="/Aoil" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Amplifier
  </h5>
</div>
<Link to="/ampli" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Dc Motor
  </h5>
</div>
<Link to="/dcm" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Jet Engine Assembly
  </h5>
</div>
<Link to="/jete" className="py-4">
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
  Metal Bending Machine
  </h5>
</div>
<Link to="/metalB" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Resin Printer
  </h5>
</div>
<Link to="/resin" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Stillson Wrench
  </h5>
</div>
<Link to="/sw" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Syringe Dispenser
  </h5>
</div>
<Link to="/syringe" className="py-4">
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
  Universal Joint
  </h5>
</div>
<Link to="/ujoint" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Valve For Regulating GasFlow
  </h5>
</div>
<Link to="/vfrgf" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   YD ESP-32
  </h5>
</div>
<Link to="/yd" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
   Kamikaze Drone
  </h5>
</div>
<Link to="/KD" className="py-4">
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
  Maecoom Hotend
  </h5>
</div>
<Link to="/maecoom" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Optical Limit Switch
  </h5>
</div>
<Link to="/opticalL" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Quad Rotor Wankel Engine
  </h5>
</div>
<Link to="/quadr" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Section Valve
  </h5>
</div>
<Link to="/Svalve" className="py-4">
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
  Wind Turbine
  </h5>
</div>
<Link to="/wturbine" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Wishbone Suspension
  </h5>
</div>
<Link to="/wishbone" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Basys
  </h5>
</div>
<Link to="/basys" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Car Jack
  </h5>
</div>
<Link to="/carjack" className="py-4">
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
  Cut Off Saw
  </h5>
</div>
<Link to="/cos" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Landing Mechanism
  </h5>
</div>
<Link to="/landingmech" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Gate Valve
  </h5>
</div>
<Link to="/gatev" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  HC 04
  </h5>
</div>
<Link to="/hc04" className="py-4">
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
  Hydraulic Swivel Clamp
  </h5>
</div>
<Link to="/hsclamp" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Hydroponic Vertical Farming
  </h5>
</div>
<Link to="/verticalf" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Mechanical Pencil
  </h5>
</div>
<Link to="/mpencil" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Torpedo Tube
  </h5>
</div>
<Link to="/ttube" className="py-4">
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
  USB C Connector
  </h5>
</div>
<Link to="/usbc" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Radial Cooler
  </h5>
</div>
<Link to="/radialcool" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Liquid Rocket Engine
  </h5>
</div>
<Link to="/liquidrocket" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={suspensonImage} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Potentio Meter Module
  </h5>
</div>
<Link to="/pModule" className="py-4">
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
  ZynqBerryZero Module
  </h5>
</div>
<Link to="/zynqb" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={Gamingmouse} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Wireless Gaming Mouse
  </h5>
</div>
<Link to="/Gmouse" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={Gamingmouse} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Pneumatic Shear Machine
  </h5>
</div>
<Link to="/psm" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={Gamingmouse} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Sheet Metal Bender
  </h5>
</div>
<Link to="/SMB" className="py-4">
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
  Screw Terminal
  </h5>
</div>
<Link to="/STer" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={Gamingmouse} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  SIM Card
  </h5>
</div>
<Link to="/SimC" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={Gamingmouse} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Toogle Clamp
  </h5>
</div>
<Link to="/TClamp" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>

<div className="w-72 bg-zinc-900 shadow-xl flex flex-col gap-6 justify-center  items-center">
<img src={Gamingmouse} className="h-32 w-full" alt="" />
<div className="p-3">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
  Standard Vise
  </h5>
</div>
<Link to="/Svise" className="py-4">
  <span className="bg-blue-700 text-white font-medium px-3 py-2 rounded-lg">
    Explore
  </span>
</Link>
</div>


</div>



























































































</div>













































      
    </>
  );
};

export default Engineering;


