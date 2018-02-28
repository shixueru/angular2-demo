"use strict";
//变化检测
require('zone.js');
require('core-js/es6/reflect');
require('core-js/es7/reflect');
// JiT启动模式
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app/app.module');
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map