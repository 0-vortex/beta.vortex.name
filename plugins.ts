import date, { Options as DateOptions } from "lume/plugins/date.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import typography from "npm:@tailwindcss/typography"
import postcss from "lume/plugins/postcss.ts";
import terser from "lume/plugins/terser.ts";
import prism, { Options as PrismOptions } from "lume/plugins/prism.ts";
import basePath from "lume/plugins/base_path.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import metas from "lume/plugins/metas.ts";
import pagefind, { Options as PagefindOptions } from "lume/plugins/pagefind.ts";
import sitemap from "lume/plugins/sitemap.ts";
import feed, { Options as FeedOptions } from "lume/plugins/feed.ts";
import readingInfo from "lume/plugins/reading_info.ts";
import { merge } from "lume/core/utils/object.ts";
import toc from "https://deno.land/x/lume_markdown_plugins@v0.8.0/toc.ts";
import image from "https://deno.land/x/lume_markdown_plugins@v0.8.0/image.ts";
import footnotes from "https://deno.land/x/lume_markdown_plugins@v0.8.0/footnotes.ts";
import { alert } from "npm:@mdit/plugin-alert@0.14.0";
import inline from "lume/plugins/inline.ts";
import jsonLd from "lume/plugins/json_ld.ts";
import favicon from "lume/plugins/favicon.ts";
import sri from "lume/plugins/sri.ts";
import sourceMaps from "lume/plugins/source_maps.ts";
import picture from "lume/plugins/picture.ts";
import transformImages from "lume/plugins/transform_images.ts";
import checkUrls from "lume/plugins/check_urls.ts";
import googleFonts from "lume/plugins/google_fonts.ts";

import "lume/types.ts";

export interface Options {
  prism?: Partial<PrismOptions>;
  date?: Partial<DateOptions>;
  pagefind?: Partial<PagefindOptions>;
  feed?: Partial<FeedOptions>;
}

export const defaults: Options = {
  feed: {
    output: ["/feed.rss", "/feed.json"],
    query: "type=post",
    sort: "date=desc",
    info: {
      title: "=metas.site",
      description: "=metas.description",
    },
    items: {
      title: "=title",
    },
  },
};

/** Configure the site */
export default function (userOptions?: Options) {
  const options = merge(defaults, userOptions);

  return (site: Lume.Site) => {
    site
      .use(tailwindcss({
        options: {
          plugins: [typography],
          darkMode: 'class',
          theme: {
            extend: {
              colors: {
                background: '#eeeee2',
                backgroundDark: '#14181f',
                inset: '#222222',
                insetDark: '#0fc2c0',
                primary: '#14181f',
                primaryDark: '#008f8c',
                secondary: '#023535',
                secondaryDark: '#0fc2c0',
              },
              keyframes: {
                'fade-slide-left': {
                  '0%': {
                    opacity: 0,
                    transform: 'translate(28px, 15px)'
                  },
                  '50%': {
                    opacity: 0,
                    transform: 'translate(28px, 15px)'
                  },
                  '100%': {
                    opacity: 1,
                    transform: 'translate(0, 0)'
                  }
                },
                'text-slide-2': {
                  '0%, 40%': {
                    transform: 'translateY(0%)',
                  },
                  '50%, 90%': {
                    transform: 'translateY(-33.33%)',
                  },
                  '100%': {
                    transform: 'translateY(-66.66%)',
                  },
                },
                'text-slide-3': {
                  '0%, 26.66%': {
                    transform: 'translateY(0%)',
                  },
                  '33.33%, 60%': {
                    transform: 'translateY(-25%)',
                  },
                  '66.66%, 93.33%': {
                    transform: 'translateY(-50%)',
                  },
                  '100%': {
                    transform: 'translateY(-75%)',
                  },
                },
                'text-slide-4': {
                  '0%, 20%': {
                    transform: 'translateY(0%)',
                  },
                  '25%, 45%': {
                    transform: 'translateY(-20%)',
                  },
                  '50%, 70%': {
                    transform: 'translateY(-40%)',
                  },
                  '75%, 95%': {
                    transform: 'translateY(-60%)',
                  },
                  '100%': {
                    transform: 'translateY(-80%)',
                  },
                },
                'text-slide-5': {
                  '0%, 16%': {
                    transform: 'translateY(0%)',
                  },
                  '20%, 36%': {
                    transform: 'translateY(-16.66%)',
                  },
                  '40%, 56%': {
                    transform: 'translateY(-33.33%)',
                  },
                  '60%, 76%': {
                    transform: 'translateY(-50%)',
                  },
                  '80%, 96%': {
                    transform: 'translateY(-66.66%)',
                  },
                  '100%': {
                    transform: 'translateY(-83.33%)',
                  },
                },
                'text-slide-6': {
                  '0%, 13.33%': {
                    transform: 'translateY(0%)',
                  },
                  '16.66%, 30%': {
                    transform: 'translateY(-14.28%)',
                  },
                  '33.33%, 46.66%': {
                    transform: 'translateY(-28.57%)',
                  },
                  '50%, 63.33%': {
                    transform: 'translateY(-42.85%)',
                  },
                  '66.66%, 80%': {
                    transform: 'translateY(-57.14%)',
                  },
                  '83.33%, 96.66%': {
                    transform: 'translateY(-71.42%)',
                  },
                  '100%': {
                    transform: 'translateY(-85.71%)',
                  },
                },
                'text-slide-7': {
                  '0%, 11.43%': {
                    transform: 'translateY(0%)',
                  },
                  '14.28%, 25.71%': {
                    transform: 'translateY(-12.5%)',
                  },
                  '28.57%, 40%': {
                    transform: 'translateY(-25%)',
                  },
                  '42.85%, 54.28%': {
                    transform: 'translateY(-37.5%)',
                  },
                  '57.14%, 68.57%': {
                    transform: 'translateY(-50%)',
                  },
                  '71.42%, 82.85%': {
                    transform: 'translateY(-62.5%)',
                  },
                  '85.71%, 97.14%': {
                    transform: 'translateY(-75%)',
                  },
                  '100%': {
                    transform: 'translateY(-87.5%)',
                  },
                },
                'text-slide-8': {
                  '0%, 10%': {
                    transform: 'translateY(0%)',
                  },
                  '12.5%, 22.5%': {
                    transform: 'translateY(-11.11%)',
                  },
                  '25%, 35%': {
                    transform: 'translateY(-22.22%)',
                  },
                  '37.5%, 47.5%': {
                    transform: 'translateY(-33.33%)',
                  },
                  '50%, 60%': {
                    transform: 'translateY(-44.44%)',
                  },
                  '62.5%, 72.5%': {
                    transform: 'translateY(-55.55%)',
                  },
                  '75%, 85%': {
                    transform: 'translateY(-66.66%)',
                  },
                  '87.5%, 97.5%': {
                    transform: 'translateY(-77.77%)',
                  },
                  '100%': {
                    transform: 'translateY(-88.88%)',
                  },
                }
              },
              animation: {
                'fade-slide-left': 'fade-slide-left 0.5s ease-in-out',
                'text-slide-2': 'text-slide-2 5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
                'text-slide-3': 'text-slide-3 7.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
                'text-slide-4': 'text-slide-4 10s cubic-bezier(0.83, 0, 0.17, 1) infinite',
                'text-slide-5': 'text-slide-5 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
                'text-slide-6': 'text-slide-6 15s cubic-bezier(0.83, 0, 0.17, 1) infinite',
                'text-slide-7': 'text-slide-7 17.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
                'text-slide-8': 'text-slide-8 20s cubic-bezier(0.83, 0, 0.17, 1) infinite',
              }
            },
            fontFamily: {
              sans: ["Space Grotesk", "sans-serif"],
              serif: ["Roboto Slab", "serif"],
              mono: ["JetBrains Mono", "monospace"],
            },
          },
        },
      }))
      .use(postcss())
      .use(basePath())
      .use(toc())
      .use(prism(options.prism))
      .use(readingInfo({ wordsPerMinute: 183 }))
      .use(date(options.date))
      .use(metas())
      .use(image())
      .use(footnotes())
      .use(resolveUrls())
      .use(slugifyUrls())
      .use(terser())
      .use(pagefind(options.pagefind))
      .use(sitemap())
      .use(feed(options.feed))
      .use(inline())
      .use(jsonLd())
      .use(favicon())
      .use(sri())
      .use(sourceMaps({ inline: false, sourceContent: false }))
      .use(picture())
      .use(transformImages())
      .use(checkUrls())
      .use(googleFonts({
        subsets: [
          "latin",
          "latin-ext",
        ],
        cssFile: "styles.css",
        placeholder: "/* lume-google-fonts-here */",
        fonts: {
          "Space Grotesk": "https://fonts.google.com/share?selection.family=Space+Grotesk:wght@300..700",
          "JetBrains Mono": "https://fonts.google.com/share?selection.family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap",
          "Roboto Slab": "https://fonts.google.com/share?selection.family=Roboto+Slab:wght@400",
        }
      }))
      .copy("fonts")
      .copy("js")
      .copy("favicon.svg")
      .copy("uploads")
      .mergeKey("extra_head", "stringArray")
      .preprocess([".md"], (pages) => {
        for (const page of pages) {
          page.data.excerpt ??= (page.data.content as string).split(
            /<!--\s*more\s*-->/i,
          )[0];
        }
      });

    // Alert plugin
    site.hooks.addMarkdownItPlugin(alert);

    // Mastodon comment system
    site.remoteFile(
      "/js/comments.js",
      "https://cdn.jsdelivr.net/npm/@oom/mastodon-comments@0.3.2/src/comments.js",
    );
  };
}
