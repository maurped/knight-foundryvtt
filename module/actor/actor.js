export class knightActor extends Actor {
	/**
   * Augment the basic actor data with additional dynamic data.
   */
  /**
   * Augment the basic actor data with additional dynamic data.
   */
   prepareData() {
    super.prepareData();

    const actorData = this.data;
    //const data = actorData.data;
    //const flags = actorData.flags;

    // Make separate methods for each Actor type (character, npc, etc.) to keep
    // things organized.
    if (actorData.type === 'knight') this._prepareCharacterData(actorData);
  }
  prepareDerivedData() {
		
	
}


  /**
   * Prepare Character type specific data
   */
  _prepareCharacterData(actorData) {
    const data = actorData.data;
    data.caracsecondaire.PA.valeurmax = Math.max(data.aspect.chair.caracteristique.deplacement.valeur, data.aspect.chair.caracteristique.force.valeur, data.aspect.chair.caracteristique.endurance.valeur)
    data.caracsecondaire.PE.valeurmax = Math.max(data.aspect.chair.caracteristique.deplacement.valeur, data.aspect.chair.caracteristique.force.valeur, data.aspect.chair.caracteristique.endurance.valeur)
    data.caracsecondaire.CDF.valeurmax = Math.max(data.aspect.chair.caracteristique.deplacement.valeur, data.aspect.chair.caracteristique.force.valeur, data.aspect.chair.caracteristique.endurance.valeur)
    data.caracsecondaire.PS.valeurmax = Math.max(data.aspect.chair.caracteristique.deplacement.valeur, data.aspect.chair.caracteristique.force.valeur, data.aspect.chair.caracteristique.endurance.valeur)
    data.caracsecondaire.PG.valeurmax = Math.max(data.aspect.chair.caracteristique.deplacement.valeur, data.aspect.chair.caracteristique.force.valeur, data.aspect.chair.caracteristique.endurance.valeur)
    data.caracsecondaire.PX.valeurmax = Math.max(data.aspect.chair.caracteristique.deplacement.valeur, data.aspect.chair.caracteristique.force.valeur, data.aspect.chair.caracteristique.endurance.valeur)
    data.caracsecondaire.heroisme.valeurmax = Math.max(data.aspect.chair.caracteristique.deplacement.valeur, data.aspect.chair.caracteristique.force.valeur, data.aspect.chair.caracteristique.endurance.valeur)
    data.caracsecondaire.contact.valeurmax = Math.max(data.aspect.chair.caracteristique.deplacement.valeur, data.aspect.chair.caracteristique.force.valeur, data.aspect.chair.caracteristique.endurance.valeur)
    data.caracsecondaire.espoir.valeurmax = Math.max(data.aspect.chair.caracteristique.deplacement.valeur, data.aspect.chair.caracteristique.force.valeur, data.aspect.chair.caracteristique.endurance.valeur)
    data.caracsecondaire.defense.valeurmax = Math.max(data.aspect.chair.caracteristique.deplacement.valeur, data.aspect.chair.caracteristique.force.valeur, data.aspect.chair.caracteristique.endurance.valeur)
    data.caracsecondaire.reaction.valeurmax = Math.max(data.aspect.chair.caracteristique.deplacement.valeur, data.aspect.chair.caracteristique.force.valeur, data.aspect.chair.caracteristique.endurance.valeur)
    data.caracsecondaire.initiative.valeurmax = Math.max(data.aspect.chair.caracteristique.deplacement.valeur, data.aspect.chair.caracteristique.force.valeur, data.aspect.chair.caracteristique.endurance.valeur)

    
    // Make modifications to data here. For example:
    //if (data.aspect.chair.valeur === 6){
    //    data.caracsecondaire.PA.valeurmax = 10;
    //}
    }


PlusGrandeValeur(array)
{
    var max;
    for (i=0;val=array[i]; i++)
    {
        if (val > max)
        {
            max=val;
        }
    }
    return max;
}
  }

	



