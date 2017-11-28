/**
 * Module contains classes that can be used for enhancing better UX within the NativeScript app.
 * @module "ux-core"
 */ /** */

import { Color } from '../tns-core-modules/color';
import { ApplyXmlAttributes } from "../tns-core-modules/ui/core/view/view";

/**
 * This class will be implemented by the View class.
 */
export class GradientView {
    public angle: Number;
    public gradientColors: GradientColor[];
    public gradient: String;    // This will be the property name used by each control as it's Xml Attribute.

    constructor() {
        // We may find a function for the constructor in the future.
    }

    public setAngle(a: Number) {
        this.angle = a;
    }

    public addColor(color: GradientColor) {
        this.gradientColors.push(color);
    }

    public modifyColor(stop: Number, newColor: GradientColor) {
        this.gradientColors.forEach(function (gradientColor, index) {
            if (gradientColor.stop === stop) {
                this.gradientColors[index] = newColor;
            }
        });
    }

    public removeColor(stop: Number) {
        let originalLength: Number = this.gradientColors.length;

        this.gradientColors.forEach(function (gradientColor, index) {
            if (gradientColor.stop === stop)
                this.gradientColors.splice(index, 1);
        });

        // assuming that the original number of colors in the collection is 3 and the stop that was removed is 2.
        // this creates a gap in the sequence, hence we will need to reorder it.
        if (stop !== 1 && stop < originalLength) {
            let totalColors: Number = this.gradientColors.length;
            let i: any;

            for (i = 0; i < totalColors; i++) {
                this.gradientColors[i].stop = i;
            }
        }
    }
}

export class GradientColor {
    public color: Color;
    public stop: Number;
    public position: Number;
    public opacity: Number;

    constructor(color: Color, stop: Number, position: Number, opacity: Number) {
        this.color = color;
        this.stop = stop;
        this.position = position;
        this.opacity = opacity;
    }
}

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}