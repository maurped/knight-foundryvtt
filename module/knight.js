import knightItemSheet from "./sheets/knightItemSheet.js";
import knightActorSheet from "./sheets/knightActorSheet.js";
import { knightActor } from './actor/actor.js';
import { registerHandlebarsHelpers } from './helpers.js';

Hooks.once("init", () => {
    console.log("knight | Initialisation du système knight");
// Define custom Entity classes
    CONFIG.Actor.entityClass = knightActor;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("knight", knightItemSheet, { makeDefault: true });

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("knight", knightActorSheet, { makeDefault: true });


    // Register Handlebars Helpers
	registerHandlebarsHelpers();


})