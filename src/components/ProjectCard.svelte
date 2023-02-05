<script lang="ts">
    export let projectName: string;
    export let projectDescription: string;
    export let projectLink: string;
    export let projectTags: string[];
</script>

<div class="grid grid-cols-2 items-start my-8">
    <a class="inline-flex items-center rounded-lg text-gray-900 hover:underline" href={projectLink} target="_blank" rel="noreferrer">
        {projectName}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1 h-4 w-4"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
    </a>
    <div>
        <p class="text-gray-600">{projectDescription}</p>
        <ul class="flex">
            {#each projectTags as tag}
                <li class="text-gray-400 text-sm font-medium">{tag + "/"}</li>
            {/each}
        </ul>
    </div>
</div>
