# nativescript-ui-gradient-dev

While working on a Mobile App project, I saw a need to implement gradient designs on various UI elements but there isn't something that is adaptable and flexible enough to do that. So this repository serves to hold the project for the full dev version of the plugin. A separate repository will be created to house just the plugin itself for production environment.

## Problem Definition

From the looks of the various plugins that are available for NativeScript, most of which looks like items that are either working as separate components or modules from the existing NativeScript framework. At the time of creating this project, I haven't yet found a NativeScript plugin which allows developers to implement custom behaviors to their elements within NativeScript that is nicely integrated into the original NativeScript framework.

Coming from a UX perspective, often times, it is important to present that flexibility for developers to customize how they want certain elements to look, and gradients is definitely one of those.

## Objectives

This project will aim to cover a few objectives that I have in mind:

1. To create a plugin that isn't really an "outside" module that behaves on its own, instead, it can be integrated into the element's declaration itself, for example:
```
<Button gradient="signin-btn-gradient" text="SIGN IN" (tap)="btnSignInTapped()"></Button
```
"gradient" - this is a property that can be used to point to a particular gradient file that defines properties like the colours, the direction (angle - provides greater control, not just left, right, up, down), the stops as well as the transparency for each stop in the gradient.

**signin-btn-gradient.xml**

```
<gradient angle="0|90|180|-90|-180">
    <colour value="#F1728F" stop="1" opacity="100"></colour>
    <colour value="#F38261" stop="2" opacity="75"></colour>
    <colour value="#F57827" stop="3" opacity="50"></colour>
</gradient>
```

2. The plugin should be something that developers can set at compile/design-time, but also do it programmatically. This flexibility is important because from a User Experience perspective, some elements should only respond with changes upon user interaction.

3. Hopefully, maybe this plugin might become an integrated part of the NativeScript framework in the near future.

4. This project will also serve as a reference point for all future UX-related plugin projects for NativeScript.
