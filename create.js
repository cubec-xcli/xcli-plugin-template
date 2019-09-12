
// Extra context
//   - context.projectName
//   - context.projectRoot -> context.utils.paths.currentPath
//   - context.createPath
//
const demo2 = function(context, args) {
  const { std } = context.utils;
  std.warn("implement [xcli init]");
};

module.exports = {
  "[XPT] TEMPLATE DEMO": {
    "[XPT] INIT DEMO1": "DemonCloud/xcli-plugin-template",
    "[XPT] INIT DEMO2": demo2
  }
};
