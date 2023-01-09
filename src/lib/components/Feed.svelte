<script lang="ts">
  import { posts } from '$lib/stores/PostStore';
</script>

{#each $posts as post}
  <p>{post.id}</p>
  <p>{post.body}</p>
  <p>{post.created}</p>
  <p>{post.updated}</p>
  <hr />
{/each}
