export default class knightItemSheet extends ItemSheet{
    get template(){
        console.log(`knight | Récupération du fichier html ${this.item.data.type}-sheet.`);

        return `systems/knight/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    getData(){
        const formData = super.getData();
       
        
        console.log(formData);
        return formData;
    }
}