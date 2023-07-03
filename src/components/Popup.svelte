<script lang="ts">
    export let text: string;
    export let href: string;
    export let visible: boolean = true;
</script>

{#if visible}
<div
    
    class="sticky bottom-4 z-50 flex items-center justify-between gap-4 rounded-lg dark:bg-gray-100 bg-gray-900 px-5 py-3 dark:text-gray-900 text-gray-100"
>
    <a
    href={href}
    target="_blank"
    rel="noreferrer"
    class="text-sm font-medium hover:opacity-75"
    >
    {text}
    </a>

    <button
        class="rounded bg-black/50 dark:bg-black/10 p-1 hover:bg-black/30 dark:hover:bg-black/20"
        on:click={() => (visible = false)}
    >
    <span class="sr-only">Close</span>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
    >
        <path
        fill-rule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clip-rule="evenodd"
        />
    </svg>
    </button>
</div>
{/if}
