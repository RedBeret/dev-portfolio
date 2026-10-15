# Dependency maintenance

The publishing command remains `npm run deploy` (`gh-pages -d build`). `gh-pages` is pinned to 6.1.1 because its compatible publishing interface avoids the `braces` dependency currently flagged through the 6.3.0 dependency tree. The source-map-js resolution is also refreshed to a patched version. No audit exceptions or force fixes are used.

Validation for this change: clean install with lifecycle scripts disabled, production build, zero npm audit findings, and publication of all 26 built files to an isolated local bare Git repository. The published index.html matched the built file byte-for-byte. This validation did not deploy to GitHub.

The older publishing dependency tree emits deprecation notices for glob and inflight. Re-evaluate the pin when a suitable newer publisher is available, retaining the build, audit and publishing checks before upgrading.
