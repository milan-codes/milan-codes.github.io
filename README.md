# milan-codes.github.io

My personal portfolio and blog, built using Astro, and Tailwind. 👨‍💻

This is my personal portfolio and blog template. It allows you to create blog posts using Markdown, display math expressions using [KaTeX](https://katex.org/), and includes analytics integration with [Plausible](https://plausible.io/), as well as a dark theme.

## Features

- Markdown Support: You can create blog posts using Markdown syntax, making it easy to format your content.
- KaTeX Integration: The site supports displaying math expressions using KaTeX, enabling you to include mathematical formulas in your blog posts.
- Plausible Analytics: Analytics integration with Plausible allows you to track visitor statistics and gain insights into the site's performance.
- Light and Dark Theme: The site includes both light and dark themes, and the current theme is set based on system settings.

## Installation

1. Clone the repository to your local machine.
2. Install the necessary dependencies by running `bun install`.
3. Customize the site's content and configuration files to reflect your personal information and preferences.
4. Deploy the site, according to [Astro's documentation](https://docs.astro.build/en/guides/deploy/), to your hosting provider of choice.

## Usage

### Customizing Content

- Create new Markdown files in the `src/pages/blog` directory to add blog posts. You can use existing posts as a template. The url to the blog post will be the name of the Markdown file.

### Displaying Math Expressions

- To display math expressions using KaTeX, wrap the LaTeX code within `$$` symbols in your Markdown files.
  Example: `$$E = mc^2$$`
- Note that the displayed formulas might be too large for their containers. This might make the blog post's page unresponsive on certain devices. To avoid this, wrap the given formula in a `<div class="overflow-x-scroll"> ... </div>` container. You can see examples of this in the blog posts in this repository.

### Analytics Integration with Plausible

1. Sign up for a Plausible Analytics account at [Plausible](https://plausible.io).
2. After setting up your account, paste the given script in the `src/layouts/BaseLayout.astro` file, replacing the current one.

## Dependencies

Refer to the `package.json` file for a complete list of dependencies and their versions.

## Contributing

Contributions to this project are welcome! If you have any ideas, improvements, or bug fixes, please submit a pull request, or open a new issue.

## License

You can reuse this template however you want, but do not reupload the blog posts to your deployed site.
