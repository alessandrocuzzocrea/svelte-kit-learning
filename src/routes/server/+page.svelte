<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<h1>{data.id}</h1>
<h1>{data.userId}</h1>
<h1>{data.title}</h1>
<h1>{data.completed}</h1>
