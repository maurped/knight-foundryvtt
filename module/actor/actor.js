export class CtHackActor extends Actor {
	/**
   * Augment the basic actor data with additional dynamic data.
   */
	prepareData() {
		super.prepareData();

		const actorData = this.data;
		//const data = actorData.data;
		const flags = actorData.flags;
        if (this.actor.data.data.aspect.chair.valeur === '6'){
            this.actor.data.data.caracsecondaire.PA.valeurmax = '10';
        }
        console.log(data);
        
        

		// Make separate methods for each Actor type (character, npc, etc.) to keep things organized.
	}

}



