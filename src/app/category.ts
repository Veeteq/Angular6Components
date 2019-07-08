export class Category {
    id: string;
    name: string;
    type: string;
    isFavorite?: boolean;

    constructor(id: string, name: string, type: string) {
        this.id = id;
        this.name = name;
        this.type = type;
    }
}
