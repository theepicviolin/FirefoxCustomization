user_pref("browser.safebrowsing.downloads.remote.enabled", true);
user_pref("extensions.pocket.enabled", false);
user_pref("browser.search.separatePrivateDefault", false);
user_pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("privacy.resistFingerprinting", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("privacy.resistFingerprinting.letterboxing", false);
user_pref("browser.startup.page", 1);
user_pref("browser.startup.homepage", "about:home");
user_pref("browser.newtabpage.enabled", true);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts", false);
user_pref("browser.search.suggest.enabled", true);
user_pref("browser.urlbar.suggest.searches", true);
user_pref("network.trr.mode", 3);
user_pref("network.trr.uri", "https://dns.quad9.net/dns-query");
user_pref("network.trr.custom_uri", "https://dns.quad9.net/dns-query");
user_pref("browser.urlbar.update2.engineAliasRefresh", true);
//user_pref("browser.download.dir", "C:\Users\adit9\AppData\Local\Temp");
//user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);


/******** OVERRIDES FOR THEME ********/
/*color schemes*/
user_pref("user.theme.dark.a", false); /*default dark mode*/
user_pref("user.theme.light.a", true); /*default light mode*/
user_pref("user.theme.dark.catppuccin", false);
user_pref("user.theme.dark.catppuccin-mocha", false); /*by Draff*/
user_pref("user.theme.dark.gruvbox", false);
user_pref("user.theme.light.gruvbox", false);
user_pref("user.theme.dark.midnight", false);
user_pref("user.theme.dark.bloodmoon", true); /*custom dark mode derived from a/fullmoon*/

/*tabs*/
user_pref("ultima.tabs.vertical", true);
user_pref("ultima.tabs.size.xs", false);
user_pref("ultima.tabs.size.s", false);
user_pref("ultima.tabs.size.l", true);
user_pref("ultima.tabs.autohide", true);
user_pref("ultima.tabs.closetabsbutton", false);
user_pref("ultima.tabs.vertical.hide", false);
user_pref("ultima.tabs.vertical.onlyprivate", false);
user_pref("ultima.tabs.vertical.rightside", false);

/*sidebar*/
user_pref("ultima.sidebar.autohide", false);
user_pref("ultima.sidebery.autohide", false);
user_pref("ultima.sidebar.hidden", false);
user_pref("ultima.sidebar.longer", false);

/*extension theme on-off*/
user_pref("ultima.theme.extensions", true);

/*url bar*/
user_pref("ultima.urlbar.suggestions", true);
user_pref("ultima.urlbar.centered", true);
user_pref("ultima.urlbar.hidebuttons", false);
user_pref("ultima.xstyle.urlbar", false);

/*alternate styles*/
user_pref("ultima.xstyle.containertabs.i", false);
user_pref("ultima.xstyle.containertabs.ii", false);
user_pref("ultima.xstyle.containertabs.iii", true);
user_pref("ultima.xstyle.squared", false);
user_pref("ultima.xstyle.squished", false);
user_pref("ultima.xstyle.lwtheme", false); /* Experimental. To counter addon themes that use unusual color variables. */
user_pref("ultima.xstyle.pinnedtabs.i", false); /* Experimental. Havent decided on style yet. */


/*specific OS overrides (like titlebar buttons)*/
user_pref("ultima.OS.kde", false);
user_pref("ultima.OS.gnome", true);
user_pref("ultima.OS.mac", false);
user_pref("ultima.OS.kde.wds", false);
user_pref("ultima.OS.gnome.wds", false);
user_pref("ultima.OS.gnome.wdl", false);
/*this is enough to give linux users ~options~, any further finetuning should be done by the user.*/
user_pref("ultima.OS.notitlebar", false);

/*other*/
user_pref("browser.aboutConfig.showWarning", false);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("devtools.debugger.remote-enabled", true);
user_pref("devtools.chrome.enabled", true);
user_pref("devtools.debugger.prompt-connection", false);
user_pref("svg.context-properties.content.enabled", true);
user_pref("toolkit.tabbox.switchByScrolling", false);
user_pref("browser.tabs.hoverPreview.enabled", true);
/*enable userchrome,
disable about config warning,
enable browsertoolbox,
no need to jump through firefox settings */

/* custom theme settings */
user_pref("ultima.tabs.closetabsbutton", true);
user_pref("ultima.urlbar.hidebuttons", true);
user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", true);
user_pref("ultima.urlbar.suggestions", false); //controls "This time, search with:" bar - false = enable, true = disable
user_pref("ultima.theme.extensions", false);
user_pref("ultima.xstyle.squared", true);
