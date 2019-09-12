# xcli-plugin-template

[XCLI] Front-end automation build tool integration

Template for the XCLI plugin development series

base on **abcx(1.0)**

### How to development

The template will add all the implementation files by default, they are:

```shell
create.js     # Implement for (xcli create) command
devServer.js  # Implement for (xcli dev) command
build.js      # Implement for (xcli build) command
publish.js    # Implement for (xcli publish) command
```

**If your extension does not need to implement certain commands, such as ``publish``, you need to manually delete the corresponding implementation file.**


### abcx.json

**``abcx.json`` is used to extend the field to the ``xcli`` reverse implementation. ``xcli`` has recognized the unique identifier of the current plugin. If ``abcx.json`` is deleted, this plugin will not be used by ``xcli``.**
