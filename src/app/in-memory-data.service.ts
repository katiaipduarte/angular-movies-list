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
                                    name: 'Harrison Ford',
                                    salary: 20000000
                                }, {
                                    name: 'Mark Hamil',
                                    salary: 7000000
                                }, {
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
                subcategory: '',
                actorsList: [
                                {
                                    name: 'Actor 1',
                                    salary: 10000000
                                }, {
                                    name: 'Actor 2',
                                    salary: 7000000
                                }, {
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
                                    name: 'Actor 1',
                                    salary: 5000000
                                }, {
                                    name: 'Actor 2',
                                    salary: 7000000
                                }, {
                                    name: 'Actor 3',
                                    salary: 3000000
                                }
                            ],
                totalAmount: 15000000
            }
        ];

        const categories = [
            {
                category: "action",
                subcategory: ["comedy", "crime", "thriller"]
            }, {
                category: "animation",
                subcategory: ["adventure", "comedy", "family"],
            }, {
                category: "documentary",
                subcategory: ["biography", "crime", "history"]
            }, {
                category: "horror",
                subcategory: ["comedy", "drama", "sci-fi"]
            }, {
                category: "musical",
                subcategory: ["comedy", "romance"]
            }, {
                category: "war",
                subcategory: ["action", "biography"]
            }, {
                category: "adventure", 
                subcategory: ["biography", "war"]
            }, {
                category: "drama", 
                subcategory: ["romance", "musical"]
            }, {
                category: "sci-fi", 
                subcategory: ["action", "drama"]
            }, {
                category: "mystery", 
                subcategory: ["adventure", "thriller"]
            }, {
                category: "western", 
                subcategory: ["action", "comedy"]
            }, {
                category: "thriller",
                subcategory: ["action", "mystery"]
            }
        ];
        return {movies, categories};
    }
}
