import knightItemSheet from "./sheets/knightItemSheet.js";
import knightActorSheet from "./sheets/knightActorSheet.js";

Hooks.once("init", () => {
    console.log("knight | Initialisation du système knight");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("knight", knightItemSheet, { makeDefault: true });

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("knight", knightActorSheet, { makeDefault: true });
})