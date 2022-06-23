!function(o){function e(s){if(t[s])return t[s].exports;var a=t[s]={exports:{},id:s,loaded:!1};return o[s].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var t={};return e.m=o,e.c=t,e.p="",e(0)}([function(o,e,t){window.Settings={el:"#settings",data:function(){return window.$settings},ready:function(){UIkit.tab(this.$els.tab,{connect:this.$els.content})},computed:{sections:function(){var o=[];return _.forIn(this.$options.components,function(e,t){var s=e.options||{},a=s.section;a&&(a.name=t,o.push(a))}),o}},methods:{save:function(){this.$broadcast("save",this.$data),this.$resource("admin/system/settings/save").save({config:this.config,options:this.options}).then(function(){this.$notify("Settings saved.")},function(o){this.$notify(o.data,"danger")})}},components:{locale:t(5),system:t(6)}},Vue.ready(window.Settings)},function(o,e){"use strict";o.exports={section:{label:"Localization",icon:"pk-icon-large-pin",priority:20},props:["config","options"],data:function(){return{locales:window.$system.locales}},computed:{link:function(){return'<a href="https://www.transifex.com/pagekit/pagekit-cms/">Transifex</a>'},option:function(){return this.$root.$get("options.system")}}}},function(o,e){"use strict";o.exports={section:{label:"System",icon:"pk-icon-large-settings",priority:10},props:["config","options"],data:function(){return window.$system}}},function(o,e){o.exports=" <div class=\"uk-margin uk-flex uk-flex-space-between uk-flex-wrap\" data-uk-margin> <div data-uk-margin> <h2 class=uk-margin-remove>{{ 'Localization' | trans }}</h2> </div> <div data-uk-margin> <button class=\"uk-button uk-button-primary\" type=submit>{{ 'Save' | trans }}</button> </div> </div> <div class=uk-form-row> <label for=form-sitelocale class=uk-form-label>{{ 'Site Locale' | trans }}</label> <div class=uk-form-controls> <select id=form-sitelocale class=uk-form-width-large v-model=option.site.locale> <option v-for=\"lang in locales\" :value=$key>{{ lang }}</option> </select> </div> </div> <div class=uk-form-row> <label for=form-adminlocale class=uk-form-label>{{ 'Admin Locale' | trans }}</label> <div class=uk-form-controls> <select id=form-adminlocale class=uk-form-width-large v-model=option.admin.locale> <option v-for=\"lang in locales\" :value=$key>{{ lang }}</option> </select> </div> </div> <p>{{{ 'Is your language not available? Please help out by translating Pagekit into your own language on %link%.' | trans {link:link} }}}</p> "},function(o,e){o.exports=" <div class=\"uk-margin uk-flex uk-flex-space-between uk-flex-wrap\" data-uk-margin> <div data-uk-margin> <h2 class=uk-margin-remove>{{ 'System' | trans }}</h2> </div> <div data-uk-margin> <button class=\"uk-button uk-button-primary\" type=submit>{{ 'Save' | trans }}</button> </div> </div> <div class=uk-form-row> <label for=form-storage class=uk-form-label>{{ 'Storage' | trans }}</label> <div class=uk-form-controls> <input id=form-storage class=uk-form-width-large type=text placeholder=/storage v-model=\"$root.config['system/finder'].storage\"> </div> </div> <div class=uk-form-row> <label for=form-fileextensions class=uk-form-label>{{ 'File Extensions' | trans }}</label> <div class=uk-form-controls> <input id=form-fileextensions class=uk-form-width-large type=text v-model=\"$root.options['system/finder']['extensions']\"> <p class=uk-form-help-block>{{ 'Allowed file extensions for the storage upload.' | trans }}</p> </div> </div> <div class=uk-form-row> <label for=form-user-recaptcha-enable class=uk-form-label>{{ 'Google reCAPTCHA' | trans }}</label> <div class=\"uk-form-controls uk-form-controls-text\"> <p class=uk-form-controls-condensed> <label><input id=form-user-recaptcha-enable type=checkbox v-model=\"$root.options['system/captcha'].recaptcha_enable\"> {{ 'Enable for user registration and comments' | trans }}</label> </p> <p class=uk-form-controls-condensed v-if=\"$root.options['system/captcha'].recaptcha_enable\"> <input id=form-user-recaptcha-sitekey class=uk-form-width-large placeholder=\"{{ 'Site key' | trans }}\" v-model=\"$root.options['system/captcha'].recaptcha_sitekey\"> </p> <p class=uk-form-controls-condensed v-if=\"$root.options['system/captcha'].recaptcha_enable\"> <input id=form-user-recaptcha-secret class=uk-form-width-large placeholder=\"{{ 'Secret key' | trans }}\" v-model=\"$root.options['system/captcha'].recaptcha_secret\"> </p> <p class=uk-form-help-block>{{ 'Only key pairs for Google reRECAPTCHA V2 Invisible are supported.' | trans }}</p> </div> </div> <div class=uk-form-row> <span class=uk-form-label>{{ 'Developer' | trans }}</span> <div class=\"uk-form-controls uk-form-controls-text\"> <p class=uk-form-controls-condensed> <label><input type=checkbox value=1 v-model=$root.config.application.debug> {{ 'Enable debug mode' | trans }}</label> </p> <p class=uk-form-controls-condensed> <label><input type=checkbox value=1 v-model=$root.config.debug.enabled :disabled=!sqlite> {{ 'Enable debug toolbar' | trans }}</label> </p> <p class=uk-form-help-block v-if=!sqlite>{{ 'Please enable the SQLite database extension.' | trans }}</p> <p class=uk-form-help-block v-if=\"$root.config.application.debug || $root.config.debug.enabled\">{{ 'Please note that enabling debug mode or toolbar has serious security implications.' | trans }}</p> </div> </div> "},function(o,e,t){var s,a;s=t(1),a=t(3),o.exports=s||{},o.exports.__esModule&&(o.exports=o.exports["default"]),a&&(("function"==typeof o.exports?o.exports.options||(o.exports.options={}):o.exports).template=a)},function(o,e,t){var s,a;s=t(2),a=t(4),o.exports=s||{},o.exports.__esModule&&(o.exports=o.exports["default"]),a&&(("function"==typeof o.exports?o.exports.options||(o.exports.options={}):o.exports).template=a)}]);