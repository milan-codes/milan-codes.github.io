<script lang="ts">
    import { formattedPublishDate } from "../utils";
    
    export let frontmatter: any;
</script>

<div>
    <h1 class="text-sm text-gray-400 dark:text-gray-600 mt-8">{formattedPublishDate(frontmatter.pubDate)}</h1>
    <h1 class="text-xl text-gray-900 dark:text-gray-100 tracking-wider">{frontmatter.title}</h1>
    <h1 class="text-gray-600 dark:text-gray-400">{frontmatter.description}</h1>
    <h1 class="mt-1 text-sm text-gray-400 dark:text-gray-600">{frontmatter.minutesRead}</h1>
    <div class="prose dark:prose-invert text-gray-600 dark:text-gray-400 my-8">
        <slot />
    </div>
    <ul class="flex flex-wrap my-8">
        {#each frontmatter.tags as tag}
            <li class="text-sm text-gray-400 dark:text-gray-600 mr-3 hover:underline">
                <a href={`/tags/${tag}`}>{`#${tag}`}</a>
            </li>
        {/each}
    </ul>
    <hr>
    <div class="prose dark:prose-invert text-gray-600 dark:text-gray-400 my-8">
        If you have any questions or comments, or you would like to point out any errors in any of the blog posts, please reach out to me at <a href="mailto:milanherke@protonmail.com">milanherke@protonmail.com</a>.
    </div>
</div>