import lume from "lume/mod.ts";
import blog from "blog/mod.ts";

import inline from "lume/plugins/inline.ts";
import jsonLd from "lume/plugins/json_ld.ts";
import favicon from "lume/plugins/favicon.ts";
import sri from "lume/plugins/sri.ts";

const site = lume();

// https://lume.land/plugins/inline/
site.use(inline());
// https://lume.land/plugins/json_ld/
site.use(jsonLd());
// https://lume.land/plugins/favicon/
site.use(favicon());
// https://lume.land/plugins/sri/
site.use(sri());

site.use(blog());

export default site;
