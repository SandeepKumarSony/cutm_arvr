import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import HeroBullets from "./components/layouts/HeroSec/HeroBullets";
import Anatomy from "./components/pages/Anatomy/Anatomy";
import Footer from "./components/layouts/Footer/Footer";
import HumanAnatomy from "./components/pages/Anatomy/HumanAnatomy";
import Engineering from "./components/pages/Engineering/Engineering";
import AnimalAnatomy from "./components/pages/Anatomy/AnimalAnatomy";
import Navbar from "./components/layouts/Navbar/Navbar";
import About from "./components/pages/About";
import Team from "./components/pages/Team";
import SkinAnatomy from "./components/container/SkinAnatomy";
import Respiratory from "./components/container/Respiratory";
import ReproductiveSystem from "./components/container/ReproductiveSystem";
import NeruonAnatomy from "./components/container/NeruonAnatomy";
import NervousSystem from "./components/container/NervousSystem";
import LiverAnatomy from "./components/container/LiverAnatomy";
import KidneyAnatomy from "./components/container/KidneyAnatomy";
import MuscularSystem from "./components/container/MuscularSystem";
import HearAnatomy from "./components/container/HearAnatomy";
import EyeAnatomy from "./components/container/EyeAnatomy";
import DigestiveSystem from "./components/container/DigestiveSystem";
import DentalAnatomy from "./components/container/DentalAnatomy";
import EarAnatomy from "./components/container/EarAnatomy";
import CellAnatomy from "./components/container/CellAnatomy";
import FishRespiration from "./components/container/FishRespiration";
import Grasshopper from "./components/container/Grasshopper";
import InsectMorphology from "./components/container/InsectMorphology";
import LabeoRohita from "./components/container/LabeoRohita";
import Palemon from "./components/container/Palemon";
import { AuthContextProvider } from "./context/AuthContext";
import Signin from "./components/pages/Login/Signin";
import Protected from "./components/routes/Protected";
import Transformer from "./components/container/Engineering/Transformer";
import Twinscrew from "./components/container/Engineering/Twinscrew";
import Syphone from "./components/container/Engineering/Syphone";
import RouterModel from "./components/container/Engineering/RouterModel";
import Molecule from "./components/container/Engineering/Molecule";
import DroneSim from "./components/container/Engineering/DroneSim";
import Freezer from "./components/container/Engineering/Freezer";
import XrayModel from "./components/container/Engineering/XrayModel";
import BasicElectrical from "./components/container/Engineering/BasicElectrical";
import Steppermotor from "./components/container/Engineering/Steppermotor";
import MicroUSB from "./components/container/Engineering/MicroUSB";
import DewaltWoodRouter from "./components/container/Engineering/DewaltWoodRouter";
import CordlessDrillMachine from "./components/container/Engineering/CordlessDrillMachine";
import ArduinoNano from "./components/container/Engineering/ArduinoNano";
import Lightsensor from "./components/container/Engineering/Lightsensor";
import NodeMCUMini from "./components/container/Engineering/NodeMCUMini";
import SparkfunQwiicMotorDriver from "./components/container/Engineering/SparkfunQwiicMotorDriver";
import RaspberryPiZero from "./components/container/Engineering/RaspberryPiZero";
import V12combustion from "./components/container/Engineering/V12combustion";
import AngleGrinder from "./components/container/Engineering/AngleGrinder";
import Rotax from "./components/container/Engineering/Rotax";
import FourStrokeEngine from "./components/container/Engineering/FourStrokeEngine";
import SingleCylinder from "./components/container/Engineering/SingleCylinder";
import GrainSeparator from "./components/container/Engineering/Grainseparator";
import Camera from "./components/container/Engineering/Camera";
import Bikeselfstart from "./components/container/Engineering/Bikeselfstart";
import Escalator from "./components/container/Engineering/Escalator";
import BarretM82 from "./components/container/Engineering/BarretM82";
import BlenderMachine from "./components/container/Engineering/BlenderMachine";
import Cylinderblockassembly from "./components/container/Engineering/Cylinderblockassembly";
import DieselEngine from "./components/container/Engineering/DieselEngine";
import FiveSpeedTransmission from "./components/container/Engineering/FiveSpeedtransmission";
import V6Engine from "./components/container/Engineering/V6Engine";
import DiscBrake from "./components/container/Engineering/DiscBrake";
import Esp8266 from "./components/container/Engineering/Esp8266";
import Handdrill from "./components/container/Engineering/Handdrill";
import Headphone from "./components/container/Engineering/Headphone";
import MotorcycleExhaust from "./components/container/Engineering/MotorcycleExhaust";
import Binocular from "./components/container/Engineering/Binocular";
import AutomaticAirValve from "./components/container/Engineering/AutomaticAirValve";
import LipoCharger from "./components/container/Engineering/LipoCharger";
import MatekPowerHub from "./components/container/Engineering/MatekPowerHub";
import RefrigiratorValve from "./components/container/Engineering/RefrigiratorValve";
import WifiSwitchRelay from "./components/container/Engineering/WifiSwitchRelay";
import Rodandbearing from "./components/container/Engineering/Rodandbearing";
import Carsteering from "./components/container/Engineering/Carsteering";
import Drumbreak from "./components/container/Engineering/Drumbreak";
import ShockAbsorber from "./components/container/Engineering/ShockAbsorber";
import RadiatorHeatExchanger from "./components/container/Engineering/RadiatorHeatExchanger";
import RollerConveyor from "./components/container/Engineering/RollerConveyor";
import Sonoff from "./components/container/Engineering/Sonoff";
import StormSensor from "./components/container/Engineering/StormSensor";
import EspEye from "./components/container/Engineering/EspEye";
import ChargingModule from "./components/container/Engineering/ChargingModule";
import Hobbywing from "./components/container/Engineering/Hobbywing";
import ESP32mcontroller from "./components/container/Engineering/ESP32mcontroller";
import Alternator from "./components/container/Engineering/Alternator";
import Camshaft from "./components/container/Engineering/Camshaft";
import Car from "./components/container/Engineering/Car";
import LSUDryer from "./components/container/Engineering/LSUDryer";
import Airsuspenson from "./components/container/Engineering/Airsuspenson";
import DiffertialSystem from "./components/container/Engineering/DiffertialSystem";
import AirCompressor from "./components/container/Engineering/AirCompressor12";
import Audrino from "./components/container/Engineering/Audrino";
import Brutuallty from "./components/container/Engineering/Brutuallty";
import Hartnill from "./components/container/Engineering/Hartnell";
import HelicalSuspenson from "./components/container/Engineering/Helical-suspenson";
import HydraulicBrake from "./components/container/Engineering/Hydraulic-brake";
import Icengine from "./components/container/Engineering/Ic-engine";
import SlidingMeshgearBox from "./components/container/Engineering/SlidingmeshGearBox";
import ThreeDPrinter from "./components/container/Engineering/Threedprinter";
import CncLathe from "./components/container/Engineering/CncLathe";
import Cpu from "./components/container/Engineering/Cpu";
import CpuCooler from "./components/container/Engineering/CpuCooler";
import GraphicsCard from "./components/container/Engineering/GraphicsCard";
import MotherBoard from "./components/container/Engineering/MotherBoard";
import Ram from "./components/container/Engineering/Ram";
import Cctv from "./components/container/Engineering/Cctv";
import Laptop from "./components/container/Engineering/Laptop";
import Tv from "./components/container/Engineering/Television";
import BuckConverter from "./components/container/Engineering/BuckConverter";
import WalkiTaki from "./components/container/Engineering/WalkiTalki";
import BananaPi from "./components/container/Engineering/Bananapi";
import Spinal from "./components/container/Human-Spinal-System";
import Cardio from "./components/container/Cardiovascular_System";
import HorseSkeleton from "./components/container/HorseSkeleton";
import LymphaticSystem from "./components/container/LymphaticSystem";
import AirConditionor from "./components/container/Engineering/AirConditionor";
import DcPowerSupply from "./components/container/Engineering/DcPowerSupply";
import WaterCooler from "./components/container/Engineering/WaterCooler";
import Multimeter from "./components/container/Engineering/Multimeter";
import Oscilloscope from "./components/container/Engineering/Oscilloscope";
import AtmMachine from "./components/container/Engineering/AtmMachine";
import HumanBrain from "./components/container/HumanBrain";
import AnprcRadio from "./components/container/Engineering/AnprcRadio";
import CornSheller from "./components/container/Engineering/CornSheller";
import MicroLathe from "./components/container/Engineering/MicroLathe";
import PlasticWaste from "./components/container/Engineering/PlasticWaste";
import RicePeeler from "./components/container/Engineering/RicePeeler";
import Concretemixture from "./components/container/Engineering/Concretemixture";
import MiniaturecircuitB from "./components/container/Engineering/MiniaturecircuitB";
import GasolineG from "./components/container/Engineering/GasolineG";
import OceanGate from "./components/container/Engineering/Oceangate";
import BailingMachine from "./components/container/Engineering/BailingMachine";
import Bombatyphoon from "./components/container/Engineering/Bombatyphoon";
import PlanetaryGearbox from "./components/container/Engineering/PlanetaryGearbox";
import LadaAluminiumFront from "./components/container/Engineering/LadaAluminiumFront";
import MetalLED from "./components/container/Engineering/MetalLED";
import RibbonMixer from "./components/container/Engineering/RibbonMixer";
import RaspberryPI from "./components/container/Engineering/RaspberryPI";
import Excavator from "./components/container/Engineering/Excavator";
import ElectricLinear from "./components/container/Engineering/ElectricLinear";
import Artyz7 from "./components/container/Engineering/Artyz7";
import GearSpeed from "./components/container/Engineering/GearSpeed";
import BluetoothPCB from "./components/container/Engineering/BluetoothPCB";
import Aliexpress from "./components/container/Engineering/Aliexpress";
import BTSpindel from "./components/container/Engineering/BTSpindel";
import CNCMACHINE from "./components/container/Engineering/CNCMACHINE";
import MRrockerengine from "./components/container/Engineering/MRrockerengine";
import NovaBot from "./components/container/Engineering/NovaBot";
import PackardMerlin from "./components/container/Engineering/PackardMerlin";
import Resistor from "./components/container/Engineering/Resistor";
import RoboticManipulator from "./components/container/Engineering/RoboticManipulator";
import AirGripper from "./components/container/Engineering/AirGripper";
import ButterflyValve from "./components/container/Engineering/ButterflyValve";
import HydraulicBottleJack from "./components/container/Engineering/HydraulicBottleJack";
import HydraulicPress from "./components/container/Engineering/HydraulicPress";
import LatheTailStock from "./components/container/Engineering/LatheTailStock";
import AmmoniaOil from "./components/container/Engineering/AmmoniaOil";
import Amplifier from "./components/container/Engineering/Amplifier";
import DcMotor from "./components/container/Engineering/DcMotor";
import JetEngine from "./components/container/Engineering/JetEngine";
import MetalBending from "./components/container/Engineering/MetalBending";
import ResinPrinter from "./components/container/Engineering/ResinPrinter";
import StillsonWrench from "./components/container/Engineering/StillsonWrench";
import SyringeDispenser from "./components/container/Engineering/SyringeDispenser";
import UniversalJoint from "./components/container/Engineering/UniversalJoint";
import RegulatingGasFlow from "./components/container/Engineering/RegulatingGasFlow";
import YDESP32 from "./components/container/Engineering/YDESP32";
import KamikazeDrone from "./components/container/Engineering/KamikazeDrone";
import MaecoomHotend from "./components/container/Engineering/MaecoomHotend";
import OpticalLimitSwitch from "./components/container/Engineering/OpticalLimitSwitch";
import QuadRotorWankelEngine from "./components/container/Engineering/QuadRotorWankelEngine";
import SectionValve from "./components/container/Engineering/SectionValve";
import WindTurbine from "./components/container/Engineering/WindTurbine";
import WishboneSuspension from "./components/container/Engineering/WishboneSuspension";
import Basys from "./components/container/Engineering/Basys";
import CarJack from "./components/container/Engineering/CarJack";
import CutOffSaw from "./components/container/Engineering/CutOffSaw";
import LandingMechanism from "./components/container/Engineering/LandingMechanism";
import GateValve from "./components/container/Engineering/GateValve";
import HC_04 from "./components/container/Engineering/HC_04";
import HydraulicSwivelClamp from "./components/container/Engineering/HydraulicSwivelClamp";
import VerticalFarming from "./components/container/Engineering/VerticalFarming";
import MechanicalPencil from "./components/container/Engineering/MechanicalPencil";
import TorpedoTube from "./components/container/Engineering/TorpedoTube";
import USBConnector from "./components/container/Engineering/USBConnector";
import RadialCooler from "./components/container/Engineering/RadialCooler";
import LiquidRocketEngine from "./components/container/Engineering/LiquidRocketEngine";
import PotentiometerModule from "./components/container/Engineering/PotentiometerModule";
import ZynqBerryZeroModule from "./components/container/Engineering/ZynqBerryZeroModule";
import DisplayST from "./components/container/Engineering/DisplayST";
import MicroMetalLathe from "./components/container/Engineering/MicroMetalLathe";
import MicroSdCardHolder from "./components/container/Engineering/MicroSdCardHolder";
import MiniatureVerticalSystemEngine from "./components/container/Engineering/MiniatureVerticalSystemEngine";
import PlanetaryGearSystem from "./components/container/Engineering/PlanetaryGearSystem";
import RaspberryPICamera from "./components/container/Engineering/RaspberryPICamera";
import SeedStudioXiaoEsp from "./components/container/Engineering/SeedStudioXiaoEsp";
import WirelessGamingMouse from "./components/container/Engineering/WirelessGamingMouse";
import AIRgNozzle from "./components/container/Engineering/AIRgNozzle";
import BKSeuroLock from "./components/container/Engineering/BKSeuroLock";
import CnCmach from "./components/container/Engineering/CnCmach";
import FishingReel from "./components/container/Engineering/FishingReel";
import PneumaticShearMachine from "./components/container/Engineering/PneumaticShearMachine";
import SheetMetalBender from "./components/container/Engineering/SheetMetalBender";
import DBConnector from "./components/container/Engineering/DBConnector";
import AirPressureGauge from "./components/container/Engineering/AirPressureGauge";
import CasterWheel from "./components/container/Engineering/CasterWheel";
import CoretexCoreXYPrinter from "./components/container/Engineering/CoretexCoreXYPrinter";
import DigitalScientificCalculator from "./components/container/Engineering/DigitalScientificCalculator";
import HydraulicJack from "./components/container/Engineering/HydraulicJack";
import HydraulicpressfiftyT from "./components/container/Engineering/HydraulicpressfiftyT";
import ManualPipeBending from "./components/container/Engineering/ManualPipeBending";
import OdroidXU from "./components/container/Engineering/OdroidXU";
import PumpCompleteExtude from "./components/container/Engineering/PumpCompleteExtude";
import QuickCharger from "./components/container/Engineering/QuickCharger";
import RaspberryPiSimplified from "./components/container/Engineering/RaspberryPiSimplified";
import SMEPowerGeneration from "./components/container/Engineering/SMEPowerGeneration";
import ScrewTerminal from "./components/container/Engineering/ScrewTerminal";
import SIMCard from "./components/container/Engineering/SIMCard";
import ToogleClamp from "./components/container/Engineering/ToogleClamp";





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route
            path="/"
            element={
              <Protected>
                <App />
              </Protected>
            }
          />
          <Route
            path="/"
            element={
              <Protected>
                <App />
              </Protected>
            }
          />

          <Route
            path="/"
            element={
              <Protected>
                <HeroBullets />
              </Protected>
            }
          />
          <Route
            path="/anatomy"
            element={
              <Protected>
                <Anatomy />
              </Protected>
            }
          />
          <Route
            path="/humananatomy"
            element={
              <Protected>
                <HumanAnatomy />
              </Protected>
            }
          />
          <Route
            path="/animalanatomy"
            element={
              <Protected>
                <AnimalAnatomy />
              </Protected>
            }
          />
          <Route
            path="/engineering"
            element={
              <Protected>
                <Engineering />
              </Protected>
            }
          />
          <Route
            path="/about"
            element={
              <Protected>
                <About></About>
              </Protected>
            }
          />
          <Route
            path="/team"
            element={
              <Protected>
                <Team />
              </Protected>
            }
          />

          <Route
            path="/skinanatomy"
            element={
              <Protected>
                <SkinAnatomy />
              </Protected>
            }
          />
          <Route
            path="/respiratory"
            element={
              <Protected>
                <Respiratory />
              </Protected>
            }
          />
          <Route
            path="/reproductive"
            element={
              <Protected>
                <ReproductiveSystem />
              </Protected>
            }
          />
          <Route
            path="/neuron"
            element={
              <Protected>
                <NeruonAnatomy />
              </Protected>
            }
          />
          <Route
            path="/nervous"
            element={
              <Protected>
                <NervousSystem />
              </Protected>
            }
          />
          <Route
            path="/liver"
            element={
              <Protected>
                <LiverAnatomy></LiverAnatomy>
              </Protected>
            }
          />
          <Route
            path="/kidney"
            element={
              <Protected>
                <KidneyAnatomy />
              </Protected>
            }
          />
          <Route
            path="/muscular"
            element={
              <Protected>
                <MuscularSystem />
              </Protected>
            }
          />
          <Route
            path="/heart"
            element={
              <Protected>
                <HearAnatomy />
              </Protected>
            }
          />
          <Route
            path="/eye"
            element={
              <Protected>
                <EyeAnatomy />
              </Protected>
            }
          />
          <Route
            path="/digestive"
            element={
              <Protected>
                <DigestiveSystem />
              </Protected>
            }
          />
          <Route
            path="/dental"
            element={
              <Protected>
                <DentalAnatomy />
              </Protected>
            }
          />
          <Route
            path="/ear"
            element={
              <Protected>
                <EarAnatomy />
              </Protected>
            }
          />
          <Route
            path="/cell"
            element={
              <Protected>
                <CellAnatomy />
              </Protected>
            }
          />

          <Route
            path="/fishrespiration"
            element={
              <Protected>
                <FishRespiration />
              </Protected>
            }
          />
          <Route
            path="/grasshopper"
            element={
              <Protected>
                <Grasshopper />
              </Protected>
            }
          />
          <Route
            path="/insectmorphology"
            element={
              <Protected>
                <InsectMorphology />
              </Protected>
            }
          />
          <Route
            path="/labeorohita"
            element={
              <Protected>
                <LabeoRohita />
              </Protected>
            }
          />
          <Route
            path="/palemon"
            element={
              <Protected>
                <Palemon />
              </Protected>
            }
          />

          <Route
            path="/transformer"
            element={
              <Protected>
                <Transformer />
              </Protected>
            }
          />

          <Route
            path="/twinscrew"
            element={
              <Protected>
                <Twinscrew />
              </Protected>
            }
          />

          <Route
            path="/syphone"
            element={
              <Protected>
                <Syphone />
              </Protected>
            }
          />

          <Route
            path="/router"
            element={
              <Protected>
                <RouterModel />
              </Protected>
            }
          />

          <Route
            path="/db"
            element={
              <Protected>
                <DBConnector />
              </Protected>
            }
          />

          <Route
            path="/displayst"
            element={
              <Protected>
                <DisplayST />
              </Protected>
            }
          />

          <Route
            path="/MMlathe"
            element={
              <Protected>
                <MicroMetalLathe />
              </Protected>
            }
          />

          <Route
            path="/SDcard"
            element={
              <Protected>
                <MicroSdCardHolder />
              </Protected>
            }
          />

          <Route
            path="/mvse"
            element={
              <Protected>
                <MiniatureVerticalSystemEngine />
              </Protected>
            }
          />

          <Route
            path="/planetarygear"
            element={
              <Protected>
                <PlanetaryGearSystem />
              </Protected>
            }
          />

          <Route
            path="/Picamera"
            element={
              <Protected>
                <RaspberryPICamera />
              </Protected>
            }
          />

          <Route
            path="/xiaoesp"
            element={
              <Protected>
                <SeedStudioXiaoEsp />
              </Protected>
            }
          />

          <Route
            path="/AGN"
            element={
              <Protected>
                <AIRgNozzle />
              </Protected>
            }
          />

          <Route
            path="/bkslock"
            element={
              <Protected>
                <BKSeuroLock/>
              </Protected>
            }
          />

          <Route
            path="/cNc"
            element={
              <Protected>
                <CnCmach/>
              </Protected>
            }
          />

          <Route
            path="/freel"
            element={
              <Protected>
                <FishingReel/>
              </Protected>
            }
          />

          <Route
            path="/apg"
            element={
              <Protected>
                <AirPressureGauge/>
              </Protected>
            }
          />

          <Route
            path="/casterw"
            element={
              <Protected>
                <CasterWheel/>
              </Protected>
            }
          />

          <Route
            path="/cortexp"
            element={
              <Protected>
                <CoretexCoreXYPrinter/>
              </Protected>
            }
          />

          <Route
            path="/dsc"
            element={
              <Protected>
                <DigitalScientificCalculator/>
              </Protected>
            }
          />

          <Route
            path="/Hyjack"
            element={
              <Protected>
                <HydraulicJack/>
              </Protected>
            }
          />

          <Route
            path="/hp50t"
            element={
              <Protected>
                <HydraulicpressfiftyT/>
              </Protected>
            }
          />

          <Route
            path="/mpbhm"
            element={
              <Protected>
                <ManualPipeBending/>
              </Protected>
            }
          />

          <Route
            path="/odroid"
            element={
              <Protected>
                <OdroidXU/>
              </Protected>
            }
          />

          <Route
            path="/pumpco"
            element={
              <Protected>
                <PumpCompleteExtude/>
              </Protected>
            }
          />

          <Route
            path="/Qtps"
            element={
              <Protected>
                <QuickCharger/>
              </Protected>
            }
          />

          <Route
            path="/Rpsss"
            element={
              <Protected>
                <RaspberryPiSimplified/>
              </Protected>
            }
          />

          <Route
            path="/smepg"
            element={
              <Protected>
                <SMEPowerGeneration/>
              </Protected>
            }
          />

          <Route
            path="/molecule"
            element={
              <Protected>
                <Molecule></Molecule>
              </Protected>
            }
          />

          <Route
            path="/drone"
            element={
              <Protected>
                <DroneSim />
              </Protected>
            }
          />

          <Route
            path="/fridge"
            element={
              <Protected>
                <Freezer></Freezer>
              </Protected>
            }
          />

          <Route
            path="/xray"
            element={
              <Protected>
                <XrayModel />
              </Protected>
            }
          />

          <Route
            path="/electrical"
            element={
              <Protected>
                <BasicElectrical />
              </Protected>
            }
          />


      <Route
      path="/steppermotor"
      element={
        <Protected>
          <Steppermotor/>
        </Protected>
      }
    />

    <Route
      path="/cordlessmachine"
      element={
        <Protected>
          <CordlessDrillMachine/>
        </Protected>
      }
    />

   

    <Route
    path="/microusb"
    element={
      <Protected>
        <MicroUSB/>
      </Protected>
    }
  />

  <Route
    path="/dewaltwoodrouter"
    element={
      <Protected>
        <DewaltWoodRouter/>
      </Protected>
    }
  />
      
  <Route
    path="/arduinonano"
    element={
      <Protected>
        <ArduinoNano/>
      </Protected>
    }
  />
    
  <Route
  path="/lightsensor"
  element={
    <Protected>
      <Lightsensor/>
    </Protected>
  }
/>
  
<Route
  path="/nodemcumini"
  element={
    <Protected>
      <NodeMCUMini/>
    </Protected>
  }
/>
      
<Route
  path="/sparkfunmotor"
  element={
    <Protected>
      <SparkfunQwiicMotorDriver/>
    </Protected>
  }
/>
 
<Route
  path="/raspberrypizero"
  element={
    <Protected>
      <RaspberryPiZero/>
    </Protected>
  }
/>

<Route
  path="/v12combustion"
  element={
    <Protected>
      <V12combustion/>
    </Protected>
  }
/>

<Route
  path="/anglegrinder"
  element={
    <Protected>
      <AngleGrinder/>
    </Protected>
  }
/>

<Route
  path="/rotax"
  element={
    <Protected>
      <Rotax/>
    </Protected>
  }
/>

<Route
  path="/fourstrokeengine"
  element={
    <Protected>
      <FourStrokeEngine/>
    </Protected>
  }
/>

<Route
  path="/singlecylinder"
  element={
    <Protected>
      <SingleCylinder/>
    </Protected>
  }
/>

<Route
  path="/grainseparator"
  element={
    <Protected>
      <GrainSeparator/>
    </Protected>
  }
/>

<Route
  path="/camera"
  element={
    <Protected>
      <Camera/>
    </Protected>
  }
/>

<Route
  path="/bikeselfstart"
  element={
    <Protected>
      <Bikeselfstart/>
    </Protected>
  }
/>

<Route
  path="/escalator"
  element={
    <Protected>
      <Escalator/>
    </Protected>
  }
/>

<Route
  path="/dieselengine"
  element={
    <Protected>
      <DieselEngine/>
    </Protected>
  }
/>


<Route
  path="/barretm82"
  element={
    <Protected>
      <BarretM82/>
    </Protected>
  }
/>

<Route
  path="/blendermachine"
  element={
    <Protected>
      <BlenderMachine/>
    </Protected>
  }
/>

<Route
  path="/cylinderblockassembly"
  element={
    <Protected>
      <Cylinderblockassembly/>
    </Protected>
  }
/>

<Route
  path="/fivespeed"
  element={
    <Protected>
      <FiveSpeedTransmission/>
    </Protected>
  }
/>

<Route
  path="/v6engine"
  element={
    <Protected>
      <V6Engine/>
    </Protected>
  }
/>


<Route
  path="/discbrake"
  element={
    <Protected>
      <DiscBrake/>
    </Protected>
  }
/>

<Route
  path="/esp"
  element={
    <Protected>
      <Esp8266/>
    </Protected>
  }
/>


<Route
  path="/handdrill"
  element={
    <Protected>
      <Handdrill/>
    </Protected>
  }
/>


<Route
  path="/headphone"
  element={
    <Protected>
      <Headphone/>
    </Protected>
  }
/>

<Route
  path="/motor"
  element={
    <Protected>
      <MotorcycleExhaust/>
    </Protected>
  }
/>


<Route
  path="/binocular"
  element={
    <Protected>
      <Binocular/>
    </Protected>
  }
/>

<Route
  path="/automaticairvalve"
  element={
    <Protected>
      <AutomaticAirValve/>
    </Protected>
  }
/>





<Route
  path="/lipocharger"
  element={
    <Protected>
      <LipoCharger/>
    </Protected>
  }
/>

<Route
  path="/matek"
  element={
    <Protected>
      <MatekPowerHub/>
    </Protected>
  }
/>

<Route
  path="/refrigiratorvalve"
  element={
    <Protected>
      <RefrigiratorValve/>
    </Protected>
  }
/>

<Route
  path="/rodandbearing"
  element={
    <Protected>
      <Rodandbearing/>
    </Protected>
  }
/>


<Route
  path="/wifiswitchrelay"
  element={
    <Protected>
      <WifiSwitchRelay/>
    </Protected>
  }
/>

<Route
  path="/carsteering"
  element={
    <Protected>
      <Carsteering/>
    </Protected>
  }
/>

<Route
  path="/drumbreak"
  element={
    <Protected>
      <Drumbreak/>
    </Protected>
  }
/>

<Route
  path="/shockabsorber"
  element={
    <Protected>
      <ShockAbsorber/>
    </Protected>
  }
/>

<Route
  path="/heatexchanger"
  element={
    <Protected>
      <RadiatorHeatExchanger/>
    </Protected>
  }
/>

<Route
  path="/rollerconveyor"
  element={
    <Protected>
      <RollerConveyor/>
    </Protected>
  }
/>

<Route
  path="/sonoff"
  element={
    <Protected>
      <Sonoff/>
    </Protected>
  }
/>


<Route
  path="/storm"
  element={
    <Protected>
      <StormSensor/>
    </Protected>
  }
/>
         


<Route
  path="/espeye"
  element={
    <Protected>
      <EspEye/>
    </Protected>
  }
/>
     

<Route
  path="/chargingm"
  element={
    <Protected>
      <ChargingModule/>
    </Protected>
  }
/>
    

     

<Route
  path="/hobbywing"
  element={
    <Protected>
      <Hobbywing/>
    </Protected>
  }
/>
    


<Route
  path="/esp32mc"
  element={
    <Protected>
      <ESP32mcontroller/>
    </Protected>
  }
/>



<Route
  path="/alternator"
  element={
    <Protected>
      <Alternator/>
    </Protected>
  }
/>



<Route
  path="/camshaft"
  element={
    <Protected>
      <Camshaft/>
    </Protected>
  }
/>


<Route
  path="/car"
  element={
    <Protected>
      <Car/>
    </Protected>
  }
/>


<Route
  path="/lsu"
  element={
    <Protected>
      <LSUDryer/>
    </Protected>
  }
/>

<Route
  path="/suspenson"
  element={
    <Protected>
      <Airsuspenson/>
    </Protected>
  }
/>

<Route
  path="/dif"
  element={
    <Protected>
      <DiffertialSystem/>
    </Protected>
  }
/>


<Route
  path="/aircom"
  element={
    <Protected>
      <AirCompressor/>
    </Protected>
  }
/>

<Route
  path="/audrino"
  element={
    <Protected>
      <Audrino/>
    </Protected>
  }
/>

<Route
  path="/brutual"
  element={
    <Protected>
      <Brutuallty/>
    </Protected>
  }
/>

<Route
  path="/hartnill"
  element={
    <Protected>
      <Hartnill/>
    </Protected>
  }
/>

<Route
  path="/helical"
  element={
    <Protected>
      <HelicalSuspenson/>
    </Protected>
  }
/>

<Route
  path="/hydbrake"
  element={
    <Protected>
      <HydraulicBrake/>
    </Protected>
  }
/>

<Route
  path="/ic"
  element={
    <Protected>
      <Icengine/>
    </Protected>
  }
/>

<Route
  path="/slidingmesh"
  element={
    <Protected>
      <SlidingMeshgearBox/>
    </Protected>
  }
/>

<Route
  path="/3dprinter"
  element={
    <Protected>
      <ThreeDPrinter/>
    </Protected>
  }
/>

<Route
  path="/cnclathe"
  element={
    <Protected>
      <CncLathe/>
    </Protected>
  }
/>

<Route
  path="/concretemixer"
  element={
    <Protected>
      <Concretemixture/>
    </Protected>
  }
/>

<Route
  path="/cpu"
  element={
    <Protected>
      <Cpu/>
    </Protected>
  }
/>

<Route
  path="/cpucooler"
  element={
    <Protected>
      <CpuCooler/>
    </Protected>
  }
/>

<Route
  path="/graphicscard"
  element={
    <Protected>
      <GraphicsCard/>
    </Protected>
  }
/>

<Route
  path="/motherboard"
  element={
    <Protected>
      <MotherBoard/>
    </Protected>
  }
/>

<Route
  path="/ram"
  element={
    <Protected>
      <Ram/>
    </Protected>
  }
/>

<Route
  path="/cctv"
  element={
    <Protected>
      <Cctv/>
    </Protected>
  }
/>

<Route
  path="/laptop"
  element={
    <Protected>
      <Laptop/>
    </Protected>
  }
/>

<Route
  path="/tv"
  element={
    <Protected>
      <Tv/>
    </Protected>
  }
/>

<Route
  path="/buckconverter"
  element={
    <Protected>
      <BuckConverter/>
    </Protected>
  }
/>

<Route
  path="/walkitalki"
  element={
    <Protected>
      <WalkiTaki/>
    </Protected>
  }
/>

<Route
  path="/banana"
  element={
    <Protected>
      <BananaPi/>
    </Protected>
  }
/>

<Route
  path="/spinal"
  element={
    <Protected>
      <Spinal/>
    </Protected>
  }
/>


<Route
  path="/cardio"
  element={
    <Protected>
      <Cardio/>
    </Protected>
  }
/>

<Route
  path="/horseskeleton"
  element={
    <Protected>
      <HorseSkeleton/>
    </Protected>
  }
/>

<Route
  path="/lymphaticsystem"
  element={
    <Protected>
      <LymphaticSystem/>
    </Protected>
  }
/>

<Route
  path="/airconditioner"
  element={
    <Protected>
      <AirConditionor/>
    </Protected>
  }
/>

<Route
  path="/dcpowersupply"
  element={
    <Protected>
      <DcPowerSupply/>
    </Protected>
  }
/>

<Route
  path="/watercooler"
  element={
    <Protected>
      <WaterCooler/>
    </Protected>
  }
/>

<Route
  path="/multimeter"
  element={
    <Protected>
      <Multimeter/>
    </Protected>
  }
/>

<Route
  path="/oscilloscope"
  element={
    <Protected>
      <Oscilloscope/>
    </Protected>
  }
/>

<Route
  path="/atmmachine"
  element={
    <Protected>
      <AtmMachine/>
    </Protected>
  }
/>

<Route
  path="/humanbrain"
  element={
    <Protected>
      <HumanBrain/>
    </Protected>
  }
/>

<Route
  path="/anprcradio"
  element={
    <Protected>
      <AnprcRadio/>
    </Protected>
  }
/>

<Route
  path="/cornsheller"
  element={
    <Protected>
      <CornSheller/>
    </Protected>
  }
/>

<Route
  path="/microlathe"
  element={
    <Protected>
      <MicroLathe/>
    </Protected>
  }
/>

<Route
  path="/plasticwaste"
  element={
    <Protected>
      <PlasticWaste/>
    </Protected>
  }
/>

<Route
  path="/ricepeeler"
  element={
    <Protected>
      <RicePeeler/>
    </Protected>
  }
/>

<Route
  path="/mcb"
  element={
    <Protected>
      <MiniaturecircuitB/>
    </Protected>
  }
/>

<Route
  path="/gasolineg"
  element={
    <Protected>
      <GasolineG/>
    </Protected>
  }
/>

<Route
  path="/Oceangate"
  element={
    <Protected>
      <OceanGate/>
    </Protected>
  }
/>

<Route
  path="/BailingMachine"
  element={
    <Protected>
      <BailingMachine/>
    </Protected>
  }
/>

<Route
  path="/Bombatyphoon"
  element={
    <Protected>
      <Bombatyphoon/>
    </Protected>
  }
/>

<Route
  path="/plangear"
  element={
    <Protected>
      <PlanetaryGearbox/>
    </Protected>
  }
/>

<Route
  path="/aluminium"
  element={
    <Protected>
      <LadaAluminiumFront/>
    </Protected>
  }
/>

<Route
  path="/metalLED"
  element={
    <Protected>
      <MetalLED/>
    </Protected>
  }
/>

<Route
  path="/raspb"
  element={
    <Protected>
      <RaspberryPI/>
    </Protected>
  }
/>

<Route
  path="/ribbon"
  element={
    <Protected>
      <RibbonMixer/>
    </Protected>
  }
/>

<Route
  path="/excavator"
  element={
    <Protected>
      <Excavator/>
    </Protected>
  }
/>

<Route
  path="/electricl"
  element={
    <Protected>
      <ElectricLinear/>
    </Protected>
  }
/>

<Route
  path="/arty"
  element={
    <Protected>
      <Artyz7/>
    </Protected>
  }
/>

<Route
  path="/gears"
  element={
    <Protected>
      <GearSpeed/>
    </Protected>
  }
/>

<Route
  path="/bpcb"
  element={
    <Protected>
      <BluetoothPCB/>
    </Protected>
  }
/>

<Route
  path="/bt30"
  element={
    <Protected>
      <Aliexpress/>
    </Protected>
  }
/>

<Route
  path="/bts"
  element={
    <Protected>
      <BTSpindel/>
    </Protected>
  }
/>

<Route
  path="/cnm"
  element={
    <Protected>
      <CNCMACHINE/>
    </Protected>
  }
/>

<Route
  path="/rengine"
  element={
    <Protected>
      <MRrockerengine/>
    </Protected>
  }
/>

<Route
  path="/novab"
  element={
    <Protected>
      <NovaBot/>
    </Protected>
  }
/>

<Route
  path="/packard"
  element={
    <Protected>
      <PackardMerlin/>
    </Protected>
  }
/>

<Route
  path="/resist"
  element={
    <Protected>
      <Resistor/>
    </Protected>
  }
/>

<Route
  path="/roma"
  element={
    <Protected>
      <RoboticManipulator/>
    </Protected>
  }
/>

<Route
  path="/airg"
  element={
    <Protected>
      <AirGripper/>
    </Protected>
  }
/>

<Route
  path="/butterv"
  element={
    <Protected>
      <ButterflyValve/>
    </Protected>
  }
/>

<Route
  path="/hbj"
  element={
    <Protected>
      <HydraulicBottleJack/>
    </Protected>
  }
/>

<Route
  path="/hpress"
  element={
    <Protected>
      <HydraulicPress/>
    </Protected>
  }
/>

<Route
  path="/ltail"
  element={
    <Protected>
      <LatheTailStock/>
    </Protected>
  }
/>

<Route
  path="/Aoil"
  element={
    <Protected>
      <AmmoniaOil/>
    </Protected>
  }
/>

<Route
  path="/ampli"
  element={
    <Protected>
      <Amplifier/>
    </Protected>
  }
/>

<Route
  path="/dcm"
  element={
    <Protected>
      <DcMotor/>
    </Protected>
  }
/>

<Route
  path="/jete"
  element={
    <Protected>
      <JetEngine/>
    </Protected>
  }
/>

<Route
  path="/metalB"
  element={
    <Protected>
      <MetalBending/>
    </Protected>
  }
/>

<Route
  path="/resin"
  element={
    <Protected>
      <ResinPrinter/>
    </Protected>
  }
/>

<Route
  path="/sw"
  element={
    <Protected>
      <StillsonWrench/>
    </Protected>
  }
/>

<Route
  path="/syringe"
  element={
    <Protected>
      <SyringeDispenser/>
    </Protected>
  }
/>

<Route
  path="/ujoint"
  element={
    <Protected>
      <UniversalJoint/>
    </Protected>
  }
/>

<Route
  path="/vfrgf"
  element={
    <Protected>
      <RegulatingGasFlow/>
    </Protected>
  }
/>

<Route
  path="/yd"
  element={
    <Protected>
      <YDESP32/>
    </Protected>
  }
/>

<Route
  path="/KD"
  element={
    <Protected>
      <KamikazeDrone/>
    </Protected>
  }
/>

<Route
  path="/maecoom"
  element={
    <Protected>
      <MaecoomHotend/>
    </Protected>
  }
/>

<Route
  path="/opticalL"
  element={
    <Protected>
      <OpticalLimitSwitch/>
    </Protected>
  }
/>

<Route
  path="/quadr"
  element={
    <Protected>
      <QuadRotorWankelEngine/>
    </Protected>
  }
/>

<Route
  path="/Svalve"
  element={
    <Protected>
      <SectionValve/>
    </Protected>
  }
/>

<Route
  path="/wturbine"
  element={
    <Protected>
      <WindTurbine/>
    </Protected>
  }
/>

<Route
  path="/wishbone"
  element={
    <Protected>
      <WishboneSuspension/>
    </Protected>
  }
/>

<Route
  path="/basys"
  element={
    <Protected>
      <Basys/>
    </Protected>
  }
/>

<Route
  path="/carjack"
  element={
    <Protected>
      <CarJack/>
    </Protected>
  }
/>

<Route
  path="/cos"
  element={
    <Protected>
      <CutOffSaw/>
    </Protected>
  }
/>

<Route
  path="/landingmech"
  element={
    <Protected>
      <LandingMechanism/>
    </Protected>
  }
/>

<Route
  path="/gatev"
  element={
    <Protected>
      <GateValve/>
    </Protected>
  }
/>

<Route
  path="/hc04"
  element={
    <Protected>
      <HC_04/>
    </Protected>
  }
/>

<Route
  path="/hsclamp"
  element={
    <Protected>
      <HydraulicSwivelClamp/>
    </Protected>
  }
/>

<Route
  path="/verticalf"
  element={
    <Protected>
      <VerticalFarming/>
    </Protected>
  }
/>

<Route
  path="/mpencil"
  element={
    <Protected>
      <MechanicalPencil/>
    </Protected>
  }
/>

<Route
  path="/ttube"
  element={
    <Protected>
      <TorpedoTube/>
    </Protected>
  }
/>

<Route
  path="/usbc"
  element={
    <Protected>
      <USBConnector/>
    </Protected>
  }
/>

<Route
  path="/radialcool"
  element={
    <Protected>
      <RadialCooler/>
    </Protected>
  }
/>

<Route
  path="/liquidrocket"
  element={
    <Protected>
      <LiquidRocketEngine/>
    </Protected>
  }
/>

<Route
  path="/pModule"
  element={
    <Protected>
      <PotentiometerModule/>
    </Protected>
  }
/>

<Route
  path="/zynqb"
  element={
    <Protected>
      <ZynqBerryZeroModule/>
    </Protected>
  }
/>

<Route
  path="/Gmouse"
  element={
    <Protected>
      <WirelessGamingMouse/>
    </Protected>
  }
/>

<Route
  path="/psm"
  element={
    <Protected>
      <PneumaticShearMachine/>
    </Protected>
  }
/>

<Route
  path="/SMB"
  element={
    <Protected>
      <SheetMetalBender/>
    </Protected>
  }
/>

<Route
  path="/STer"
  element={
    <Protected>
      <ScrewTerminal/>
    </Protected>
  }
/>

<Route
  path="/SimC"
  element={
    <Protected>
      <SIMCard/>
    </Protected>
  }
/>

<Route
  path="/TClamp"
  element={
    <Protected>
      <ToogleClamp/>
    </Protected>
  }
/>
















































































        </Routes>

        {/* <Route path="*" element={<div><h1>Page Not Found</h1></div>}/> */}
      </AuthContextProvider>
    </MantineProvider>

    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
