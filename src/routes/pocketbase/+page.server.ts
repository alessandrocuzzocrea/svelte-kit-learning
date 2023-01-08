import type { PageServerLoad } from "./$types"
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

// fetch a paginated records list


export const load: PageServerLoad = async () => {
    const resultList = await pb.collection('posts').getFullList();
    debugger;

    return { posts: structuredClone(resultList) };
}
