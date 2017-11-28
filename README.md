# nativescript-ux-core-dev

While working on a Mobile App project, I saw a need to implement gradient designs on various UI elements but there isn't something that is adaptable and flexible enough to do that. So this repository serves to hold the project for the full dev version of the plugin. A separate repository will be created to house just the plugin itself for production environment.

## Problem Definition

From the looks of the various plugins that are available for NativeScript, most of which looks like items that are either working as separate components or modules from the existing NativeScript framework. At the time of creating this project, I haven't yet found a NativeScript plugin which allows developers to implement custom behaviors to their elements within NativeScript that is nicely integrated into the original NativeScript framework.

Coming from a UX perspective, often times, it is important to present that flexibility for developers to customize how they want certain elements to look, and gradients is definitely one of those.

## Objectives

This project will aim to cover a few objectives that I have in mind:

1. To create a plugin that isn't really an "outside" module that behaves on its own, instead, it can be integrated into the element's declaration itself, for example:
```
<Button gradient="signin-btn-gradient" text="SIGN IN" (tap)="btnSignInTapped()"></Button>
```
   - "gradient": this is a property that can be used to point to a particular gradient file that defines properties like the colours, the direction (angle - provides greater control, not just left, right, up, down), the stops as well as the transparency for each stop in the gradient.

**signin-btn-gradient.xml**

```
<gradient angle="0|90|180|-90|-180">
    <colour value="#F1728F" stop="1" position="0" opacity="100"></colour>
    <colour value="#F38261" stop="2" position="50" opacity="75"></colour>
    <colour value="#F57827" stop="3" position="100" opacity="50"></colour>
</gradient>
```

   - "angle": This allows the developer to set the angle of the gradient. It can be any number between -180 to 180.
   - "stop": the order of the colour.
   - "position": this refers to the position of where the stop will be.
   - "opacity": the transparency of the colour.

2. The plugin should be something that developers can set at compile/design-time, but also do it programmatically. This flexibility is important because from a User Experience perspective, some elements should only respond with changes upon user interaction.

```
// We will place this anywhere in the code where we want to programmatically provide the colours.
gradient.setAngle(-45);    // Set to 45% in anti-clockwise direction
gradientColour1.set("#F1728F", 1, 0, 100);   // colour, stop, position, opacity
gradientColour2.set("#F38261", 2, 50, 75);
gradientColour3.set("F57827", 3, 100, 50);

gradient.addColour(gradientColour1);
gradient.addColour(gradientColour2);
gradient.addColour(gradientColour3);

gradient.attach(signInBtn);
```

3. Hopefully, maybe this plugin might become an integrated part of the NativeScript framework in the near future.

4. This project will also serve as a reference point for all future UX-related plugin projects for NativeScript.

## Project First-Look

![imag1454](https://user-images.githubusercontent.com/10084397/33321465-cb1631b8-d480-11e7-9720-3af79ca8127b.jpg)

A photo has been taken of the drawing to help visualise the class design for the core/ui under tns-core-module. Having this diagram in mind will help me to design a better class/interface. At the present moment, I haven't figured out the best way to entrench coding within the View class or subsequent child classes. (That is the challenge). Currently, the View class holds all the attributes, typical to how you would lay them out in the .html file or .xml file.

```
<!-- Just an example -->
<Button backgroundColor=""></Button>
```

### Under the Hood..Just a Little Peak

It's important to note that View is declared as an ```abstract``` class using TypeScript, which means we can't place any implementation code within View. That leaves us with one other option. One way I can immediately see is to include commented code within each file, giving it a unique signature. It only has to be a single line, or a phrase like ```/* import-ux-core */``` and ```/* ux-core-gradientview */```. When you install the module, we can replace that comment in the necessary files and do a TypeScript compilation to ensure that the changes are reflected in the generated .js files.

The backend compilation work might seem a little tedious right now, but if the NativeScript team does adopt the "ux-core" project as part of the NativeScript framework, well then, you'll never have to worry about those complex backend operations.

Another important step that has been added experimentally to the ui/Text-Base class is that I have added a comment line below the class, ```/* applyMixins(Text-Base, [GradientView]) */```. This will enable the Text-Base class to incorporate both the properties from ```View``` as well as ```GradientView```.
