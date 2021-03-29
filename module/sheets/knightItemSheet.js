export default class knightItemSheet extends ItemSheet{
    get template(){
        console.log(`knight | Récupération du fichier html ${this.item.data.type}-sheet.`);

        return `systems/knight/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    getData(){
        const data = super.getData();
        
        
        console.log(data);

        return data;
    }
}