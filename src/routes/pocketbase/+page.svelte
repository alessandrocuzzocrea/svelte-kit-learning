<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>Pocketbase</h1>
{#each data.posts as post}
	<p>{post.id}</p>
	<p>{post.body}</p>
	<p>{post.created}</p>
	<p>{post.updated}</p>
	<hr />
{/each}
