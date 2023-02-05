<script>
  import ProjectCard from "./ProjectCard.svelte";
</script>

<div class="max-w-lg mx-auto px-4 my-16">
        <h1 class="text-gray-900 mb-2 tracking-wider">Side projects</h1>
        <ProjectCard projectName="milanherkedotdev" projectDescription="The source code of this site" projectLink="https://github.com/milan-codes/milanherkedotdev" projectTags={["Astro", "Svelte", "Tailwind"]}/>
        <ProjectCard projectName="AlgoVisualizer" projectDescription="Visualize common algorithms" projectLink="#" projectTags={["React.ts", "Tailwind"]}/>
        <ProjectCard projectName="Formula 1 Telemetry" projectDescription="Access and visualize Formula 1 telemetry data" projectLink="https://github.com/milan-codes/f1-telemetry" projectTags={["Next", "React.ts", "Tailwind"]}/>
</div>