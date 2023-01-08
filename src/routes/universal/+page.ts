import type { PageLoad } from "./$types"

export const load: PageLoad = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const { userId, id, title, completed } = await response.json();

    return {
        userId,
        id,
        title,
        completed
    }
}
