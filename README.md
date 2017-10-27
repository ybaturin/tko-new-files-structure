Итого, структура будет похожа на эту:

```
.
+-- configs
¦   +-- private.ts
¦   L-- tslint-rules
¦       +-- noDebugCommentRule.js
¦       L-- noDebugCommentRule.ts
+-- deploy.sh
+-- docs
+-- node_modules
+-- package.json
+-- package-lock.json
+-- src
¦   +-- app
¦   ¦   +-- app.js
¦   ¦   +-- backend
¦   ¦   ¦   L-- README.md
¦   ¦   +-- const.ts
¦   ¦   +-- core
¦   ¦   ¦   +-- base.ts
¦   ¦   ¦   L-- urls.ts
¦   ¦   +-- index.html
¦   ¦   +-- pages
¦   ¦   ¦   +-- linear
¦   ¦   ¦   ¦   +-- linear.page.html
¦   ¦   ¦   ¦   +-- linear.page.scss
¦   ¦   ¦   ¦   +-- linear.page.ts
¦   ¦   ¦   ¦   L-- verification-requests
¦   ¦   ¦   ¦       +-- verification-requests.page.html
¦   ¦   ¦   ¦       +-- verification-requests.page.scss
¦   ¦   ¦   ¦       L-- verification-requests.page.ts
¦   ¦   ¦   L-- README.md
¦   ¦   +-- README.md
¦   ¦   +-- routes.ts
¦   ¦   +-- shared
¦   ¦   ¦   +-- components
¦   ¦   ¦   ¦   +-- cards
¦   ¦   ¦   ¦   +-- README.md
¦   ¦   ¦   ¦   L-- some-feature-block
¦   ¦   ¦   ¦       +-- child-component
¦   ¦   ¦   ¦       ¦   +-- child-component.component.html
¦   ¦   ¦   ¦       ¦   +-- child-component.component.scss
¦   ¦   ¦   ¦       ¦   L-- child-component.component.ts
¦   ¦   ¦   ¦       +-- some-feature-block.component.html
¦   ¦   ¦   ¦       +-- some-feature-block.component.scss
¦   ¦   ¦   ¦       L-- some-feature-block.component.ts
¦   ¦   ¦   +-- filters
¦   ¦   ¦   +-- interfaces
¦   ¦   ¦   +-- mixins
¦   ¦   ¦   L-- services
¦   ¦   ¦       +-- map-drawers
¦   ¦   ¦       L-- some-service
¦   ¦   ¦           L-- some-service.service.ts
¦   ¦   L-- vendor.ts
¦   +-- assets
¦   ¦   +-- cades_pluging
¦   ¦   ¦   L-- cadesplugin_api.js
¦   ¦   +-- global.scss
¦   ¦   +-- img
¦   ¦   ¦   L-- pins
¦   ¦   L-- README.md
¦   L-- styles
¦       L-- README.md
+-- tree.txt
+-- tsconfig.json
+-- tslint.json
L-- webpack.config.js
