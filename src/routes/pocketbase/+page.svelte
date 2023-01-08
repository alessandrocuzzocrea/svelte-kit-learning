<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<form method="POST">
	<label>
		Post
		<input name="body" type="text" />
	</label>
	<button>Post New Message</button>
</form>

<h1>Pocketbase</h1>
{#each data.posts as post}
	<p>{post.id}</p>
	<p>{post.body}</p>
	<p>{post.created}</p>
	<p>{post.updated}</p>
	<hr />
{/each}
