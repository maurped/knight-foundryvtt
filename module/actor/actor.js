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
    const data = actorData.data;
    const flags = actorData.flags;

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

    // Make modifications to data here. For example:
    if (data.aspect.chair.valeur === 6){
        data.caracsecondaire.PA.valeurmax = 10;
    }
    }
  }

	



