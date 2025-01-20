// .vitepress/config.ts
import process from "node:process";
import { BiDirectionalLinks } from "file:///home/weathercold/src/StudyNotes/node_modules/.pnpm/@nolebase+markdown-it-bi-directional-links@2.12.0_markdown-it@14.1.0/node_modules/@nolebase/markdown-it-bi-directional-links/dist/index.mjs";
import { UnlazyImages } from "file:///home/weathercold/src/StudyNotes/node_modules/.pnpm/@nolebase+markdown-it-unlazy-img@2.12.0_@types+node@22.10.7_jiti@2.4.2_less@4.2.2_markdown-it_td6rsorm4cczvmsd73bativowm/node_modules/@nolebase/markdown-it-unlazy-img/dist/index.mjs";
import { generateBreadcrumbsData } from "file:///home/weathercold/src/StudyNotes/node_modules/.pnpm/@nolebase+vitepress-plugin-breadcrumbs@2.12.0_@algolia+client-search@5.19.0_@types+node@22.10_xjmh2s6jllm2xjq7zbncszfc2y/node_modules/@nolebase/vitepress-plugin-breadcrumbs/dist/vitepress/index.mjs";
import { InlineLinkPreviewElementTransform } from "file:///home/weathercold/src/StudyNotes/node_modules/.pnpm/@nolebase+vitepress-plugin-inline-link-preview@2.12.0_@algolia+client-search@5.19.0_@types+no_aju65zx2oinbujb5bm3tyuowk4/node_modules/@nolebase/vitepress-plugin-inline-link-preview/dist/markdown-it/index.mjs";
import { transformHeadMeta } from "file:///home/weathercold/src/StudyNotes/node_modules/.pnpm/@nolebase+vitepress-plugin-meta@2.12.0_@algolia+client-search@5.19.0_@types+node@22.10.7_less_4lqch64ql7waf2uh3rdw4iegcu/node_modules/@nolebase/vitepress-plugin-meta/dist/vitepress/index.mjs";
import { calculateSidebar } from "file:///home/weathercold/src/StudyNotes/node_modules/.pnpm/@nolebase+vitepress-plugin-sidebar@2.12.0/node_modules/@nolebase/vitepress-plugin-sidebar/dist/index.mjs";
import { withMermaid } from "file:///home/weathercold/src/StudyNotes/node_modules/.pnpm/vitepress-plugin-mermaid@2.0.17_mermaid@11.4.0_vitepress@1.6.0_@algolia+client-search@5.19.0__3iuwqomsrcgy4y7n3og3gsrbzy/node_modules/vitepress-plugin-mermaid/dist/vitepress-plugin-mermaid.es.mjs";
import MarkdownItFootnote from "file:///home/weathercold/src/StudyNotes/node_modules/.pnpm/markdown-it-footnote@4.0.0/node_modules/markdown-it-footnote/index.mjs";
import MarkdownItMathjax3 from "file:///home/weathercold/src/StudyNotes/node_modules/.pnpm/markdown-it-mathjax3@4.3.2/node_modules/markdown-it-mathjax3/index.js";
import { defineConfig } from "file:///home/weathercold/src/StudyNotes/node_modules/.pnpm/vitepress@1.6.0_@algolia+client-search@5.19.0_@types+node@22.10.7_less@4.2.2_markdown-it-math_h2iei3fs7me52pinfycyjpcdgu/node_modules/vitepress/dist/node/index.js";

// scripts/utils.ts
var getAvatarUrlByGithubName = (name) => `https://github.com/${name}.png`;

// .vitepress/metadata.ts
var siteName = "Hifumi's Study Notes";
var siteDescription = "My personal knowledge base";
var githubRepoLink = "https://github.com/Make-UpWorkClub/StudyNotes";
var plainTargetDomain = "make-upworkclub.github.io/StudyNotes";
var targetDomain = `https://${plainTargetDomain}`;
var creators = [
  {
    name: "Ajitani Hifumi",
    avatar: "",
    username: "Perororororo",
    title: "Club President",
    desc: "Ahaha... Nice to meet you.",
    links: [
      { type: "github", icon: "github", link: "https://github.com/Perororororo" }
    ],
    nameAliases: ["Hifumi", "Hifumin", "Faust"],
    emailAliases: ["perororo@proton.me"]
  }
].map((c) => {
  c.avatar = c.avatar || getAvatarUrlByGithubName(c.username);
  return c;
});
var creatorNames = creators.map((c) => c.name);
var creatorUsernames = creators.map((c) => c.username || "");

// .vitepress/config.ts
var config = defineConfig({
  vue: {
    template: {
      transformAssetUrls: {
        video: ["src", "poster"],
        source: ["src"],
        img: ["src"],
        image: ["xlink:href", "href"],
        use: ["xlink:href", "href"],
        NolebaseUnlazyImg: ["src"]
      }
    }
  },
  lang: "en-US",
  title: siteName,
  description: siteDescription,
  base: "/StudyNotes/",
  cleanUrls: true,
  srcExclude: ["**/README.md", "templates/*.md"],
  ignoreDeadLinks: true,
  head: [
    ["meta", {
      name: "theme-color",
      content: "#ffe89a"
    }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/StudyNotes/apple-touch-icon.png",
        sizes: "180x180"
      }
    ],
    ["link", {
      rel: "icon",
      href: "/StudyNotes/logo.png",
      type: "image/png"
    }],
    [
      "link",
      {
        rel: "alternate icon",
        href: "/StudyNotes/favicon.ico",
        type: "image/png",
        sizes: "16x16"
      }
    ],
    ["meta", {
      name: "author",
      content: creatorNames.join(", ")
    }],
    [
      "meta",
      {
        name: "keywords",
        content: ["markdown", "knowledge-base", "vitepress", "obsidian", "notebook", "notes", ...creatorUsernames].join(", ")
      }
    ],
    ["meta", {
      property: "og:title",
      content: siteName
    }],
    [
      "meta",
      {
        property: "og:image",
        content: `${targetDomain}/og.jpg`
      }
    ],
    ["meta", {
      property: "og:description",
      content: siteDescription
    }],
    ["meta", {
      property: "og:site_name",
      content: siteName
    }],
    ["meta", {
      name: "twitter:card",
      content: "summary_large_image"
    }],
    ["meta", {
      name: "twitter:creator",
      content: creatorUsernames.join(", ")
    }],
    [
      "meta",
      {
        name: "twitter:image",
        content: `${targetDomain}/og.jpg`
      }
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/StudyNotes/safari-pinned-tab.png",
        color: "#ffe89a"
      }
    ],
    ["link", {
      rel: "manifest",
      href: "/StudyNotes/site.webmanifest"
    }],
    ["meta", {
      name: "msapplication-TileColor",
      content: "#ffe89a"
    }]
  ],
  themeConfig: {
    outline: { label: "Outline", level: "deep" },
    darkModeSwitchLabel: "Switch theme",
    editLink: {
      pattern: `${githubRepoLink}/tree/main/:path`,
      text: "Edit this page"
    },
    socialLinks: [
      { icon: "github", link: githubRepoLink }
    ],
    footer: {
      message: 'Written with <span style="color: #e25555;">&#9829;</span>',
      copyright: '<a class="footer-cc-link" target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> \xA9 2024 Ajitani Hifumi'
    },
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "Search",
                buttonAriaLabel: "Search"
              },
              modal: {
                noResultsText: "No results found (>_<)",
                resetButtonTitle: "Reset search criteria",
                footer: {
                  selectText: "Select",
                  navigateText: "Switch"
                }
              }
            }
          }
        },
        // Add title ang tags field in frontmatter to search
        // You can exclude a page from search by adding search: false to the page's frontmatter.
        _render(src, env, md) {
          let html = md.render(src, env);
          let tagsPart = "";
          let headingPart = "";
          let contentPart = "";
          let fullContent = "";
          const sortContent = () => [headingPart, tagsPart, contentPart];
          let { frontmatter, content } = env;
          if (!frontmatter)
            return html;
          if (frontmatter.search === false)
            return "";
          contentPart = content ||= src;
          const headingMatch = content.match(/^# .*/m);
          const hasHeading = !!(headingMatch && headingMatch[0] && headingMatch.index !== void 0);
          if (hasHeading) {
            const headingEnd = headingMatch.index + headingMatch[0].length;
            headingPart = content.slice(0, headingEnd);
            contentPart = content.slice(headingEnd);
          } else if (frontmatter.title) {
            headingPart = `# ${frontmatter.title}`;
          }
          const tags = frontmatter.tags;
          if (tags && Array.isArray(tags) && tags.length)
            tagsPart = `Tags: #${tags.join(", #")}`;
          fullContent = sortContent().filter(Boolean).join("\n\n");
          html = md.render(fullContent, env);
          return html;
        }
      }
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Notes", link: "/notes/" },
      { text: "Changelog", link: "/toc" }
    ],
    sidebar: calculateSidebar([
      { folderName: "notes", separate: true }
    ])
  },
  markdown: {
    theme: {
      light: "github-light",
      dark: "one-dark-pro"
    },
    breaks: true,
    math: true,
    config: (md) => {
      md.use(MarkdownItFootnote);
      md.use(MarkdownItMathjax3);
      md.use(BiDirectionalLinks({
        dir: process.cwd()
      }));
      md.use(UnlazyImages(), {
        imgElementTag: "NolebaseUnlazyImg"
      });
      md.use(InlineLinkPreviewElementTransform);
    }
  },
  async transformHead(context) {
    let head = [...context.head];
    const returnedHead = await transformHeadMeta()(head, context);
    if (typeof returnedHead !== "undefined")
      head = returnedHead;
    return head;
  },
  async transformPageData(pageData, context) {
    generateBreadcrumbsData(pageData, context);
  }
  // async buildEnd(siteConfig) {
  //   await buildEndGenerateOpenGraphImages({
  //     baseUrl: targetDomain,
  //     category: {
  //       byLevel: 2,
  //     },
  //   })(siteConfig)
  // },
});
var config_default = withMermaid(config);
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcudHMiLCAic2NyaXB0cy91dGlscy50cyIsICIudml0ZXByZXNzL21ldGFkYXRhLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvd2VhdGhlcmNvbGQvc3JjL1N0dWR5Tm90ZXMvLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvd2VhdGhlcmNvbGQvc3JjL1N0dWR5Tm90ZXMvLnZpdGVwcmVzcy9jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvd2VhdGhlcmNvbGQvc3JjL1N0dWR5Tm90ZXMvLnZpdGVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgcHJvY2VzcyBmcm9tICdub2RlOnByb2Nlc3MnXG5pbXBvcnQgeyBCaURpcmVjdGlvbmFsTGlua3MgfSBmcm9tICdAbm9sZWJhc2UvbWFya2Rvd24taXQtYmktZGlyZWN0aW9uYWwtbGlua3MnXG5pbXBvcnQgeyBVbmxhenlJbWFnZXMgfSBmcm9tICdAbm9sZWJhc2UvbWFya2Rvd24taXQtdW5sYXp5LWltZydcbmltcG9ydCB7IGdlbmVyYXRlQnJlYWRjcnVtYnNEYXRhIH0gZnJvbSAnQG5vbGViYXNlL3ZpdGVwcmVzcy1wbHVnaW4tYnJlYWRjcnVtYnMvdml0ZXByZXNzJ1xuaW1wb3J0IHsgSW5saW5lTGlua1ByZXZpZXdFbGVtZW50VHJhbnNmb3JtIH0gZnJvbSAnQG5vbGViYXNlL3ZpdGVwcmVzcy1wbHVnaW4taW5saW5lLWxpbmstcHJldmlldy9tYXJrZG93bi1pdCdcblxuaW1wb3J0IHsgdHJhbnNmb3JtSGVhZE1ldGEgfSBmcm9tICdAbm9sZWJhc2Uvdml0ZXByZXNzLXBsdWdpbi1tZXRhJ1xuaW1wb3J0IHsgY2FsY3VsYXRlU2lkZWJhciB9IGZyb20gJ0Bub2xlYmFzZS92aXRlcHJlc3MtcGx1Z2luLXNpZGViYXInXG5pbXBvcnQgeyB3aXRoTWVybWFpZCB9IGZyb20gJ3ZpdGVwcmVzcy1wbHVnaW4tbWVybWFpZCdcbi8vIGltcG9ydCB7IGJ1aWxkRW5kR2VuZXJhdGVPcGVuR3JhcGhJbWFnZXMgfSBmcm9tICdAbm9sZWJhc2Uvdml0ZXByZXNzLXBsdWdpbi1vZy1pbWFnZS92aXRlcHJlc3MnXG5pbXBvcnQgTWFya2Rvd25JdEZvb3Rub3RlIGZyb20gJ21hcmtkb3duLWl0LWZvb3Rub3RlJ1xuaW1wb3J0IE1hcmtkb3duSXRNYXRoamF4MyBmcm9tICdtYXJrZG93bi1pdC1tYXRoamF4MydcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcblxuaW1wb3J0IHsgY3JlYXRvck5hbWVzLCBjcmVhdG9yVXNlcm5hbWVzLCBnaXRodWJSZXBvTGluaywgc2l0ZURlc2NyaXB0aW9uLCBzaXRlTmFtZSwgdGFyZ2V0RG9tYWluIH0gZnJvbSAnLi9tZXRhZGF0YSdcblxuY29uc3QgY29uZmlnID0gZGVmaW5lQ29uZmlnKHtcbiAgdnVlOiB7XG4gICAgdGVtcGxhdGU6IHtcbiAgICAgIHRyYW5zZm9ybUFzc2V0VXJsczoge1xuICAgICAgICB2aWRlbzogWydzcmMnLCAncG9zdGVyJ10sXG4gICAgICAgIHNvdXJjZTogWydzcmMnXSxcbiAgICAgICAgaW1nOiBbJ3NyYyddLFxuICAgICAgICBpbWFnZTogWyd4bGluazpocmVmJywgJ2hyZWYnXSxcbiAgICAgICAgdXNlOiBbJ3hsaW5rOmhyZWYnLCAnaHJlZiddLFxuICAgICAgICBOb2xlYmFzZVVubGF6eUltZzogWydzcmMnXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgbGFuZzogJ2VuLVVTJyxcbiAgdGl0bGU6IHNpdGVOYW1lLFxuICBkZXNjcmlwdGlvbjogc2l0ZURlc2NyaXB0aW9uLFxuICBiYXNlOiAnL1N0dWR5Tm90ZXMvJyxcbiAgY2xlYW5VcmxzOiB0cnVlLFxuICBzcmNFeGNsdWRlOiBbJyoqL1JFQURNRS5tZCcsICd0ZW1wbGF0ZXMvKi5tZCddLFxuICBpZ25vcmVEZWFkTGlua3M6IHRydWUsXG4gIGhlYWQ6IFtcbiAgICBbJ21ldGEnLCB7XG4gICAgICBuYW1lOiAndGhlbWUtY29sb3InLFxuICAgICAgY29udGVudDogJyNmZmU4OWEnLFxuICAgIH1dLFxuICAgIFtcbiAgICAgICdsaW5rJyxcbiAgICAgIHtcbiAgICAgICAgcmVsOiAnYXBwbGUtdG91Y2gtaWNvbicsXG4gICAgICAgIGhyZWY6ICcvU3R1ZHlOb3Rlcy9hcHBsZS10b3VjaC1pY29uLnBuZycsXG4gICAgICAgIHNpemVzOiAnMTgweDE4MCcsXG4gICAgICB9LFxuICAgIF0sXG4gICAgWydsaW5rJywge1xuICAgICAgcmVsOiAnaWNvbicsXG4gICAgICBocmVmOiAnL1N0dWR5Tm90ZXMvbG9nby5wbmcnLFxuICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgfV0sXG4gICAgW1xuICAgICAgJ2xpbmsnLFxuICAgICAge1xuICAgICAgICByZWw6ICdhbHRlcm5hdGUgaWNvbicsXG4gICAgICAgIGhyZWY6ICcvU3R1ZHlOb3Rlcy9mYXZpY29uLmljbycsXG4gICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICBzaXplczogJzE2eDE2JyxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBbJ21ldGEnLCB7XG4gICAgICBuYW1lOiAnYXV0aG9yJyxcbiAgICAgIGNvbnRlbnQ6IGNyZWF0b3JOYW1lcy5qb2luKCcsICcpLFxuICAgIH1dLFxuICAgIFtcbiAgICAgICdtZXRhJyxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2tleXdvcmRzJyxcbiAgICAgICAgY29udGVudDpcbiAgICAgICAgICBbJ21hcmtkb3duJywgJ2tub3dsZWRnZS1iYXNlJywgJ3ZpdGVwcmVzcycsICdvYnNpZGlhbicsICdub3RlYm9vaycsICdub3RlcycsIC4uLmNyZWF0b3JVc2VybmFtZXNdLmpvaW4oJywgJyksXG4gICAgICB9LFxuICAgIF0sXG5cbiAgICBbJ21ldGEnLCB7XG4gICAgICBwcm9wZXJ0eTogJ29nOnRpdGxlJyxcbiAgICAgIGNvbnRlbnQ6IHNpdGVOYW1lLFxuICAgIH1dLFxuICAgIFtcbiAgICAgICdtZXRhJyxcbiAgICAgIHtcbiAgICAgICAgcHJvcGVydHk6ICdvZzppbWFnZScsXG4gICAgICAgIGNvbnRlbnQ6IGAke3RhcmdldERvbWFpbn0vb2cuanBnYCxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBbJ21ldGEnLCB7XG4gICAgICBwcm9wZXJ0eTogJ29nOmRlc2NyaXB0aW9uJyxcbiAgICAgIGNvbnRlbnQ6IHNpdGVEZXNjcmlwdGlvbixcbiAgICB9XSxcbiAgICBbJ21ldGEnLCB7XG4gICAgICBwcm9wZXJ0eTogJ29nOnNpdGVfbmFtZScsXG4gICAgICBjb250ZW50OiBzaXRlTmFtZSxcbiAgICB9XSxcblxuICAgIFsnbWV0YScsIHtcbiAgICAgIG5hbWU6ICd0d2l0dGVyOmNhcmQnLFxuICAgICAgY29udGVudDogJ3N1bW1hcnlfbGFyZ2VfaW1hZ2UnLFxuICAgIH1dLFxuICAgIFsnbWV0YScsIHtcbiAgICAgIG5hbWU6ICd0d2l0dGVyOmNyZWF0b3InLFxuICAgICAgY29udGVudDogY3JlYXRvclVzZXJuYW1lcy5qb2luKCcsICcpLFxuICAgIH1dLFxuICAgIFtcbiAgICAgICdtZXRhJyxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3R3aXR0ZXI6aW1hZ2UnLFxuICAgICAgICBjb250ZW50OiBgJHt0YXJnZXREb21haW59L29nLmpwZ2AsXG4gICAgICB9LFxuICAgIF0sXG5cbiAgICBbXG4gICAgICAnbGluaycsXG4gICAgICB7XG4gICAgICAgIHJlbDogJ21hc2staWNvbicsXG4gICAgICAgIGhyZWY6ICcvU3R1ZHlOb3Rlcy9zYWZhcmktcGlubmVkLXRhYi5wbmcnLFxuICAgICAgICBjb2xvcjogJyNmZmU4OWEnLFxuICAgICAgfSxcbiAgICBdLFxuICAgIFsnbGluaycsIHtcbiAgICAgIHJlbDogJ21hbmlmZXN0JyxcbiAgICAgIGhyZWY6ICcvU3R1ZHlOb3Rlcy9zaXRlLndlYm1hbmlmZXN0JyxcbiAgICB9XSxcbiAgICBbJ21ldGEnLCB7XG4gICAgICBuYW1lOiAnbXNhcHBsaWNhdGlvbi1UaWxlQ29sb3InLFxuICAgICAgY29udGVudDogJyNmZmU4OWEnLFxuICAgIH1dLFxuICBdLFxuICB0aGVtZUNvbmZpZzoge1xuICAgIG91dGxpbmU6IHsgbGFiZWw6ICdPdXRsaW5lJywgbGV2ZWw6ICdkZWVwJyB9LFxuICAgIGRhcmtNb2RlU3dpdGNoTGFiZWw6ICdTd2l0Y2ggdGhlbWUnLFxuICAgIGVkaXRMaW5rOiB7XG4gICAgICBwYXR0ZXJuOiBgJHtnaXRodWJSZXBvTGlua30vdHJlZS9tYWluLzpwYXRoYCxcbiAgICAgIHRleHQ6ICdFZGl0IHRoaXMgcGFnZScsXG4gICAgfSxcbiAgICBzb2NpYWxMaW5rczogW1xuICAgICAgeyBpY29uOiAnZ2l0aHViJywgbGluazogZ2l0aHViUmVwb0xpbmsgfSxcbiAgICBdLFxuICAgIGZvb3Rlcjoge1xuICAgICAgbWVzc2FnZTogJ1dyaXR0ZW4gd2l0aCA8c3BhbiBzdHlsZT1cImNvbG9yOiAjZTI1NTU1O1wiPiYjOTgyOTs8L3NwYW4+JyxcbiAgICAgIGNvcHlyaWdodDpcbiAgICAgICAgJzxhIGNsYXNzPVwiZm9vdGVyLWNjLWxpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LW5jLXNhLzQuMC9cIj5DQyBCWS1OQy1TQSA0LjA8L2E+IFx1MDBBOSAyMDI0IEFqaXRhbmkgSGlmdW1pJyxcbiAgICB9LFxuICAgIHNlYXJjaDoge1xuICAgICAgcHJvdmlkZXI6ICdsb2NhbCcsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGxvY2FsZXM6IHtcbiAgICAgICAgICByb290OiB7XG4gICAgICAgICAgICB0cmFuc2xhdGlvbnM6IHtcbiAgICAgICAgICAgICAgYnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogJ1NlYXJjaCcsXG4gICAgICAgICAgICAgICAgYnV0dG9uQXJpYUxhYmVsOiAnU2VhcmNoJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kYWw6IHtcbiAgICAgICAgICAgICAgICBub1Jlc3VsdHNUZXh0OiAnTm8gcmVzdWx0cyBmb3VuZCAoPl88KScsXG4gICAgICAgICAgICAgICAgcmVzZXRCdXR0b25UaXRsZTogJ1Jlc2V0IHNlYXJjaCBjcml0ZXJpYScsXG4gICAgICAgICAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgICAgICAgICBzZWxlY3RUZXh0OiAnU2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVGV4dDogJ1N3aXRjaCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBBZGQgdGl0bGUgYW5nIHRhZ3MgZmllbGQgaW4gZnJvbnRtYXR0ZXIgdG8gc2VhcmNoXG4gICAgICAgIC8vIFlvdSBjYW4gZXhjbHVkZSBhIHBhZ2UgZnJvbSBzZWFyY2ggYnkgYWRkaW5nIHNlYXJjaDogZmFsc2UgdG8gdGhlIHBhZ2UncyBmcm9udG1hdHRlci5cbiAgICAgICAgX3JlbmRlcihzcmMsIGVudiwgbWQpIHtcbiAgICAgICAgICAvLyB3aXRob3V0IGBtZC5yZW5kZXIoc3JjLCBlbnYpYCwgdGhlIHNvbWUgaW5mb3JtYXRpb24gd2lsbCBiZSBtaXNzaW5nIGZyb20gdGhlIGVudi5cbiAgICAgICAgICBsZXQgaHRtbCA9IG1kLnJlbmRlcihzcmMsIGVudilcbiAgICAgICAgICBsZXQgdGFnc1BhcnQgPSAnJ1xuICAgICAgICAgIGxldCBoZWFkaW5nUGFydCA9ICcnXG4gICAgICAgICAgbGV0IGNvbnRlbnRQYXJ0ID0gJydcbiAgICAgICAgICBsZXQgZnVsbENvbnRlbnQgPSAnJ1xuICAgICAgICAgIGNvbnN0IHNvcnRDb250ZW50ID0gKCkgPT4gW2hlYWRpbmdQYXJ0LCB0YWdzUGFydCwgY29udGVudFBhcnRdIGFzIGNvbnN0XG4gICAgICAgICAgbGV0IHsgZnJvbnRtYXR0ZXIsIGNvbnRlbnQgfSA9IGVudlxuXG4gICAgICAgICAgaWYgKCFmcm9udG1hdHRlcilcbiAgICAgICAgICAgIHJldHVybiBodG1sXG5cbiAgICAgICAgICBpZiAoZnJvbnRtYXR0ZXIuc2VhcmNoID09PSBmYWxzZSlcbiAgICAgICAgICAgIHJldHVybiAnJ1xuXG4gICAgICAgICAgY29udGVudFBhcnQgPSBjb250ZW50IHx8PSBzcmNcblxuICAgICAgICAgIGNvbnN0IGhlYWRpbmdNYXRjaCA9IGNvbnRlbnQubWF0Y2goL14jIC4qL20pXG4gICAgICAgICAgY29uc3QgaGFzSGVhZGluZyA9ICEhKGhlYWRpbmdNYXRjaCAmJiBoZWFkaW5nTWF0Y2hbMF0gJiYgaGVhZGluZ01hdGNoLmluZGV4ICE9PSB1bmRlZmluZWQpXG5cbiAgICAgICAgICBpZiAoaGFzSGVhZGluZykge1xuICAgICAgICAgICAgY29uc3QgaGVhZGluZ0VuZCA9IGhlYWRpbmdNYXRjaC5pbmRleCEgKyBoZWFkaW5nTWF0Y2hbMF0ubGVuZ3RoXG4gICAgICAgICAgICBoZWFkaW5nUGFydCA9IGNvbnRlbnQuc2xpY2UoMCwgaGVhZGluZ0VuZClcbiAgICAgICAgICAgIGNvbnRlbnRQYXJ0ID0gY29udGVudC5zbGljZShoZWFkaW5nRW5kKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChmcm9udG1hdHRlci50aXRsZSkge1xuICAgICAgICAgICAgaGVhZGluZ1BhcnQgPSBgIyAke2Zyb250bWF0dGVyLnRpdGxlfWBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCB0YWdzID0gZnJvbnRtYXR0ZXIudGFnc1xuICAgICAgICAgIGlmICh0YWdzICYmIEFycmF5LmlzQXJyYXkodGFncykgJiYgdGFncy5sZW5ndGgpXG4gICAgICAgICAgICB0YWdzUGFydCA9IGBUYWdzOiAjJHt0YWdzLmpvaW4oJywgIycpfWBcblxuICAgICAgICAgIGZ1bGxDb250ZW50ID0gc29ydENvbnRlbnQoKS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuXFxuJylcblxuICAgICAgICAgIGh0bWwgPSBtZC5yZW5kZXIoZnVsbENvbnRlbnQsIGVudilcblxuICAgICAgICAgIHJldHVybiBodG1sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgbmF2OiBbXG4gICAgICB7IHRleHQ6ICdIb21lJywgbGluazogJy8nIH0sXG4gICAgICB7IHRleHQ6ICdOb3RlcycsIGxpbms6ICcvbm90ZXMvJyB9LFxuICAgICAgeyB0ZXh0OiAnQ2hhbmdlbG9nJywgbGluazogJy90b2MnIH0sXG4gICAgXSxcbiAgICBzaWRlYmFyOiBjYWxjdWxhdGVTaWRlYmFyKFtcbiAgICAgIHsgZm9sZGVyTmFtZTogJ25vdGVzJywgc2VwYXJhdGU6IHRydWUgfSxcbiAgICBdKSxcbiAgfSxcbiAgbWFya2Rvd246IHtcbiAgICB0aGVtZToge1xuICAgICAgbGlnaHQ6ICdnaXRodWItbGlnaHQnLFxuICAgICAgZGFyazogJ29uZS1kYXJrLXBybycsXG4gICAgfSxcbiAgICBicmVha3M6IHRydWUsXG4gICAgbWF0aDogdHJ1ZSxcbiAgICBjb25maWc6IChtZCkgPT4ge1xuICAgICAgbWQudXNlKE1hcmtkb3duSXRGb290bm90ZSlcbiAgICAgIG1kLnVzZShNYXJrZG93bkl0TWF0aGpheDMpXG4gICAgICBtZC51c2UoQmlEaXJlY3Rpb25hbExpbmtzKHtcbiAgICAgICAgZGlyOiBwcm9jZXNzLmN3ZCgpLFxuICAgICAgfSkpXG4gICAgICBtZC51c2UoVW5sYXp5SW1hZ2VzKCksIHtcbiAgICAgICAgaW1nRWxlbWVudFRhZzogJ05vbGViYXNlVW5sYXp5SW1nJyxcbiAgICAgIH0pXG4gICAgICBtZC51c2UoSW5saW5lTGlua1ByZXZpZXdFbGVtZW50VHJhbnNmb3JtKVxuICAgIH0sXG4gIH0sXG4gIGFzeW5jIHRyYW5zZm9ybUhlYWQoY29udGV4dCkge1xuICAgIGxldCBoZWFkID0gWy4uLmNvbnRleHQuaGVhZF1cblxuICAgIGNvbnN0IHJldHVybmVkSGVhZCA9IGF3YWl0IHRyYW5zZm9ybUhlYWRNZXRhKCkoaGVhZCwgY29udGV4dClcbiAgICBpZiAodHlwZW9mIHJldHVybmVkSGVhZCAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICBoZWFkID0gcmV0dXJuZWRIZWFkXG5cbiAgICByZXR1cm4gaGVhZFxuICB9LFxuICBhc3luYyB0cmFuc2Zvcm1QYWdlRGF0YShwYWdlRGF0YSwgY29udGV4dCkge1xuICAgIGdlbmVyYXRlQnJlYWRjcnVtYnNEYXRhKHBhZ2VEYXRhLCBjb250ZXh0KVxuICB9LFxuICAvLyBhc3luYyBidWlsZEVuZChzaXRlQ29uZmlnKSB7XG4gIC8vICAgYXdhaXQgYnVpbGRFbmRHZW5lcmF0ZU9wZW5HcmFwaEltYWdlcyh7XG4gIC8vICAgICBiYXNlVXJsOiB0YXJnZXREb21haW4sXG4gIC8vICAgICBjYXRlZ29yeToge1xuICAvLyAgICAgICBieUxldmVsOiAyLFxuICAvLyAgICAgfSxcbiAgLy8gICB9KShzaXRlQ29uZmlnKVxuICAvLyB9LFxufSlcblxuZXhwb3J0IGRlZmF1bHQgd2l0aE1lcm1haWQoY29uZmlnKVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS93ZWF0aGVyY29sZC9zcmMvU3R1ZHlOb3Rlcy9zY3JpcHRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS93ZWF0aGVyY29sZC9zcmMvU3R1ZHlOb3Rlcy9zY3JpcHRzL3V0aWxzLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3dlYXRoZXJjb2xkL3NyYy9TdHVkeU5vdGVzL3NjcmlwdHMvdXRpbHMudHNcIjtleHBvcnQgY29uc3QgZ2V0QXZhdGFyVXJsQnlHaXRodWJOYW1lID0gKG5hbWU6IHN0cmluZykgPT4gYGh0dHBzOi8vZ2l0aHViLmNvbS8ke25hbWV9LnBuZ2BcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvd2VhdGhlcmNvbGQvc3JjL1N0dWR5Tm90ZXMvLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvd2VhdGhlcmNvbGQvc3JjL1N0dWR5Tm90ZXMvLnZpdGVwcmVzcy9tZXRhZGF0YS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS93ZWF0aGVyY29sZC9zcmMvU3R1ZHlOb3Rlcy8udml0ZXByZXNzL21ldGFkYXRhLnRzXCI7aW1wb3J0IHR5cGUgeyBDcmVhdG9yIH0gZnJvbSAnLi4vc2NyaXB0cy90eXBlcy9tZXRhZGF0YSdcbmltcG9ydCB7IGdldEF2YXRhclVybEJ5R2l0aHViTmFtZSB9IGZyb20gJy4uL3NjcmlwdHMvdXRpbHMnXG5cbi8qKiBcdTY1ODdcdTY3MkMgKi9cbmV4cG9ydCBjb25zdCBzaXRlTmFtZSA9ICdIaWZ1bWlcXCdzIFN0dWR5IE5vdGVzJ1xuZXhwb3J0IGNvbnN0IHNpdGVTaG9ydE5hbWUgPSAnU3R1ZHkgTm90ZXMnXG5leHBvcnQgY29uc3Qgc2l0ZURlc2NyaXB0aW9uID0gJ015IHBlcnNvbmFsIGtub3dsZWRnZSBiYXNlJ1xuXG4vKiogXHU2NTg3XHU2ODYzXHU2MjQwXHU1NzI4XHU3NkVFXHU1RjU1ICovXG5leHBvcnQgY29uc3QgaW5jbHVkZSA9IFtdXG5cbi8qKiBSZXBvICovXG5leHBvcnQgY29uc3QgZ2l0aHViUmVwb0xpbmsgPSAnaHR0cHM6Ly9naXRodWIuY29tL01ha2UtVXBXb3JrQ2x1Yi9TdHVkeU5vdGVzJ1xuLyoqIERpc2NvcmQgKi9cbmV4cG9ydCBjb25zdCBkaXNjb3JkTGluayA9ICcnXG5cbi8qKiBcdTY1RTBcdTUzNEZcdThCQUVcdTUyNERcdTdGMDBcdTU3REZcdTU0MEQgKi9cbmV4cG9ydCBjb25zdCBwbGFpblRhcmdldERvbWFpbiA9ICdtYWtlLXVwd29ya2NsdWIuZ2l0aHViLmlvL1N0dWR5Tm90ZXMnXG4vKiogXHU1QjhDXHU2NTc0XHU1N0RGXHU1NDBEICovXG5leHBvcnQgY29uc3QgdGFyZ2V0RG9tYWluID0gYGh0dHBzOi8vJHtwbGFpblRhcmdldERvbWFpbn1gXG5cbi8qKiBcdTUyMUJcdTRGNUNcdTgwMDUgKi9cbmV4cG9ydCBjb25zdCBjcmVhdG9yczogQ3JlYXRvcltdID0gW1xuICB7XG4gICAgbmFtZTogJ0FqaXRhbmkgSGlmdW1pJyxcbiAgICBhdmF0YXI6ICcnLFxuICAgIHVzZXJuYW1lOiAnUGVyb3Jvcm9yb3JvJyxcbiAgICB0aXRsZTogJ0NsdWIgUHJlc2lkZW50JyxcbiAgICBkZXNjOiAnQWhhaGEuLi4gTmljZSB0byBtZWV0IHlvdS4nLFxuICAgIGxpbmtzOiBbXG4gICAgICB7IHR5cGU6ICdnaXRodWInLCBpY29uOiAnZ2l0aHViJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9QZXJvcm9yb3Jvcm8nIH0sXG4gICAgXSxcbiAgICBuYW1lQWxpYXNlczogWydIaWZ1bWknLCAnSGlmdW1pbicsICdGYXVzdCddLFxuICAgIGVtYWlsQWxpYXNlczogWydwZXJvcm9yb0Bwcm90b24ubWUnXSxcbiAgfSxcbl0ubWFwPENyZWF0b3I+KChjKSA9PiB7XG4gIGMuYXZhdGFyID0gYy5hdmF0YXIgfHwgZ2V0QXZhdGFyVXJsQnlHaXRodWJOYW1lKGMudXNlcm5hbWUpXG4gIHJldHVybiBjIGFzIENyZWF0b3Jcbn0pXG5cbmV4cG9ydCBjb25zdCBjcmVhdG9yTmFtZXMgPSBjcmVhdG9ycy5tYXAoYyA9PiBjLm5hbWUpXG5leHBvcnQgY29uc3QgY3JlYXRvclVzZXJuYW1lcyA9IGNyZWF0b3JzLm1hcChjID0+IGMudXNlcm5hbWUgfHwgJycpXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlTLE9BQU8sYUFBYTtBQUM3VCxTQUFTLDBCQUEwQjtBQUNuQyxTQUFTLG9CQUFvQjtBQUM3QixTQUFTLCtCQUErQjtBQUN4QyxTQUFTLHlDQUF5QztBQUVsRCxTQUFTLHlCQUF5QjtBQUNsQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLG1CQUFtQjtBQUU1QixPQUFPLHdCQUF3QjtBQUMvQixPQUFPLHdCQUF3QjtBQUMvQixTQUFTLG9CQUFvQjs7O0FDWndRLElBQU0sMkJBQTJCLENBQUMsU0FBaUIsc0JBQXNCLElBQUk7OztBQ0kzVyxJQUFNLFdBQVc7QUFFakIsSUFBTSxrQkFBa0I7QUFNeEIsSUFBTSxpQkFBaUI7QUFLdkIsSUFBTSxvQkFBb0I7QUFFMUIsSUFBTSxlQUFlLFdBQVcsaUJBQWlCO0FBR2pELElBQU0sV0FBc0I7QUFBQSxFQUNqQztBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsRUFBRSxNQUFNLFVBQVUsTUFBTSxVQUFVLE1BQU0sa0NBQWtDO0FBQUEsSUFDNUU7QUFBQSxJQUNBLGFBQWEsQ0FBQyxVQUFVLFdBQVcsT0FBTztBQUFBLElBQzFDLGNBQWMsQ0FBQyxvQkFBb0I7QUFBQSxFQUNyQztBQUNGLEVBQUUsSUFBYSxDQUFDLE1BQU07QUFDcEIsSUFBRSxTQUFTLEVBQUUsVUFBVSx5QkFBeUIsRUFBRSxRQUFRO0FBQzFELFNBQU87QUFDVCxDQUFDO0FBRU0sSUFBTSxlQUFlLFNBQVMsSUFBSSxPQUFLLEVBQUUsSUFBSTtBQUM3QyxJQUFNLG1CQUFtQixTQUFTLElBQUksT0FBSyxFQUFFLFlBQVksRUFBRTs7O0FGekJsRSxJQUFNLFNBQVMsYUFBYTtBQUFBLEVBQzFCLEtBQUs7QUFBQSxJQUNILFVBQVU7QUFBQSxNQUNSLG9CQUFvQjtBQUFBLFFBQ2xCLE9BQU8sQ0FBQyxPQUFPLFFBQVE7QUFBQSxRQUN2QixRQUFRLENBQUMsS0FBSztBQUFBLFFBQ2QsS0FBSyxDQUFDLEtBQUs7QUFBQSxRQUNYLE9BQU8sQ0FBQyxjQUFjLE1BQU07QUFBQSxRQUM1QixLQUFLLENBQUMsY0FBYyxNQUFNO0FBQUEsUUFDMUIsbUJBQW1CLENBQUMsS0FBSztBQUFBLE1BQzNCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLE1BQU07QUFBQSxFQUNOLFdBQVc7QUFBQSxFQUNYLFlBQVksQ0FBQyxnQkFBZ0IsZ0JBQWdCO0FBQUEsRUFDN0MsaUJBQWlCO0FBQUEsRUFDakIsTUFBTTtBQUFBLElBQ0osQ0FBQyxRQUFRO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsSUFDWCxDQUFDO0FBQUEsSUFDRDtBQUFBLE1BQ0U7QUFBQSxNQUNBO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFBQSxJQUNBLENBQUMsUUFBUTtBQUFBLE1BQ1AsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1IsQ0FBQztBQUFBLElBQ0Q7QUFBQSxNQUNFO0FBQUEsTUFDQTtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGO0FBQUEsSUFDQSxDQUFDLFFBQVE7QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFNBQVMsYUFBYSxLQUFLLElBQUk7QUFBQSxJQUNqQyxDQUFDO0FBQUEsSUFDRDtBQUFBLE1BQ0U7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixTQUNFLENBQUMsWUFBWSxrQkFBa0IsYUFBYSxZQUFZLFlBQVksU0FBUyxHQUFHLGdCQUFnQixFQUFFLEtBQUssSUFBSTtBQUFBLE1BQy9HO0FBQUEsSUFDRjtBQUFBLElBRUEsQ0FBQyxRQUFRO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixTQUFTO0FBQUEsSUFDWCxDQUFDO0FBQUEsSUFDRDtBQUFBLE1BQ0U7QUFBQSxNQUNBO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixTQUFTLEdBQUcsWUFBWTtBQUFBLE1BQzFCO0FBQUEsSUFDRjtBQUFBLElBQ0EsQ0FBQyxRQUFRO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixTQUFTO0FBQUEsSUFDWCxDQUFDO0FBQUEsSUFDRCxDQUFDLFFBQVE7QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxJQUNYLENBQUM7QUFBQSxJQUVELENBQUMsUUFBUTtBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ1gsQ0FBQztBQUFBLElBQ0QsQ0FBQyxRQUFRO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixTQUFTLGlCQUFpQixLQUFLLElBQUk7QUFBQSxJQUNyQyxDQUFDO0FBQUEsSUFDRDtBQUFBLE1BQ0U7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixTQUFTLEdBQUcsWUFBWTtBQUFBLE1BQzFCO0FBQUEsSUFDRjtBQUFBLElBRUE7QUFBQSxNQUNFO0FBQUEsTUFDQTtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGO0FBQUEsSUFDQSxDQUFDLFFBQVE7QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxJQUNSLENBQUM7QUFBQSxJQUNELENBQUMsUUFBUTtBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ1gsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLGFBQWE7QUFBQSxJQUNYLFNBQVMsRUFBRSxPQUFPLFdBQVcsT0FBTyxPQUFPO0FBQUEsSUFDM0MscUJBQXFCO0FBQUEsSUFDckIsVUFBVTtBQUFBLE1BQ1IsU0FBUyxHQUFHLGNBQWM7QUFBQSxNQUMxQixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsYUFBYTtBQUFBLE1BQ1gsRUFBRSxNQUFNLFVBQVUsTUFBTSxlQUFlO0FBQUEsSUFDekM7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFdBQ0U7QUFBQSxJQUNKO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTO0FBQUEsUUFDUCxTQUFTO0FBQUEsVUFDUCxNQUFNO0FBQUEsWUFDSixjQUFjO0FBQUEsY0FDWixRQUFRO0FBQUEsZ0JBQ04sWUFBWTtBQUFBLGdCQUNaLGlCQUFpQjtBQUFBLGNBQ25CO0FBQUEsY0FDQSxPQUFPO0FBQUEsZ0JBQ0wsZUFBZTtBQUFBLGdCQUNmLGtCQUFrQjtBQUFBLGdCQUNsQixRQUFRO0FBQUEsa0JBQ04sWUFBWTtBQUFBLGtCQUNaLGNBQWM7QUFBQSxnQkFDaEI7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUE7QUFBQTtBQUFBLFFBSUEsUUFBUSxLQUFLLEtBQUssSUFBSTtBQUVwQixjQUFJLE9BQU8sR0FBRyxPQUFPLEtBQUssR0FBRztBQUM3QixjQUFJLFdBQVc7QUFDZixjQUFJLGNBQWM7QUFDbEIsY0FBSSxjQUFjO0FBQ2xCLGNBQUksY0FBYztBQUNsQixnQkFBTSxjQUFjLE1BQU0sQ0FBQyxhQUFhLFVBQVUsV0FBVztBQUM3RCxjQUFJLEVBQUUsYUFBYSxRQUFRLElBQUk7QUFFL0IsY0FBSSxDQUFDO0FBQ0gsbUJBQU87QUFFVCxjQUFJLFlBQVksV0FBVztBQUN6QixtQkFBTztBQUVULHdCQUFjLFlBQVk7QUFFMUIsZ0JBQU0sZUFBZSxRQUFRLE1BQU0sUUFBUTtBQUMzQyxnQkFBTSxhQUFhLENBQUMsRUFBRSxnQkFBZ0IsYUFBYSxDQUFDLEtBQUssYUFBYSxVQUFVO0FBRWhGLGNBQUksWUFBWTtBQUNkLGtCQUFNLGFBQWEsYUFBYSxRQUFTLGFBQWEsQ0FBQyxFQUFFO0FBQ3pELDBCQUFjLFFBQVEsTUFBTSxHQUFHLFVBQVU7QUFDekMsMEJBQWMsUUFBUSxNQUFNLFVBQVU7QUFBQSxVQUN4QyxXQUNTLFlBQVksT0FBTztBQUMxQiwwQkFBYyxLQUFLLFlBQVksS0FBSztBQUFBLFVBQ3RDO0FBRUEsZ0JBQU0sT0FBTyxZQUFZO0FBQ3pCLGNBQUksUUFBUSxNQUFNLFFBQVEsSUFBSSxLQUFLLEtBQUs7QUFDdEMsdUJBQVcsVUFBVSxLQUFLLEtBQUssS0FBSyxDQUFDO0FBRXZDLHdCQUFjLFlBQVksRUFBRSxPQUFPLE9BQU8sRUFBRSxLQUFLLE1BQU07QUFFdkQsaUJBQU8sR0FBRyxPQUFPLGFBQWEsR0FBRztBQUVqQyxpQkFBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gsRUFBRSxNQUFNLFFBQVEsTUFBTSxJQUFJO0FBQUEsTUFDMUIsRUFBRSxNQUFNLFNBQVMsTUFBTSxVQUFVO0FBQUEsTUFDakMsRUFBRSxNQUFNLGFBQWEsTUFBTSxPQUFPO0FBQUEsSUFDcEM7QUFBQSxJQUNBLFNBQVMsaUJBQWlCO0FBQUEsTUFDeEIsRUFBRSxZQUFZLFNBQVMsVUFBVSxLQUFLO0FBQUEsSUFDeEMsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNSLE9BQU87QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxRQUFRO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixRQUFRLENBQUMsT0FBTztBQUNkLFNBQUcsSUFBSSxrQkFBa0I7QUFDekIsU0FBRyxJQUFJLGtCQUFrQjtBQUN6QixTQUFHLElBQUksbUJBQW1CO0FBQUEsUUFDeEIsS0FBSyxRQUFRLElBQUk7QUFBQSxNQUNuQixDQUFDLENBQUM7QUFDRixTQUFHLElBQUksYUFBYSxHQUFHO0FBQUEsUUFDckIsZUFBZTtBQUFBLE1BQ2pCLENBQUM7QUFDRCxTQUFHLElBQUksaUNBQWlDO0FBQUEsSUFDMUM7QUFBQSxFQUNGO0FBQUEsRUFDQSxNQUFNLGNBQWMsU0FBUztBQUMzQixRQUFJLE9BQU8sQ0FBQyxHQUFHLFFBQVEsSUFBSTtBQUUzQixVQUFNLGVBQWUsTUFBTSxrQkFBa0IsRUFBRSxNQUFNLE9BQU87QUFDNUQsUUFBSSxPQUFPLGlCQUFpQjtBQUMxQixhQUFPO0FBRVQsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLE1BQU0sa0JBQWtCLFVBQVUsU0FBUztBQUN6Qyw0QkFBd0IsVUFBVSxPQUFPO0FBQUEsRUFDM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0YsQ0FBQztBQUVELElBQU8saUJBQVEsWUFBWSxNQUFNOyIsCiAgIm5hbWVzIjogW10KfQo=
