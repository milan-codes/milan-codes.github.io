<script lang="ts">
    export let tags: string[];
</script>

<div>
    <h1 class="my-8 text-gray-900 dark:text-gray-100 mb-2 tracking-wider">Tags</h1>
    <ul class="flex flex-wrap">
        {#each tags as tag}
            <li class="mr-3 text-gray-400 dark:text-gray-600 text-sm font-medium hover:underline"><a href={`/tags/${tag}`}>{`#${tag}`}</a></li>
        {/each}
    </ul>
</div>