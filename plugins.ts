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
          theme: {
            extend: {
              colors: {
                background: '#14181f',
                primary: '#14181f',
                secondary: '#023535',
                primaryDark: '#008f8c',
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
                }
              },
              animation: {
                'fade-slide-left': 'fade-slide-left 0.5s ease-in-out'
              }
            },
            fontFamily: {
              sans: ["Graphik", "sans-serif"],
              serif: ["Merriweather", "serif"],
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
