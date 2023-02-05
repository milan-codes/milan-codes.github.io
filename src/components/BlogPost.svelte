<script lang="ts">
    import { formattedPublishDate } from "../utils";
    
    export let frontmatter: any;
</script>

<div>
    <h1 class="text-sm text-gray-400 dark:text-gray-600 mt-8">{formattedPublishDate(frontmatter.pubDate)}</h1>
    <h1 class="text-xl text-gray-900 dark:text-gray-100 tracking-wider">{frontmatter.title}</h1>
    <h1 class="text-gray-600 dark:text-gray-400">{frontmatter.description}</h1>
    <div class="text-gray-600 dark:text-gray-400 my-8">
        <slot />
    </div>
</div>