<script lang="ts">
    export let name: string;
    export let description: string;
    export let link: string;
    export let tags: string[];
</script>

<div class="grid grid-cols-2 items-start my-8">
    <a class="inline-flex items-center rounded-lg text-gray-900 dark:text-gray-100 hover:underline" href={link} target="_blank" rel="noreferrer">
        {name}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1 h-4 w-4"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
    </a>
    <div>
        <p class="text-gray-600 dark:text-gray-400">{description}</p>
        <ul class="flex flex-wrap">
            {#each tags as tag}
                <li class="text-gray-400 dark:text-gray-600 text-sm font-medium">{tag + "/"}</li>
            {/each}
        </ul>
    </div>
</div>
