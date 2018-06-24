import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Actor } from './actor';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const movies = [
            {
                id: 1,
                name: 'Star Wars: The Force Awakens',
                category: 'sci-fi',
                subcategory: 'action',
                actorsList: [
                                {
                                    id: 1,
                                    name: 'Harrison Ford',
                                    salary: 20000000
                                }, {
                                    id: 2,
                                    name: 'Mark Hamil',
                                    salary: 7000000
                                }, {
                                    id: 3,
                                    name: 'Carrie Fisher',
                                    salary: 3000000
                                }
                            ],
                totalAmount: 30000000
            },
            {
                id: 2,
                name: 'Other movie',
                category: 'sci-fi',
                subcategory: 'drama',
                actorsList: [
                                {
                                    id: 4,
                                    name: 'Actor 1',
                                    salary: 10000000
                                }, {
                                    id: 5,
                                    name: 'Actor 2',
                                    salary: 7000000
                                }, {
                                    id: 6,
                                    name: 'Actor 3',
                                    salary: 3000000
                                }
                            ],
                totalAmount: 20000000
            },
            {
                id: 3,
                name: 'Other movie',
                category: 'action',
                subcategory: 'crime',
                actorsList: [
                                {
                                    id: 7,
                                    name: 'Actor 1',
                                    salary: 5000000
                                }, {
                                    id: 8,
                                    name: 'Actor 2',
                                    salary: 7000000
                                }, {
                                    id: 9,
                                    name: 'Actor 3',
                                    salary: 3000000
                                }
                            ],
                totalAmount: 15000000
            }
        ];
        return {movies};
    }
}
