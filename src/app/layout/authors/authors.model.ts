import { Article } from '../categories/category/category.model';

export class Author{
    public name: string;
    public id : number;
    public url : string;
    public articles: Article[];
}
