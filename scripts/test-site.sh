#!/usr/bin/env bash
# Run htmlproofer on _site with the project's canonical ignore list:
#  - skip externals (slow + flaky on CI)
#  - skip recipient-less `mailto:?subject=...` share links (valid pattern,
#    but htmlproofer flags them because there's no @-address)
#  - skip localhost/loopback URLs that may appear in dev artefacts
#
# Usage: bundle exec scripts/test-site.sh
set -euo pipefail

cd "$(dirname "$0")/.."

bundle exec htmlproofer ./_site \
  --disable-external \
  --ignore-urls "/^mailto:\?/,/^http:\/\/127\.0\.0\.1/,/^http:\/\/0\.0\.0\.0/,/^http:\/\/localhost/"
