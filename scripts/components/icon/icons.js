const IMAGE_BASE = "https://raw.githubusercontent.com/gamma-delta/center-brain-archive/main/site/src/img/";
// https://github.com/gamma-delta/center-brain-archive/tree/main/site/src/img
export var Icon;
(function (Icon) {
    Icon["Smelter"] = "Smelter";
    Icon["AssemblingMachineMK1"] = "AssemblingMachineMK1";
    Icon["AssemblingMachineMK2"] = "AssemblingMachineMK2";
    Icon["AssemblingMachineMK3"] = "AssemblingMachineMK3";
    Icon["ConveyorMK1"] = "ConveyorMK1";
    Icon["ConveyorMK2"] = "ConveyorMK2";
    Icon["ConveyorMK3"] = "ConveyorM3";
    Icon["Electromagnet"] = "Electromagnet";
    Icon["Magnet"] = "Magnet";
    Icon["Gear"] = "Gear";
    Icon["IronIngot"] = "IronIngot";
    Icon["EnergeticGraphite"] = "EnergeticGraphite";
    Icon["CoalOre"] = "CoalOre";
    Icon["CircuitBoard"] = "CircuitBoard";
    Icon["PlasmaExciter"] = "PlasmaExciter";
    Icon["Prism"] = "Prism";
    Icon["Glass"] = "Glass";
    Icon["PhotonCombiner"] = "PhotonCombiner";
    Icon["Motor"] = "Motor";
    Icon["ElectromagneticTurbine"] = "ElectromagneticTurbine";
    Icon["CopperIngot"] = "CopperIngot";
    Icon["HighPuritySilicon"] = "HighPuritySilicon";
    Icon["MicrocrystallineComponent"] = "MicrocrystallineComponent";
    Icon["Processor"] = "Processor";
})(Icon || (Icon = {}));
export function getIcon(iconId, text = "", iconName = null) {
    const src = IMAGE_BASE + iconId + ".png";
    // If custom name is passed use it, otherwise generate from id
    const name = iconName ?? iconId.replace(/([a-z])([A-Z])/g, "$1 $2");
    return { src, text, name };
}
