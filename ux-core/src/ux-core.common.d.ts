import { Color } from "../tns-core-modules/color";
import { ApplyXmlAttributes } from "../tns-core-modules/ui/core/view/view";

export declare class GradientView {
    angle: Number;
    gradient: String;
    gradientColors: GradientColor[];

    constructor();
    setAngle(a: Number): void;
    addColor(color: GradientColor);
    removeColor(stop:Number);
    modifyColor(stop: Number, color: GradientColor);
    _applyXmlAttribute(attribute: string, value: any): boolean;
}

export declare class GradientColor {
    color: Color;
    stop: Number;
    position: Number;
    opacity: Number;

    constructor(color: Color, stop: Number, position: Number, opacity: Number);
}