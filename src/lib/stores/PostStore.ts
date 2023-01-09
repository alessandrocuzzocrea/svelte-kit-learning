import { writable } from 'svelte/store';

interface Post {
    id: string;
    body: string;
    created: Date;
    updated: Date;
};

export const posts = writable<Post[]>([
    {
        id: '0',
        body: 'ciao!',
        created: new Date(),
        updated: new Date(),
    }
]);
