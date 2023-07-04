<script>
  import ProjectCard from "./ProjectCard.svelte";
</script>

<div class="my-16">
  <h1 class="text-gray-900 dark:text-gray-100 mb-2 tracking-wider">Side projects</h1>
  <ProjectCard projectName="Personal blog" projectDescription="The source code of this site" projectLink="https://github.com/milan-codes/milan-codes.github.io" projectTags={["Astro", "Svelte", "Tailwind"]}/>
  <ProjectCard projectName="The Briefing Room" projectDescription="Access and visualize Formula 1 telemetry data" projectLink="https://github.com/milan-codes/the-briefing-room" projectTags={["Next", "React.ts", "Tailwind"]}/>
  <ProjectCard projectName="The Briefing Room API" projectDescription="Simple Flask API to serve the frontend" projectLink="https://github.com/milan-codes/the-briefing-room-api" projectTags={["Flask"]}/>
  <ProjectCard projectName="Studician" projectDescription="Android app for students to digitalize their timetable and tasks" projectLink="https://github.com/milan-codes/studician-android-client" projectTags={["Kotlin"]}/>
  <ProjectCard projectName="Studician API" projectDescription="Express API to make information available for users" projectLink="https://github.com/milan-codes/studician-api" projectTags={["Node.js", "Express", "Firebase"]}/>
</div>