import PocketBase from 'pocketbase';
import type { PageServerLoad } from "./$types"
import type { Actions } from './$types';

const pb = new PocketBase('http://127.0.0.1:8090');

export const load: PageServerLoad = async () => {
    const resultList = await pb.collection('posts').getFullList(10000, { sort: '-created' });
    debugger;

    return { posts: structuredClone(resultList) };
}

export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const body = data.get('body');
        const record = await pb.collection('posts').create({ body });
    }
};
