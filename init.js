
// Extra context
//   - context.projectName
//   - context.projectRoot -> context.utils.paths.currentPath
//
const demo2 = function(context, args) {
  const { std } = context.utils;
  std.warn("implement [xcli init]");
};

module.exports = {
  "[XPT] TEMPLATE DEMO": {
    "[XPT] DEMO1": "DemonCloud/xcli-plugin-template",
    "[XPT] DEMO2": demo2
  }
};
