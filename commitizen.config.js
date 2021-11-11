const custom = require("@digitalroute/cz-conventional-changelog-for-jira/configurable");
// You can do this optionally if you want to extend the commit types
const defaultTypes = require("@digitalroute/cz-conventional-changelog-for-jira/types");

module.exports = custom({
  types: {
    ...defaultTypes,
    improvement: {
      description:
        "Change that does not introduce new functionality but is an addition to existing, for example PullRequest changes",
      title: "Improvement",
    },
  },
  skipScope: false,
  scopes: [
    "#auth",
    "#home",
    "#ci",
    "#configuration",
    "#core",
    "#styles",
    "#other",
  ],
});
