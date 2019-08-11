export class Category {
    public title : string;
    public articles : Article[];
}

export class Article {
    public date : string;
    public title : string;
    public img : string;
    public url : string;
    public id : number;
    public author : string;
    public text : string;
    public shortdescription : string;
}