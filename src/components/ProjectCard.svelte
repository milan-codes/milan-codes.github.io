<script lang="ts">
    export let projectName: string;
    export let projectDescription: string;
    export let projectLink: string;
</script>

<div class="grid grid-cols-2 items-start text-gray-600 my-8">
    <a class="inline-flex items-center rounded-lg hover:text-gray-700" href={projectLink} target="_blank" rel="noreferrer">
        {projectName}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1 h-4 w-4"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
    </a>
    <p>{projectDescription}</p>
</div>
