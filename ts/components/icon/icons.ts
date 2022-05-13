const IMAGE_BASE = "https://raw.githubusercontent.com/gamma-delta/center-brain-archive/main/site/src/img/";

export interface IconData {
  src: string;
  text: string;
  name: string;
}
// https://github.com/gamma-delta/center-brain-archive/tree/main/site/src/img
export enum Icon {
  Smelter = "Smelter",
  AssemblingMachineMK1 = "AssemblingMachineMK1",
  AssemblingMachineMK2 = "AssemblingMachineMK2",
  AssemblingMachineMK3 = "AssemblingMachineMK3",
  ConveyorMK1 = "ConveyorMK1",
  ConveyorMK2 = "ConveyorMK2",
  ConveyorMK3 = "ConveyorM3",
  Electromagnet = "Electromagnet",
  Magnet = "Magnet",
  Gear = "Gear",
  IronIngot = "IronIngot",
  EnergeticGraphite = "EnergeticGraphite",
  CoalOre = "CoalOre",
  CircuitBoard = "CircuitBoard",
  PlasmaExciter = "PlasmaExciter",
  Prism = "Prism",
  Glass = "Glass",
  PhotonCombiner = "PhotonCombiner",
  Motor = "Motor",
  ElectromagneticTurbine = "ElectromagneticTurbine",
  CopperIngot = "CopperIngot",
  HighPuritySilicon = "HighPuritySilicon",
  MicrocrystallineComponent = "MicrocrystallineComponent",
  Processor = "Processor",
}

export function getIcon(iconId: Icon, text = "", iconName = null): IconData {
  const src: string = IMAGE_BASE + iconId + ".png";
  // If custom name is passed use it, otherwise generate from id
  const name: string = iconName ?? iconId.replace(/([a-z])([A-Z])/g, "$1 $2");
  return { src, text, name };
}
