import { Actor } from './actor';

export class Movie {
    id: number;
    name: string;
    category: string;
    subcategory: string;
    actorsList: Actor[];
}
