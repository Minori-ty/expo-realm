import Realm from 'realm'

export const AnimeSchema: Realm.ObjectSchema = {
    name: 'Anime',
    primaryKey: 'id',
    properties: {
        id: 'int',
        title: 'string',
        description: 'string?',
        imageUrl: 'string?',
        episodes: 'int',
        status: 'string', // e.g., "airing", "completed", "upcoming"
        genres: 'string[]', // Array of genre strings
        releaseDate: 'date?',
        rating: 'float?',
    },
}
