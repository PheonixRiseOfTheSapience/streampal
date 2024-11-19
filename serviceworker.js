/*! For license information please see service-worker.js.LICENSE.txt */
!function(e) {
    var t = {};
    function __webpack_require__(n) {
        if (t[n])
            return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, __webpack_require__),
        r.l = !0,
        r.exports
    }
    __webpack_require__.m = e,
    __webpack_require__.c = t,
    __webpack_require__.d = function(e, t, n) {
        __webpack_require__.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    __webpack_require__.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    __webpack_require__.t = function(e, t) {
        if (1 & t && (e = __webpack_require__(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (__webpack_require__.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var r in e)
                __webpack_require__.d(n, r, function(t) {
                    return e[t]
                }
                .bind(null, r));
        return n
    }
    ,
    __webpack_require__.n = function(e) {
        var t = e && e.__esModule ? function getDefault() {
            return e.default
        }
        : function getModuleExports() {
            return e
        }
        ;
        return __webpack_require__.d(t, "a", t),
        t
    }
    ,
    __webpack_require__.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    __webpack_require__.p = "",
    __webpack_require__(__webpack_require__.s = 74)
}([function(e, t, n) {
    "use strict";
    n.d(t, "h", (function() {
        return r
    }
    )),
    n.d(t, "p", (function() {
        return o
    }
    )),
    n.d(t, "v", (function() {
        return i
    }
    )),
    n.d(t, "m", (function() {
        return a
    }
    )),
    n.d(t, "d", (function() {
        return s
    }
    )),
    n.d(t, "i", (function() {
        return c
    }
    )),
    n.d(t, "H", (function() {
        return u
    }
    )),
    n.d(t, "t", (function() {
        return l
    }
    )),
    n.d(t, "G", (function() {
        return f
    }
    )),
    n.d(t, "D", (function() {
        return d
    }
    )),
    n.d(t, "e", (function() {
        return E
    }
    )),
    n.d(t, "L", (function() {
        return _
    }
    )),
    n.d(t, "y", (function() {
        return O
    }
    )),
    n.d(t, "J", (function() {
        return T
    }
    )),
    n.d(t, "r", (function() {
        return I
    }
    )),
    n.d(t, "A", (function() {
        return b
    }
    )),
    n.d(t, "B", (function() {
        return y
    }
    )),
    n.d(t, "z", (function() {
        return m
    }
    )),
    n.d(t, "q", (function() {
        return A
    }
    )),
    n.d(t, "x", (function() {
        return C
    }
    )),
    n.d(t, "l", (function() {
        return S
    }
    )),
    n.d(t, "K", (function() {
        return L
    }
    )),
    n.d(t, "g", (function() {
        return v
    }
    )),
    n.d(t, "n", (function() {
        return N
    }
    )),
    n.d(t, "k", (function() {
        return g
    }
    )),
    n.d(t, "F", (function() {
        return w
    }
    )),
    n.d(t, "E", (function() {
        return R
    }
    )),
    n.d(t, "w", (function() {
        return P
    }
    )),
    n.d(t, "c", (function() {
        return B
    }
    )),
    n.d(t, "b", (function() {
        return k
    }
    )),
    n.d(t, "u", (function() {
        return D
    }
    )),
    n.d(t, "f", (function() {
        return U
    }
    )),
    n.d(t, "C", (function() {
        return K
    }
    )),
    n.d(t, "o", (function() {
        return F
    }
    )),
    n.d(t, "j", (function() {
        return M
    }
    )),
    n.d(t, "a", (function() {
        return x
    }
    )),
    n.d(t, "I", (function() {
        return G
    }
    )),
    n.d(t, "s", (function() {
        return j
    }
    ));
    var r = {
        PAUSED: "paused",
        SETTINGS: "settings",
        WHITELIST: "whitelist",
        NUM_OF_BLOCKS: "numOfBlocks",
        TOTAL_BLOCKS_BY_TYPE: "totalBlocksByType",
        BLOCKED_SITES_COUNTER: "counterBlockedSites",
        UNBLOCKED_SITES_COUNTER: "counterUnBlockedSites",
        OVERLAY_BLOCKED_LIST: "overlayBlockedList",
        USER: "user",
        LAST_USER_UPDATE_DATE: "lastUserUpdateDate",
        BLOCKED_ELEMENTS: "blockedElements",
        BLOCKED_ELEMENTS_PROMO: "blockedElementsPromo",
        BLOCKED_ELEMENTS_COUNT: "blockedElementsCount",
        DEFAULT_WHITELIST: "defaultWhitelist",
        POPULAR_SITES_FOR_BLOCK_ELEMENTS: "popularSitesForBlockElements",
        DEFAULT_WHITELIST_LAST_UPDATE: "defaultWhitelistLastUpdate",
        POPULAR_SITES_FOR_BLOCK_ELEMENTS_LAST_UPDATE: "popularSitesForBlockElementsLastUpdate",
        LAST_ALIVE_EVENT_SENT_AT: "lastAliveEventSentAt",
        AD_BLOCKING: "adBlocking",
        GENERAL_DATA: "generalData",
        PROMO_COUPON: "promoCoupon",
        WHATS_NEW: "whatsNew",
        DEFAULT_FACEBOOK_CONFIG: "facebookConfig",
        DEFAULT_SEGMENT_CONFIG: "segmentConfig",
        PUSH_NOTIFICATIONS_BLOCKER_PROMO: "pushNotificationBlockerPromo",
        RATING_STAR_CLICK: "ratingStarClick",
        RATING_US_MODAL: "ratingUsModal",
        FONT_STYLE: "fontStyle",
        RDID: "randid",
        FIRST_POPUP_BLOCK: "isFirstBlockAdds",
        PIN_TASKBAR_DATA: "pinTaskbarData",
        SPECIAL_OFFER_MODAL: "specialOfferModal"
    }
      , o = {
        CATEGORIES: {
            OPTIONS: "Options_menu",
            MAIN_MENU: "Menu",
            CHECKBOX: "Checkbox",
            CTA: "Button CTA",
            NAVBAR: "Navigation bar",
            MISSING: "Missing Ad",
            NOTIFICATION: "Notification",
            RATING: "Rating",
            EXTENSION: "Extension",
            REPORTS: "Reports",
            BLOCK_ELEMENT: "Block Element",
            COOKIE_CRUMBLER: "Cookie Crumbler",
            INSITE_NOTIFICATIONS: "In-site Notifications"
        },
        ACTIONS: {
            CLICK: "Click",
            VIEWED: "Viewed",
            BLOCKED_POPUP: "Popup blocked",
            DAILY_BLOCKS: "Popups blocked per day",
            BLOCKED_ELEMENT_SITE: "Blocked element site URL"
        }
    }
      , i = {
        GA_EVENT: "trackEvent",
        UPDATE_TAB_BADGE: "updateTabBadgeText",
        UPDATE_COUNTS: "updateBlockCounts",
        CREATE_CONTEXT_MENUS: "createIconContextMenu",
        SEND_ANALYTICS_EVENT: "sendAnalyticsEvent",
        SYNC_EXTENSION_ANALYTICS_DATA: "syncExtensionAnalyticsData",
        KEEN_IO: "KeenIO",
        ALLOW_ALWAYS: "allowAlways",
        RESTORE_BLOCKING: "restoreBlocking",
        REQUEST_TAB_URL: "requestTabUrl",
        OPEN_URL: "openUrl",
        UPDATE_RATING: "update-rating",
        GET_USER: "getUser",
        UPDATE_USER_INFO: "updateUserInfo",
        SUBSCRIPTION_SUCCESS: "subscription-success",
        LOGIN: "login",
        LOGOUT: "logout",
        START_BLOCKED_ELEMENTS: "start-blocked-elements",
        MANUAL_REMOVE_OVERLAY: "manual-remove-overlay",
        ADD_UNBLOCK_ALL_ELEMENTS_MENU: "add-unblock-all-elements-menu",
        REMOVE_UNBLOCK_ALL_ELEMENTS_MENU: "remove-unblock-all-elements-menu",
        UNBLOCK_ALL_ELEMENTS: "unblock-all-elements",
        GET_DEFAULT_WHITELIST: "get-default-whitelist",
        GET_POPULAR_SITES_FOR_BLOCK_ELEMENTS: "get-popular-sites-for-block-elements",
        INSERT_COOKIE_FILTERS: "insert-cookie-filters",
        ACTIVATE_CC_OR_SHOW_PROMO: "activate-cc-or-show-promo",
        SHOW_COOKIE_CRUMBLER_HOOK: "show-cookie-crumbler-hook",
        HIDE_COOKIE_CRUMBLER_PROMO: "hide-cookie-crumbler-promo",
        SHOW_TRIAL_PROMO: "show-trial-promo",
        CHECK_PROMO_MESSAGE: "check-promo-message",
        SHOW_COUPON_MESSAGE: "show-coupon-message",
        OPT_IN_AGREE: "opt-in-agree",
        OPT_IN_DISAGREE: "opt-in-disagree",
        SEND_ALIVE_EVENT: "send-alive-event",
        HIDE_AD_ELEMENT: "hide-ad-element",
        COUNT_AD_ELEMENT: "count-ad-element",
        UPDATE_SOCIAL_BLOCKER_CONFIG: "update-social-blocker-config",
        UPDATE_SEGMENT_DATA: "update-segment-data",
        UPDATE_BLOCK_COUNT: "update-block-count",
        UPDATE_UNBLOCK_COUNT: "update-unblock-count",
        COUNT_COOKIE_MESSAGES: "count-cookie-messages",
        TOGGLE_PUSH_NOTIFICATIONS_BLOCKING: "toggle-push-notification-blocking",
        INJECT_FONTS: "inject-font",
        FETCH_SETTINGS: "fetch-settings",
        UPDATE_REMOTE_SETTINGS: "update-remote-settings",
        UPDATE_REMOTE_AND_LOCAL_SETTINGS: "update-remote-and-local-settings",
        REQUEST_TRIAL_STATUS: "request-trial-status",
        EXTENSION_IS_PINNED: "extension-is-pinned",
        REQUEST_EXTENSION_ID: "request-extension-id",
        UPDATE_EXTENSION_ID: "update-extension-id",
        UPDATE_SCRIPT_BLOCKERS_STATE: "update-script-blockers-state",
        SETTINGS_CHANGED: "settings-changed",
        UPDATE_SETTINGS: "update-settings",
        EXTENSION_IS_ALLOWED_INCOGNITO: "extension-is-allowed-incognito",
        GET_ALL_EXTENSION_PERMISSIONS_GRANTED: "get-all-extension-permissions-granted",
        REQUEST_OPTIONAL_PERMISSIONS: "request-optional-permissions",
        ON_EXTENSION_ENABLED_STATE_UPDATED: "extension-enabled-state-updated"
    }
      , a = {
        POPUPS: "popups",
        OVERLAYS: "overlays",
        COOKIE_CRUMBLER: "cookieCrumbler",
        FACEBOOK: "facebookAdds",
        PUSH_NOTIFICATION: "pushNotification"
    }
      , s = {
        COOKIE: "images/cookie-animation.json",
        FACEBOOK_END: "images/endTrialFacebookAnimation.json",
        PIN: "images/pinAnimation.json"
    }
      , c = {
        PARENT: {
            id: "parentContextMenu",
            title: "Poperblocker",
            contexts: ["page", "frame", "selection", "link", "editable", "image", "video", "audio"]
        },
        OVERLAY: {
            id: "removeOverlay",
            title: "Remove overlay",
            contexts: ["page", "frame", "selection", "link", "editable", "image", "video", "audio"]
        },
        BLOCK_ELEMENT: {
            id: "blockElement",
            title: "Hide Element",
            contexts: ["page", "frame", "selection", "link", "editable", "image", "video", "audio"]
        },
        UNBLOCK_ALL_ELEMENTS: {
            id: "unblockAllElement",
            title: "Unblock All Elements",
            contexts: ["page", "frame", "selection", "link", "editable", "image", "video", "audio"]
        }
    }
      , u = {
        BLOCK_ELEMENT_ROOT: "pb-block-element-root",
        LIMIT_NOTIFICATION_ROOT: "pb-limit-notification-root",
        PROMO_ROOT: "pb-feature-promo-root",
        COOKIE_PROMO_ROOT: "pb-cookie-promo-root",
        MESSAGE_NOTIFICATION_ROOT: "pb-message-notification-root"
    }
      , l = {
        CHROME_EXTENTION_MANAGER: "chrome://extensions",
        FF_EXTENTION_MANAGER: "about:addons",
        WEB_APP: "https://app.poperblocker.com",
        CHECKOUT_YEARLY_PLAN: "https://app.poperblocker.com/checkout?selectedPlan=Yearly",
        ANALYTICS_APP: "https://analytics.poperblocker.com",
        VALID_MESSAGE_DOMAINS: ["poperblocker.com"],
        THANK_YOU_PAGE_CH: "https://poperblocker.com/welcome",
        THANK_YOU_PAGE_FF: "https://poperblocker.com/welcome-firefox",
        PRIVACY_POLICY_CH: "https://poperblocker.com/privacy/",
        PRIVACY_POLICY_FF: "https://addons.mozilla.org/en-US/firefox/addon/poper-blocker-pop-up-blocker/privacy/",
        UNINSTALL_PAGE_CH: "https://poperblocker.com/uninstall/?",
        UNINSTALL_PAGE_FF: "https://poperblocker.com/uninstall-firefox/?",
        FEEDBACK_PAGE: "https://poperblocker.com/feedback.html?from=ext",
        CONTACT_PAGE: "https://poperblocker.com/contact-form.html",
        CONTRIBUTE_PAGE: "https://poperblocker.com/contribute?utm_source=Extension_Popup",
        GOOGLE_FORM: "https://forms.gle/DfoB6hyd7MFtDPP8A",
        APPSTORE_CH: "https://chrome.google.com/webstore/detail/pop-up-blocker-for-chrome/bkkbcggnhapdmkeljlodobbkopceiche",
        APPSTORE_FF: "https://addons.mozilla.org/en-US/firefox/addon/poper-blocker-pop-up-blocker/",
        REVIEW_CH: "https://chrome.google.com/webstore/detail/pop-up-blocker-for-chrome/bkkbcggnhapdmkeljlodobbkopceiche/reviews",
        REVIEW_FF: "https://addons.mozilla.org/en-US/firefox/addon/poper-blocker-pop-up-blocker/reviews/add",
        TWITTER_SHARE: "https://twitter.com/intent/tweet?hashtags=popups&original_referer=https%3A%2F%2Fpoperblocker.com%3Fref%3Dfb_pp_share&related=socialmediahats&text=I'm%20using%20poper%20blocker%20to%20enjoy%20a%20popup%20free%20browsing%20experience%20pic.twitter.com%2FniqVgqfmAw&url=https%3A%2F%2Fgoo.gl%2FryoaEn&via=poper_blocker",
        FACEBOOK_SHARE: "https://www.facebook.com/dialog/share?app_id=1911035589168170&display=popup&href=https%3A%2F%2Fpoperblocker.com%3Fref%3Dfb_pp_share%3Fhl%3Den&hashtag=%23For_No_More_Popups_Click_Below"
    }
      , f = {
        AFTER: 5,
        EVERY: 100
    }
      , h = l.WEB_APP + "/api/v1"
      , p = "" + l.ANALYTICS_APP
      , d = "?extVersion=Premium"
      , E = {
        OVERLAY_CHECK: "https://api2.poperblocker.com/view/update",
        ANALYTICS_SEND_EVENT: p + "/event",
        GET_USER: h + "/user",
        GET_USER_SEGMENT: h + "/segment",
        LOGOUT: h + "/auth/logout",
        MANAGE_SUBSCRIPTION: h + "/subscriptions",
        ANALYTIC_INFO: h + "/analytics/sync",
        WHITELIST: h + "/whitelist",
        POPULAR_SITES_FOR_BLOCK_ELEMENTS: h + "/mostPopularSitesForBlockElements",
        PROMO_COUPON: h + "/promoCoupon",
        SETTINGS: h + "/settings",
        REFRESH: h + "/auth/refresh",
        SOCIALBLOCKER_CONFIG: h + "/socialblocker/config",
        ADS_BLOCKER_CONFIG: h + "/adsblocker/config",
        TRACKERS_BLOCKER_CONFIG: h + "/trackersblocker/config"
    }
      , _ = 288e5
      , O = 864e5
      , T = 5184e6
      , I = 36e5
      , b = 1
      , y = 6e4
      , m = 60 * b
      , A = 12 * m
      , C = 24 * m
      , S = 3
      , L = 14 * O
      , v = 100
      , N = "https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900&display=swa"
      , g = {
        poper20: "poper20",
        poper30: "poper30"
    }
      , w = 5
      , R = 5
      , P = 21
      , B = {
        ANALYTICS_INFO_KEY: "ANALYTICS_INFO",
        ANALYTICS_PLATFORM: "Extension",
        ANALYTICS_PRODUCT: "PoperBlocker",
        ANALYTICS_RESOURCE_TYPES: {
            PAID: "PAID",
            ORGANIC: "ORGANIC"
        },
        ANALYTICS_EVENT_TYPES: {
            EXTENSION_INSTALL: "EXTENSION_INSTALL",
            EXTENSION_UNINSTALL: "EXTENSION_UNINSTALL",
            EXTENSION_UPGRADE: "EXTENSION_UPGRADE",
            EXTENSION_INSTALL_GENERAL: "EXTENSION_INSTALL_GENERAL",
            EXTENSION_OPT_IN_VIEWED: "EXTENSION_OPT_IN_VIEWED",
            EXTENSION_OPT_IN_CLICKED_AGREE: "EXTENSION_OPT_IN_CLICKED_AGREE",
            EXTENSION_OPT_OUT_CLICKED_AGREE: "EXTENSION_OPT_OUT_CLICKED_AGREE",
            POPUP_BLOCKED: "POPUP_BLOCKED",
            ALLOW_POPUPS: "ALLOW_POPUPS",
            DID_WE_MISS_ONE: "DID_WE_MISS_ONE",
            EMAIL_STATUS_MISSED_POPUP: "EMAIL_STATUS_MISSED_POPUP",
            FAVICON_CLICKED: "FAVICON_CLICKED",
            ELEMENT_BLOCKED: "ELEMENT_BLOCKED",
            OVERLAY_BLOCKED: "OVERLAY_BLOCKED",
            OVERLAY_DETECTED: "OVERLAY_DETECTED",
            REMOVE_OVERLAY_FOREVER: "REMOVE_OVERLAY_FOREVER",
            UNDO_OVERLAY_REMOVAL: "UNDO_OVERLAY_REMOVAL",
            ELEMENT_BLOCKED_UNDO: "ELEMENT_BLOCKED_UNDO",
            ELEMENT_BLOCKED_SAVE: "ELEMENT_BLOCKED_SAVE",
            BLOCK_ELEMENT_PROMOTION_NOTIFICATION_VIEW: "BLOCK_ELEMENT_PROMOTION_NOTIFICATION_VIEW",
            BLOCK_ELEMENT_FREE_BLOCKS: "BLOCK_ELEMENT_FREE_BLOCKS",
            BLOCK_ELEMENT_NO_BLOCKS_VIEW: "BLOCK_ELEMENT_NO_BLOCKS_VIEW",
            BLOCK_ELEMENT_UNBLOCK_ELEMENTS: "BLOCK_ELEMENT_UNBLOCK_ELEMENTS",
            WHITELIST_ADD: "WHITELIST_ADD",
            WHITELIST_REMOVE: "WHITELIST_REMOVE",
            SETTINGS_PAGE_VIEW: "SETTINGS_PAGE_VIEW",
            COOKIE_CRUMBLER_PROMOTION_NOTIFICATION_VIEW: "COOKIE_CRUMBLER_PROMOTION_NOTIFICATION_VIEW",
            INSITE_NOTIFICATION_PROMOTION_NOTIFICATION_VIEW: "INSITE_NOTIFICATION_PROMOTION_NOTIFICATION_VIEW",
            COOKIE_CRUMBLER_TRIAL_START: "COOKIE_CRUMBLER_TRIAL_START",
            COOKIE_CRUMBLER_HIDE_FOREVER: "COOKIE_CRUMBLER_HIDE_FOREVER",
            COOKIE_CRUMBLER_IN_TRIAL: "COOKIE_CRUMBLER_IN_TRIAL",
            COOKIE_CRUMBLER_END_OF_TRIAL: "COOKIE_CRUMBLER_END_OF_TRIAL",
            COOKIE_CRUMBLER_IN_TRIAL_CLICK: "COOKIE_CRUMBLER_IN_TRIAL_CLICK",
            COOKIE_CRUMBLER_USE_CASE_CLOSE: "COOKIE_CRUMBLER_USE_CASE_CLOSE",
            COOKIE_CRUMBLER_TRIAL_PROMOTION_NOTIFICATION_CLICK: "COOKIE_CRUMBLER_TRIAL_PROMOTION_NOTIFICATION_CLICK",
            COOKIE_CRUMBLER_USE_CASE_VIEW: "COOKIE_CRUMBLER_USE_CASE_VIEW",
            COOKIE_CRUMBLER_USE_CASE_CLICK: "COOKIE_CRUMBLER_USE_CASE_CLICK",
            ALIVE: "ALIVE",
            SOCIAL_BLOCKER_TRIAL_PROMOTION_NOTIFICATION_CLICK: "SOCIAL_BLOCKER_TRIAL_PROMOTION_NOTIFICATION_CLICK",
            SOCIAL_BLOCKER_REMOVE_ADS_FOR_GOOD_CLICK: "SOCIAL_BLOCKER_REMOVE_ADS_FOR_GOOD_CLICK",
            SOCIAL_BLOCKER_TRIAL_OVER_PROMOTION_VIEW: "SOCIAL_BLOCKER_TRIAL_OVER_PROMOTION_VIEW",
            IN_PRODUCT_PROMOTION_DIALOG_CLICK: "IN_PRODUCT_PROMOTION_DIALOG_CLICK",
            IN_PRODUCT_PROMOTION_DIALOG_VIEW: "IN_PRODUCT_PROMOTION_DIALOG_VIEW",
            IN_SITE_PUSH_NOTIFICATION_ALLOW_PERMISSIONS: "IN_SITE_PUSH_NOTIFICATION_ALLOW_PERMISSIONS",
            IN_SITE_PUSH_NOTIFICATION_DENY_PERMISSIONS: "IN_SITE_PUSH_NOTIFICATION_DENY_PERMISSIONS",
            IN_SITE_PUSH_NOTIFICATION_ON: "IN_SITE_PUSH_NOTIFICATION_ON",
            IN_SITE_PUSH_NOTIFICATION_OFF: "IN_SITE_PUSH_NOTIFICATION_OFF",
            WHITELIST_SITE_ON: "WHITELIST_SITE_ON",
            WHITELIST_SITE_OFF: "WHITELIST_SITE_OFF",
            HIDE_MANUALLY_CLICKED: "HIDE_MANUALLY_CLICKED",
            BLOCK_ALL_DISTRACTIONS_BUTTON_CLICK: "BLOCK_ALL_DISTRACTIONS_BUTTON_CLICK",
            HIDE_ELEMENT_EXTENSION_BUTTON_CLICK: "HIDE_ELEMENT_EXTENSION_BUTTON_CLICK",
            REMOVE_OVERLAY_EXTENSION_BUTTON_CLICK: "REMOVE_OVERLAY_EXTENSION_BUTTON_CLICK",
            REPORT_MISSED_EXTENSION_BUTTON_CLICK: "REPORT_MISSED_EXTENSION_BUTTON_CLICK",
            EXPAND_NOT_BLOCKED_DROPDOWN_CLICK: "EXPAND_NOT_BLOCKED_DROPDOWN_CLICK",
            RATE_US_DIALOG_VIEW: "RATE_US_DIALOG_VIEW",
            RATE_US_DIALOG_CLICK: "RATE_US_DIALOG_CLICK",
            RATE_US_DIALOG_RESULT_VIEW: "RATE_US_DIALOG_RESULT_VIEW",
            SEGMENTATION_PROMOTION_VIEW: "SEGMENTATION_PROMOTION_VIEW",
            SEGMENTATION_PROMOTION_CLICK: "SEGMENTATION_PROMOTION_CLICK",
            WHATS_NEW_POPUP_VIEW: "WHATS_NEW_POPUP_VIEW",
            WHATS_NEW_POPUP_CTA_CLICK: "WHATS_NEW_POPUP_CTA_CLICK",
            ADBLOCKER_PROMOTION_VIEW: "ADBLOCKER_PROMOTION_VIEW",
            ADBLOCKER_PROMOTION_CLICK: "ADBLOCKER_PROMOTION_CLICK",
            MONETIZATION_NOIFICATION_VIEW: "MONETIZATION_NOIFICATION_VIEW",
            MONETIZATION_NOIFICATION_CTA_CLICK: "MONETIZATION_NOIFICATION_CTA_CLICK",
            MONETIZATION_NOIFICATION_COPY_CODE_CLICK: "MONETIZATION_NOIFICATION_COPY_CODE_CLICK",
            SOCIAL_BLOCKER_FEED_PROMOTION_VIEW: "SOCIAL_BLOCKER_FEED_PROMOTION_VIEW",
            SOCIAL_BLOCKER_FEED_PROMOTION_OPEN: "SOCIAL_BLOCKER_FEED_PROMOTION_OPEN",
            SOCIAL_BLOCKER_INTRIAL_PROMOTION_VIEW: "SOCIAL_BLOCKER_INTRIAL_PROMOTION_VIEW",
            SOCIAL_BLOCKER_FEED_PROMOTION_START_TRIAL: "SOCIAL_BLOCKER_FEED_PROMOTION_START_TRIAL",
            FIRST_POPUP_BLOCKED_NOTIFICATION_VIEW: "FIRST_POPUP_BLOCKED_NOTIFICATION_VIEW",
            FIRST_POPUP_BLOCKED_NOTIFICATION_CLICKED: "FIRST_POPUP_BLOCKED_NOTIFICATION_CLICKED",
            CLICK_SOCIAL_BLOCKER_IN_FEED_BANNER_ON_TRIAL: "CLICK_SOCIAL_BLOCKER_IN_FEED_BANNER_ON_TRIAL",
            CLICK_SOCIAL_BLOCKER_PROMOTION_DISCOUNT: "CLICK_SOCIAL_BLOCKER_PROMOTION_DISCOUNT",
            CLICK_COOKIE_PROMOTION_DISCOUNT: "CLICK_COOKIE_PROMOTION_DISCOUNT",
            CLICK_BLOCK_POPUPS_TOGGLE_ON_CONTROL_PANEL: "CLICK_BLOCK_POPUPS_TOGGLE_ON_CONTROL_PANEL",
            CLICK_BLOCK_POPUPS_TOGGLE_OFF_CONTROL_PANEL: "CLICK_BLOCK_POPUPS_TOGGLE_OFF_CONTROL_PANEL",
            CLICK_BLOCK_OVERLAY_TOGGLE_ON_CONTROL_PANEL: "CLICK_BLOCK_OVERLAY_TOGGLE_ON_CONTROL_PANEL",
            CLICK_BLOCK_OVERLAY_TOGGLE_OFF_CONTROL_PANEL: "CLICK_BLOCK_OVERLAY_TOGGLE_OFF_CONTROL_PANEL",
            CLICK_BLOCK_COOKIES_TOGGLE_ON_CONTROL_PANEL: "CLICK_BLOCK_COOKIES_TOGGLE_ON_CONTROL_PANEL",
            CLICK_BLOCK_COOKIES_TOGGLE_OFF_CONTROL_PANEL: "CLICK_BLOCK_COOKIES_TOGGLE_OFF_CONTROL_PANEL",
            CLICK_BLOCK_SOCIAL_TOGGLE_ON_CONTROL_PANEL: "CLICK_BLOCK_SOCIAL_TOGGLE_ON_CONTROL_PANEL",
            CLICK_BLOCK_SOCIAL_TOGGLE_OFF_CONTROL_PANEL: "CLICK_BLOCK_SOCIAL_TOGGLE_OFF_CONTROL_PANEL",
            CLICK_PUSH_NOTIFICATIONS_TOGGLE_ON_CONTROL_PANEL: "CLICK_PUSH_NOTIFICATIONS_TOGGLE_ON_CONTROL_PANEL",
            CLICK_PUSH_NOTIFICATIONS_TOGGLE_OFF_CONTROL_PANEL: "CLICK_PUSH_NOTIFICATIONS_TOGGLE_OFF_CONTROL_PANEL",
            CLICK_ADS_BLOCKER_TOGGLE_ON_CONTROL_PANEL: "CLICK_ADS_BLOCKER_TOGGLE_ON_CONTROL_PANEL",
            CLICK_ADS_BLOCKER_TOGGLE_OFF_CONTROL_PANEL: "CLICK_ADS_BLOCKER_TOGGLE_OFF_CONTROL_PANEL",
            CLICK_ALL_SETTINGS_CONTROL_PANEL: "CLICK_ALL_SETTINGS_CONTROL_PANEL",
            TURN_OFF_EXTENSION_SCREEN_VIEW: "TURN_OFF_EXTENSION_SCREEN_VIEW",
            CLICK_ACTIVATE_EXTENSION_TURN_OFF_SCREEN: "CLICK_ACTIVATE_EXTENSION_TURN_OFF_SCREEN",
            PIN_TASKBAR_POPUP_VIEW: "PIN_TASKBAR_POPUP_VIEW",
            PIN_TASKBAR_POPUP_DISMISS_CLICK: "PIN_TASKBAR_POPUP_DISMISS_CLICK",
            PANEL_SPECIAL_OFFER_X_CLICK: "PANEL_SPECIAL_OFFER_X_CLICK",
            PANEL_SPECIAL_OFFER_MAYBELATER_CLICK: "PANEL_SPECIAL_OFFER_MAYBELATER_CLICK",
            PANEL_SPECIAL_OFFER_GOPRO_CLICK: "PANEL_SPECIAL_OFFER_GOPRO_CLICK",
            PANEL_SPECIAL_OFFER_GOPRO_VIEW: "PANEL_SPECIAL_OFFER_GOPRO_VIEW",
            TRIAL_MIGRATION: "TRIAL_MIGRATION"
        }
    }
      , k = {
        SEGMENT_ALARM: "segmentUpdate",
        TRACKERSBLOCKER_ALARM: "trackersBlockerConfigAlarm",
        ADSBLOCKER_ALARM: "adsBlockerConfigAlarm"
    }
      , D = "Ry0wRkNSNkVHN0JQ"
      , U = "Ull6emJSNUFUSWlKUVJEd2JrNXJrQQ=="
      , K = {
        CONTENT_SETTINGS: "contentSettings",
        ALL_URLS: "<all_urls>",
        BLOCK: "block",
        ASK: "ask"
    }
      , F = {
        Enabled: {
            BadgeText: "",
            BadgeColor: "#8ab4f8",
            Image: "/images/icon128.png"
        },
        Disabled: {
            BadgeText: "OFF",
            BadgeColor: "#c53929",
            Image: "/images/icon128_disabled.png"
        }
    }
      , M = {
        HIDDEN_PROPERTY: "{display: none !important ; visibility : hidden !important ; opacity : 0 !important}",
        DISPLAY: "display",
        VISIBILITY: "visibility",
        OPACITY: "opacity"
    }
      , x = {
        KEY_CONFIG_STORAGE: "adsBlockerConfig"
    }
      , G = {
        KEY_CONFIG_STORAGE: "trackersBlockerConfig"
    }
      , j = {
        WHATS_NEW_ICON: "images/pro_feature.svg"
    }
}
, , function(e, t, n) {
    "use strict";
    n.d(t, "f", (function() {
        return r
    }
    )),
    n.d(t, "j", (function() {
        return o
    }
    )),
    n.d(t, "o", (function() {
        return i
    }
    )),
    n.d(t, "i", (function() {
        return a
    }
    )),
    n.d(t, "c", (function() {
        return s
    }
    )),
    n.d(t, "s", (function() {
        return c
    }
    )),
    n.d(t, "m", (function() {
        return u
    }
    )),
    n.d(t, "r", (function() {
        return h
    }
    )),
    n.d(t, "d", (function() {
        return p
    }
    )),
    n.d(t, "u", (function() {
        return d
    }
    )),
    n.d(t, "p", (function() {
        return E
    }
    )),
    n.d(t, "l", (function() {
        return _
    }
    )),
    n.d(t, "h", (function() {
        return O
    }
    )),
    n.d(t, "t", (function() {
        return T
    }
    )),
    n.d(t, "k", (function() {
        return I
    }
    )),
    n.d(t, "a", (function() {
        return b
    }
    )),
    n.d(t, "b", (function() {
        return y
    }
    )),
    n.d(t, "n", (function() {
        return m
    }
    )),
    n.d(t, "e", (function() {
        return A
    }
    )),
    n.d(t, "q", (function() {
        return C
    }
    )),
    n.d(t, "g", (function() {
        return S
    }
    ));
    var r = {
        PAUSED: "paused",
        SETTINGS: "settings",
        WHITELIST: "whitelist",
        NUM_OF_BLOCKS: "numOfBlocks",
        TOTAL_BLOCKS_BY_TYPE: "totalBlocksByType",
        BLOCKED_SITES_COUNTER: "counterBlockedSites",
        UNBLOCKED_SITES_COUNTER: "counterUnBlockedSites",
        OVERLAY_BLOCKED_LIST: "overlayBlockedList",
        USER: "user",
        LAST_USER_UPDATE_DATE: "lastUserUpdateDate",
        BLOCKED_ELEMENTS: "blockedElements",
        BLOCKED_ELEMENTS_PROMO: "blockedElementsPromo",
        BLOCKED_ELEMENTS_COUNT: "blockedElementsCount",
        DEFAULT_WHITELIST: "defaultWhitelist",
        POPULAR_SITES_FOR_BLOCK_ELEMENTS: "popularSitesForBlockElements",
        DEFAULT_WHITELIST_LAST_UPDATE: "defaultWhitelistLastUpdate",
        POPULAR_SITES_FOR_BLOCK_ELEMENTS_LAST_UPDATE: "popularSitesForBlockElementsLastUpdate",
        LAST_ALIVE_EVENT_SENT_AT: "lastAliveEventSentAt",
        AD_BLOCKING: "adBlocking",
        GENERAL_DATA: "generalData",
        PROMO_COUPON: "promoCoupon",
        WHATS_NEW: "whatsNew",
        DEFAULT_FACEBOOK_CONFIG: "facebookConfig",
        DEFAULT_SEGMENT_CONFIG: "segmentConfig",
        PUSH_NOTIFICATIONS_BLOCKER_PROMO: "pushNotificationBlockerPromo",
        RATING_STAR_CLICK: "ratingStarClick",
        RATING_US_MODAL: "ratingUsModal",
        FONT_STYLE: "fontStyle",
        RDID: "randid",
        FIRST_POPUP_BLOCK: "isFirstBlockAdds",
        PIN_TASKBAR_DATA: "pinTaskbarData",
        SPECIAL_OFFER_MODAL: "specialOfferModal"
    }
      , o = {
        CATEGORIES: {
            OPTIONS: "Options_menu",
            MAIN_MENU: "Menu",
            CHECKBOX: "Checkbox",
            CTA: "Button CTA",
            NAVBAR: "Navigation bar",
            MISSING: "Missing Ad",
            NOTIFICATION: "Notification",
            RATING: "Rating",
            EXTENSION: "Extension",
            REPORTS: "Reports",
            BLOCK_ELEMENT: "Block Element",
            COOKIE_CRUMBLER: "Cookie Crumbler",
            INSITE_NOTIFICATIONS: "In-site Notifications"
        },
        ACTIONS: {
            CLICK: "Click",
            VIEWED: "Viewed",
            BLOCKED_POPUP: "Popup blocked",
            DAILY_BLOCKS: "Popups blocked per day",
            BLOCKED_ELEMENT_SITE: "Blocked element site URL"
        }
    }
      , i = {
        GA_EVENT: "trackEvent",
        UPDATE_TAB_BADGE: "updateTabBadgeText",
        UPDATE_COUNTS: "updateBlockCounts",
        CREATE_CONTEXT_MENUS: "createIconContextMenu",
        SEND_ANALYTICS_EVENT: "sendAnalyticsEvent",
        SYNC_EXTENSION_ANALYTICS_DATA: "syncExtensionAnalyticsData",
        KEEN_IO: "KeenIO",
        ALLOW_ALWAYS: "allowAlways",
        RESTORE_BLOCKING: "restoreBlocking",
        REQUEST_TAB_URL: "requestTabUrl",
        OPEN_URL: "openUrl",
        UPDATE_RATING: "update-rating",
        GET_USER: "getUser",
        UPDATE_USER_INFO: "updateUserInfo",
        SUBSCRIPTION_SUCCESS: "subscription-success",
        LOGIN: "login",
        LOGOUT: "logout",
        START_BLOCKED_ELEMENTS: "start-blocked-elements",
        MANUAL_REMOVE_OVERLAY: "manual-remove-overlay",
        ADD_UNBLOCK_ALL_ELEMENTS_MENU: "add-unblock-all-elements-menu",
        REMOVE_UNBLOCK_ALL_ELEMENTS_MENU: "remove-unblock-all-elements-menu",
        UNBLOCK_ALL_ELEMENTS: "unblock-all-elements",
        GET_DEFAULT_WHITELIST: "get-default-whitelist",
        GET_POPULAR_SITES_FOR_BLOCK_ELEMENTS: "get-popular-sites-for-block-elements",
        INSERT_COOKIE_FILTERS: "insert-cookie-filters",
        ACTIVATE_CC_OR_SHOW_PROMO: "activate-cc-or-show-promo",
        SHOW_COOKIE_CRUMBLER_HOOK: "show-cookie-crumbler-hook",
        HIDE_COOKIE_CRUMBLER_PROMO: "hide-cookie-crumbler-promo",
        SHOW_TRIAL_PROMO: "show-trial-promo",
        CHECK_PROMO_MESSAGE: "check-promo-message",
        SHOW_COUPON_MESSAGE: "show-coupon-message",
        OPT_IN_AGREE: "opt-in-agree",
        OPT_IN_DISAGREE: "opt-in-disagree",
        SEND_ALIVE_EVENT: "send-alive-event",
        HIDE_AD_ELEMENT: "hide-ad-element",
        COUNT_AD_ELEMENT: "count-ad-element",
        UPDATE_SOCIAL_BLOCKER_CONFIG: "update-social-blocker-config",
        UPDATE_SEGMENT_DATA: "update-segment-data",
        UPDATE_BLOCK_COUNT: "update-block-count",
        UPDATE_UNBLOCK_COUNT: "update-unblock-count",
        COUNT_COOKIE_MESSAGES: "count-cookie-messages",
        TOGGLE_PUSH_NOTIFICATIONS_BLOCKING: "toggle-push-notification-blocking",
        INJECT_FONTS: "inject-font",
        FETCH_SETTINGS: "fetch-settings",
        UPDATE_REMOTE_SETTINGS: "update-remote-settings",
        UPDATE_REMOTE_AND_LOCAL_SETTINGS: "update-remote-and-local-settings",
        REQUEST_TRIAL_STATUS: "request-trial-status",
        EXTENSION_IS_PINNED: "extension-is-pinned",
        REQUEST_EXTENSION_ID: "request-extension-id",
        UPDATE_EXTENSION_ID: "update-extension-id",
        UPDATE_SCRIPT_BLOCKERS_STATE: "update-script-blockers-state",
        SETTINGS_CHANGED: "settings-changed",
        UPDATE_SETTINGS: "update-settings",
        EXTENSION_IS_ALLOWED_INCOGNITO: "extension-is-allowed-incognito",
        GET_ALL_EXTENSION_PERMISSIONS_GRANTED: "get-all-extension-permissions-granted",
        REQUEST_OPTIONAL_PERMISSIONS: "request-optional-permissions",
        ON_EXTENSION_ENABLED_STATE_UPDATED: "extension-enabled-state-updated"
    }
      , a = {
        POPUPS: "popups",
        OVERLAYS: "overlays",
        COOKIE_CRUMBLER: "cookieCrumbler",
        FACEBOOK: "facebookAdds",
        PUSH_NOTIFICATION: "pushNotification"
    }
      , s = {
        COOKIE: "images/cookie-animation.json",
        FACEBOOK_END: "images/endTrialFacebookAnimation.json",
        PIN: "images/pinAnimation.json"
    }
      , c = {
        BLOCK_ELEMENT_ROOT: "pb-block-element-root",
        LIMIT_NOTIFICATION_ROOT: "pb-limit-notification-root",
        PROMO_ROOT: "pb-feature-promo-root",
        COOKIE_PROMO_ROOT: "pb-cookie-promo-root",
        MESSAGE_NOTIFICATION_ROOT: "pb-message-notification-root"
    }
      , u = {
        CHROME_EXTENTION_MANAGER: "chrome://extensions",
        FF_EXTENTION_MANAGER: "about:addons",
        WEB_APP: "https://app.poperblocker.com",
        CHECKOUT_YEARLY_PLAN: "https://app.poperblocker.com/checkout?selectedPlan=Yearly",
        ANALYTICS_APP: "https://analytics.poperblocker.com",
        VALID_MESSAGE_DOMAINS: ["poperblocker.com"],
        THANK_YOU_PAGE_CH: "https://poperblocker.com/welcome",
        THANK_YOU_PAGE_FF: "https://poperblocker.com/welcome-firefox",
        PRIVACY_POLICY_CH: "https://poperblocker.com/privacy/",
        PRIVACY_POLICY_FF: "https://addons.mozilla.org/en-US/firefox/addon/poper-blocker-pop-up-blocker/privacy/",
        UNINSTALL_PAGE_CH: "https://poperblocker.com/uninstall/?",
        UNINSTALL_PAGE_FF: "https://poperblocker.com/uninstall-firefox/?",
        FEEDBACK_PAGE: "https://poperblocker.com/feedback.html?from=ext",
        CONTACT_PAGE: "https://poperblocker.com/contact-form.html",
        CONTRIBUTE_PAGE: "https://poperblocker.com/contribute?utm_source=Extension_Popup",
        GOOGLE_FORM: "https://forms.gle/DfoB6hyd7MFtDPP8A",
        APPSTORE_CH: "https://chrome.google.com/webstore/detail/pop-up-blocker-for-chrome/bkkbcggnhapdmkeljlodobbkopceiche",
        APPSTORE_FF: "https://addons.mozilla.org/en-US/firefox/addon/poper-blocker-pop-up-blocker/",
        REVIEW_CH: "https://chrome.google.com/webstore/detail/pop-up-blocker-for-chrome/bkkbcggnhapdmkeljlodobbkopceiche/reviews",
        REVIEW_FF: "https://addons.mozilla.org/en-US/firefox/addon/poper-blocker-pop-up-blocker/reviews/add",
        TWITTER_SHARE: "https://twitter.com/intent/tweet?hashtags=popups&original_referer=https%3A%2F%2Fpoperblocker.com%3Fref%3Dfb_pp_share&related=socialmediahats&text=I'm%20using%20poper%20blocker%20to%20enjoy%20a%20popup%20free%20browsing%20experience%20pic.twitter.com%2FniqVgqfmAw&url=https%3A%2F%2Fgoo.gl%2FryoaEn&via=poper_blocker",
        FACEBOOK_SHARE: "https://www.facebook.com/dialog/share?app_id=1911035589168170&display=popup&href=https%3A%2F%2Fpoperblocker.com%3Fref%3Dfb_pp_share%3Fhl%3Den&hashtag=%23For_No_More_Popups_Click_Below"
    }
      , l = u.WEB_APP + "/api/v1"
      , f = "" + u.ANALYTICS_APP
      , h = "poper-blocked"
      , p = {
        OVERLAY_CHECK: "https://api2.poperblocker.com/view/update",
        ANALYTICS_SEND_EVENT: f + "/event",
        GET_USER: l + "/user",
        GET_USER_SEGMENT: l + "/segment",
        LOGOUT: l + "/auth/logout",
        MANAGE_SUBSCRIPTION: l + "/subscriptions",
        ANALYTIC_INFO: l + "/analytics/sync",
        WHITELIST: l + "/whitelist",
        POPULAR_SITES_FOR_BLOCK_ELEMENTS: l + "/mostPopularSitesForBlockElements",
        PROMO_COUPON: l + "/promoCoupon",
        SETTINGS: l + "/settings",
        REFRESH: l + "/auth/refresh",
        SOCIALBLOCKER_CONFIG: l + "/socialblocker/config",
        ADS_BLOCKER_CONFIG: l + "/adsblocker/config",
        TRACKERS_BLOCKER_CONFIG: l + "/trackersblocker/config"
    }
      , d = 288e5
      , E = 864e5
      , _ = 36e5
      , O = 3
      , T = 1e3
      , I = 2147483646
      , b = {
        adText: /((^|\s)(([aA][dD]\s)|advertisement|sponsored))/i,
        adChoicesIcon: /(adchoices)/i,
        containerElementTags: ["iframe", "div", "section", "td", "ins"],
        adHintRegex: /((^|\s|_|\.|-)([aA][dD]([sS])?|[a-zA-Z]*Ad(s)?|adtech|adtag|dfp|darla|adv|advertisement|(b|B)anner|adsbygoogle|adwrap|adzerk|safeframe|300[xX]250|160[xX]600|728[xX]90)(\s|$|_|\.|-|[A-Z0-9]))/,
        elementMinSize: 100,
        textMinSize: 30
    }
      , y = {
        ANALYTICS_INFO_KEY: "ANALYTICS_INFO",
        ANALYTICS_PLATFORM: "Extension",
        ANALYTICS_PRODUCT: "PoperBlocker",
        ANALYTICS_RESOURCE_TYPES: {
            PAID: "PAID",
            ORGANIC: "ORGANIC"
        },
        ANALYTICS_EVENT_TYPES: {
            EXTENSION_INSTALL: "EXTENSION_INSTALL",
            EXTENSION_UNINSTALL: "EXTENSION_UNINSTALL",
            EXTENSION_UPGRADE: "EXTENSION_UPGRADE",
            EXTENSION_INSTALL_GENERAL: "EXTENSION_INSTALL_GENERAL",
            EXTENSION_OPT_IN_VIEWED: "EXTENSION_OPT_IN_VIEWED",
            EXTENSION_OPT_IN_CLICKED_AGREE: "EXTENSION_OPT_IN_CLICKED_AGREE",
            EXTENSION_OPT_OUT_CLICKED_AGREE: "EXTENSION_OPT_OUT_CLICKED_AGREE",
            POPUP_BLOCKED: "POPUP_BLOCKED",
            ALLOW_POPUPS: "ALLOW_POPUPS",
            DID_WE_MISS_ONE: "DID_WE_MISS_ONE",
            EMAIL_STATUS_MISSED_POPUP: "EMAIL_STATUS_MISSED_POPUP",
            FAVICON_CLICKED: "FAVICON_CLICKED",
            ELEMENT_BLOCKED: "ELEMENT_BLOCKED",
            OVERLAY_BLOCKED: "OVERLAY_BLOCKED",
            OVERLAY_DETECTED: "OVERLAY_DETECTED",
            REMOVE_OVERLAY_FOREVER: "REMOVE_OVERLAY_FOREVER",
            UNDO_OVERLAY_REMOVAL: "UNDO_OVERLAY_REMOVAL",
            ELEMENT_BLOCKED_UNDO: "ELEMENT_BLOCKED_UNDO",
            ELEMENT_BLOCKED_SAVE: "ELEMENT_BLOCKED_SAVE",
            BLOCK_ELEMENT_PROMOTION_NOTIFICATION_VIEW: "BLOCK_ELEMENT_PROMOTION_NOTIFICATION_VIEW",
            BLOCK_ELEMENT_FREE_BLOCKS: "BLOCK_ELEMENT_FREE_BLOCKS",
            BLOCK_ELEMENT_NO_BLOCKS_VIEW: "BLOCK_ELEMENT_NO_BLOCKS_VIEW",
            BLOCK_ELEMENT_UNBLOCK_ELEMENTS: "BLOCK_ELEMENT_UNBLOCK_ELEMENTS",
            WHITELIST_ADD: "WHITELIST_ADD",
            WHITELIST_REMOVE: "WHITELIST_REMOVE",
            SETTINGS_PAGE_VIEW: "SETTINGS_PAGE_VIEW",
            COOKIE_CRUMBLER_PROMOTION_NOTIFICATION_VIEW: "COOKIE_CRUMBLER_PROMOTION_NOTIFICATION_VIEW",
            INSITE_NOTIFICATION_PROMOTION_NOTIFICATION_VIEW: "INSITE_NOTIFICATION_PROMOTION_NOTIFICATION_VIEW",
            COOKIE_CRUMBLER_TRIAL_START: "COOKIE_CRUMBLER_TRIAL_START",
            COOKIE_CRUMBLER_HIDE_FOREVER: "COOKIE_CRUMBLER_HIDE_FOREVER",
            COOKIE_CRUMBLER_IN_TRIAL: "COOKIE_CRUMBLER_IN_TRIAL",
            COOKIE_CRUMBLER_END_OF_TRIAL: "COOKIE_CRUMBLER_END_OF_TRIAL",
            COOKIE_CRUMBLER_IN_TRIAL_CLICK: "COOKIE_CRUMBLER_IN_TRIAL_CLICK",
            COOKIE_CRUMBLER_USE_CASE_CLOSE: "COOKIE_CRUMBLER_USE_CASE_CLOSE",
            COOKIE_CRUMBLER_TRIAL_PROMOTION_NOTIFICATION_CLICK: "COOKIE_CRUMBLER_TRIAL_PROMOTION_NOTIFICATION_CLICK",
            COOKIE_CRUMBLER_USE_CASE_VIEW: "COOKIE_CRUMBLER_USE_CASE_VIEW",
            COOKIE_CRUMBLER_USE_CASE_CLICK: "COOKIE_CRUMBLER_USE_CASE_CLICK",
            ALIVE: "ALIVE",
            SOCIAL_BLOCKER_TRIAL_PROMOTION_NOTIFICATION_CLICK: "SOCIAL_BLOCKER_TRIAL_PROMOTION_NOTIFICATION_CLICK",
            SOCIAL_BLOCKER_REMOVE_ADS_FOR_GOOD_CLICK: "SOCIAL_BLOCKER_REMOVE_ADS_FOR_GOOD_CLICK",
            SOCIAL_BLOCKER_TRIAL_OVER_PROMOTION_VIEW: "SOCIAL_BLOCKER_TRIAL_OVER_PROMOTION_VIEW",
            IN_PRODUCT_PROMOTION_DIALOG_CLICK: "IN_PRODUCT_PROMOTION_DIALOG_CLICK",
            IN_PRODUCT_PROMOTION_DIALOG_VIEW: "IN_PRODUCT_PROMOTION_DIALOG_VIEW",
            IN_SITE_PUSH_NOTIFICATION_ALLOW_PERMISSIONS: "IN_SITE_PUSH_NOTIFICATION_ALLOW_PERMISSIONS",
            IN_SITE_PUSH_NOTIFICATION_DENY_PERMISSIONS: "IN_SITE_PUSH_NOTIFICATION_DENY_PERMISSIONS",
            IN_SITE_PUSH_NOTIFICATION_ON: "IN_SITE_PUSH_NOTIFICATION_ON",
            IN_SITE_PUSH_NOTIFICATION_OFF: "IN_SITE_PUSH_NOTIFICATION_OFF",
            WHITELIST_SITE_ON: "WHITELIST_SITE_ON",
            WHITELIST_SITE_OFF: "WHITELIST_SITE_OFF",
            HIDE_MANUALLY_CLICKED: "HIDE_MANUALLY_CLICKED",
            BLOCK_ALL_DISTRACTIONS_BUTTON_CLICK: "BLOCK_ALL_DISTRACTIONS_BUTTON_CLICK",
            HIDE_ELEMENT_EXTENSION_BUTTON_CLICK: "HIDE_ELEMENT_EXTENSION_BUTTON_CLICK",
            REMOVE_OVERLAY_EXTENSION_BUTTON_CLICK: "REMOVE_OVERLAY_EXTENSION_BUTTON_CLICK",
            REPORT_MISSED_EXTENSION_BUTTON_CLICK: "REPORT_MISSED_EXTENSION_BUTTON_CLICK",
            EXPAND_NOT_BLOCKED_DROPDOWN_CLICK: "EXPAND_NOT_BLOCKED_DROPDOWN_CLICK",
            RATE_US_DIALOG_VIEW: "RATE_US_DIALOG_VIEW",
            RATE_US_DIALOG_CLICK: "RATE_US_DIALOG_CLICK",
            RATE_US_DIALOG_RESULT_VIEW: "RATE_US_DIALOG_RESULT_VIEW",
            SEGMENTATION_PROMOTION_VIEW: "SEGMENTATION_PROMOTION_VIEW",
            SEGMENTATION_PROMOTION_CLICK: "SEGMENTATION_PROMOTION_CLICK",
            WHATS_NEW_POPUP_VIEW: "WHATS_NEW_POPUP_VIEW",
            WHATS_NEW_POPUP_CTA_CLICK: "WHATS_NEW_POPUP_CTA_CLICK",
            ADBLOCKER_PROMOTION_VIEW: "ADBLOCKER_PROMOTION_VIEW",
            ADBLOCKER_PROMOTION_CLICK: "ADBLOCKER_PROMOTION_CLICK",
            MONETIZATION_NOIFICATION_VIEW: "MONETIZATION_NOIFICATION_VIEW",
            MONETIZATION_NOIFICATION_CTA_CLICK: "MONETIZATION_NOIFICATION_CTA_CLICK",
            MONETIZATION_NOIFICATION_COPY_CODE_CLICK: "MONETIZATION_NOIFICATION_COPY_CODE_CLICK",
            SOCIAL_BLOCKER_FEED_PROMOTION_VIEW: "SOCIAL_BLOCKER_FEED_PROMOTION_VIEW",
            SOCIAL_BLOCKER_FEED_PROMOTION_OPEN: "SOCIAL_BLOCKER_FEED_PROMOTION_OPEN",
            SOCIAL_BLOCKER_INTRIAL_PROMOTION_VIEW: "SOCIAL_BLOCKER_INTRIAL_PROMOTION_VIEW",
            SOCIAL_BLOCKER_FEED_PROMOTION_START_TRIAL: "SOCIAL_BLOCKER_FEED_PROMOTION_START_TRIAL",
            FIRST_POPUP_BLOCKED_NOTIFICATION_VIEW: "FIRST_POPUP_BLOCKED_NOTIFICATION_VIEW",
            FIRST_POPUP_BLOCKED_NOTIFICATION_CLICKED: "FIRST_POPUP_BLOCKED_NOTIFICATION_CLICKED",
            CLICK_SOCIAL_BLOCKER_IN_FEED_BANNER_ON_TRIAL: "CLICK_SOCIAL_BLOCKER_IN_FEED_BANNER_ON_TRIAL",
            CLICK_SOCIAL_BLOCKER_PROMOTION_DISCOUNT: "CLICK_SOCIAL_BLOCKER_PROMOTION_DISCOUNT",
            CLICK_COOKIE_PROMOTION_DISCOUNT: "CLICK_COOKIE_PROMOTION_DISCOUNT",
            CLICK_BLOCK_POPUPS_TOGGLE_ON_CONTROL_PANEL: "CLICK_BLOCK_POPUPS_TOGGLE_ON_CONTROL_PANEL",
            CLICK_BLOCK_POPUPS_TOGGLE_OFF_CONTROL_PANEL: "CLICK_BLOCK_POPUPS_TOGGLE_OFF_CONTROL_PANEL",
            CLICK_BLOCK_OVERLAY_TOGGLE_ON_CONTROL_PANEL: "CLICK_BLOCK_OVERLAY_TOGGLE_ON_CONTROL_PANEL",
            CLICK_BLOCK_OVERLAY_TOGGLE_OFF_CONTROL_PANEL: "CLICK_BLOCK_OVERLAY_TOGGLE_OFF_CONTROL_PANEL",
            CLICK_BLOCK_COOKIES_TOGGLE_ON_CONTROL_PANEL: "CLICK_BLOCK_COOKIES_TOGGLE_ON_CONTROL_PANEL",
            CLICK_BLOCK_COOKIES_TOGGLE_OFF_CONTROL_PANEL: "CLICK_BLOCK_COOKIES_TOGGLE_OFF_CONTROL_PANEL",
            CLICK_BLOCK_SOCIAL_TOGGLE_ON_CONTROL_PANEL: "CLICK_BLOCK_SOCIAL_TOGGLE_ON_CONTROL_PANEL",
            CLICK_BLOCK_SOCIAL_TOGGLE_OFF_CONTROL_PANEL: "CLICK_BLOCK_SOCIAL_TOGGLE_OFF_CONTROL_PANEL",
            CLICK_PUSH_NOTIFICATIONS_TOGGLE_ON_CONTROL_PANEL: "CLICK_PUSH_NOTIFICATIONS_TOGGLE_ON_CONTROL_PANEL",
            CLICK_PUSH_NOTIFICATIONS_TOGGLE_OFF_CONTROL_PANEL: "CLICK_PUSH_NOTIFICATIONS_TOGGLE_OFF_CONTROL_PANEL",
            CLICK_ADS_BLOCKER_TOGGLE_ON_CONTROL_PANEL: "CLICK_ADS_BLOCKER_TOGGLE_ON_CONTROL_PANEL",
            CLICK_ADS_BLOCKER_TOGGLE_OFF_CONTROL_PANEL: "CLICK_ADS_BLOCKER_TOGGLE_OFF_CONTROL_PANEL",
            CLICK_ALL_SETTINGS_CONTROL_PANEL: "CLICK_ALL_SETTINGS_CONTROL_PANEL",
            TURN_OFF_EXTENSION_SCREEN_VIEW: "TURN_OFF_EXTENSION_SCREEN_VIEW",
            CLICK_ACTIVATE_EXTENSION_TURN_OFF_SCREEN: "CLICK_ACTIVATE_EXTENSION_TURN_OFF_SCREEN",
            PIN_TASKBAR_POPUP_VIEW: "PIN_TASKBAR_POPUP_VIEW",
            PIN_TASKBAR_POPUP_DISMISS_CLICK: "PIN_TASKBAR_POPUP_DISMISS_CLICK",
            PANEL_SPECIAL_OFFER_X_CLICK: "PANEL_SPECIAL_OFFER_X_CLICK",
            PANEL_SPECIAL_OFFER_MAYBELATER_CLICK: "PANEL_SPECIAL_OFFER_MAYBELATER_CLICK",
            PANEL_SPECIAL_OFFER_GOPRO_CLICK: "PANEL_SPECIAL_OFFER_GOPRO_CLICK",
            PANEL_SPECIAL_OFFER_GOPRO_VIEW: "PANEL_SPECIAL_OFFER_GOPRO_VIEW",
            TRIAL_MIGRATION: "TRIAL_MIGRATION"
        }
    }
      , m = "Ry0wRkNSNkVHN0JQ"
      , A = "Ull6emJSNUFUSWlKUVJEd2JrNXJrQQ=="
      , C = {
        CONTENT_SETTINGS: "contentSettings",
        ALL_URLS: "<all_urls>",
        BLOCK: "block",
        ASK: "ask"
    }
      , S = {
        HIDDEN_PROPERTY: "{display: none !important ; visibility : hidden !important ; opacity : 0 !important}",
        DISPLAY: "display",
        VISIBILITY: "visibility",
        OPACITY: "opacity"
    }
}
, , function(e, t, n) {
    "use strict";
    n.d(t, "h", (function() {
        return getBrowser
    }
    )),
    n.d(t, "l", (function() {
        return getI18N
    }
    )),
    n.d(t, "m", (function() {
        return getI18NWithParams
    }
    )),
    n.d(t, "q", (function() {
        return isDomainInList
    }
    )),
    n.d(t, "B", (function() {
        return sendGAEvent
    }
    )),
    n.d(t, "C", (function() {
        return sendMessageToWorker
    }
    )),
    n.d(t, "E", (function() {
        return sendToWorker
    }
    )),
    n.d(t, "n", (function() {
        return getManifest
    }
    )),
    n.d(t, "o", (function() {
        return getTodayBlockCount
    }
    )),
    n.d(t, "s", (function() {
        return isFireFoxIncognito
    }
    )),
    n.d(t, "D", (function() {
        return sendToActiveTab
    }
    )),
    n.d(t, "d", (function() {
        return copyTextToClipboard
    }
    )),
    n.d(t, "i", (function() {
        return getCurrentTab
    }
    )),
    n.d(t, "e", (function() {
        return enableProFetures
    }
    )),
    n.d(t, "k", (function() {
        return getDefaultSocialBlockerConfig
    }
    )),
    n.d(t, "L", (function() {
        return updateSocialBlockerConfig
    }
    )),
    n.d(t, "K", (function() {
        return updateSegmentData
    }
    )),
    n.d(t, "I", (function() {
        return updateLocalSettings
    }
    )),
    n.d(t, "J", (function() {
        return updateRemoteSettingsData
    }
    )),
    n.d(t, "f", (function() {
        return fetchRemoteSettingsData
    }
    )),
    n.d(t, "H", (function() {
        return updateLocalAndRemoteFeatureSettings
    }
    )),
    n.d(t, "y", (function() {
        return onStartCookieTrial
    }
    )),
    n.d(t, "F", (function() {
        return timeToString
    }
    )),
    n.d(t, "z", (function() {
        return parseTime
    }
    )),
    n.d(t, "v", (function() {
        return isPremium
    }
    )),
    n.d(t, "w", (function() {
        return msToDays
    }
    )),
    n.d(t, "t", (function() {
        return isKeyExists
    }
    )),
    n.d(t, "j", (function() {
        return getDaysPassed
    }
    )),
    n.d(t, "a", (function() {
        return backgroundSafeExec
    }
    )),
    n.d(t, "u", (function() {
        return isPermissionGranted
    }
    )),
    n.d(t, "g", (function() {
        return getAllPermissionGranted
    }
    )),
    n.d(t, "A", (function() {
        return requestPermission
    }
    )),
    n.d(t, "b", (function() {
        return checkIsPinned
    }
    )),
    n.d(t, "G", (function() {
        return updateBlockedCounter
    }
    )),
    n.d(t, "c", (function() {
        return cleanDomain
    }
    )),
    n.d(t, "p", (function() {
        return isAllowedIncognitoAccess
    }
    )),
    n.d(t, "r", (function() {
        return isExtensionEnabled
    }
    )),
    n.d(t, "x", (function() {
        return onPostLogout
    }
    ));
    var r = n(0)
      , o = n(15)
      , i = n(12)
      , a = n(7)
      , s = n(10)
      , c = n(17)
      , u = n(8)
      , l = n(16)
      , f = n(19)
      , __awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }
      , __generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }
      , getBrowser = function() {
        return /firefox/i.test(navigator.userAgent) ? "FF" : "CH"
    }
      , getI18N = function(e, t) {
        return chrome.i18n.getMessage(e) || chrome.i18n.getMessage(t || e) || e
    }
      , getI18NWithParams = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
        return t.reduce((function(e, t) {
            return e.replace("%s", t)
        }
        ), getI18N(e))
    }
      , isDomainInList = function(e, t) {
        t = t || [];
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            if (new RegExp("\\b[(www\\.)|.*.]?" + r + "\\b").test(e))
                return !0
        }
        return !1
    }
      , sendGAEvent = function(e, t, n, o) {
        return new Promise((function(i) {
            chrome.runtime.sendMessage({
                name: r.v.GA_EVENT,
                category: e,
                action: t,
                label: n,
                isCount: o
            }, (function() {
                return i()
            }
            ))
        }
        ))
    }
      , sendMessageToWorker = function(e) {
        return new Promise((function(t) {
            u.BrowserAPI.runtime.sendMessage(e, (function(e) {
                return t(e)
            }
            ))
        }
        ))
    }
      , sendToWorker = function(e) {
        return new Promise((function(t) {
            chrome.runtime.sendMessage(e, (function(e) {
                return t(e)
            }
            ))
        }
        ))
    }
      , getManifest = function() {
        return chrome.runtime.getManifest()
    }
      , getTodayBlockCount = function(e, t) {
        var n, r, o, i, a = (t || {})[e];
        return a && (n = a.currentTimeRange,
        r = new Date,
        o = new Date(n[0]),
        i = new Date(n[1]),
        r >= o && r < i) ? a.todayCount : 0
    }
      , isFireFoxIncognito = function() {
        return new Promise((function(e) {
            if ("FF" != getBrowser())
                return e(!1);
            chrome.tabs.query({
                currentWindow: !0,
                active: !0
            }, (function(t) {
                var n = t[0].id;
                chrome.tabs.executeScript(n, {
                    code: "isI=chrome.extension.inIncognitoContext; isI;"
                }, (function(t) {
                    return chrome.runtime.lastError ? e(!1) : e(!(!t || !Array.isArray(t)) && t[0])
                }
                ))
            }
            ))
        }
        ))
    }
      , sendToActiveTab = function(e, t) {
        chrome.tabs.query({
            active: !0,
            lastFocusedWindow: !0
        }, (function(n) {
            var r = n && n[0] && n[0].id;
            r && chrome.tabs.sendMessage(r, {
                name: e,
                data: t || ""
            })
        }
        ))
    }
      , copyTextToClipboard = function(e) {
        var t = document.createElement("textarea");
        t.style.position = "fixed",
        t.style.top = "0",
        t.style.left = "0",
        t.style.width = "2em",
        t.style.height = "2em",
        t.style.padding = "0",
        t.style.border = "none",
        t.style.outline = "none",
        t.style.boxShadow = "none",
        t.style.background = "transparent",
        t.value = e,
        document.body.appendChild(t),
        t.select(),
        document.execCommand("copy"),
        document.body.removeChild(t)
    }
      , getCurrentTab = function() {
        return new Promise((function(e) {
            chrome.tabs.query({
                active: !0,
                lastFocusedWindow: !0
            }, (function(t) {
                e(t[0])
            }
            ))
        }
        ))
    }
      , enableProFetures = function() {
        l.a.setFeaturesEnabled(Object(a.b)(), !0)
    }
      , getDefaultSocialBlockerConfig = function() {
        return __awaiter(void 0, void 0, void 0, (function() {
            var e, t, n, o;
            return __generator(this, (function(i) {
                switch (i.label) {
                case 0:
                    return [4, fetch(r.e.SOCIALBLOCKER_CONFIG)];
                case 1:
                    return 200 !== (e = i.sent()).status ? [3, 3] : [4, e.json()];
                case 2:
                    t = i.sent(),
                    n = {
                        config: t,
                        updateTime: Date.now()
                    },
                    chrome.storage.local.set(((o = {})[r.h.DEFAULT_FACEBOOK_CONFIG] = n,
                    o)),
                    i.label = 3;
                case 3:
                    return [2]
                }
            }
            ))
        }
        ))
    }
      , updateSocialBlockerConfig = function() {
        return __awaiter(void 0, void 0, void 0, (function() {
            return __generator(this, (function(e) {
                return chrome.storage.local.get(r.h.DEFAULT_FACEBOOK_CONFIG, (function(e) {
                    return __awaiter(void 0, void 0, void 0, (function() {
                        var t;
                        return __generator(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return t = e[r.h.DEFAULT_FACEBOOK_CONFIG],
                                Date.now() - t.updateTime >= 4 * r.r ? [4, getDefaultSocialBlockerConfig()] : [3, 2];
                            case 1:
                                return n.sent(),
                                [2];
                            case 2:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                )),
                [2]
            }
            ))
        }
        ))
    }
      , updateSegmentData = function() {
        return __awaiter(void 0, void 0, void 0, (function() {
            return __generator(this, (function(e) {
                return chrome.storage.local.get([r.h.DEFAULT_SEGMENT_CONFIG], (function(e) {
                    return __awaiter(void 0, void 0, void 0, (function() {
                        var t, n, i, a, s, c, u, l;
                        return __generator(this, (function(f) {
                            switch (f.label) {
                            case 0:
                                return t = e[r.h.DEFAULT_SEGMENT_CONFIG],
                                [4, Object(o.a)()];
                            case 1:
                                return (null == (n = f.sent()) ? void 0 : n.uuid) ? [4, fetch(r.e.GET_USER_SEGMENT, {
                                    headers: {
                                        id: n.uuid
                                    }
                                })] : [3, 4];
                            case 2:
                                return 200 !== (i = f.sent()).status ? [3, 4] : [4, i.json()];
                            case 3:
                                a = f.sent(),
                                s = null !== (l = null == t ? void 0 : t.lastDisplayTime) && void 0 !== l ? l : Date.now() - 31 * r.y,
                                c = {
                                    config: a,
                                    updateTime: Date.now(),
                                    lastDisplayTime: s,
                                    lastUpdateTime: Date.now()
                                },
                                chrome.storage.local.set(((u = {})[r.h.DEFAULT_SEGMENT_CONFIG] = c,
                                u)),
                                f.label = 4;
                            case 4:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                )),
                [2]
            }
            ))
        }
        ))
    }
      , updateLocalSettings = function(e) {
        return __awaiter(void 0, void 0, void 0, (function() {
            var t, n, o;
            return __generator(this, (function(a) {
                switch (a.label) {
                case 0:
                    return [4, i.a.get(r.h.SETTINGS)];
                case 1:
                    for (o in t = a.sent(),
                    n = e.features)
                        t[o] = n[o] || !1;
                    return e.features.overlays && !t.isOptIn && (t.isOptIn = !0),
                    t.detectOverlays = n.overlays,
                    [4, i.a.set(r.h.SETTINGS, t)];
                case 2:
                    return a.sent(),
                    e.whitelist ? [4, i.a.set(r.h.WHITELIST, e.whitelist)] : [3, 4];
                case 3:
                    a.sent(),
                    a.label = 4;
                case 4:
                    return e.blockedElements ? [4, i.a.set(r.h.BLOCKED_ELEMENTS, e.blockedElements)] : [3, 6];
                case 5:
                    a.sent(),
                    a.label = 6;
                case 6:
                    return [2]
                }
            }
            ))
        }
        ))
    }
      , updateRemoteSettingsData = function() {
        return __awaiter(void 0, void 0, void 0, (function() {
            return __generator(this, (function(e) {
                return chrome.storage.local.get([r.h.BLOCKED_ELEMENTS, r.h.SETTINGS, r.h.WHITELIST, r.h.USER], (function(e) {
                    return __awaiter(void 0, void 0, void 0, (function() {
                        var t, n, i, c, u, l, f, h;
                        return __generator(this, (function(p) {
                            switch (p.label) {
                            case 0:
                                return t = e[r.h.WHITELIST],
                                n = e[r.h.BLOCKED_ELEMENTS],
                                i = e[r.h.USER],
                                c = e[r.h.SETTINGS],
                                u = null == i ? void 0 : i.isPremium,
                                l = getManifest().version,
                                f = {
                                    extensionVersion: l,
                                    features: {
                                        popups: void 0 === c.popups || c.popups,
                                        overlays: c.detectOverlays,
                                        hideElements: void 0 === c.hideElements || c.hideElements,
                                        pushNotification: !!c.pushNotification && c.pushNotification
                                    },
                                    whitelist: t || [],
                                    blockedElements: n || {}
                                },
                                Object(a.b)().forEach((function(e) {
                                    return __awaiter(void 0, void 0, void 0, (function() {
                                        var t, n;
                                        return __generator(this, (function(r) {
                                            switch (r.label) {
                                            case 0:
                                                return t = e.SettingsKey,
                                                [4, s.a.getDefault(e).loadAndUpdate()];
                                            case 1:
                                                return n = r.sent(),
                                                f.features[e.SettingsKey] = c[t] && (u || n.isTrialActive()),
                                                [2]
                                            }
                                        }
                                        ))
                                    }
                                    ))
                                }
                                )),
                                [4, Object(o.a)()];
                            case 1:
                                return h = p.sent(),
                                [4, fetch(r.e.SETTINGS, {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                        id: h.uuid
                                    },
                                    body: JSON.stringify(f)
                                })];
                            case 2:
                                return p.sent(),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                )),
                [2]
            }
            ))
        }
        ))
    }
      , fetchRemoteSettingsData = function() {
        return __awaiter(void 0, void 0, void 0, (function() {
            return __generator(this, (function(e) {
                return chrome.storage.local.get([r.h.BLOCKED_ELEMENTS, r.h.SETTINGS, r.h.WHITELIST], (function(e) {
                    return __awaiter(void 0, void 0, void 0, (function() {
                        var t, n, i, s, u, l, f;
                        return __generator(this, (function(h) {
                            switch (h.label) {
                            case 0:
                                return h.trys.push([0, 5, , 6]),
                                t = e[r.h.WHITELIST],
                                n = e[r.h.BLOCKED_ELEMENTS],
                                i = e[r.h.SETTINGS],
                                [4, Object(o.a)()];
                            case 1:
                                return s = h.sent(),
                                [4, Object(c.a)(r.e.SETTINGS, {
                                    headers: {
                                        id: s.uuid
                                    }
                                }, 200)];
                            case 2:
                                return (u = h.sent()).ok ? [4, u.json()] : [3, 4];
                            case 3:
                                l = h.sent(),
                                Object(a.b)().forEach((function(e) {
                                    var t = e.SettingsKey;
                                    i[t] = l.features[e.SettingsKey] || !1
                                }
                                )),
                                i.popups = l.features.popups,
                                i.detectOverlays = l.features.overlays,
                                i.hideElements = l.features.hideElements,
                                i.pushNotification = l.features.pushNotification,
                                t = l.whitelist || [],
                                n = l.blockedElements || {},
                                l.features.overlays && !i.isOptIn && (i.isOptIn = !0,
                                i.detectOverlays = !0),
                                chrome.storage.local.set(((f = {})[r.h.SETTINGS] = i,
                                f[r.h.WHITELIST] = t,
                                f[r.h.BLOCKED_ELEMENTS] = n,
                                f)),
                                h.label = 4;
                            case 4:
                                return [3, 6];
                            case 5:
                                return h.sent(),
                                [3, 6];
                            case 6:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                )),
                [2]
            }
            ))
        }
        ))
    }
      , updateLocalAndRemoteFeatureSettings = function(e) {
        return __awaiter(void 0, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                return chrome.storage.local.get([r.h.SETTINGS], (function(t) {
                    return __awaiter(void 0, void 0, void 0, (function() {
                        var n, i, s, c;
                        return __generator(this, (function(u) {
                            switch (u.label) {
                            case 0:
                                return n = t[r.h.SETTINGS],
                                Object(a.b)().forEach((function(t) {
                                    var r = t.SettingsKey;
                                    n[r] = e[t.SettingsKey] || !1
                                }
                                )),
                                n.popups = e.popups || !1,
                                n.detectOverlays = e.overlays || !1,
                                n.pushNotification = e.pushNotification || !1,
                                [4, Object(o.a)()];
                            case 1:
                                return i = u.sent(),
                                s = {
                                    features: {
                                        popups: n.popups,
                                        overlays: n.detectOverlays,
                                        hideElements: n.hideElements,
                                        pushNotification: n.pushNotification
                                    }
                                },
                                Object(a.b)().forEach((function(e) {
                                    return __awaiter(void 0, void 0, void 0, (function() {
                                        var t;
                                        return __generator(this, (function(r) {
                                            return t = e.SettingsKey,
                                            s.features[e.SettingsKey] = n[t],
                                            [2]
                                        }
                                        ))
                                    }
                                    ))
                                }
                                )),
                                [4, fetch(r.e.SETTINGS, {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                        id: i.uuid
                                    },
                                    body: JSON.stringify(s)
                                })];
                            case 2:
                                return u.sent(),
                                chrome.storage.local.set(((c = {})[r.h.SETTINGS] = n,
                                c)),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                )),
                [2]
            }
            ))
        }
        ))
    }
      , onStartCookieTrial = function() {
        sendMessageToWorker({
            name: r.v.INSERT_COOKIE_FILTERS
        }),
        sendToActiveTab(r.v.HIDE_COOKIE_CRUMBLER_PROMO)
    }
      , roundTime2Digit = function(e) {
        return e.toString().padStart(2, "0")
    }
      , timeToString = function(e) {
        return roundTime2Digit(e.hours) + "h:" + roundTime2Digit(e.minutes) + "m:" + roundTime2Digit(e.seconds) + "s"
    }
      , parseTime = function(e) {
        return {
            days: Math.floor(e / 864e5),
            hours: Math.floor(e % 864e5 / 36e5),
            minutes: Math.floor(e % 36e5 / 6e4),
            seconds: Math.floor(e % 6e4 / 1e3)
        }
    }
      , isPremium = function() {
        return __awaiter(void 0, void 0, void 0, (function() {
            var e;
            return __generator(this, (function(t) {
                switch (t.label) {
                case 0:
                    return [4, i.a.get(r.h.USER)];
                case 1:
                    return e = t.sent(),
                    [2, !!(null == e ? void 0 : e.isPremium)]
                }
            }
            ))
        }
        ))
    }
      , msToDays = function(e) {
        return e / r.y
    }
      , isKeyExists = function(e, t) {
        return e.every((function(e) {
            return e in t
        }
        ))
    }
      , getDaysPassed = function(e) {
        var t = e
          , n = Date.now() - t;
        return Math.floor(msToDays(n))
    }
      , backgroundSafeExec = function(e, t) {
        void 0 !== u.BrowserAPI.tabs ? e() : t()
    }
      , isPermissionGranted = function(e) {
        return new Promise((function(t) {
            return u.BrowserAPI.permissions.contains(e, t)
        }
        ))
    }
      , getAllPermissionGranted = function() {
        return new Promise((function(e) {
            return u.BrowserAPI.permissions.getAll(e)
        }
        ))
    }
      , requestPermission = function(e) {
        return new Promise((function(t) {
            return u.BrowserAPI.permissions.request(e, t)
        }
        ))
    }
      , checkIsPinned = function() {
        return __awaiter(void 0, void 0, void 0, (function() {
            return __generator(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, u.BrowserAPI.action.getUserSettings()];
                case 1:
                    return [2, {
                        isPinned: e.sent().isOnToolbar
                    }]
                }
            }
            ))
        }
        ))
    }
      , updateBlockedCounter = function(e) {
        sendToActiveTab(r.v.UPDATE_BLOCK_COUNT, {
            type: e
        })
    };
    function cleanDomain(e) {
        if (!e)
            return e;
        var t = e.trim();
        if (/^chrome-extension?:\/\//.test(t))
            return t;
        /^https?:\/\//.test(t) || (t = "http://" + t);
        try {
            return new URL(t).hostname.replace(/^www\d*\./, "")
        } catch (e) {
            return t
        }
    }
    var isAllowedIncognitoAccess = function() {
        return __awaiter(void 0, void 0, void 0, (function() {
            return __generator(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, u.BrowserAPI.extension.isAllowedIncognitoAccess()];
                case 1:
                    return [2, e.sent()]
                }
            }
            ))
        }
        ))
    }
      , isExtensionEnabled = function() {
        return __awaiter(void 0, void 0, void 0, (function() {
            return __generator(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, i.a.get(r.h.PAUSED)];
                case 1:
                    return [2, !!!e.sent()]
                }
            }
            ))
        }
        ))
    }
      , onPostLogout = function(e) {
        return __awaiter(void 0, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                case 0:
                    return e ? [4, f.a.clearTrials()] : [3, 2];
                case 1:
                    t.sent(),
                    t.label = 2;
                case 2:
                    return [4, __awaiter(void 0, void 0, void 0, (function() {
                        var e, t, n;
                        return __generator(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                e = 0,
                                t = Object(a.b)(),
                                r.label = 1;
                            case 1:
                                return e < t.length ? (n = t[e],
                                [4, l.a.setFeatureEnabled(n, !1)]) : [3, 4];
                            case 2:
                                r.sent(),
                                r.label = 3;
                            case 3:
                                return e++,
                                [3, 1];
                            case 4:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))];
                case 3:
                    return t.sent(),
                    [4, updateRemoteSettingsData()];
                case 4:
                    return t.sent(),
                    [2]
                }
            }
            ))
        }
        ))
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(13)
      , o = function() {
        function StorageHelper() {}
        return StorageHelper.prototype.get = function(e) {
            var t = this;
            return new Promise((function(n, r) {
                t.getAll(e).then((function(t) {
                    n(t && e in t ? t[e] : null)
                }
                )).catch(r)
            }
            ))
        }
        ,
        StorageHelper.prototype.getAll = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            return new Promise((function(t, n) {
                r.BrowserAPI.storage.local.get(e, (function(e) {
                    var o;
                    if (e)
                        t(e);
                    else {
                        var i = null === (o = r.BrowserAPI.runtime) || void 0 === o ? void 0 : o.lastError;
                        i ? n(i) : t(null)
                    }
                }
                ))
            }
            ))
        }
        ,
        StorageHelper.prototype.set = function(e, t) {
            return new Promise((function(n, o) {
                var i;
                r.BrowserAPI.storage.local.set(((i = {})[e] = t,
                i), (function() {
                    var e, t = null === (e = r.BrowserAPI.runtime) || void 0 === e ? void 0 : e.lastError;
                    t ? o(t) : n()
                }
                ))
            }
            ))
        }
        ,
        StorageHelper.prototype.remove = function(e) {
            return new Promise((function(t, n) {
                var o = 0;
                e.forEach((function(i) {
                    r.BrowserAPI.storage.local.remove(i, (function() {
                        var i, a = null === (i = r.BrowserAPI.runtime) || void 0 === i ? void 0 : i.lastError;
                        a ? n(a) : ++o == e.length && t()
                    }
                    ))
                }
                ))
            }
            ))
        }
        ,
        StorageHelper
    }();
    t.a = new o
}
, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return getBrowser
    }
    )),
    n.d(t, "d", (function() {
        return getI18N
    }
    )),
    n.d(t, "f", (function() {
        return isDomainInList
    }
    )),
    n.d(t, "l", (function() {
        return sendGAEvent
    }
    )),
    n.d(t, "m", (function() {
        return sendMessageToWorker
    }
    )),
    n.d(t, "o", (function() {
        return sendToWorker
    }
    )),
    n.d(t, "e", (function() {
        return getManifest
    }
    )),
    n.d(t, "n", (function() {
        return sendToActiveTab
    }
    )),
    n.d(t, "j", (function() {
        return readLocalSettingsData
    }
    )),
    n.d(t, "h", (function() {
        return isPremium
    }
    )),
    n.d(t, "i", (function() {
        return msToDays
    }
    )),
    n.d(t, "c", (function() {
        return getDaysPassed
    }
    )),
    n.d(t, "a", (function() {
        return backgroundSafeExec
    }
    )),
    n.d(t, "g", (function() {
        return isPermissionGranted
    }
    )),
    n.d(t, "k", (function() {
        return requestPermission
    }
    ));
    var r = n(2)
      , o = (n(27),
    n(5))
      , i = n(11)
      , a = n(14)
      , s = n(21)
      , c = n(13)
      , u = (n(20),
    n(31),
    function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }
    )
      , __generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }
      , getBrowser = function() {
        return /firefox/i.test(navigator.userAgent) ? "FF" : "CH"
    }
      , getI18N = function(e, t) {
        return chrome.i18n.getMessage(e) || chrome.i18n.getMessage(t || e) || e
    }
      , isDomainInList = function(e, t) {
        t = t || [];
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            if (new RegExp("\\b[(www\\.)|.*.]?" + r + "\\b").test(e))
                return !0
        }
        return !1
    }
      , sendGAEvent = function(e, t, n, o) {
        return new Promise((function(i) {
            chrome.runtime.sendMessage({
                name: r.o.GA_EVENT,
                category: e,
                action: t,
                label: n,
                isCount: o
            }, (function() {
                return i()
            }
            ))
        }
        ))
    }
      , sendMessageToWorker = function(e) {
        return new Promise((function(t) {
            c.BrowserAPI.runtime.sendMessage(e, (function(e) {
                return t(e)
            }
            ))
        }
        ))
    }
      , sendToWorker = function(e) {
        return new Promise((function(t) {
            chrome.runtime.sendMessage(e, (function(e) {
                return t(e)
            }
            ))
        }
        ))
    }
      , getManifest = function() {
        return chrome.runtime.getManifest()
    }
      , sendToActiveTab = function(e, t) {
        chrome.tabs.query({
            active: !0,
            lastFocusedWindow: !0
        }, (function(n) {
            var r = n && n[0] && n[0].id;
            r && chrome.tabs.sendMessage(r, {
                name: e,
                data: t || ""
            })
        }
        ))
    }
      , readLocalSettingsData = function() {
        return u(void 0, void 0, void 0, (function() {
            var e, t, n, o, c;
            return __generator(this, (function(u) {
                switch (u.label) {
                case 0:
                    return [4, a.a.getDefault(i.a.CookieCrumbler).loadAndUpdate()];
                case 1:
                    return e = u.sent(),
                    [4, a.a.getDefault(i.a.SocialBlocker).loadAndUpdate()];
                case 2:
                    return t = u.sent(),
                    [4, a.a.getDefault(i.a.AdsBlocker).loadAndUpdate()];
                case 3:
                    return n = u.sent(),
                    [4, a.a.getDefault(i.a.TrackersBlocker).loadAndUpdate()];
                case 4:
                    return o = u.sent(),
                    [4, Object(s.b)()];
                case 5:
                    return c = u.sent(),
                    [2, new Promise((function(a) {
                        chrome.storage.local.get([r.f.SETTINGS], (function(s) {
                            var u = s[r.f.SETTINGS]
                              , l = !!c && c.isPremium
                              , f = {
                                popups: {
                                    isSelected: u.popups
                                },
                                overlays: {
                                    isSelected: u.detectOverlays
                                },
                                pushNotification: {
                                    isSelected: u.pushNotification
                                },
                                cookieCrumbler: {
                                    isPremium: l,
                                    isSelected: u.cookieCrumbler && l || u.cookieCrumbler && e.isTrialActive(),
                                    inTrialMode: !l && e.isTrialActive(),
                                    trialLeftDays: e && e.daysLeft || -1,
                                    trialEndMode: e && 0 === e.daysLeft,
                                    feature: i.a.CookieCrumbler
                                },
                                facebookAdds: {
                                    isPremium: l,
                                    isSelected: u.facebookAdds && l || u.facebookAdds && t.isTrialActive(),
                                    inTrialMode: !l && t.isTrialActive(),
                                    trialLeftDays: t && t.daysLeft || -1,
                                    trialEndMode: t && 0 === t.daysLeft,
                                    feature: i.a.SocialBlocker
                                },
                                adsBlocker: {
                                    isPremium: l,
                                    isSelected: u.adsBlocker && (l || n.isTrialActive()),
                                    inTrialMode: !l && n.isTrialActive(),
                                    trialLeftDays: n && n.daysLeft || -1,
                                    trialEndMode: n && 0 === n.daysLeft,
                                    feature: i.a.AdsBlocker
                                },
                                trackersBlocker: {
                                    isPremium: l,
                                    isSelected: u.trackersBlocker && (l || o.isTrialActive()),
                                    inTrialMode: !l && o.isTrialActive(),
                                    trialLeftDays: o && o.daysLeft || -1,
                                    trialEndMode: o && 0 === o.daysLeft,
                                    feature: i.a.TrackersBlocker
                                }
                            };
                            a(f)
                        }
                        ))
                    }
                    ))]
                }
            }
            ))
        }
        ))
    }
      , isPremium = function() {
        return u(void 0, void 0, void 0, (function() {
            var e;
            return __generator(this, (function(t) {
                switch (t.label) {
                case 0:
                    return [4, o.a.get(r.f.USER)];
                case 1:
                    return e = t.sent(),
                    [2, !!(null == e ? void 0 : e.isPremium)]
                }
            }
            ))
        }
        ))
    }
      , msToDays = function(e) {
        return e / r.p
    }
      , getDaysPassed = function(e) {
        var t = e
          , n = Date.now() - t;
        return Math.floor(msToDays(n))
    }
      , backgroundSafeExec = function(e, t) {
        void 0 !== c.BrowserAPI.tabs ? e() : t()
    }
      , isPermissionGranted = function(e) {
        return new Promise((function(t) {
            return c.BrowserAPI.permissions.contains(e, t)
        }
        ))
    }
      , requestPermission = function(e) {
        return new Promise((function(t) {
            return c.BrowserAPI.permissions.request(e, t)
        }
        ))
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    }
    )),
    n.d(t, "b", (function() {
        return getPremiumFeaturesList
    }
    )),
    n.d(t, "c", (function() {
        return isFeatureEquals
    }
    )),
    n.d(t, "d", (function() {
        return isPremiumFeature
    }
    ));
    var r = n(0)
      , o = {
        SocialBlocker: {
            Name: "SocialBlocker",
            SettingsKey: "facebookAdds",
            TrialKey: "tState",
            LegacyTrialKey: "facebookTrial",
            QuickSettings: {
                QuickSettingsId: r.m.FACEBOOK,
                QuickSettingsTitleId: "settingsSocialAd"
            },
            HasTrial: !0,
            TrialDays: r.l,
            Style: {
                "margin-top": "43px"
            },
            ImgURL: "images/facebook-cta.svg",
            TitleStrId: "facebookadsBlocked",
            StartTrialBtnStrId: "startTrialFacebookBtn",
            EndTrialBtnStrId: "startTrialFacebookBtn",
            EndTrialLottieFile: r.d.FACEBOOK_END,
            TotalBlocksKeys: ["fbAd", "linkedinAd", "twitterAd", "instagramAd"],
            ShowDailyPromo: !1,
            Analytics: {
                EndTrialEvent: r.c.ANALYTICS_EVENT_TYPES.SOCIAL_BLOCKER_TRIAL_OVER_PROMOTION_VIEW,
                PromoView: r.c.ANALYTICS_EVENT_TYPES.SOCIAL_BLOCKER_INTRIAL_PROMOTION_VIEW,
                PromoNotificationClick: r.c.ANALYTICS_EVENT_TYPES.SOCIAL_BLOCKER_TRIAL_PROMOTION_NOTIFICATION_CLICK,
                PromoDiscountClick: r.c.ANALYTICS_EVENT_TYPES.CLICK_SOCIAL_BLOCKER_PROMOTION_DISCOUNT
            }
        },
        CookieCrumbler: {
            Name: "CookieCrumbler",
            SettingsKey: "cookieCrumbler",
            TrialKey: "tState",
            LegacyTrialKey: "cookieCrumblerTrial",
            QuickSettings: {
                QuickSettingsId: r.m.COOKIE_CRUMBLER,
                QuickSettingsTitleId: "settingsCookie"
            },
            HasTrial: !0,
            TrialDays: r.l,
            Style: {
                "margin-top": "23px"
            },
            ImgURL: "images/cookie-blocked.svg",
            TitleStrId: "cookiesBlocked",
            StartTrialBtnStrId: "startTrialcookiesBtn",
            EndTrialBtnStrId: "removeCookieForAllGood",
            EndTrialLottieFile: r.d.COOKIE,
            TotalBlocksKeys: ["cookie"],
            ShowDailyPromo: !1,
            Analytics: {
                EndTrialEvent: r.c.ANALYTICS_EVENT_TYPES.COOKIE_CRUMBLER_END_OF_TRIAL,
                PromoView: r.c.ANALYTICS_EVENT_TYPES.COOKIE_CRUMBLER_IN_TRIAL,
                PromoNotificationClick: r.c.ANALYTICS_EVENT_TYPES.COOKIE_CRUMBLER_TRIAL_PROMOTION_NOTIFICATION_CLICK,
                PromoDiscountClick: r.c.ANALYTICS_EVENT_TYPES.CLICK_COOKIE_PROMOTION_DISCOUNT
            }
        },
        AdsBlocker: {
            Name: "AdsBlocker",
            SettingsKey: "adsBlocker",
            QuickSettings: {
                QuickSettingsId: "adsBlocker",
                QuickSettingsTitleId: "settingsAdsBlocker"
            },
            HasTrial: !0,
            TrialKey: "tState",
            TrialDays: r.l,
            TotalBlocksKeys: ["ad"],
            ImgURL: "images/facebook-cta.svg",
            EndTrialLottieFile: r.d.FACEBOOK_END,
            Analytics: {}
        },
        TrackersBlocker: {
            Name: "TrackersBlocker",
            SettingsKey: "trackersBlocker",
            QuickSettings: {
                QuickSettingsId: "trackersBlocker",
                QuickSettingsTitleId: "settingsTrackersBlocker"
            },
            HasTrial: !0,
            TrialKey: "tState",
            TrialDays: r.l,
            TotalBlocksKeys: ["tracker"],
            ImgURL: "images/facebook-cta.svg",
            TitleStrId: "trackersBlockerSettingsTitle",
            EndTrialLottieFile: r.d.FACEBOOK_END,
            Analytics: {}
        }
    }
      , getPremiumFeaturesList = function() {
        return Object.keys(o).map((function(e) {
            return o[e]
        }
        ))
    }
      , isFeatureEquals = function(e, t) {
        return e.Name === t.Name
    }
      , isPremiumFeature = function(e) {
        return getPremiumFeaturesList().some((function(t) {
            return isFeatureEquals(t, e)
        }
        ))
    }
}
, function(e, t) {
    const n = ["Chrome", "Opera", "Edge", "SamsungBrowser", "YaBrowser"]
      , r = ["Firefox", "Safari", "MSIE"];
    e.exports.BrowserAPI = (()=>{
        for (const e of n)
            if (navigator.userAgent.indexOf(e) > -1)
                return !0;
        return !1
    }
    )() ? chrome : (()=>{
        for (const e of r)
            if (navigator.userAgent.indexOf(e) > -1)
                return !0;
        return !1
    }
    )() ? browser : {}
}
, , function(e, t, n) {
    "use strict";
    var r, o, i = n(28), a = n(4), s = n(16), c = (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(e, t)
    }
    ,
    function(e, t) {
        function __() {
            this.constructor = e
        }
        r(e, t),
        e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype,
        new __)
    }
    ), __awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }, __generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    };
    !function(e) {
        e[e.PENDING = 0] = "PENDING",
        e[e.ACTIVE = 1] = "ACTIVE",
        e[e.ENDED = 2] = "ENDED"
    }(o || (o = {}));
    var u = function(e) {
        function TrialEntity(t) {
            var n = e.call(this) || this;
            return n.feature = t,
            n.state = o.PENDING,
            n.startTime = -1,
            n.lastDisplayed = -1,
            n.doNotShowAgain = !1,
            n.lastDisplayedPromo = -1,
            n.daysLeft = t.TrialDays,
            n
        }
        return c(TrialEntity, e),
        TrialEntity.prototype.loadAndUpdate = function() {
            return __awaiter(this, void 0, void 0, (function() {
                return __generator(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, e.prototype.load.call(this)];
                    case 1:
                        return t.sent(),
                        [4, this.updateState()];
                    case 2:
                        return t.sent(),
                        [2, this]
                    }
                }
                ))
            }
            ))
        }
        ,
        TrialEntity.prototype.getDaysLeft = function() {
            return __awaiter(this, void 0, void 0, (function() {
                return __generator(this, (function(e) {
                    return [2, this.feature.TrialDays - Object(a.j)(this.startTime)]
                }
                ))
            }
            ))
        }
        ,
        TrialEntity.prototype.daysSinceDisplayedHook = function() {
            var e = Date.now()
              , t = this.lastDisplayed < 0 ? e : this.lastDisplayed;
            return Object(a.w)(e - t)
        }
        ,
        TrialEntity.prototype.daysSinceDisplayedPromo = function() {
            var e = Date.now()
              , t = this.lastDisplayedPromo < 0 ? e : this.lastDisplayedPromo;
            return Object(a.w)(e - t)
        }
        ,
        TrialEntity.prototype.daysSinceStarted = function() {
            var e = Date.now()
              , t = this.startTime < 0 ? e : this.startTime;
            return Object(a.w)(e - t)
        }
        ,
        TrialEntity.prototype.isTrialActive = function() {
            return this.state === o.ACTIVE
        }
        ,
        TrialEntity.prototype.isTrialEnded = function() {
            return this.state === o.ENDED
        }
        ,
        TrialEntity.prototype.isTrialStarted = function() {
            return this.isTrialActive() && !this.isTrialEnded()
        }
        ,
        TrialEntity.prototype.isTrialPending = function() {
            return this.state === o.PENDING
        }
        ,
        TrialEntity.prototype.updateState = function() {
            return __awaiter(this, void 0, void 0, (function() {
                var e, t, n;
                return __generator(this, (function(r) {
                    return !this.isTrialActive() || this.daysLeft <= 0 || (this.isTrialActive() ? this.state = o.ACTIVE : this.isTrialEnded() && (this.state = o.ENDED),
                    e = this.daysLeft,
                    t = Object(a.j)(this.startTime),
                    this.daysLeft = this.feature.TrialDays - t,
                    n = !1,
                    e !== this.daysLeft && (n = !0),
                    this.daysLeft <= 0 && (this.endTrial(),
                    n = !0),
                    n && this.save()),
                    [2]
                }
                ))
            }
            ))
        }
        ,
        TrialEntity.prototype.enable = function() {
            return __awaiter(this, void 0, void 0, (function() {
                return __generator(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return this.isTrialActive() || this.isTrialEnded() ? [2, this] : (this.startTime = Date.now(),
                        this.state = o.ACTIVE,
                        this.lastDisplayed = 0,
                        [4, this.save()]);
                    case 1:
                        return e.sent(),
                        [2, this]
                    }
                }
                ))
            }
            ))
        }
        ,
        TrialEntity.prototype.endTrial = function() {
            return __awaiter(this, void 0, void 0, (function() {
                return __generator(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return this.isTrialEnded() || !this.isTrialActive() ? [2, this] : (this.daysLeft = 0,
                        this.state = o.ENDED,
                        this.doNotShowAgain = !1,
                        [4, this.save()]);
                    case 1:
                        return e.sent(),
                        [4, s.a.setFeatureEnabled(this.feature, !1)];
                    case 2:
                        return e.sent(),
                        [2, this]
                    }
                }
                ))
            }
            ))
        }
        ,
        TrialEntity.prototype.toDTO = function() {
            return {
                startTime: this.startTime,
                daysLeft: this.daysLeft,
                lastDisplayed: this.lastDisplayed,
                state: this.state,
                doNotShowAgain: this.doNotShowAgain,
                lastDisplayedPromo: this.lastDisplayedPromo
            }
        }
        ,
        TrialEntity.prototype.getKey = function() {
            return this.feature.TrialKey
        }
        ,
        TrialEntity.prototype.getLegacyKeys = function() {
            var e = [];
            return e.push(this.feature.LegacyTrialKey),
            e
        }
        ,
        TrialEntity.prototype.getVersion = function() {
            return 2
        }
        ,
        TrialEntity.prototype.migrate = function(e) {
            return __awaiter(this, void 0, void 0, (function() {
                var t, n;
                return __generator(this, (function(r) {
                    return 0 === e && "active"in (t = this) && (n = Object(a.j)(this.startTime) >= this.feature.TrialDays,
                    this.state = n ? o.ENDED : t.active ? o.ACTIVE : o.PENDING),
                    [2]
                }
                ))
            }
            ))
        }
        ,
        TrialEntity.getDefault = function(e) {
            return new TrialEntity(e)
        }
        ,
        TrialEntity
    }(i.a);
    t.a = u
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return o
    }
    )),
    n.d(t, "b", (function() {
        return getPremiumFeaturesList
    }
    )),
    n.d(t, "c", (function() {
        return isPremiumFeature
    }
    ));
    var r = n(2)
      , o = {
        SocialBlocker: {
            Name: "SocialBlocker",
            SettingsKey: "facebookAdds",
            TrialKey: "tState",
            LegacyTrialKey: "facebookTrial",
            QuickSettings: {
                QuickSettingsId: r.i.FACEBOOK,
                QuickSettingsTitleId: "settingsSocialAd"
            },
            HasTrial: !0,
            TrialDays: r.h,
            Style: {
                "margin-top": "43px"
            },
            ImgURL: "images/facebook-cta.svg",
            TitleStrId: "facebookadsBlocked",
            StartTrialBtnStrId: "startTrialFacebookBtn",
            EndTrialBtnStrId: "startTrialFacebookBtn",
            EndTrialLottieFile: r.c.FACEBOOK_END,
            TotalBlocksKeys: ["fbAd", "linkedinAd", "twitterAd", "instagramAd"],
            ShowDailyPromo: !1,
            Analytics: {
                EndTrialEvent: r.b.ANALYTICS_EVENT_TYPES.SOCIAL_BLOCKER_TRIAL_OVER_PROMOTION_VIEW,
                PromoView: r.b.ANALYTICS_EVENT_TYPES.SOCIAL_BLOCKER_INTRIAL_PROMOTION_VIEW,
                PromoNotificationClick: r.b.ANALYTICS_EVENT_TYPES.SOCIAL_BLOCKER_TRIAL_PROMOTION_NOTIFICATION_CLICK,
                PromoDiscountClick: r.b.ANALYTICS_EVENT_TYPES.CLICK_SOCIAL_BLOCKER_PROMOTION_DISCOUNT
            }
        },
        CookieCrumbler: {
            Name: "CookieCrumbler",
            SettingsKey: "cookieCrumbler",
            TrialKey: "tState",
            LegacyTrialKey: "cookieCrumblerTrial",
            QuickSettings: {
                QuickSettingsId: r.i.COOKIE_CRUMBLER,
                QuickSettingsTitleId: "settingsCookie"
            },
            HasTrial: !0,
            TrialDays: r.h,
            Style: {
                "margin-top": "23px"
            },
            ImgURL: "images/cookie-blocked.svg",
            TitleStrId: "cookiesBlocked",
            StartTrialBtnStrId: "startTrialcookiesBtn",
            EndTrialBtnStrId: "removeCookieForAllGood",
            EndTrialLottieFile: r.c.COOKIE,
            TotalBlocksKeys: ["cookie"],
            ShowDailyPromo: !1,
            Analytics: {
                EndTrialEvent: r.b.ANALYTICS_EVENT_TYPES.COOKIE_CRUMBLER_END_OF_TRIAL,
                PromoView: r.b.ANALYTICS_EVENT_TYPES.COOKIE_CRUMBLER_IN_TRIAL,
                PromoNotificationClick: r.b.ANALYTICS_EVENT_TYPES.COOKIE_CRUMBLER_TRIAL_PROMOTION_NOTIFICATION_CLICK,
                PromoDiscountClick: r.b.ANALYTICS_EVENT_TYPES.CLICK_COOKIE_PROMOTION_DISCOUNT
            }
        },
        AdsBlocker: {
            Name: "AdsBlocker",
            SettingsKey: "adsBlocker",
            QuickSettings: {
                QuickSettingsId: "adsBlocker",
                QuickSettingsTitleId: "settingsAdsBlocker"
            },
            HasTrial: !0,
            TrialKey: "tState",
            TrialDays: r.h,
            TotalBlocksKeys: ["ad"],
            ImgURL: "images/facebook-cta.svg",
            EndTrialLottieFile: r.c.FACEBOOK_END,
            Analytics: {}
        },
        TrackersBlocker: {
            Name: "TrackersBlocker",
            SettingsKey: "trackersBlocker",
            QuickSettings: {
                QuickSettingsId: "trackersBlocker",
                QuickSettingsTitleId: "settingsTrackersBlocker"
            },
            HasTrial: !0,
            TrialKey: "tState",
            TrialDays: r.h,
            TotalBlocksKeys: ["tracker"],
            ImgURL: "images/facebook-cta.svg",
            TitleStrId: "trackersBlockerSettingsTitle",
            EndTrialLottieFile: r.c.FACEBOOK_END,
            Analytics: {}
        }
    }
      , getPremiumFeaturesList = function() {
        return Object.keys(o).map((function(e) {
            return o[e]
        }
        ))
    }
      , isPremiumFeature = function(e) {
        return getPremiumFeaturesList().some((function(t) {
            return n = e,
            t.Name === n.Name;
            var n
        }
        ))
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(8)
      , o = function() {
        function StorageHelper() {}
        return StorageHelper.prototype.get = function(e) {
            var t = this;
            return new Promise((function(n, r) {
                t.getAll(e).then((function(t) {
                    n(t && e in t ? t[e] : null)
                }
                )).catch(r)
            }
            ))
        }
        ,
        StorageHelper.prototype.getAll = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            return new Promise((function(t, n) {
                r.BrowserAPI.storage.local.get(e, (function(e) {
                    var o;
                    if (e)
                        t(e);
                    else {
                        var i = null === (o = r.BrowserAPI.runtime) || void 0 === o ? void 0 : o.lastError;
                        i ? n(i) : t(null)
                    }
                }
                ))
            }
            ))
        }
        ,
        StorageHelper.prototype.set = function(e, t) {
            return new Promise((function(n, o) {
                var i;
                r.BrowserAPI.storage.local.set(((i = {})[e] = t,
                i), (function() {
                    var e, t = null === (e = r.BrowserAPI.runtime) || void 0 === e ? void 0 : e.lastError;
                    t ? o(t) : n()
                }
                ))
            }
            ))
        }
        ,
        StorageHelper.prototype.remove = function(e) {
            return new Promise((function(t, n) {
                var o = 0;
                e.forEach((function(i) {
                    r.BrowserAPI.storage.local.remove(i, (function() {
                        var i, a = null === (i = r.BrowserAPI.runtime) || void 0 === i ? void 0 : i.lastError;
                        a ? n(a) : ++o == e.length && t()
                    }
                    ))
                }
                ))
            }
            ))
        }
        ,
        StorageHelper
    }();
    t.a = new o
}
, function(e, t) {
    const n = ["Chrome", "Opera", "Edge", "SamsungBrowser", "YaBrowser"]
      , r = ["Firefox", "Safari", "MSIE"];
    e.exports.BrowserAPI = (()=>{
        for (const e of n)
            if (navigator.userAgent.indexOf(e) > -1)
                return !0;
        return !1
    }
    )() ? chrome : (()=>{
        for (const e of r)
            if (navigator.userAgent.indexOf(e) > -1)
                return !0;
        return !1
    }
    )() ? browser : {}
}
, function(e, t, n) {
    "use strict";
    var r, o, i = n(5), __awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }, __generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }, __spreadArrays = function() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
        var r = Array(e)
          , o = 0;
        for (t = 0; t < n; t++)
            for (var i = arguments[t], a = 0, s = i.length; a < s; a++,
            o++)
                r[o] = i[a];
        return r
    }, a = function() {
        function Entity() {}
        return Entity.prototype.load = function() {
            return __awaiter(this, void 0, void 0, (function() {
                var e, t, n = this;
                return __generator(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return (e = __spreadArrays(this.getLegacyKeys(), [this.getKey()]).filter((function(e) {
                            return void 0 !== e
                        }
                        ))) ? [4, i.a.getAll.apply(i.a, e)] : [2, this];
                    case 1:
                        return (t = r.sent()) ? (this.getLegacyKeys().filter((function(e) {
                            return e in t
                        }
                        )).forEach((function(e) {
                            n.mergeObject(t[e])
                        }
                        )),
                        this.getKey()in t && this.mergeObject(t[this.getKey()]),
                        !this.v || this.v < this.getVersion() ? [4, this.migrate(this.v ? this.v : 0)] : [3, 3]) : [2, this];
                    case 2:
                        r.sent(),
                        this.save(),
                        r.label = 3;
                    case 3:
                        return [2, this]
                    }
                }
                ))
            }
            ))
        }
        ,
        Entity.prototype.save = function() {
            return __awaiter(this, void 0, void 0, (function() {
                var e;
                return __generator(this, (function(t) {
                    return e = Object.assign({}, this.toDTO(), {
                        v: this.getVersion()
                    }),
                    [2, i.a.set(this.getKey(), e)]
                }
                ))
            }
            ))
        }
        ,
        Entity.prototype.mergeObject = function(e) {
            var t = this;
            Object.keys(e).forEach((function(n) {
                t[n] = e[n]
            }
            ))
        }
        ,
        Entity
    }(), s = n(6), c = n(20), u = (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(e, t)
    }
    ,
    function(e, t) {
        function __() {
            this.constructor = e
        }
        r(e, t),
        e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype,
        new __)
    }
    ), trial_entity_awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }, trial_entity_generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    };
    !function(e) {
        e[e.PENDING = 0] = "PENDING",
        e[e.ACTIVE = 1] = "ACTIVE",
        e[e.ENDED = 2] = "ENDED"
    }(o || (o = {}));
    var l = function(e) {
        function TrialEntity(t) {
            var n = e.call(this) || this;
            return n.feature = t,
            n.state = o.PENDING,
            n.startTime = -1,
            n.lastDisplayed = -1,
            n.doNotShowAgain = !1,
            n.lastDisplayedPromo = -1,
            n.daysLeft = t.TrialDays,
            n
        }
        return u(TrialEntity, e),
        TrialEntity.prototype.loadAndUpdate = function() {
            return trial_entity_awaiter(this, void 0, void 0, (function() {
                return trial_entity_generator(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, e.prototype.load.call(this)];
                    case 1:
                        return t.sent(),
                        [4, this.updateState()];
                    case 2:
                        return t.sent(),
                        [2, this]
                    }
                }
                ))
            }
            ))
        }
        ,
        TrialEntity.prototype.getDaysLeft = function() {
            return trial_entity_awaiter(this, void 0, void 0, (function() {
                return trial_entity_generator(this, (function(e) {
                    return [2, this.feature.TrialDays - Object(s.c)(this.startTime)]
                }
                ))
            }
            ))
        }
        ,
        TrialEntity.prototype.daysSinceDisplayedHook = function() {
            var e = Date.now()
              , t = this.lastDisplayed < 0 ? e : this.lastDisplayed;
            return Object(s.i)(e - t)
        }
        ,
        TrialEntity.prototype.daysSinceDisplayedPromo = function() {
            var e = Date.now()
              , t = this.lastDisplayedPromo < 0 ? e : this.lastDisplayedPromo;
            return Object(s.i)(e - t)
        }
        ,
        TrialEntity.prototype.daysSinceStarted = function() {
            var e = Date.now()
              , t = this.startTime < 0 ? e : this.startTime;
            return Object(s.i)(e - t)
        }
        ,
        TrialEntity.prototype.isTrialActive = function() {
            return this.state === o.ACTIVE
        }
        ,
        TrialEntity.prototype.isTrialEnded = function() {
            return this.state === o.ENDED
        }
        ,
        TrialEntity.prototype.isTrialStarted = function() {
            return this.isTrialActive() && !this.isTrialEnded()
        }
        ,
        TrialEntity.prototype.isTrialPending = function() {
            return this.state === o.PENDING
        }
        ,
        TrialEntity.prototype.updateState = function() {
            return trial_entity_awaiter(this, void 0, void 0, (function() {
                var e, t, n;
                return trial_entity_generator(this, (function(r) {
                    return !this.isTrialActive() || this.daysLeft <= 0 || (this.isTrialActive() ? this.state = o.ACTIVE : this.isTrialEnded() && (this.state = o.ENDED),
                    e = this.daysLeft,
                    t = Object(s.c)(this.startTime),
                    this.daysLeft = this.feature.TrialDays - t,
                    n = !1,
                    e !== this.daysLeft && (n = !0),
                    this.daysLeft <= 0 && (this.endTrial(),
                    n = !0),
                    n && this.save()),
                    [2]
                }
                ))
            }
            ))
        }
        ,
        TrialEntity.prototype.enable = function() {
            return trial_entity_awaiter(this, void 0, void 0, (function() {
                return trial_entity_generator(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return this.isTrialActive() || this.isTrialEnded() ? [2, this] : (this.startTime = Date.now(),
                        this.state = o.ACTIVE,
                        this.lastDisplayed = 0,
                        [4, this.save()]);
                    case 1:
                        return e.sent(),
                        [2, this]
                    }
                }
                ))
            }
            ))
        }
        ,
        TrialEntity.prototype.endTrial = function() {
            return trial_entity_awaiter(this, void 0, void 0, (function() {
                return trial_entity_generator(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return this.isTrialEnded() || !this.isTrialActive() ? [2, this] : (this.daysLeft = 0,
                        this.state = o.ENDED,
                        this.doNotShowAgain = !1,
                        [4, this.save()]);
                    case 1:
                        return e.sent(),
                        [4, c.a.setFeatureEnabled(this.feature, !1)];
                    case 2:
                        return e.sent(),
                        [2, this]
                    }
                }
                ))
            }
            ))
        }
        ,
        TrialEntity.prototype.toDTO = function() {
            return {
                startTime: this.startTime,
                daysLeft: this.daysLeft,
                lastDisplayed: this.lastDisplayed,
                state: this.state,
                doNotShowAgain: this.doNotShowAgain,
                lastDisplayedPromo: this.lastDisplayedPromo
            }
        }
        ,
        TrialEntity.prototype.getKey = function() {
            return this.feature.TrialKey
        }
        ,
        TrialEntity.prototype.getLegacyKeys = function() {
            var e = [];
            return e.push(this.feature.LegacyTrialKey),
            e
        }
        ,
        TrialEntity.prototype.getVersion = function() {
            return 2
        }
        ,
        TrialEntity.prototype.migrate = function(e) {
            return trial_entity_awaiter(this, void 0, void 0, (function() {
                var t, n;
                return trial_entity_generator(this, (function(r) {
                    return 0 === e && "active"in (t = this) && (n = Object(s.c)(this.startTime) >= this.feature.TrialDays,
                    this.state = n ? o.ENDED : t.active ? o.ACTIVE : o.PENDING),
                    [2]
                }
                ))
            }
            ))
        }
        ,
        TrialEntity.getDefault = function(e) {
            return new TrialEntity(e)
        }
        ,
        TrialEntity
    }(a);
    t.a = l
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return getOrInitAnalyticsInfoFromLocalStorage
    }
    )),
    n.d(t, "b", (function() {
        return sendAliveAnalyticsEvent
    }
    )),
    n.d(t, "c", (function() {
        return sendAnalyticsEvent
    }
    ));
    var r = n(53)
      , o = n(0)
      , i = n(30)
      , a = n(4)
      , s = n(17)
      , c = n(37)
      , __assign = function() {
        return (__assign = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    }
      , __awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }
      , __generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }
      , getAnalyticsInfoFromLocalStorage = function() {
        return __awaiter(void 0, void 0, void 0, (function() {
            return __generator(this, (function(e) {
                return [2, new Promise((function(e) {
                    chrome.storage.local.get(o.c.ANALYTICS_INFO_KEY, (function(t) {
                        e(t[o.c.ANALYTICS_INFO_KEY])
                    }
                    ))
                }
                ))]
            }
            ))
        }
        ))
    };
    var getOrInitAnalyticsInfoFromLocalStorage = function() {
        return __awaiter(void 0, void 0, void 0, (function() {
            var e, t, n;
            return __generator(this, (function(i) {
                switch (i.label) {
                case 0:
                    return [4, getAnalyticsInfoFromLocalStorage()];
                case 1:
                    return i.sent() ? [3, 4] : (e = "CH" == Object(a.h)() ? "Chrome" : "Firefox",
                    [4, __awaiter(void 0, void 0, void 0, (function() {
                        var e, t, n;
                        return __generator(this, (function(i) {
                            switch (i.label) {
                            case 0:
                                return i.trys.push([0, 5, , 6]),
                                [4, fetch(o.e.ANALYTIC_INFO)];
                            case 1:
                                return 200 !== (n = i.sent()).status ? [3, 3] : [4, n.json()];
                            case 2:
                                e = i.sent(),
                                i.label = 3;
                            case 3:
                                return t = e && e.uuid || Object(r.a)(),
                                [4, fetch(o.e.ANALYTIC_INFO, {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        uuid: t
                                    })
                                })];
                            case 4:
                            case 5:
                                return i.sent(),
                                [3, 6];
                            case 6:
                                return [2, t]
                            }
                        }
                        ))
                    }
                    ))]);
                case 2:
                    return t = i.sent(),
                    [4, Object(s.e)()];
                case 3:
                    i.sent(),
                    chrome.storage.local.set(((n = {})[o.c.ANALYTICS_INFO_KEY] = {
                        uuid: t,
                        country: (c = chrome.i18n.getUILanguage().replace("_", "-"),
                        c.length < 7 ? c : "en-US"),
                        resource: o.c.ANALYTICS_RESOURCE_TYPES.ORGANIC,
                        user_agent: e
                    },
                    n)),
                    i.label = 4;
                case 4:
                    return [4, getAnalyticsInfoFromLocalStorage()];
                case 5:
                    return [2, i.sent()]
                }
                var c
            }
            ))
        }
        ))
    }
      , addVersionToEventPayload = function(e) {
        return function(e, t) {
            var n = {};
            e.payload && (n = JSON.parse(e.payload));
            var r = Object.assign(n, t);
            return e.payload = JSON.stringify(r),
            e
        }(e, {
            version: Object(a.n)().version
        })
    }
      , sendAnalyticsEvent = function(e, t) {
        return __awaiter(void 0, void 0, void 0, (function() {
            var n, r, a, u, l;
            return __generator(this, (function(f) {
                switch (f.label) {
                case 0:
                    return [4, getOrInitAnalyticsInfoFromLocalStorage()];
                case 1:
                    return n = f.sent(),
                    [4, Object(s.c)()];
                case 2:
                    r = f.sent(),
                    a = !(!r || !r.id),
                    u = addVersionToEventPayload(u = t || {}),
                    l = __assign(__assign({
                        event_type: e,
                        platform: o.c.ANALYTICS_PLATFORM,
                        product: o.c.ANALYTICS_PRODUCT,
                        timestamp: (new Date).getTime(),
                        is_logged_in: a,
                        is_pro_user: r && r.isPremium
                    }, n), u),
                    Object(c.a)(e),
                    f.label = 3;
                case 3:
                    return f.trys.push([3, 5, , 6]),
                    [4, fetch(o.e.ANALYTICS_SEND_EVENT, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify((h = l,
                        {
                            ev: i.Buffer.from(Array.from(JSON.stringify(h)).map((function(e, t) {
                                return e.charCodeAt(0) - (h.uuid.length + 2 * t)
                            }
                            )).toString()).toString("base64"),
                            se: h.uuid
                        }))
                    })];
                case 4:
                    return f.sent(),
                    [3, 6];
                case 5:
                    return f.sent(),
                    [3, 6];
                case 6:
                    return [2]
                }
                var h
            }
            ))
        }
        ))
    }
      , sendAliveAnalyticsEvent = function() {
        return __awaiter(void 0, void 0, void 0, (function() {
            return __generator(this, (function(e) {
                return chrome.storage.local.get([o.h.LAST_ALIVE_EVENT_SENT_AT, o.h.WHITELIST], (function(e) {
                    return __awaiter(void 0, void 0, void 0, (function() {
                        var t, n, r, i, a, s;
                        return __generator(this, (function(c) {
                            switch (c.label) {
                            case 0:
                                return t = e[o.h.LAST_ALIVE_EVENT_SENT_AT] || 0,
                                n = e[o.h.WHITELIST] || [],
                                r = Date.now(),
                                i = r - t >= o.y,
                                a = n && n.length || 0,
                                i ? [4, sendAnalyticsEvent(o.c.ANALYTICS_EVENT_TYPES.ALIVE, {
                                    payload: JSON.stringify({
                                        whiteListSize: a
                                    })
                                })] : [3, 2];
                            case 1:
                                c.sent(),
                                chrome.storage.local.set(((s = {})[o.h.LAST_ALIVE_EVENT_SENT_AT] = r,
                                s)),
                                c.label = 2;
                            case 2:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                )),
                [2]
            }
            ))
        }
        ))
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(7)
      , o = n(0)
      , i = n(12)
      , a = n(19)
      , __assign = function() {
        return (__assign = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    }
      , __awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }
      , __generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }
      , s = function s() {
        var e = this;
        this.setFeatureEnabled = function(t, n, o) {
            return void 0 === o && (o = !0),
            __awaiter(e, void 0, void 0, (function() {
                var e, i, s;
                return __generator(this, (function(c) {
                    switch (c.label) {
                    case 0:
                        return (e = n) && Object(r.d)(t) ? [4, a.a.isPremiumFeatureAvailable(t)] : [3, 2];
                    case 1:
                        i = c.sent(),
                        e = e && i,
                        c.label = 2;
                    case 2:
                        return (s = {})[t.SettingsKey] = e,
                        o ? [4, this.updateSettings(s)] : [3, 4];
                    case 3:
                        c.sent(),
                        c.label = 4;
                    case 4:
                        return [2, s]
                    }
                }
                ))
            }
            ))
        }
        ,
        this.setFeaturesEnabled = function(t, n) {
            return __awaiter(e, void 0, void 0, (function() {
                var e, r, o, i, a;
                return __generator(this, (function(s) {
                    switch (s.label) {
                    case 0:
                        e = {},
                        r = 0,
                        o = t,
                        s.label = 1;
                    case 1:
                        return r < o.length ? (i = o[r],
                        [4, this.setFeatureEnabled(i, n, !1)]) : [3, 4];
                    case 2:
                        a = s.sent(),
                        e = __assign(__assign({}, e), a),
                        s.label = 3;
                    case 3:
                        return r++,
                        [3, 1];
                    case 4:
                        return [4, this.updateSettings(e)];
                    case 5:
                        return s.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        this.isFeatureEnabled = function(t) {
            return __awaiter(e, void 0, void 0, (function() {
                var e;
                return __generator(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, i.a.get(o.h.SETTINGS)];
                    case 1:
                        return [2, !(!(e = n.sent()) || !(t.SettingsKey in e)) && e[t.SettingsKey]]
                    }
                }
                ))
            }
            ))
        }
        ,
        this.updateSettings = function(t) {
            return __awaiter(e, void 0, void 0, (function() {
                var e, n;
                return __generator(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, i.a.get(o.h.SETTINGS)];
                    case 1:
                        return e = r.sent(),
                        n = __assign(__assign({}, e), t),
                        [4, i.a.set(o.h.SETTINGS, n)];
                    case 2:
                        return r.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
    };
    t.a = new s
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return fetchWithTokenRefreshIfNeeded
    }
    )),
    n.d(t, "b", (function() {
        return getUser
    }
    )),
    n.d(t, "e", (function() {
        return updateUserInfo
    }
    )),
    n.d(t, "d", (function() {
        return logout
    }
    )),
    n.d(t, "c", (function() {
        return getUserInfo
    }
    ));
    var r = n(0)
      , o = n(5)
      , __awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }
      , __generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }
      , fetchWithTokenRefreshIfNeeded = function(e, t, n) {
        return __awaiter(void 0, void 0, void 0, (function() {
            var o, i;
            return __generator(this, (function(a) {
                switch (a.label) {
                case 0:
                    return [4, fetch(e, t)];
                case 1:
                    return (o = a.sent()).status !== n ? [3, 2] : [2, o];
                case 2:
                    return 401 !== o.status ? [3, 6] : [4, fetch(r.e.REFRESH, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })];
                case 3:
                    return 204 !== a.sent().status ? [3, 5] : [4, fetch(e, t)];
                case 4:
                    if ((i = a.sent()).status === n)
                        return [2, i];
                    a.label = 5;
                case 5:
                    return [2, {
                        status: o.status,
                        message: o.statusText
                    }];
                case 6:
                    return [2]
                }
            }
            ))
        }
        ))
    }
      , getUser = function() {
        return __awaiter(void 0, void 0, void 0, (function() {
            var e, t;
            return __generator(this, (function(n) {
                switch (n.label) {
                case 0:
                    return n.trys.push([0, 8, , 10]),
                    [4, fetchWithTokenRefreshIfNeeded(r.e.GET_USER, {}, 200)];
                case 1:
                    return 200 !== (e = n.sent()).status ? [3, 5] : [4, e.json()];
                case 2:
                    return t = n.sent(),
                    [4, o.a.set(r.h.USER, t.user)];
                case 3:
                    return n.sent(),
                    [4, o.a.set(r.h.LAST_USER_UPDATE_DATE, Date.now())];
                case 4:
                    return n.sent(),
                    [3, 7];
                case 5:
                    return [4, o.a.remove([r.h.USER, r.h.LAST_USER_UPDATE_DATE])];
                case 6:
                    n.sent(),
                    n.label = 7;
                case 7:
                    return [3, 10];
                case 8:
                    return n.sent(),
                    [4, o.a.remove([r.h.USER, r.h.LAST_USER_UPDATE_DATE])];
                case 9:
                    return n.sent(),
                    [3, 10];
                case 10:
                    return [2]
                }
            }
            ))
        }
        ))
    }
      , updateUserInfo = function() {
        return __awaiter(void 0, void 0, void 0, (function() {
            var e;
            return __generator(this, (function(t) {
                switch (t.label) {
                case 0:
                    return [4, o.a.get(r.h.LAST_USER_UPDATE_DATE)];
                case 1:
                    return (e = t.sent()) && Date.now() - e >= r.L ? [4, getUser()] : [3, 3];
                case 2:
                    t.sent(),
                    t.label = 3;
                case 3:
                    return [2]
                }
            }
            ))
        }
        ))
    }
      , logout = function() {
        return __awaiter(void 0, void 0, void 0, (function() {
            return __generator(this, (function(e) {
                switch (e.label) {
                case 0:
                    return [4, fetch(r.e.LOGOUT)];
                case 1:
                    return 200 !== e.sent().status ? [3, 3] : [4, o.a.remove([r.h.USER, r.h.LAST_USER_UPDATE_DATE])];
                case 2:
                    return e.sent(),
                    [2, !0];
                case 3:
                    return [2, !1]
                }
            }
            ))
        }
        ))
    }
      , getUserInfo = function() {
        return o.a.get(r.h.USER)
    }
}
, , function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(4)
      , i = n(7)
      , a = n(10)
      , s = n(16)
      , __assign = function() {
        return (__assign = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    }
      , __awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }
      , __generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }
      , c = function() {
        function PremiumManager() {
            var e = this;
            this.isPremiumFeatureAvailable = function(t) {
                return __awaiter(e, void 0, void 0, (function() {
                    var e;
                    return __generator(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return [4, a.a.getDefault(t).load()];
                        case 1:
                            return e = n.sent(),
                            [4, Object(o.v)()];
                        case 2:
                            return [2, n.sent() || t.HasTrial && e.isTrialActive()]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            this.clearTrials = function() {
                return __awaiter(e, void 0, void 0, (function() {
                    var e, t, n;
                    return __generator(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            e = 0,
                            t = Object(i.b)(),
                            r.label = 1;
                        case 1:
                            return e < t.length ? (n = t[e],
                            [4, a.a.getDefault(n).save()]) : [3, 4];
                        case 2:
                            r.sent(),
                            r.label = 3;
                        case 3:
                            return e++,
                            [3, 1];
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
        }
        return PremiumManager.prototype.startTrialFeature = function(e) {
            return __awaiter(this, void 0, void 0, (function() {
                return __generator(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, a.a.getDefault(e).loadAndUpdate()];
                    case 1:
                        return [4, t.sent().enable()];
                    case 2:
                        return t.sent(),
                        [4, s.a.setFeatureEnabled(e, !0)];
                    case 3:
                        return t.sent(),
                        [4, this.updatePromoDisplayTime(e)];
                    case 4:
                        return t.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        PremiumManager.prototype.shouldShowDailyPromo = function(e) {
            return __awaiter(this, void 0, void 0, (function() {
                var t;
                return __generator(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, a.a.getDefault(e).loadAndUpdate()];
                    case 1:
                        return t = n.sent(),
                        [2, t.isTrialStarted() && !t.isTrialEnded() && t.daysSinceDisplayedPromo() >= 1]
                    }
                }
                ))
            }
            ))
        }
        ,
        PremiumManager.prototype.shouldShowEndPromo = function(e) {
            return __awaiter(this, void 0, void 0, (function() {
                var t, n, o;
                return __generator(this, (function(i) {
                    switch (i.label) {
                    case 0:
                        return [4, a.a.getDefault(e).loadAndUpdate()];
                    case 1:
                        return t = i.sent(),
                        n = t.startTime + e.TrialDays * r.y,
                        o = t.lastDisplayedPromo > n,
                        [2, t.isTrialEnded() && !o]
                    }
                }
                ))
            }
            ))
        }
        ,
        PremiumManager.prototype.updateHookDisplayTime = function(e) {
            return __awaiter(this, void 0, void 0, (function() {
                var t;
                return __generator(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, a.a.getDefault(e).loadAndUpdate()];
                    case 1:
                        return (t = n.sent()).lastDisplayed = Date.now(),
                        [4, t.save()];
                    case 2:
                        return n.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        PremiumManager.prototype.updatePromoDisplayTime = function(e) {
            return __awaiter(this, void 0, void 0, (function() {
                var t;
                return __generator(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, a.a.getDefault(e).loadAndUpdate()];
                    case 1:
                        return (t = n.sent()).lastDisplayedPromo = Date.now(),
                        [4, t.save()];
                    case 2:
                        return n.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        PremiumManager.prototype.showTrialPromoIfNeeded = function(e, t) {
            return __awaiter(this, void 0, void 0, (function() {
                var n, i, a, s = this;
                return __generator(this, (function(c) {
                    switch (c.label) {
                    case 0:
                        return [4, Object(o.v)()];
                    case 1:
                        return c.sent() ? [2] : [4, this.shouldShowDailyPromo(e)];
                    case 2:
                        return n = c.sent() && e.ShowDailyPromo,
                        [4, this.shouldShowEndPromo(e)];
                    case 3:
                        return i = c.sent(),
                        (a = t || {}).isShowDailyPromo = n,
                        a.isShowEndPromo = i,
                        (n || i) && Object(o.a)((function() {
                            Object(o.D)(r.v.SHOW_TRIAL_PROMO, {
                                feature: e,
                                extras: a
                            }),
                            s.updatePromoDisplayTime(e)
                        }
                        ), (function() {
                            return Object(o.E)({
                                name: r.v.SHOW_TRIAL_PROMO,
                                data: {
                                    feature: e,
                                    extras: a
                                }
                            })
                        }
                        )),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        PremiumManager.prototype.getFeaturesTrialState = function() {
            return __awaiter(this, void 0, void 0, (function() {
                var e, t, n, r, o, s, c;
                return __generator(this, (function(u) {
                    switch (u.label) {
                    case 0:
                        t = 0,
                        n = Object(i.b)(),
                        u.label = 1;
                    case 1:
                        return t < n.length ? (r = n[t],
                        [4, a.a.getDefault(r).loadAndUpdate()]) : [3, 5];
                    case 2:
                        return [4, (o = u.sent()).getDaysLeft()];
                    case 3:
                        s = u.sent(),
                        e = __assign(((c = {})[r.Name] = {
                            TrialState: o.state,
                            TrialLeftDays: s
                        },
                        c), e),
                        u.label = 4;
                    case 4:
                        return t++,
                        [3, 1];
                    case 5:
                        return [2, e]
                    }
                }
                ))
            }
            ))
        }
        ,
        PremiumManager.prototype.migrateToSingleTrialEntity = function(e) {
            return __awaiter(this, void 0, void 0, (function() {
                var t, n, r, o = this;
                return __generator(this, (function(i) {
                    switch (i.label) {
                    case 0:
                        return [4, Promise.all(e.map((function(e) {
                            return __awaiter(o, void 0, void 0, (function() {
                                return __generator(this, (function(t) {
                                    switch (t.label) {
                                    case 0:
                                        return [4, a.a.getDefault(e).loadAndUpdate()];
                                    case 1:
                                        return [2, t.sent()]
                                    }
                                }
                                ))
                            }
                            ))
                        }
                        )))];
                    case 1:
                        return t = i.sent(),
                        n = t.filter((function(e) {
                            return e.isTrialActive()
                        }
                        )),
                        r = n.sort((function(e, t) {
                            return t.startTime - e.startTime
                        }
                        )),
                        r ? [4, r[0].save()] : [3, 3];
                    case 2:
                        i.sent(),
                        i.label = 3;
                    case 3:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        PremiumManager
    }();
    t.a = new c
}
, function(e, t, n) {
    "use strict";
    var r = n(11)
      , o = n(2)
      , i = n(5)
      , a = n(31)
      , __assign = function() {
        return (__assign = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    }
      , __awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }
      , __generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }
      , s = function s() {
        var e = this;
        this.setFeatureEnabled = function(t, n, o) {
            return void 0 === o && (o = !0),
            __awaiter(e, void 0, void 0, (function() {
                var e, i, s;
                return __generator(this, (function(c) {
                    switch (c.label) {
                    case 0:
                        return (e = n) && Object(r.c)(t) ? [4, a.a.isPremiumFeatureAvailable(t)] : [3, 2];
                    case 1:
                        i = c.sent(),
                        e = e && i,
                        c.label = 2;
                    case 2:
                        return (s = {})[t.SettingsKey] = e,
                        o ? [4, this.updateSettings(s)] : [3, 4];
                    case 3:
                        c.sent(),
                        c.label = 4;
                    case 4:
                        return [2, s]
                    }
                }
                ))
            }
            ))
        }
        ,
        this.setFeaturesEnabled = function(t, n) {
            return __awaiter(e, void 0, void 0, (function() {
                var e, r, o, i, a;
                return __generator(this, (function(s) {
                    switch (s.label) {
                    case 0:
                        e = {},
                        r = 0,
                        o = t,
                        s.label = 1;
                    case 1:
                        return r < o.length ? (i = o[r],
                        [4, this.setFeatureEnabled(i, n, !1)]) : [3, 4];
                    case 2:
                        a = s.sent(),
                        e = __assign(__assign({}, e), a),
                        s.label = 3;
                    case 3:
                        return r++,
                        [3, 1];
                    case 4:
                        return [4, this.updateSettings(e)];
                    case 5:
                        return s.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        this.isFeatureEnabled = function(t) {
            return __awaiter(e, void 0, void 0, (function() {
                var e;
                return __generator(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, i.a.get(o.f.SETTINGS)];
                    case 1:
                        return [2, !(!(e = n.sent()) || !(t.SettingsKey in e)) && e[t.SettingsKey]]
                    }
                }
                ))
            }
            ))
        }
        ,
        this.updateSettings = function(t) {
            return __awaiter(e, void 0, void 0, (function() {
                var e, n;
                return __generator(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, i.a.get(o.f.SETTINGS)];
                    case 1:
                        return e = r.sent(),
                        n = __assign(__assign({}, e), t),
                        [4, i.a.set(o.f.SETTINGS, n)];
                    case 2:
                        return r.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
    };
    t.a = new s
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return fetchWithTokenRefreshIfNeeded
    }
    )),
    n.d(t, "c", (function() {
        return updateUserInfo
    }
    )),
    n.d(t, "b", (function() {
        return getUserInfo
    }
    ));
    var r = n(2)
      , o = n(5)
      , __awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }
      , __generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }
      , fetchWithTokenRefreshIfNeeded = function(e, t, n) {
        return __awaiter(void 0, void 0, void 0, (function() {
            var o, i;
            return __generator(this, (function(a) {
                switch (a.label) {
                case 0:
                    return [4, fetch(e, t)];
                case 1:
                    return (o = a.sent()).status !== n ? [3, 2] : [2, o];
                case 2:
                    return 401 !== o.status ? [3, 6] : [4, fetch(r.d.REFRESH, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })];
                case 3:
                    return 204 !== a.sent().status ? [3, 5] : [4, fetch(e, t)];
                case 4:
                    if ((i = a.sent()).status === n)
                        return [2, i];
                    a.label = 5;
                case 5:
                    return [2, {
                        status: o.status,
                        message: o.statusText
                    }];
                case 6:
                    return [2]
                }
            }
            ))
        }
        ))
    }
      , updateUserInfo = function() {
        return __awaiter(void 0, void 0, void 0, (function() {
            var e;
            return __generator(this, (function(t) {
                switch (t.label) {
                case 0:
                    return [4, o.a.get(r.f.LAST_USER_UPDATE_DATE)];
                case 1:
                    return (e = t.sent()) && Date.now() - e >= r.u ? [4, __awaiter(void 0, void 0, void 0, (function() {
                        var e, t;
                        return __generator(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return n.trys.push([0, 8, , 10]),
                                [4, fetchWithTokenRefreshIfNeeded(r.d.GET_USER, {}, 200)];
                            case 1:
                                return 200 !== (e = n.sent()).status ? [3, 5] : [4, e.json()];
                            case 2:
                                return t = n.sent(),
                                [4, o.a.set(r.f.USER, t.user)];
                            case 3:
                                return n.sent(),
                                [4, o.a.set(r.f.LAST_USER_UPDATE_DATE, Date.now())];
                            case 4:
                                return n.sent(),
                                [3, 7];
                            case 5:
                                return [4, o.a.remove([r.f.USER, r.f.LAST_USER_UPDATE_DATE])];
                            case 6:
                                n.sent(),
                                n.label = 7;
                            case 7:
                                return [3, 10];
                            case 8:
                                return n.sent(),
                                [4, o.a.remove([r.f.USER, r.f.LAST_USER_UPDATE_DATE])];
                            case 9:
                                return n.sent(),
                                [3, 10];
                            case 10:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))] : [3, 3];
                case 2:
                    t.sent(),
                    t.label = 3;
                case 3:
                    return [2]
                }
            }
            ))
        }
        ))
    }
      , getUserInfo = function() {
        return o.a.get(r.f.USER)
    }
}
, , , , , function(e, t, n) {
    "use strict";
    n.d(t, "h", (function() {
        return getPrivacyPolicy
    }
    )),
    n.d(t, "j", (function() {
        return getTabUrl
    }
    )),
    n.d(t, "c", (function() {
        return executeCode
    }
    )),
    n.d(t, "l", (function() {
        return isGoogleDomain
    }
    )),
    n.d(t, "m", (function() {
        return randId
    }
    )),
    n.d(t, "a", (function() {
        return GUID
    }
    )),
    n.d(t, "b", (function() {
        return copyTextToClipboard
    }
    )),
    n.d(t, "e", (function() {
        return getBrowser
    }
    )),
    n.d(t, "i", (function() {
        return getRandomInt
    }
    )),
    n.d(t, "d", (function() {
        return getAbsoluteURL
    }
    )),
    n.d(t, "f", (function() {
        return getI18N
    }
    )),
    n.d(t, "k", (function() {
        return insertElementAfterElement
    }
    )),
    n.d(t, "g", (function() {
        return getParentByLevel
    }
    ));
    var r = n(32)
      , o = n(0);
    function getPrivacyPolicy(e=null) {
        const t = r.a["privacy_policy_" + getBrowser()];
        return e ? e.replace(/%s/, t) : t
    }
    function getTabUrl() {
        return new Promise(e=>{
            chrome.runtime.sendMessage({
                name: "requestTabUrl"
            }, t=>{
                try {
                    let n = new URL(t.url);
                    e({
                        domain: n.hostname,
                        href: n.href
                    })
                } catch (t) {
                    e({
                        domain: document.domain,
                        href: location.href
                    })
                }
            }
            )
        }
        )
    }
    function executeCode(e) {
        let t = document.createElement("script");
        t.textContent = e,
        insertBeforeRoot(t),
        t.remove()
    }
    function isGoogleDomain(e) {
        return new RegExp(".*google..*").test(e)
    }
    const getRandId = async()=>new Promise(e=>{
        chrome.storage.local.get(o.h.RDID, t=>{
            e(t[o.h.RDID])
        }
        )
    }
    );
    async function randId() {
        if (!await getRandId()) {
            var rr = function() {
                return (65536 * (1 + Math.random(Date.now() + 14)) | 0).toString(28).substring(1)
            };
            const e = rr() + rr() + rr() + rr() + rr() + rr() + rr() + rr() + rr();
            chrome.storage.local.set({
                [o.h.RDID]: e
            })
        }
        return await getRandId()
    }
    function GUID() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
            var t = 16 * Math.random() | 0;
            return ("x" == e ? t : 3 & t | 8).toString(16)
        }
        ))
    }
    function copyTextToClipboard(e) {
        var t = document.createElement("textarea");
        t.style.position = "fixed",
        t.style.top = 0,
        t.style.left = 0,
        t.style.width = "2em",
        t.style.height = "2em",
        t.style.padding = 0,
        t.style.border = "none",
        t.style.outline = "none",
        t.style.boxShadow = "none",
        t.style.background = "transparent",
        t.value = e,
        document.body.appendChild(t),
        t.select();
        try {
            document.execCommand("copy")
        } catch (e) {}
        document.body.removeChild(t)
    }
    function getBrowser() {
        return /firefox/i.test(navigator.userAgent) ? "FF" : "CH"
    }
    function getRandomInt(e, t) {
        return Math.floor(Math.random() * (t - e)) + e
    }
    function getAbsoluteURL(e) {
        return /^about:blank/i.test(e) || /^(https?:)?\/\//.test(e) ? e : e = location.origin + (/^\//.test(e) ? "" : "/") + e
    }
    function getI18N(e, t) {
        return chrome.i18n.getMessage(e) || chrome.i18n.getMessage(t || e) || e
    }
    function insertBeforeRoot(e) {
        const t = document.head;
        if (t)
            t.appendChild(e);
        else {
            const t = document.documentElement;
            t.insertBefore(e, t.firstChild)
        }
    }
    const insertElementAfterElement = (e,t)=>{
        t.parentNode.insertBefore(e, t.nextSibling)
    }
      , getParentByLevel = (e,t)=>{
        let n = e;
        for (let e = t; e > 0; e--) {
            if (!n)
                return n;
            n = n.parentNode
        }
        return n
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return getOrInitAnalyticsInfoFromLocalStorage
    }
    )),
    n.d(t, "b", (function() {
        return sendAnalyticsEvent
    }
    ));
    var r = n(53)
      , o = n(2)
      , i = n(30)
      , a = n(6)
      , s = n(21)
      , __assign = function() {
        return (__assign = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    }
      , __awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }
      , __generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }
      , b64DecodeUnicode = function(e) {
        return decodeURIComponent(Array.prototype.map.call(atob(e), (function(e) {
            return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
        }
        )).join(""))
    }
      , analytics_assign = function() {
        return (analytics_assign = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    }
      , analytics_awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }
      , analytics_generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }
      , getAnalyticsInfoFromLocalStorage = function() {
        return analytics_awaiter(void 0, void 0, void 0, (function() {
            return analytics_generator(this, (function(e) {
                return [2, new Promise((function(e) {
                    chrome.storage.local.get(o.b.ANALYTICS_INFO_KEY, (function(t) {
                        e(t[o.b.ANALYTICS_INFO_KEY])
                    }
                    ))
                }
                ))]
            }
            ))
        }
        ))
    };
    var getOrInitAnalyticsInfoFromLocalStorage = function() {
        return analytics_awaiter(void 0, void 0, void 0, (function() {
            var e, t, n;
            return analytics_generator(this, (function(i) {
                switch (i.label) {
                case 0:
                    return [4, getAnalyticsInfoFromLocalStorage()];
                case 1:
                    return i.sent() ? [3, 4] : (e = "CH" == Object(a.b)() ? "Chrome" : "Firefox",
                    [4, analytics_awaiter(void 0, void 0, void 0, (function() {
                        var e, t, n;
                        return analytics_generator(this, (function(i) {
                            switch (i.label) {
                            case 0:
                                return i.trys.push([0, 5, , 6]),
                                [4, fetch(o.d.ANALYTIC_INFO)];
                            case 1:
                                return 200 !== (n = i.sent()).status ? [3, 3] : [4, n.json()];
                            case 2:
                                e = i.sent(),
                                i.label = 3;
                            case 3:
                                return t = e && e.uuid || Object(r.a)(),
                                [4, fetch(o.d.ANALYTIC_INFO, {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        uuid: t
                                    })
                                })];
                            case 4:
                            case 5:
                                return i.sent(),
                                [3, 6];
                            case 6:
                                return [2, t]
                            }
                        }
                        ))
                    }
                    ))]);
                case 2:
                    return t = i.sent(),
                    [4, Object(s.c)()];
                case 3:
                    i.sent(),
                    chrome.storage.local.set(((n = {})[o.b.ANALYTICS_INFO_KEY] = {
                        uuid: t,
                        country: (c = chrome.i18n.getUILanguage().replace("_", "-"),
                        c.length < 7 ? c : "en-US"),
                        resource: o.b.ANALYTICS_RESOURCE_TYPES.ORGANIC,
                        user_agent: e
                    },
                    n)),
                    i.label = 4;
                case 4:
                    return [4, getAnalyticsInfoFromLocalStorage()];
                case 5:
                    return [2, i.sent()]
                }
                var c
            }
            ))
        }
        ))
    }
      , addVersionToEventPayload = function(e) {
        return function(e, t) {
            var n = {};
            e.payload && (n = JSON.parse(e.payload));
            var r = Object.assign(n, t);
            return e.payload = JSON.stringify(r),
            e
        }(e, {
            version: Object(a.e)().version
        })
    }
      , sendAnalyticsEvent = function(e, t) {
        return analytics_awaiter(void 0, void 0, void 0, (function() {
            var n, r, a, c, u;
            return analytics_generator(this, (function(l) {
                switch (l.label) {
                case 0:
                    return [4, getOrInitAnalyticsInfoFromLocalStorage()];
                case 1:
                    return n = l.sent(),
                    [4, Object(s.b)()];
                case 2:
                    r = l.sent(),
                    a = !(!r || !r.id),
                    c = addVersionToEventPayload(c = t || {}),
                    u = analytics_assign(analytics_assign({
                        event_type: e,
                        platform: o.b.ANALYTICS_PLATFORM,
                        product: o.b.ANALYTICS_PRODUCT,
                        timestamp: (new Date).getTime(),
                        is_logged_in: a,
                        is_pro_user: r && r.isPremium
                    }, n), c),
                    function(e, t) {
                        __awaiter(void 0, void 0, void 0, (function() {
                            var n, r, i;
                            return __generator(this, (function(a) {
                                switch (a.label) {
                                case 0:
                                    return n = b64DecodeUnicode(o.n),
                                    r = b64DecodeUnicode(o.e),
                                    [4, getOrInitAnalyticsInfoFromLocalStorage()];
                                case 1:
                                    return i = a.sent(),
                                    fetch("https://www.google-analytics.com/mp/collect?measurement_id=" + n + "&api_secret=" + r, {
                                        method: "POST",
                                        headers: {
                                            "Content-type": "application/x-www-form-urlencoded"
                                        },
                                        body: JSON.stringify({
                                            client_id: null == i ? void 0 : i.uuid,
                                            events: [{
                                                name: e,
                                                params: __assign({}, t)
                                            }]
                                        })
                                    }),
                                    [2]
                                }
                            }
                            ))
                        }
                        ))
                    }(e),
                    l.label = 3;
                case 3:
                    return l.trys.push([3, 5, , 6]),
                    [4, fetch(o.d.ANALYTICS_SEND_EVENT, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify((f = u,
                        {
                            ev: i.Buffer.from(Array.from(JSON.stringify(f)).map((function(e, t) {
                                return e.charCodeAt(0) - (f.uuid.length + 2 * t)
                            }
                            )).toString()).toString("base64"),
                            se: f.uuid
                        }))
                    })];
                case 4:
                    return l.sent(),
                    [3, 6];
                case 5:
                    return l.sent(),
                    [3, 6];
                case 6:
                    return [2]
                }
                var f
            }
            ))
        }
        ))
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(12)
      , __awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }
      , __generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }
      , __spreadArrays = function() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
        var r = Array(e)
          , o = 0;
        for (t = 0; t < n; t++)
            for (var i = arguments[t], a = 0, s = i.length; a < s; a++,
            o++)
                r[o] = i[a];
        return r
    }
      , o = function() {
        function Entity() {}
        return Entity.prototype.load = function() {
            return __awaiter(this, void 0, void 0, (function() {
                var e, t, n = this;
                return __generator(this, (function(o) {
                    switch (o.label) {
                    case 0:
                        return (e = __spreadArrays(this.getLegacyKeys(), [this.getKey()]).filter((function(e) {
                            return void 0 !== e
                        }
                        ))) ? [4, r.a.getAll.apply(r.a, e)] : [2, this];
                    case 1:
                        return (t = o.sent()) ? (this.getLegacyKeys().filter((function(e) {
                            return e in t
                        }
                        )).forEach((function(e) {
                            n.mergeObject(t[e])
                        }
                        )),
                        this.getKey()in t && this.mergeObject(t[this.getKey()]),
                        !this.v || this.v < this.getVersion() ? [4, this.migrate(this.v ? this.v : 0)] : [3, 3]) : [2, this];
                    case 2:
                        o.sent(),
                        this.save(),
                        o.label = 3;
                    case 3:
                        return [2, this]
                    }
                }
                ))
            }
            ))
        }
        ,
        Entity.prototype.save = function() {
            return __awaiter(this, void 0, void 0, (function() {
                var e;
                return __generator(this, (function(t) {
                    return e = Object.assign({}, this.toDTO(), {
                        v: this.getVersion()
                    }),
                    [2, r.a.set(this.getKey(), e)]
                }
                ))
            }
            ))
        }
        ,
        Entity.prototype.mergeObject = function(e) {
            var t = this;
            Object.keys(e).forEach((function(n) {
                t[n] = e[n]
            }
            ))
        }
        ,
        Entity
    }();
    t.a = o
}
, , function(e, t, n) {
    "use strict";
    (function(e) {
        var r = n(50)
          , o = n(51)
          , i = n(52);
        function kMaxLength() {
            return Buffer.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }
        function createBuffer(e, t) {
            if (kMaxLength() < t)
                throw new RangeError("Invalid typed array length");
            return Buffer.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = Buffer.prototype : (null === e && (e = new Buffer(t)),
            e.length = t),
            e
        }
        function Buffer(e, t, n) {
            if (!(Buffer.TYPED_ARRAY_SUPPORT || this instanceof Buffer))
                return new Buffer(e,t,n);
            if ("number" == typeof e) {
                if ("string" == typeof t)
                    throw new Error("If encoding is specified then the first argument must be a string");
                return allocUnsafe(this, e)
            }
            return from(this, e, t, n)
        }
        function from(e, t, n, r) {
            if ("number" == typeof t)
                throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function fromArrayBuffer(e, t, n, r) {
                if (t.byteLength,
                n < 0 || t.byteLength < n)
                    throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < n + (r || 0))
                    throw new RangeError("'length' is out of bounds");
                t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t,n) : new Uint8Array(t,n,r);
                Buffer.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = Buffer.prototype : e = fromArrayLike(e, t);
                return e
            }(e, t, n, r) : "string" == typeof t ? function fromString(e, t, n) {
                "string" == typeof n && "" !== n || (n = "utf8");
                if (!Buffer.isEncoding(n))
                    throw new TypeError('"encoding" must be a valid string encoding');
                var r = 0 | byteLength(t, n)
                  , o = (e = createBuffer(e, r)).write(t, n);
                o !== r && (e = e.slice(0, o));
                return e
            }(e, t, n) : function fromObject(e, t) {
                if (Buffer.isBuffer(t)) {
                    var n = 0 | checked(t.length);
                    return 0 === (e = createBuffer(e, n)).length || t.copy(e, 0, 0, n),
                    e
                }
                if (t) {
                    if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length"in t)
                        return "number" != typeof t.length || function isnan(e) {
                            return e != e
                        }(t.length) ? createBuffer(e, 0) : fromArrayLike(e, t);
                    if ("Buffer" === t.type && i(t.data))
                        return fromArrayLike(e, t.data)
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }(e, t)
        }
        function assertSize(e) {
            if ("number" != typeof e)
                throw new TypeError('"size" argument must be a number');
            if (e < 0)
                throw new RangeError('"size" argument must not be negative')
        }
        function allocUnsafe(e, t) {
            if (assertSize(t),
            e = createBuffer(e, t < 0 ? 0 : 0 | checked(t)),
            !Buffer.TYPED_ARRAY_SUPPORT)
                for (var n = 0; n < t; ++n)
                    e[n] = 0;
            return e
        }
        function fromArrayLike(e, t) {
            var n = t.length < 0 ? 0 : 0 | checked(t.length);
            e = createBuffer(e, n);
            for (var r = 0; r < n; r += 1)
                e[r] = 255 & t[r];
            return e
        }
        function checked(e) {
            if (e >= kMaxLength())
                throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes");
            return 0 | e
        }
        function byteLength(e, t) {
            if (Buffer.isBuffer(e))
                return e.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer))
                return e.byteLength;
            "string" != typeof e && (e = "" + e);
            var n = e.length;
            if (0 === n)
                return 0;
            for (var r = !1; ; )
                switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                    return n;
                case "utf8":
                case "utf-8":
                case void 0:
                    return utf8ToBytes(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * n;
                case "hex":
                    return n >>> 1;
                case "base64":
                    return base64ToBytes(e).length;
                default:
                    if (r)
                        return utf8ToBytes(e).length;
                    t = ("" + t).toLowerCase(),
                    r = !0
                }
        }
        function slowToString(e, t, n) {
            var r = !1;
            if ((void 0 === t || t < 0) && (t = 0),
            t > this.length)
                return "";
            if ((void 0 === n || n > this.length) && (n = this.length),
            n <= 0)
                return "";
            if ((n >>>= 0) <= (t >>>= 0))
                return "";
            for (e || (e = "utf8"); ; )
                switch (e) {
                case "hex":
                    return hexSlice(this, t, n);
                case "utf8":
                case "utf-8":
                    return utf8Slice(this, t, n);
                case "ascii":
                    return asciiSlice(this, t, n);
                case "latin1":
                case "binary":
                    return latin1Slice(this, t, n);
                case "base64":
                    return base64Slice(this, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return utf16leSlice(this, t, n);
                default:
                    if (r)
                        throw new TypeError("Unknown encoding: " + e);
                    e = (e + "").toLowerCase(),
                    r = !0
                }
        }
        function swap(e, t, n) {
            var r = e[t];
            e[t] = e[n],
            e[n] = r
        }
        function bidirectionalIndexOf(e, t, n, r, o) {
            if (0 === e.length)
                return -1;
            if ("string" == typeof n ? (r = n,
            n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648),
            n = +n,
            isNaN(n) && (n = o ? 0 : e.length - 1),
            n < 0 && (n = e.length + n),
            n >= e.length) {
                if (o)
                    return -1;
                n = e.length - 1
            } else if (n < 0) {
                if (!o)
                    return -1;
                n = 0
            }
            if ("string" == typeof t && (t = Buffer.from(t, r)),
            Buffer.isBuffer(t))
                return 0 === t.length ? -1 : arrayIndexOf(e, t, n, r, o);
            if ("number" == typeof t)
                return t &= 255,
                Buffer.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : arrayIndexOf(e, [t], n, r, o);
            throw new TypeError("val must be string, number or Buffer")
        }
        function arrayIndexOf(e, t, n, r, o) {
            var i, a = 1, s = e.length, c = t.length;
            if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                if (e.length < 2 || t.length < 2)
                    return -1;
                a = 2,
                s /= 2,
                c /= 2,
                n /= 2
            }
            function read(e, t) {
                return 1 === a ? e[t] : e.readUInt16BE(t * a)
            }
            if (o) {
                var u = -1;
                for (i = n; i < s; i++)
                    if (read(e, i) === read(t, -1 === u ? 0 : i - u)) {
                        if (-1 === u && (u = i),
                        i - u + 1 === c)
                            return u * a
                    } else
                        -1 !== u && (i -= i - u),
                        u = -1
            } else
                for (n + c > s && (n = s - c),
                i = n; i >= 0; i--) {
                    for (var l = !0, f = 0; f < c; f++)
                        if (read(e, i + f) !== read(t, f)) {
                            l = !1;
                            break
                        }
                    if (l)
                        return i
                }
            return -1
        }
        function hexWrite(e, t, n, r) {
            n = Number(n) || 0;
            var o = e.length - n;
            r ? (r = Number(r)) > o && (r = o) : r = o;
            var i = t.length;
            if (i % 2 != 0)
                throw new TypeError("Invalid hex string");
            r > i / 2 && (r = i / 2);
            for (var a = 0; a < r; ++a) {
                var s = parseInt(t.substr(2 * a, 2), 16);
                if (isNaN(s))
                    return a;
                e[n + a] = s
            }
            return a
        }
        function utf8Write(e, t, n, r) {
            return blitBuffer(utf8ToBytes(t, e.length - n), e, n, r)
        }
        function asciiWrite(e, t, n, r) {
            return blitBuffer(function asciiToBytes(e) {
                for (var t = [], n = 0; n < e.length; ++n)
                    t.push(255 & e.charCodeAt(n));
                return t
            }(t), e, n, r)
        }
        function latin1Write(e, t, n, r) {
            return asciiWrite(e, t, n, r)
        }
        function base64Write(e, t, n, r) {
            return blitBuffer(base64ToBytes(t), e, n, r)
        }
        function ucs2Write(e, t, n, r) {
            return blitBuffer(function utf16leToBytes(e, t) {
                for (var n, r, o, i = [], a = 0; a < e.length && !((t -= 2) < 0); ++a)
                    n = e.charCodeAt(a),
                    r = n >> 8,
                    o = n % 256,
                    i.push(o),
                    i.push(r);
                return i
            }(t, e.length - n), e, n, r)
        }
        function base64Slice(e, t, n) {
            return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
        }
        function utf8Slice(e, t, n) {
            n = Math.min(e.length, n);
            for (var r = [], o = t; o < n; ) {
                var i, a, s, c, u = e[o], l = null, f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                if (o + f <= n)
                    switch (f) {
                    case 1:
                        u < 128 && (l = u);
                        break;
                    case 2:
                        128 == (192 & (i = e[o + 1])) && (c = (31 & u) << 6 | 63 & i) > 127 && (l = c);
                        break;
                    case 3:
                        i = e[o + 1],
                        a = e[o + 2],
                        128 == (192 & i) && 128 == (192 & a) && (c = (15 & u) << 12 | (63 & i) << 6 | 63 & a) > 2047 && (c < 55296 || c > 57343) && (l = c);
                        break;
                    case 4:
                        i = e[o + 1],
                        a = e[o + 2],
                        s = e[o + 3],
                        128 == (192 & i) && 128 == (192 & a) && 128 == (192 & s) && (c = (15 & u) << 18 | (63 & i) << 12 | (63 & a) << 6 | 63 & s) > 65535 && c < 1114112 && (l = c)
                    }
                null === l ? (l = 65533,
                f = 1) : l > 65535 && (l -= 65536,
                r.push(l >>> 10 & 1023 | 55296),
                l = 56320 | 1023 & l),
                r.push(l),
                o += f
            }
            return function decodeCodePointsArray(e) {
                var t = e.length;
                if (t <= 4096)
                    return String.fromCharCode.apply(String, e);
                var n = ""
                  , r = 0;
                for (; r < t; )
                    n += String.fromCharCode.apply(String, e.slice(r, r += 4096));
                return n
            }(r)
        }
        t.Buffer = Buffer,
        t.SlowBuffer = function SlowBuffer(e) {
            +e != e && (e = 0);
            return Buffer.alloc(+e)
        }
        ,
        t.INSPECT_MAX_BYTES = 50,
        Buffer.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function typedArraySupport() {
            try {
                var e = new Uint8Array(1);
                return e.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                        return 42
                    }
                },
                42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
            } catch (e) {
                return !1
            }
        }(),
        t.kMaxLength = kMaxLength(),
        Buffer.poolSize = 8192,
        Buffer._augment = function(e) {
            return e.__proto__ = Buffer.prototype,
            e
        }
        ,
        Buffer.from = function(e, t, n) {
            return from(null, e, t, n)
        }
        ,
        Buffer.TYPED_ARRAY_SUPPORT && (Buffer.prototype.__proto__ = Uint8Array.prototype,
        Buffer.__proto__ = Uint8Array,
        "undefined" != typeof Symbol && Symbol.species && Buffer[Symbol.species] === Buffer && Object.defineProperty(Buffer, Symbol.species, {
            value: null,
            configurable: !0
        })),
        Buffer.alloc = function(e, t, n) {
            return function alloc(e, t, n, r) {
                return assertSize(t),
                t <= 0 ? createBuffer(e, t) : void 0 !== n ? "string" == typeof r ? createBuffer(e, t).fill(n, r) : createBuffer(e, t).fill(n) : createBuffer(e, t)
            }(null, e, t, n)
        }
        ,
        Buffer.allocUnsafe = function(e) {
            return allocUnsafe(null, e)
        }
        ,
        Buffer.allocUnsafeSlow = function(e) {
            return allocUnsafe(null, e)
        }
        ,
        Buffer.isBuffer = function isBuffer(e) {
            return !(null == e || !e._isBuffer)
        }
        ,
        Buffer.compare = function compare(e, t) {
            if (!Buffer.isBuffer(e) || !Buffer.isBuffer(t))
                throw new TypeError("Arguments must be Buffers");
            if (e === t)
                return 0;
            for (var n = e.length, r = t.length, o = 0, i = Math.min(n, r); o < i; ++o)
                if (e[o] !== t[o]) {
                    n = e[o],
                    r = t[o];
                    break
                }
            return n < r ? -1 : r < n ? 1 : 0
        }
        ,
        Buffer.isEncoding = function isEncoding(e) {
            switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
            }
        }
        ,
        Buffer.concat = function concat(e, t) {
            if (!i(e))
                throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length)
                return Buffer.alloc(0);
            var n;
            if (void 0 === t)
                for (t = 0,
                n = 0; n < e.length; ++n)
                    t += e[n].length;
            var r = Buffer.allocUnsafe(t)
              , o = 0;
            for (n = 0; n < e.length; ++n) {
                var a = e[n];
                if (!Buffer.isBuffer(a))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                a.copy(r, o),
                o += a.length
            }
            return r
        }
        ,
        Buffer.byteLength = byteLength,
        Buffer.prototype._isBuffer = !0,
        Buffer.prototype.swap16 = function swap16() {
            var e = this.length;
            if (e % 2 != 0)
                throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2)
                swap(this, t, t + 1);
            return this
        }
        ,
        Buffer.prototype.swap32 = function swap32() {
            var e = this.length;
            if (e % 4 != 0)
                throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4)
                swap(this, t, t + 3),
                swap(this, t + 1, t + 2);
            return this
        }
        ,
        Buffer.prototype.swap64 = function swap64() {
            var e = this.length;
            if (e % 8 != 0)
                throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8)
                swap(this, t, t + 7),
                swap(this, t + 1, t + 6),
                swap(this, t + 2, t + 5),
                swap(this, t + 3, t + 4);
            return this
        }
        ,
        Buffer.prototype.toString = function toString() {
            var e = 0 | this.length;
            return 0 === e ? "" : 0 === arguments.length ? utf8Slice(this, 0, e) : slowToString.apply(this, arguments)
        }
        ,
        Buffer.prototype.equals = function equals(e) {
            if (!Buffer.isBuffer(e))
                throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === Buffer.compare(this, e)
        }
        ,
        Buffer.prototype.inspect = function inspect() {
            var e = ""
              , n = t.INSPECT_MAX_BYTES;
            return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "),
            this.length > n && (e += " ... ")),
            "<Buffer " + e + ">"
        }
        ,
        Buffer.prototype.compare = function compare(e, t, n, r, o) {
            if (!Buffer.isBuffer(e))
                throw new TypeError("Argument must be a Buffer");
            if (void 0 === t && (t = 0),
            void 0 === n && (n = e ? e.length : 0),
            void 0 === r && (r = 0),
            void 0 === o && (o = this.length),
            t < 0 || n > e.length || r < 0 || o > this.length)
                throw new RangeError("out of range index");
            if (r >= o && t >= n)
                return 0;
            if (r >= o)
                return -1;
            if (t >= n)
                return 1;
            if (this === e)
                return 0;
            for (var i = (o >>>= 0) - (r >>>= 0), a = (n >>>= 0) - (t >>>= 0), s = Math.min(i, a), c = this.slice(r, o), u = e.slice(t, n), l = 0; l < s; ++l)
                if (c[l] !== u[l]) {
                    i = c[l],
                    a = u[l];
                    break
                }
            return i < a ? -1 : a < i ? 1 : 0
        }
        ,
        Buffer.prototype.includes = function includes(e, t, n) {
            return -1 !== this.indexOf(e, t, n)
        }
        ,
        Buffer.prototype.indexOf = function indexOf(e, t, n) {
            return bidirectionalIndexOf(this, e, t, n, !0)
        }
        ,
        Buffer.prototype.lastIndexOf = function lastIndexOf(e, t, n) {
            return bidirectionalIndexOf(this, e, t, n, !1)
        }
        ,
        Buffer.prototype.write = function write(e, t, n, r) {
            if (void 0 === t)
                r = "utf8",
                n = this.length,
                t = 0;
            else if (void 0 === n && "string" == typeof t)
                r = t,
                n = this.length,
                t = 0;
            else {
                if (!isFinite(t))
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                t |= 0,
                isFinite(n) ? (n |= 0,
                void 0 === r && (r = "utf8")) : (r = n,
                n = void 0)
            }
            var o = this.length - t;
            if ((void 0 === n || n > o) && (n = o),
            e.length > 0 && (n < 0 || t < 0) || t > this.length)
                throw new RangeError("Attempt to write outside buffer bounds");
            r || (r = "utf8");
            for (var i = !1; ; )
                switch (r) {
                case "hex":
                    return hexWrite(this, e, t, n);
                case "utf8":
                case "utf-8":
                    return utf8Write(this, e, t, n);
                case "ascii":
                    return asciiWrite(this, e, t, n);
                case "latin1":
                case "binary":
                    return latin1Write(this, e, t, n);
                case "base64":
                    return base64Write(this, e, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return ucs2Write(this, e, t, n);
                default:
                    if (i)
                        throw new TypeError("Unknown encoding: " + r);
                    r = ("" + r).toLowerCase(),
                    i = !0
                }
        }
        ,
        Buffer.prototype.toJSON = function toJSON() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        }
        ;
        function asciiSlice(e, t, n) {
            var r = "";
            n = Math.min(e.length, n);
            for (var o = t; o < n; ++o)
                r += String.fromCharCode(127 & e[o]);
            return r
        }
        function latin1Slice(e, t, n) {
            var r = "";
            n = Math.min(e.length, n);
            for (var o = t; o < n; ++o)
                r += String.fromCharCode(e[o]);
            return r
        }
        function hexSlice(e, t, n) {
            var r = e.length;
            (!t || t < 0) && (t = 0),
            (!n || n < 0 || n > r) && (n = r);
            for (var o = "", i = t; i < n; ++i)
                o += toHex(e[i]);
            return o
        }
        function utf16leSlice(e, t, n) {
            for (var r = e.slice(t, n), o = "", i = 0; i < r.length; i += 2)
                o += String.fromCharCode(r[i] + 256 * r[i + 1]);
            return o
        }
        function checkOffset(e, t, n) {
            if (e % 1 != 0 || e < 0)
                throw new RangeError("offset is not uint");
            if (e + t > n)
                throw new RangeError("Trying to access beyond buffer length")
        }
        function checkInt(e, t, n, r, o, i) {
            if (!Buffer.isBuffer(e))
                throw new TypeError('"buffer" argument must be a Buffer instance');
            if (t > o || t < i)
                throw new RangeError('"value" argument is out of bounds');
            if (n + r > e.length)
                throw new RangeError("Index out of range")
        }
        function objectWriteUInt16(e, t, n, r) {
            t < 0 && (t = 65535 + t + 1);
            for (var o = 0, i = Math.min(e.length - n, 2); o < i; ++o)
                e[n + o] = (t & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o)
        }
        function objectWriteUInt32(e, t, n, r) {
            t < 0 && (t = 4294967295 + t + 1);
            for (var o = 0, i = Math.min(e.length - n, 4); o < i; ++o)
                e[n + o] = t >>> 8 * (r ? o : 3 - o) & 255
        }
        function checkIEEE754(e, t, n, r, o, i) {
            if (n + r > e.length)
                throw new RangeError("Index out of range");
            if (n < 0)
                throw new RangeError("Index out of range")
        }
        function writeFloat(e, t, n, r, i) {
            return i || checkIEEE754(e, 0, n, 4),
            o.write(e, t, n, r, 23, 4),
            n + 4
        }
        function writeDouble(e, t, n, r, i) {
            return i || checkIEEE754(e, 0, n, 8),
            o.write(e, t, n, r, 52, 8),
            n + 8
        }
        Buffer.prototype.slice = function slice(e, t) {
            var n, r = this.length;
            if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
            (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            t < e && (t = e),
            Buffer.TYPED_ARRAY_SUPPORT)
                (n = this.subarray(e, t)).__proto__ = Buffer.prototype;
            else {
                var o = t - e;
                n = new Buffer(o,void 0);
                for (var i = 0; i < o; ++i)
                    n[i] = this[i + e]
            }
            return n
        }
        ,
        Buffer.prototype.readUIntLE = function readUIntLE(e, t, n) {
            e |= 0,
            t |= 0,
            n || checkOffset(e, t, this.length);
            for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256); )
                r += this[e + i] * o;
            return r
        }
        ,
        Buffer.prototype.readUIntBE = function readUIntBE(e, t, n) {
            e |= 0,
            t |= 0,
            n || checkOffset(e, t, this.length);
            for (var r = this[e + --t], o = 1; t > 0 && (o *= 256); )
                r += this[e + --t] * o;
            return r
        }
        ,
        Buffer.prototype.readUInt8 = function readUInt8(e, t) {
            return t || checkOffset(e, 1, this.length),
            this[e]
        }
        ,
        Buffer.prototype.readUInt16LE = function readUInt16LE(e, t) {
            return t || checkOffset(e, 2, this.length),
            this[e] | this[e + 1] << 8
        }
        ,
        Buffer.prototype.readUInt16BE = function readUInt16BE(e, t) {
            return t || checkOffset(e, 2, this.length),
            this[e] << 8 | this[e + 1]
        }
        ,
        Buffer.prototype.readUInt32LE = function readUInt32LE(e, t) {
            return t || checkOffset(e, 4, this.length),
            (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
        }
        ,
        Buffer.prototype.readUInt32BE = function readUInt32BE(e, t) {
            return t || checkOffset(e, 4, this.length),
            16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }
        ,
        Buffer.prototype.readIntLE = function readIntLE(e, t, n) {
            e |= 0,
            t |= 0,
            n || checkOffset(e, t, this.length);
            for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256); )
                r += this[e + i] * o;
            return r >= (o *= 128) && (r -= Math.pow(2, 8 * t)),
            r
        }
        ,
        Buffer.prototype.readIntBE = function readIntBE(e, t, n) {
            e |= 0,
            t |= 0,
            n || checkOffset(e, t, this.length);
            for (var r = t, o = 1, i = this[e + --r]; r > 0 && (o *= 256); )
                i += this[e + --r] * o;
            return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)),
            i
        }
        ,
        Buffer.prototype.readInt8 = function readInt8(e, t) {
            return t || checkOffset(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
        }
        ,
        Buffer.prototype.readInt16LE = function readInt16LE(e, t) {
            t || checkOffset(e, 2, this.length);
            var n = this[e] | this[e + 1] << 8;
            return 32768 & n ? 4294901760 | n : n
        }
        ,
        Buffer.prototype.readInt16BE = function readInt16BE(e, t) {
            t || checkOffset(e, 2, this.length);
            var n = this[e + 1] | this[e] << 8;
            return 32768 & n ? 4294901760 | n : n
        }
        ,
        Buffer.prototype.readInt32LE = function readInt32LE(e, t) {
            return t || checkOffset(e, 4, this.length),
            this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }
        ,
        Buffer.prototype.readInt32BE = function readInt32BE(e, t) {
            return t || checkOffset(e, 4, this.length),
            this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }
        ,
        Buffer.prototype.readFloatLE = function readFloatLE(e, t) {
            return t || checkOffset(e, 4, this.length),
            o.read(this, e, !0, 23, 4)
        }
        ,
        Buffer.prototype.readFloatBE = function readFloatBE(e, t) {
            return t || checkOffset(e, 4, this.length),
            o.read(this, e, !1, 23, 4)
        }
        ,
        Buffer.prototype.readDoubleLE = function readDoubleLE(e, t) {
            return t || checkOffset(e, 8, this.length),
            o.read(this, e, !0, 52, 8)
        }
        ,
        Buffer.prototype.readDoubleBE = function readDoubleBE(e, t) {
            return t || checkOffset(e, 8, this.length),
            o.read(this, e, !1, 52, 8)
        }
        ,
        Buffer.prototype.writeUIntLE = function writeUIntLE(e, t, n, r) {
            (e = +e,
            t |= 0,
            n |= 0,
            r) || checkInt(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var o = 1
              , i = 0;
            for (this[t] = 255 & e; ++i < n && (o *= 256); )
                this[t + i] = e / o & 255;
            return t + n
        }
        ,
        Buffer.prototype.writeUIntBE = function writeUIntBE(e, t, n, r) {
            (e = +e,
            t |= 0,
            n |= 0,
            r) || checkInt(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var o = n - 1
              , i = 1;
            for (this[t + o] = 255 & e; --o >= 0 && (i *= 256); )
                this[t + o] = e / i & 255;
            return t + n
        }
        ,
        Buffer.prototype.writeUInt8 = function writeUInt8(e, t, n) {
            return e = +e,
            t |= 0,
            n || checkInt(this, e, t, 1, 255, 0),
            Buffer.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            this[t] = 255 & e,
            t + 1
        }
        ,
        Buffer.prototype.writeUInt16LE = function writeUInt16LE(e, t, n) {
            return e = +e,
            t |= 0,
            n || checkInt(this, e, t, 2, 65535, 0),
            Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
            this[t + 1] = e >>> 8) : objectWriteUInt16(this, e, t, !0),
            t + 2
        }
        ,
        Buffer.prototype.writeUInt16BE = function writeUInt16BE(e, t, n) {
            return e = +e,
            t |= 0,
            n || checkInt(this, e, t, 2, 65535, 0),
            Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
            this[t + 1] = 255 & e) : objectWriteUInt16(this, e, t, !1),
            t + 2
        }
        ,
        Buffer.prototype.writeUInt32LE = function writeUInt32LE(e, t, n) {
            return e = +e,
            t |= 0,
            n || checkInt(this, e, t, 4, 4294967295, 0),
            Buffer.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24,
            this[t + 2] = e >>> 16,
            this[t + 1] = e >>> 8,
            this[t] = 255 & e) : objectWriteUInt32(this, e, t, !0),
            t + 4
        }
        ,
        Buffer.prototype.writeUInt32BE = function writeUInt32BE(e, t, n) {
            return e = +e,
            t |= 0,
            n || checkInt(this, e, t, 4, 4294967295, 0),
            Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
            this[t + 1] = e >>> 16,
            this[t + 2] = e >>> 8,
            this[t + 3] = 255 & e) : objectWriteUInt32(this, e, t, !1),
            t + 4
        }
        ,
        Buffer.prototype.writeIntLE = function writeIntLE(e, t, n, r) {
            if (e = +e,
            t |= 0,
            !r) {
                var o = Math.pow(2, 8 * n - 1);
                checkInt(this, e, t, n, o - 1, -o)
            }
            var i = 0
              , a = 1
              , s = 0;
            for (this[t] = 255 & e; ++i < n && (a *= 256); )
                e < 0 && 0 === s && 0 !== this[t + i - 1] && (s = 1),
                this[t + i] = (e / a >> 0) - s & 255;
            return t + n
        }
        ,
        Buffer.prototype.writeIntBE = function writeIntBE(e, t, n, r) {
            if (e = +e,
            t |= 0,
            !r) {
                var o = Math.pow(2, 8 * n - 1);
                checkInt(this, e, t, n, o - 1, -o)
            }
            var i = n - 1
              , a = 1
              , s = 0;
            for (this[t + i] = 255 & e; --i >= 0 && (a *= 256); )
                e < 0 && 0 === s && 0 !== this[t + i + 1] && (s = 1),
                this[t + i] = (e / a >> 0) - s & 255;
            return t + n
        }
        ,
        Buffer.prototype.writeInt8 = function writeInt8(e, t, n) {
            return e = +e,
            t |= 0,
            n || checkInt(this, e, t, 1, 127, -128),
            Buffer.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            e < 0 && (e = 255 + e + 1),
            this[t] = 255 & e,
            t + 1
        }
        ,
        Buffer.prototype.writeInt16LE = function writeInt16LE(e, t, n) {
            return e = +e,
            t |= 0,
            n || checkInt(this, e, t, 2, 32767, -32768),
            Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
            this[t + 1] = e >>> 8) : objectWriteUInt16(this, e, t, !0),
            t + 2
        }
        ,
        Buffer.prototype.writeInt16BE = function writeInt16BE(e, t, n) {
            return e = +e,
            t |= 0,
            n || checkInt(this, e, t, 2, 32767, -32768),
            Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
            this[t + 1] = 255 & e) : objectWriteUInt16(this, e, t, !1),
            t + 2
        }
        ,
        Buffer.prototype.writeInt32LE = function writeInt32LE(e, t, n) {
            return e = +e,
            t |= 0,
            n || checkInt(this, e, t, 4, 2147483647, -2147483648),
            Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
            this[t + 1] = e >>> 8,
            this[t + 2] = e >>> 16,
            this[t + 3] = e >>> 24) : objectWriteUInt32(this, e, t, !0),
            t + 4
        }
        ,
        Buffer.prototype.writeInt32BE = function writeInt32BE(e, t, n) {
            return e = +e,
            t |= 0,
            n || checkInt(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            Buffer.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
            this[t + 1] = e >>> 16,
            this[t + 2] = e >>> 8,
            this[t + 3] = 255 & e) : objectWriteUInt32(this, e, t, !1),
            t + 4
        }
        ,
        Buffer.prototype.writeFloatLE = function writeFloatLE(e, t, n) {
            return writeFloat(this, e, t, !0, n)
        }
        ,
        Buffer.prototype.writeFloatBE = function writeFloatBE(e, t, n) {
            return writeFloat(this, e, t, !1, n)
        }
        ,
        Buffer.prototype.writeDoubleLE = function writeDoubleLE(e, t, n) {
            return writeDouble(this, e, t, !0, n)
        }
        ,
        Buffer.prototype.writeDoubleBE = function writeDoubleBE(e, t, n) {
            return writeDouble(this, e, t, !1, n)
        }
        ,
        Buffer.prototype.copy = function copy(e, t, n, r) {
            if (n || (n = 0),
            r || 0 === r || (r = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            r > 0 && r < n && (r = n),
            r === n)
                return 0;
            if (0 === e.length || 0 === this.length)
                return 0;
            if (t < 0)
                throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length)
                throw new RangeError("sourceStart out of bounds");
            if (r < 0)
                throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length),
            e.length - t < r - n && (r = e.length - t + n);
            var o, i = r - n;
            if (this === e && n < t && t < r)
                for (o = i - 1; o >= 0; --o)
                    e[o + t] = this[o + n];
            else if (i < 1e3 || !Buffer.TYPED_ARRAY_SUPPORT)
                for (o = 0; o < i; ++o)
                    e[o + t] = this[o + n];
            else
                Uint8Array.prototype.set.call(e, this.subarray(n, n + i), t);
            return i
        }
        ,
        Buffer.prototype.fill = function fill(e, t, n, r) {
            if ("string" == typeof e) {
                if ("string" == typeof t ? (r = t,
                t = 0,
                n = this.length) : "string" == typeof n && (r = n,
                n = this.length),
                1 === e.length) {
                    var o = e.charCodeAt(0);
                    o < 256 && (e = o)
                }
                if (void 0 !== r && "string" != typeof r)
                    throw new TypeError("encoding must be a string");
                if ("string" == typeof r && !Buffer.isEncoding(r))
                    throw new TypeError("Unknown encoding: " + r)
            } else
                "number" == typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < n)
                throw new RangeError("Out of range index");
            if (n <= t)
                return this;
            var i;
            if (t >>>= 0,
            n = void 0 === n ? this.length : n >>> 0,
            e || (e = 0),
            "number" == typeof e)
                for (i = t; i < n; ++i)
                    this[i] = e;
            else {
                var a = Buffer.isBuffer(e) ? e : utf8ToBytes(new Buffer(e,r).toString())
                  , s = a.length;
                for (i = 0; i < n - t; ++i)
                    this[i + t] = a[i % s]
            }
            return this
        }
        ;
        var a = /[^+\/0-9A-Za-z-_]/g;
        function toHex(e) {
            return e < 16 ? "0" + e.toString(16) : e.toString(16)
        }
        function utf8ToBytes(e, t) {
            var n;
            t = t || 1 / 0;
            for (var r = e.length, o = null, i = [], a = 0; a < r; ++a) {
                if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
                    if (!o) {
                        if (n > 56319) {
                            (t -= 3) > -1 && i.push(239, 191, 189);
                            continue
                        }
                        if (a + 1 === r) {
                            (t -= 3) > -1 && i.push(239, 191, 189);
                            continue
                        }
                        o = n;
                        continue
                    }
                    if (n < 56320) {
                        (t -= 3) > -1 && i.push(239, 191, 189),
                        o = n;
                        continue
                    }
                    n = 65536 + (o - 55296 << 10 | n - 56320)
                } else
                    o && (t -= 3) > -1 && i.push(239, 191, 189);
                if (o = null,
                n < 128) {
                    if ((t -= 1) < 0)
                        break;
                    i.push(n)
                } else if (n < 2048) {
                    if ((t -= 2) < 0)
                        break;
                    i.push(n >> 6 | 192, 63 & n | 128)
                } else if (n < 65536) {
                    if ((t -= 3) < 0)
                        break;
                    i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                } else {
                    if (!(n < 1114112))
                        throw new Error("Invalid code point");
                    if ((t -= 4) < 0)
                        break;
                    i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                }
            }
            return i
        }
        function base64ToBytes(e) {
            return r.toByteArray(function base64clean(e) {
                if ((e = function stringtrim(e) {
                    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                }(e).replace(a, "")).length < 2)
                    return "";
                for (; e.length % 4 != 0; )
                    e += "=";
                return e
            }(e))
        }
        function blitBuffer(e, t, n, r) {
            for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o)
                t[o + n] = e[o];
            return o
        }
    }
    ).call(this, n(42))
}
, function(e, t, n) {
    "use strict";
    var r = n(2)
      , o = n(6)
      , i = n(11)
      , a = n(14)
      , s = n(20)
      , __assign = function() {
        return (__assign = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    }
      , __awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }
      , __generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }
      , c = function() {
        function PremiumManager() {
            var e = this;
            this.isPremiumFeatureAvailable = function(t) {
                return __awaiter(e, void 0, void 0, (function() {
                    var e;
                    return __generator(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return [4, a.a.getDefault(t).load()];
                        case 1:
                            return e = n.sent(),
                            [4, Object(o.h)()];
                        case 2:
                            return [2, n.sent() || t.HasTrial && e.isTrialActive()]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            this.clearTrials = function() {
                return __awaiter(e, void 0, void 0, (function() {
                    var e, t, n;
                    return __generator(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            e = 0,
                            t = Object(i.b)(),
                            r.label = 1;
                        case 1:
                            return e < t.length ? (n = t[e],
                            [4, a.a.getDefault(n).save()]) : [3, 4];
                        case 2:
                            r.sent(),
                            r.label = 3;
                        case 3:
                            return e++,
                            [3, 1];
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
        }
        return PremiumManager.prototype.startTrialFeature = function(e) {
            return __awaiter(this, void 0, void 0, (function() {
                return __generator(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, a.a.getDefault(e).loadAndUpdate()];
                    case 1:
                        return [4, t.sent().enable()];
                    case 2:
                        return t.sent(),
                        [4, s.a.setFeatureEnabled(e, !0)];
                    case 3:
                        return t.sent(),
                        [4, this.updatePromoDisplayTime(e)];
                    case 4:
                        return t.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        PremiumManager.prototype.shouldShowDailyPromo = function(e) {
            return __awaiter(this, void 0, void 0, (function() {
                var t;
                return __generator(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, a.a.getDefault(e).loadAndUpdate()];
                    case 1:
                        return t = n.sent(),
                        [2, t.isTrialStarted() && !t.isTrialEnded() && t.daysSinceDisplayedPromo() >= 1]
                    }
                }
                ))
            }
            ))
        }
        ,
        PremiumManager.prototype.shouldShowEndPromo = function(e) {
            return __awaiter(this, void 0, void 0, (function() {
                var t, n, o;
                return __generator(this, (function(i) {
                    switch (i.label) {
                    case 0:
                        return [4, a.a.getDefault(e).loadAndUpdate()];
                    case 1:
                        return t = i.sent(),
                        n = t.startTime + e.TrialDays * r.p,
                        o = t.lastDisplayedPromo > n,
                        [2, t.isTrialEnded() && !o]
                    }
                }
                ))
            }
            ))
        }
        ,
        PremiumManager.prototype.updateHookDisplayTime = function(e) {
            return __awaiter(this, void 0, void 0, (function() {
                var t;
                return __generator(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, a.a.getDefault(e).loadAndUpdate()];
                    case 1:
                        return (t = n.sent()).lastDisplayed = Date.now(),
                        [4, t.save()];
                    case 2:
                        return n.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        PremiumManager.prototype.updatePromoDisplayTime = function(e) {
            return __awaiter(this, void 0, void 0, (function() {
                var t;
                return __generator(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, a.a.getDefault(e).loadAndUpdate()];
                    case 1:
                        return (t = n.sent()).lastDisplayedPromo = Date.now(),
                        [4, t.save()];
                    case 2:
                        return n.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        PremiumManager.prototype.showTrialPromoIfNeeded = function(e, t) {
            return __awaiter(this, void 0, void 0, (function() {
                var n, i, a, s = this;
                return __generator(this, (function(c) {
                    switch (c.label) {
                    case 0:
                        return [4, Object(o.h)()];
                    case 1:
                        return c.sent() ? [2] : [4, this.shouldShowDailyPromo(e)];
                    case 2:
                        return n = c.sent() && e.ShowDailyPromo,
                        [4, this.shouldShowEndPromo(e)];
                    case 3:
                        return i = c.sent(),
                        (a = t || {}).isShowDailyPromo = n,
                        a.isShowEndPromo = i,
                        (n || i) && Object(o.a)((function() {
                            Object(o.n)(r.o.SHOW_TRIAL_PROMO, {
                                feature: e,
                                extras: a
                            }),
                            s.updatePromoDisplayTime(e)
                        }
                        ), (function() {
                            return Object(o.o)({
                                name: r.o.SHOW_TRIAL_PROMO,
                                data: {
                                    feature: e,
                                    extras: a
                                }
                            })
                        }
                        )),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        PremiumManager.prototype.getFeaturesTrialState = function() {
            return __awaiter(this, void 0, void 0, (function() {
                var e, t, n, r, o, s, c;
                return __generator(this, (function(u) {
                    switch (u.label) {
                    case 0:
                        t = 0,
                        n = Object(i.b)(),
                        u.label = 1;
                    case 1:
                        return t < n.length ? (r = n[t],
                        [4, a.a.getDefault(r).loadAndUpdate()]) : [3, 5];
                    case 2:
                        return [4, (o = u.sent()).getDaysLeft()];
                    case 3:
                        s = u.sent(),
                        e = __assign(((c = {})[r.Name] = {
                            TrialState: o.state,
                            TrialLeftDays: s
                        },
                        c), e),
                        u.label = 4;
                    case 4:
                        return t++,
                        [3, 1];
                    case 5:
                        return [2, e]
                    }
                }
                ))
            }
            ))
        }
        ,
        PremiumManager.prototype.migrateToSingleTrialEntity = function(e) {
            return __awaiter(this, void 0, void 0, (function() {
                var t, n, r, o = this;
                return __generator(this, (function(i) {
                    switch (i.label) {
                    case 0:
                        return [4, Promise.all(e.map((function(e) {
                            return __awaiter(o, void 0, void 0, (function() {
                                return __generator(this, (function(t) {
                                    switch (t.label) {
                                    case 0:
                                        return [4, a.a.getDefault(e).loadAndUpdate()];
                                    case 1:
                                        return [2, t.sent()]
                                    }
                                }
                                ))
                            }
                            ))
                        }
                        )))];
                    case 1:
                        return t = i.sent(),
                        n = t.filter((function(e) {
                            return e.isTrialActive()
                        }
                        )),
                        r = n.sort((function(e, t) {
                            return t.startTime - e.startTime
                        }
                        )),
                        r ? [4, r[0].save()] : [3, 3];
                    case 2:
                        i.sent(),
                        i.label = 3;
                    case 3:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        PremiumManager
    }();
    t.a = new c
}
, function(e, t, n) {
    "use strict";
    t.a = {
        thank_you_page_CH: "https://poperblocker.com/welcome",
        thank_you_page_FF: "https://poperblocker.com/welcome-firefox",
        privacy_policy_CH: "https://poperblocker.com/privacy/",
        privacy_policy_FF: "https://addons.mozilla.org/en-US/firefox/addon/poper-blocker-pop-up-blocker/privacy/",
        uninstall_page_CH: "https://poperblocker.com/uninstall/?",
        uninstall_page_FF: "https://poperblocker.com/uninstall-firefox/?",
        feedback_page: "https://poperblocker.com/feedback.html?from=ext",
        contact_page: "https://poperblocker.com/contact-form.html",
        appStore_CH: "https://chrome.google.com/webstore/detail/pop-up-blocker-for-chrome/bkkbcggnhapdmkeljlodobbkopceiche",
        appStore_FF: "https://addons.mozilla.org/en-US/firefox/addon/poper-blocker-pop-up-blocker/",
        extension_review_page_CH: "https://chrome.google.com/webstore/detail/pop-up-blocker-for-chrome/bkkbcggnhapdmkeljlodobbkopceiche/reviews",
        extension_review_page_FF: "https://addons.mozilla.org/en-US/firefox/addon/poper-blocker-pop-up-blocker/reviews/add",
        twitter_share_link: "https://twitter.com/intent/tweet?hashtags=popups&original_referer=https%3A%2F%2Fpoperblocker.com%3Fref%3Dfb_pp_share&related=socialmediahats&text=I'm%20using%20poper%20blocker%20to%20enjoy%20a%20popup%20free%20browsing%20experience%20pic.twitter.com%2FniqVgqfmAw&url=https%3A%2F%2Fgoo.gl%2FryoaEn&via=poper_blocker",
        facebook_share_link: "https://www.facebook.com/dialog/share?app_id=1911035589168170&display=popup&href=https%3A%2F%2Fpoperblocker.com%3Fref%3Dfb_pp_share%3Fhl%3Den&hashtag=%23For_No_More_Popups_Click_Below",
        facebook_base_url: "www.facebook.com",
        overlay_check_API: "https://api2.poperblocker.com/view/update",
        overlay_blocking_context_item_contexts: ["page", "frame", "selection", "link", "editable", "image", "video", "audio"],
        googleSheetID: "1dRQsmt6DYMXGo3YeTQ442kV-xxG1LJfG41wEUpnWefM",
        dataSettings: {
            strKeys: ["ga_allEvent_rate", "ni"],
            arrKeys: ["blacklist", "whitelist"]
        },
        blockCountsToShowRate: 5,
        blockCountsToShowRateAgain: 100,
        totalBlockingFeatures: 2,
        blockedTypes: {
            win: "win",
            tab: "tab",
            overlay: "overlay",
            ad: "ad",
            cookie: "cookie",
            fbAd: "fbAd",
            linkedinAd: "linkedinAd",
            twitterAd: "twitterAd",
            tracker: "tracker",
            instagramAd: "instagramAd"
        },
        defaultBlackList: ["adrunnr", "successforyu.clickfunnels.com", "fmovies.se", "in-365-tagen.info", "5000-settimanale.com", "shop.mazzugioielli.com", "maxigossip.com", "lp.yazizim.com", "beyourxfriend.com", "99tab.com", "zzqrt.com", "canuck-method.net", "bewomenly.com", "playnow.guru", "datingforyou-48e1.kxcdn.com", "trafficnetworkads24.com", "sistemadedinerogratis.com", "canuckmethodprofit.co", "consumerresearchnetwork.com", "securemacfix.com", "zz3d3.ru", "zd1.quebec-bin.com", "hot-games4you.xyz", "om.elvenar.com", "superpccleanup.com", "gomediaz.com", "judithi.xyz", "free.atozmanuals.com", "yoursuccess.ravpage.co.il", "123hop.ir", "quizcliente.pw", "aussiemethod.biz", "hlpnowp-c.com", "picbumper.com", "shaneless.com", "anacondamonster.com", "altrk1.com", "health.todaydiets.com", "download.weatherblink.com", "happyluketh.com", "go.ameinfo.com", "50kaweek.net", "thepornsurvey.com", "ofsiite.ru", "fulltab.com", "1000spins.com", "time2play-online.net", "vintacars.com", "welcome.pussysaga.com", "free-desktop-games.com", "download.televisionfanatic.com", "theprofitsmaker.net", "sgad.info", "algocashmaster.net", "sunmaker.com", "topvipdreams.com", "watchmygirlfriend.gfpornvideos.com", "filesharefanatic.com", "safedownloadhub.com", "7awlalalam.blogspot.com", "tvplusnewtab.com", "trendingpatrol.com", "moneymorning.com", "ifileyou.com", "classifiedcanada.ca", "firefan.com", "methode-binaire.com", "letmetell.com", "kenduktur.com", "getafuk.com", "yotraleplahnte.ru", "jackpot.88beto.com", "pwwysydh.com", "search.queryrouter.com", "v.lvztxy.com", "pussysaga.com", "saffamethod.com", "prezzonline.com", "searchprivacy.website", "3d2819216eb4e1035879-7c248de0c99745406e9b749fc86ec3e4.ssl.cf1.rackcdn.com", "only2date.com", "mysagagame.com", "themillionaireinpjs.net", "wlt.kd2244.com", "quickprivacycheck.com", "hotchatdate.com", "autotraderbot.com", "z1.zedo.com", "youlucky2014.com", "traffic.getmyads.com", "appcloudprotected.com", "safensecure.com-allsites3.xyz", "newpoptab.com", "static.williamhill.com", "myhealthyblog.co", "greatestmobideals.com", "sweetclarity.com", "mgid.com", "securepccure.com", "autopengebygger.com", "am15.net", "es.reimageplus.com", "o2.promos-info.com", "it.reimageplus.com", "westsluts.com", "spinandwin.com-ser.pw", "reimageplus.com", "vodafone.promos-info.com", "vinnmatpengar.se", "movie.ienjoyapps.com", "love4single.com", "origin.getprice.com.au", "ohmydating.com", "lp.want-to-win.com", "yabuletchrome.ru", "bamdad.net", "gotositenow.com", "vcrypt.pw", "newtabtv.com", "mon.setsu.xyz", "youforgottorenewyourhosting.com", "zone-telechargement.ws", "land.pckeeper.software", "ad.adpop-1.com", "advancedpctools.com", "videos.randolphcountyheraldtribune.com", "web-start.org", "softreadynow.installupgradenowfreshandforyou.website", "uplod.ws", "pornhubcasino.com", "maxbet.ro", "2016prizefeed.com", "thevideo.me", "wantubad.com", "tavanero.com", "xcusmy.club", "daclips.in", "gaymenofporn.online", "jackpotcitycasino.com", "italian-method.com", "getsearchincognito.com", "youjustwonprize.com", "finanz-nachrichten.me", "quizcliente.site", "da.reimageplus.com", "jkanime.net", "britmoneymethod.com", "uae.souq.com", "ka.azzer.net", "safensecure.xyz", "8t.hootingrhejkz.online", "www6.blinkx.com", "wizzcaster.com", "comparaison-prix.com", "vodlocker.lol", "fr.reimageplus.com", "free.fromdoctopdf.com", "userscloud.com", "myprivatesearch.com", "fanli90.cn", "tutticodicisconto.it", "mediadec.com", "gogamego.thewhizproducts.com", "download.weatherblink.com", "free.videodownloadconverter.com", "we-are-gamers.com", "sesso.communityadult.net", "lp.blpmovies.com", "search.queryrouter.com", "bbb-johannesburg.localspecific.com", "lp.blpmovies.com", "go.ppixelm.com", "r0.ru", "sesso.communityadult.net", "bbb-johannesburg.localspecific.com", "ppixelm.com", "cyberguardianspe.info", "we-are-gamers.com", "loginfaster.com/new", "www.alfacart.com", "www.foresee.com", "mobile-win.com", "www.plusnetwork.com", "www.amicafarmacia.com", "www.ienjoyapps.com", "cheapcheap.io", "screenaddict.thewhizproducts.com", "nova.rambler.ru", "free.gamingwonderland.com", "p9328ujeiw1.ru", "mobilecasinoclub.co.uk", "pfhsystem.com", "regtuneup.com", "theprofitsmaker.net", "bodogpromotions.eu", "heroesreplay.org", "financialsecrets.info", "mymoneymakingapp.com", "sunmaker.com", "888casino-promotions.com", "vogliosesso.com", "scienceremix.com", "allinonedocs.com", "arabia.starzplay.com", "allirishcasino.com", "advancepctools.info", "movie.ienjoyapps.com", "surveyform001.s3-website-us-east-1.amazonaws.com", "mgs188.com", "pfhsystem.com", "lpeva.com", "ddsh8.com", "theprofitsmaker.net", "b2.ijquery11.com", "sporthero.thewhizmarketing.com", "securefastmac.tech", "seen-on-screen.thewhizmarketing.com", "1000spins.com", "search.queryrouter.com", "pfhsystem.com", "reimageplus.com", "offer.alibaba.com", "searchlistings.org", "search.queryrouter.com", "search.queryrouter.com", "mybinaryoptionsrobot.com", "duplicashapp.com", "search.queryrouter.com", "bestgame.directory", "droidclub.net", ".rivalo.com", "yoursuperprize.com", "mediaexplained.com", "om.elvenar.com", "shinar.club", "revitoleczemacream.com", "freelotto.com", "screenaddict.thewhizproducts.com", "download.bringmesports.com/", "allinonedocs.com", "driver-fixer.com", "arabydeal.com", "cleanyourcomputertoday.com", "arabydeal.com", "music.mixplugin.com", "1se.info", "survey12.com", "freesoftwaredlul.com", "pldist01.com", "ad.adpop-1.com", "searchanonymous.net", "abrst.pro", "muzikfury.thewhizmarketing.com", "lp.mbtrx.com", "th1.forfun.maxisize-pro.com", "watchmygirlfriend.gfpornbox.com", "new.freelotto.com", "desktoptrack.com", "search.queryrouter.com", "offer.alibaba.com", "1000spins.com", "promotions.coral.co.uk", "search.queryrouter.com", "tbsia.com", "tbsia.com", "multtaepyo.com", "search.queryrouter.com", "czechmethod.com", "consumerview.co", "wayretail.com", "72onbase.com", "funsafetab.com", "search.queryrouter.com", "speedyfiledownload.com", "driver-fixer.com", "arabydeal.com", "cleanyourcomputertoday.com", "arabydeal.com", "music.mixplugin.com", "1se.info", "survey12.com", "freesoftwaredlul.com", "pldist01.com", "ad.adpop-1.com", "searchanonymous.net", "abrst.pro", "muzikfury.thewhizmarketing.com", "lp.mbtrx.com", "th1.forfun.maxisize-pro.com", "watchmygirlfriend.gfpornbox.com", "new.freelotto.com", "desktoptrack.com", "search.queryrouter.com", "offer.alibaba.com", "1000spins.com", "promotions.coral.co.uk", "search.queryrouter.com", "tbsia.com", "tbsia.com", "surveyform001.s3-website-us-east-1.amazonaws.com", "mgs188.com", "pfhsystem.com", "lpeva.com", "ddsh8.com", "theprofitsmaker.net", "quantomcoding.com", "sporthero.thewhizmarketing.com", "popads.net", "onclkds.com", "consumerview.co", "12kotov.ru", "ruhotpair2.fingta.com", "easytelevisionaccessnow.com", "ahwrd.com", "lpeva.com", "ppgzf.com", "zjstx.com", "kituure.xyz", "join.pro-gaming-world.com", "mackeeperapp.mackeeper.com", "tracknotify.com", "2075.cdn.beyondhosting.net", "idollash.com", "ds.moviegoat.com", "fulltab.com", "rackcdn.com", "prestoris.com", "adsterra.com", "swampssovuuhusp.top", "streesusa.info", "freesoftwaredlul.com", "adreactor.com", "a-static.com", "codeonclick.com", "heheme.com", "adf.ly", "seen-on-screen.thewhizmarketing.com", "openload.co"]
    }
}
, , , , , function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return ga4Event
    }
    ));
    var r = n(15)
      , o = n(0)
      , __assign = function() {
        return (__assign = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    }
      , __awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }
      , __generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }
      , b64DecodeUnicode = function(e) {
        return decodeURIComponent(Array.prototype.map.call(atob(e), (function(e) {
            return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
        }
        )).join(""))
    }
      , ga4Event = function(e, t) {
        return __awaiter(void 0, void 0, void 0, (function() {
            var n, i, a;
            return __generator(this, (function(s) {
                switch (s.label) {
                case 0:
                    return n = b64DecodeUnicode(o.u),
                    i = b64DecodeUnicode(o.f),
                    [4, Object(r.a)()];
                case 1:
                    return a = s.sent(),
                    fetch("https://www.google-analytics.com/mp/collect?measurement_id=" + n + "&api_secret=" + i, {
                        method: "POST",
                        headers: {
                            "Content-type": "application/x-www-form-urlencoded"
                        },
                        body: JSON.stringify({
                            client_id: null == a ? void 0 : a.uuid,
                            events: [{
                                name: e,
                                params: __assign({}, t)
                            }]
                        })
                    }),
                    [2]
                }
            }
            ))
        }
        ))
    }
}
, , , , , function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}
, , , , , function(e, t, n) {
    "use strict";
    var r = n(4)
      , o = n(0)
      , i = n(5)
      , a = n(8)
      , __awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }
      , __generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }
      , s = function() {
        function FaviconManager() {}
        return FaviconManager.prototype.handleTabBadge = function(e) {
            return __awaiter(this, void 0, void 0, (function() {
                return __generator(this, (function(t) {
                    return i.a.getAll(o.h.BLOCKED_SITES_COUNTER, o.h.PAUSED).then((function(t) {
                        if (t) {
                            var n = t[o.h.BLOCKED_SITES_COUNTER]
                              , i = t[o.h.PAUSED]
                              , s = Object(r.o)(new URL(e.url).host, n)
                              , c = i ? o.o.Disabled.BadgeText : (s || "") + "";
                            a.BrowserAPI.action.setBadgeText({
                                text: i ? o.o.Disabled.BadgeText : c
                            }),
                            a.BrowserAPI.action.setBadgeBackgroundColor({
                                color: i ? o.o.Disabled.BadgeColor : o.o.Enabled.BadgeColor
                            })
                        }
                    }
                    )),
                    [2]
                }
                ))
            }
            ))
        }
        ,
        FaviconManager.prototype.handleExtensionIconAndBadge = function(e) {
            this.setIcon(e ? o.o.Disabled.Image : o.o.Enabled.Image),
            this.handleExtensionBadge(e)
        }
        ,
        FaviconManager.prototype.handleFaviconState = function(e) {
            this.handleExtensionIconAndBadge(e),
            a.BrowserAPI.runtime.sendMessage({
                name: o.v.UPDATE_TAB_BADGE
            })
        }
        ,
        FaviconManager.prototype.setIcon = function(e) {
            a.BrowserAPI.action.setIcon({
                path: e
            })
        }
        ,
        FaviconManager.prototype.handleExtensionBadge = function(e) {
            a.BrowserAPI.action.setBadgeText({
                text: e ? o.o.Disabled.BadgeText : o.o.Enabled.BadgeText
            }),
            a.BrowserAPI.action.setBadgeBackgroundColor({
                color: e ? o.o.Disabled.BadgeColor : o.o.Enabled.BadgeColor
            })
        }
        ,
        FaviconManager
    }();
    t.a = new s
}
, function(e, t, n) {
    "use strict";
    var r, o = n(28), i = n(0), a = (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(e, t)
    }
    ,
    function(e, t) {
        function __() {
            this.constructor = e
        }
        r(e, t),
        e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype,
        new __)
    }
    ), __awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }, __generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }, s = function(e) {
        function SpecialOfferEntity() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.shouldBeDisplayed = !0,
            t.installTime = -1,
            t.openSettingsPanelNumber = 0,
            t.maybeLaterTime = -1,
            t
        }
        return a(SpecialOfferEntity, e),
        SpecialOfferEntity.prototype.getLegacyKeys = function() {
            return []
        }
        ,
        SpecialOfferEntity.prototype.toDTO = function() {
            return {
                shouldBeDisplayed: this.shouldBeDisplayed,
                installTime: this.installTime,
                openSettingsPanelNumber: this.openSettingsPanelNumber,
                maybeLaterTime: this.maybeLaterTime
            }
        }
        ,
        SpecialOfferEntity.prototype.getVersion = function() {
            return 1
        }
        ,
        SpecialOfferEntity.prototype.migrate = function(e) {}
        ,
        SpecialOfferEntity.prototype.countOpenSettingsPanel = function() {
            return __awaiter(this, void 0, void 0, (function() {
                return __generator(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return this.openSettingsPanelNumber++,
                        [4, this.save()];
                    case 1:
                        return e.sent(),
                        [2, this]
                    }
                }
                ))
            }
            ))
        }
        ,
        SpecialOfferEntity.prototype.getKey = function() {
            return i.h.SPECIAL_OFFER_MODAL
        }
        ,
        SpecialOfferEntity.prototype.initIfNeeded = function() {
            return __awaiter(this, void 0, void 0, (function() {
                return __generator(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return -1 !== this.installTime ? [3, 2] : [4, this.init()];
                    case 1:
                        e.sent(),
                        e.label = 2;
                    case 2:
                        return [2, this]
                    }
                }
                ))
            }
            ))
        }
        ,
        SpecialOfferEntity.prototype.isTimeToDisplayModal = function() {
            var e = Date.now() - this.installTime - 14 * i.y > 0
              , t = Date.now() - this.maybeLaterTime - 2 * i.y > 0
              , n = -1 === this.maybeLaterTime && (e || this.openSettingsPanelNumber > 12)
              , r = this.maybeLaterTime > -1 && t;
            return this.shouldBeDisplayed && (n || r)
        }
        ,
        SpecialOfferEntity.prototype.disable = function() {
            return __awaiter(this, void 0, void 0, (function() {
                return __generator(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return this.shouldBeDisplayed = !1,
                        [4, this.save()];
                    case 1:
                        return e.sent(),
                        [2, this]
                    }
                }
                ))
            }
            ))
        }
        ,
        SpecialOfferEntity.prototype.enable = function() {
            return __awaiter(this, void 0, void 0, (function() {
                return __generator(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return this.shouldBeDisplayed = !0,
                        [4, this.save()];
                    case 1:
                        return e.sent(),
                        [2, this]
                    }
                }
                ))
            }
            ))
        }
        ,
        SpecialOfferEntity.prototype.updateMaybeLaterTime = function() {
            return __awaiter(this, void 0, void 0, (function() {
                return __generator(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return this.maybeLaterTime = Date.now(),
                        [4, this.save()];
                    case 1:
                        return e.sent(),
                        [2, this]
                    }
                }
                ))
            }
            ))
        }
        ,
        SpecialOfferEntity.prototype.init = function() {
            return __awaiter(this, void 0, void 0, (function() {
                return __generator(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return this.installTime = Date.now(),
                        this.shouldBeDisplayed = !0,
                        this.openSettingsPanelNumber = 0,
                        this.maybeLaterTime = -1,
                        [4, this.save()];
                    case 1:
                        return e.sent(),
                        [2, this]
                    }
                }
                ))
            }
            ))
        }
        ,
        SpecialOfferEntity.getDefault = function() {
            return new SpecialOfferEntity
        }
        ,
        SpecialOfferEntity
    }(o.a);
    t.a = s
}
, , function(e, t, n) {
    "use strict";
    t.byteLength = function byteLength(e) {
        var t = getLens(e)
          , n = t[0]
          , r = t[1];
        return 3 * (n + r) / 4 - r
    }
    ,
    t.toByteArray = function toByteArray(e) {
        var t, n, r = getLens(e), a = r[0], s = r[1], c = new i(function _byteLength(e, t, n) {
            return 3 * (t + n) / 4 - n
        }(0, a, s)), u = 0, l = s > 0 ? a - 4 : a;
        for (n = 0; n < l; n += 4)
            t = o[e.charCodeAt(n)] << 18 | o[e.charCodeAt(n + 1)] << 12 | o[e.charCodeAt(n + 2)] << 6 | o[e.charCodeAt(n + 3)],
            c[u++] = t >> 16 & 255,
            c[u++] = t >> 8 & 255,
            c[u++] = 255 & t;
        2 === s && (t = o[e.charCodeAt(n)] << 2 | o[e.charCodeAt(n + 1)] >> 4,
        c[u++] = 255 & t);
        1 === s && (t = o[e.charCodeAt(n)] << 10 | o[e.charCodeAt(n + 1)] << 4 | o[e.charCodeAt(n + 2)] >> 2,
        c[u++] = t >> 8 & 255,
        c[u++] = 255 & t);
        return c
    }
    ,
    t.fromByteArray = function fromByteArray(e) {
        for (var t, n = e.length, o = n % 3, i = [], a = 0, s = n - o; a < s; a += 16383)
            i.push(encodeChunk(e, a, a + 16383 > s ? s : a + 16383));
        1 === o ? (t = e[n - 1],
        i.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === o && (t = (e[n - 2] << 8) + e[n - 1],
        i.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="));
        return i.join("")
    }
    ;
    for (var r = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, c = a.length; s < c; ++s)
        r[s] = a[s],
        o[a.charCodeAt(s)] = s;
    function getLens(e) {
        var t = e.length;
        if (t % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
        var n = e.indexOf("=");
        return -1 === n && (n = t),
        [n, n === t ? 0 : 4 - n % 4]
    }
    function encodeChunk(e, t, n) {
        for (var o, i, a = [], s = t; s < n; s += 3)
            o = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]),
            a.push(r[(i = o) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]);
        return a.join("")
    }
    o["-".charCodeAt(0)] = 62,
    o["_".charCodeAt(0)] = 63
}
, function(e, t) {
    t.read = function(e, t, n, r, o) {
        var i, a, s = 8 * o - r - 1, c = (1 << s) - 1, u = c >> 1, l = -7, f = n ? o - 1 : 0, h = n ? -1 : 1, p = e[t + f];
        for (f += h,
        i = p & (1 << -l) - 1,
        p >>= -l,
        l += s; l > 0; i = 256 * i + e[t + f],
        f += h,
        l -= 8)
            ;
        for (a = i & (1 << -l) - 1,
        i >>= -l,
        l += r; l > 0; a = 256 * a + e[t + f],
        f += h,
        l -= 8)
            ;
        if (0 === i)
            i = 1 - u;
        else {
            if (i === c)
                return a ? NaN : 1 / 0 * (p ? -1 : 1);
            a += Math.pow(2, r),
            i -= u
        }
        return (p ? -1 : 1) * a * Math.pow(2, i - r)
    }
    ,
    t.write = function(e, t, n, r, o, i) {
        var a, s, c, u = 8 * i - o - 1, l = (1 << u) - 1, f = l >> 1, h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = r ? 0 : i - 1, d = r ? 1 : -1, E = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t),
        isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0,
        a = l) : (a = Math.floor(Math.log(t) / Math.LN2),
        t * (c = Math.pow(2, -a)) < 1 && (a--,
        c *= 2),
        (t += a + f >= 1 ? h / c : h * Math.pow(2, 1 - f)) * c >= 2 && (a++,
        c /= 2),
        a + f >= l ? (s = 0,
        a = l) : a + f >= 1 ? (s = (t * c - 1) * Math.pow(2, o),
        a += f) : (s = t * Math.pow(2, f - 1) * Math.pow(2, o),
        a = 0)); o >= 8; e[n + p] = 255 & s,
        p += d,
        s /= 256,
        o -= 8)
            ;
        for (a = a << o | s,
        u += o; u > 0; e[n + p] = 255 & a,
        p += d,
        a /= 256,
        u -= 8)
            ;
        e[n + p - d] |= 128 * E
    }
}
, function(e, t) {
    var n = {}.toString;
    e.exports = Array.isArray || function(e) {
        return "[object Array]" == n.call(e)
    }
}
, function(e, t, n) {
    "use strict";
    var r, o = new Uint8Array(16);
    function rng() {
        if (!r && !(r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
            throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return r(o)
    }
    var i = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    for (var a = function validate(e) {
        return "string" == typeof e && i.test(e)
    }, s = [], c = 0; c < 256; ++c)
        s.push((c + 256).toString(16).substr(1));
    var u = function stringify(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
          , n = (s[e[t + 0]] + s[e[t + 1]] + s[e[t + 2]] + s[e[t + 3]] + "-" + s[e[t + 4]] + s[e[t + 5]] + "-" + s[e[t + 6]] + s[e[t + 7]] + "-" + s[e[t + 8]] + s[e[t + 9]] + "-" + s[e[t + 10]] + s[e[t + 11]] + s[e[t + 12]] + s[e[t + 13]] + s[e[t + 14]] + s[e[t + 15]]).toLowerCase();
        if (!a(n))
            throw TypeError("Stringified UUID is invalid");
        return n
    };
    t.a = function v4(e, t, n) {
        var r = (e = e || {}).random || (e.rng || rng)();
        if (r[6] = 15 & r[6] | 64,
        r[8] = 63 & r[8] | 128,
        t) {
            n = n || 0;
            for (var o = 0; o < 16; ++o)
                t[n + o] = r[o];
            return t
        }
        return u(r)
    }
}
, function(e, t, n) {
    "use strict";
    var r, o = n(28), i = n(0), a = (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(e, t)
    }
    ,
    function(e, t) {
        function __() {
            this.constructor = e
        }
        r(e, t),
        e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype,
        new __)
    }
    ), __awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }, __generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }, s = function(e) {
        function WhatsNewEntity() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.shouldBeDisplayed = !1,
            t
        }
        return a(WhatsNewEntity, e),
        WhatsNewEntity.prototype.getKey = function() {
            return i.h.WHATS_NEW
        }
        ,
        WhatsNewEntity.prototype.getLegacyKeys = function() {
            return []
        }
        ,
        WhatsNewEntity.prototype.toDTO = function() {
            return {
                shouldBeDisplayed: this.shouldBeDisplayed
            }
        }
        ,
        WhatsNewEntity.prototype.getVersion = function() {
            return 1
        }
        ,
        WhatsNewEntity.prototype.migrate = function(e) {}
        ,
        WhatsNewEntity.prototype.enable = function() {
            return __awaiter(this, void 0, void 0, (function() {
                return __generator(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return this.shouldBeDisplayed = !0,
                        [4, this.save()];
                    case 1:
                        return e.sent(),
                        [2, this]
                    }
                }
                ))
            }
            ))
        }
        ,
        WhatsNewEntity.prototype.disable = function() {
            return __awaiter(this, void 0, void 0, (function() {
                return __generator(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return this.shouldBeDisplayed = !1,
                        [4, this.save()];
                    case 1:
                        return e.sent(),
                        [2, this]
                    }
                }
                ))
            }
            ))
        }
        ,
        WhatsNewEntity.prototype.getShouldBeDisplayed = function() {
            return this.shouldBeDisplayed
        }
        ,
        WhatsNewEntity.getDefault = function() {
            return new WhatsNewEntity
        }
        ,
        WhatsNewEntity
    }(o.a);
    t.a = s
}
, , , , , , , , function(e, t, n) {
    "use strict";
    var r, o = n(28), i = n(0), a = (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(e, t)
    }
    ,
    function(e, t) {
        function __() {
            this.constructor = e
        }
        r(e, t),
        e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype,
        new __)
    }
    ), __awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }, __generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }, s = function(e) {
        function PinToTaskbarEntity() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.isDisplayed = !1,
            t.installTime = -1,
            t
        }
        return a(PinToTaskbarEntity, e),
        PinToTaskbarEntity.prototype.getKey = function() {
            return i.h.PIN_TASKBAR_DATA
        }
        ,
        PinToTaskbarEntity.prototype.getLegacyKeys = function() {
            return []
        }
        ,
        PinToTaskbarEntity.prototype.toDTO = function() {
            return {
                isDisplayed: this.isDisplayed,
                installTime: this.installTime
            }
        }
        ,
        PinToTaskbarEntity.prototype.getVersion = function() {
            return 1
        }
        ,
        PinToTaskbarEntity.prototype.migrate = function(e) {}
        ,
        PinToTaskbarEntity.prototype.setDisplayed = function(e) {
            return __awaiter(this, void 0, void 0, (function() {
                return __generator(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return this.isDisplayed = e,
                        [4, this.save()];
                    case 1:
                        return t.sent(),
                        [2, this]
                    }
                }
                ))
            }
            ))
        }
        ,
        PinToTaskbarEntity.prototype.isTimeToDisplayPromo = function() {
            return Date.now() - this.installTime - 3 * i.B > 0 && !this.isDisplayed
        }
        ,
        PinToTaskbarEntity.prototype.init = function() {
            return __awaiter(this, void 0, void 0, (function() {
                return __generator(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return this.installTime = Date.now(),
                        this.isDisplayed = !1,
                        [4, this.save()];
                    case 1:
                        return e.sent(),
                        [2, this]
                    }
                }
                ))
            }
            ))
        }
        ,
        PinToTaskbarEntity.getDefault = function() {
            return new PinToTaskbarEntity
        }
        ,
        PinToTaskbarEntity
    }(o.a);
    t.a = s
}
, , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a = n(0), s = n(4), __awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }, __generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }, __spreadArrays = function() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
        var r = Array(e)
          , o = 0;
        for (t = 0; t < n; t++)
            for (var i = arguments[t], a = 0, s = i.length; a < s; a++,
            o++)
                r[o] = i[a];
        return r
    }, c = n(17), __assign = function() {
        return (__assign = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    }, context_menu_awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }, context_menu_generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }, createChildMenuItem = function(e) {
        chrome.contextMenus.create(e, (function() {
            return chrome.runtime.lastError
        }
        ))
    }, createBrowserContextMenu = function(e) {
        return context_menu_awaiter(void 0, void 0, void 0, (function() {
            var t;
            return context_menu_generator(this, (function(n) {
                switch (n.label) {
                case 0:
                    return e ? (chrome.contextMenus.removeAll(),
                    [3, 3]) : [3, 1];
                case 1:
                    return [4, new Promise((function(e) {
                        var t = a.i.PARENT;
                        chrome.contextMenus.create(t, (function() {
                            return e(a.i.PARENT.id),
                            chrome.runtime.lastError
                        }
                        ))
                    }
                    ))];
                case 2:
                    t = n.sent(),
                    createChildMenuItem(__assign({
                        parentId: t
                    }, a.i.OVERLAY)),
                    createChildMenuItem(__assign({
                        parentId: t
                    }, a.i.BLOCK_ELEMENT)),
                    n.label = 3;
                case 3:
                    return [2]
                }
            }
            ))
        }
        ))
    }, u = n(15), popularSitesForBlockElements_awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }, popularSitesForBlockElements_generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }, cookie_crumbler_awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }, cookie_crumbler_generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }, promo_coupon_assign = function() {
        return (promo_coupon_assign = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    }, promo_coupon_awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }, promo_coupon_generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }, l = n(37), f = n(19), push_notification_blocker_awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }, push_notification_blocker_generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }, setPushNotificationBlocker = function(e) {
        chrome.contentSettings.notifications.set({
            primaryPattern: a.C.ALL_URLS,
            setting: e ? a.C.BLOCK : a.C.ASK
        });
        var t = e ? a.c.ANALYTICS_EVENT_TYPES.IN_SITE_PUSH_NOTIFICATION_ON : a.c.ANALYTICS_EVENT_TYPES.IN_SITE_PUSH_NOTIFICATION_OFF;
        Object(u.c)(t)
    }, h = n(47), p = n(14), d = n(54), E = n(7), _ = n(62), O = n(48), config_assign = function() {
        return (config_assign = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    }, config_awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }, config_generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }, T = {
        whitelist: [],
        doNotShowNotifyList: {},
        overlayBlockedList: {},
        lastNotificationDisplay: {},
        counterBlockedSites: {},
        totalBlocksByType: {
            pop: 0,
            win: 0,
            tab: 0,
            overlay: 0,
            ad: 0,
            cookie: 0,
            fbAd: 0,
            linkedinAd: 0,
            twitterAd: 0,
            tracker: 0,
            instagramAd: 0
        },
        numOfBlocks: 0,
        counterUnBlockedSites: {},
        totalUnBlocksByType: {
            pop: 0,
            win: 0,
            tab: 0,
            overlay: 0,
            ad: 0,
            cookie: 0,
            fbAd: 0,
            linkedinAd: 0,
            twitterAd: 0,
            tracker: 0,
            instagramAd: 0
        },
        numOfUnBlocks: 0,
        paused: !1,
        settings: {
            isOptIn: !1,
            showBadge: !0,
            showNotifications: !0,
            detectOverlays: !1,
            enableContextMenu: !0,
            enableSiteExperience: !1,
            popups: !0,
            hideElements: !0,
            cookieCrumbler: !1,
            facebookAdds: !1,
            adsBlocker: !1,
            trackersBlocker: !1,
            pushNotification: !1
        },
        isFirstBlockAdds: !0,
        rating: {
            showCount: 0,
            nextDisplay: a.G.AFTER,
            complete: !1
        },
        siteExperience: "clean"
    }, I = n(26), alarm_manager_awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }, alarm_manager_generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }, b = function() {
        function AlarmManager() {}
        return AlarmManager.getInstance = function() {
            return void 0 === this.instance && (this.instance = new AlarmManager),
            this.instance
        }
        ,
        AlarmManager.prototype.createPeriodicAlarm = function(e, t, n) {
            return void 0 === n && (n = !1),
            alarm_manager_awaiter(this, void 0, void 0, (function() {
                return alarm_manager_generator(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, this.createIfNeeded(e, {
                            periodInMinutes: t
                        }, n)];
                    case 1:
                        return r.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        AlarmManager.prototype.createPeriodicAlarmWithDelay = function(e, t, n, r) {
            return void 0 === n && (n = 0),
            void 0 === r && (r = !1),
            alarm_manager_awaiter(this, void 0, void 0, (function() {
                return alarm_manager_generator(this, (function(o) {
                    switch (o.label) {
                    case 0:
                        return [4, this.createIfNeeded(e, {
                            delayInMinutes: n,
                            periodInMinutes: t
                        }, r)];
                    case 1:
                        return o.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        AlarmManager.prototype.createOneTimeAlarm = function(e, t, n) {
            return void 0 === n && (n = !1),
            alarm_manager_awaiter(this, void 0, void 0, (function() {
                return alarm_manager_generator(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, this.createIfNeeded(e, {
                            when: t
                        }, n)];
                    case 1:
                        return r.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        AlarmManager.prototype.createDelayedAlarm = function(e, t, n) {
            return void 0 === n && (n = !1),
            alarm_manager_awaiter(this, void 0, void 0, (function() {
                return alarm_manager_generator(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, this.createIfNeeded(e, {
                            delayInMinutes: t
                        }, n)];
                    case 1:
                        return r.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        AlarmManager.prototype.clearAlarms = function() {
            return alarm_manager_awaiter(this, void 0, void 0, (function() {
                return alarm_manager_generator(this, (function(e) {
                    return [2, new Promise((function(e) {
                        chrome.alarms.clearAll((function(t) {
                            e(t)
                        }
                        ))
                    }
                    ))]
                }
                ))
            }
            ))
        }
        ,
        AlarmManager.prototype.clearAlarm = function(e) {
            return alarm_manager_awaiter(this, void 0, void 0, (function() {
                return alarm_manager_generator(this, (function(t) {
                    return [2, new Promise((function(t) {
                        chrome.alarms.clear(e, (function(e) {
                            t(e)
                        }
                        ))
                    }
                    ))]
                }
                ))
            }
            ))
        }
        ,
        AlarmManager.prototype.registerAlarmListener = function(e) {
            e && chrome.alarms.onAlarm.addListener(e)
        }
        ,
        AlarmManager.prototype.getAlarm = function(e) {
            return alarm_manager_awaiter(this, void 0, void 0, (function() {
                return alarm_manager_generator(this, (function(t) {
                    return [2, new Promise((function(t) {
                        chrome.alarms.get(e, (function(e) {
                            t(e)
                        }
                        ))
                    }
                    ))]
                }
                ))
            }
            ))
        }
        ,
        AlarmManager.prototype.createIfNeeded = function(e, t, n) {
            return void 0 === n && (n = !1),
            alarm_manager_awaiter(this, void 0, void 0, (function() {
                return alarm_manager_generator(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, this.getAlarm(e)];
                    case 1:
                        return r.sent() ? n ? [4, this.clearAlarm(e)] : [2] : [3, 3];
                    case 2:
                        r.sent(),
                        r.label = 3;
                    case 3:
                        return chrome.alarms.create(e, t),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        AlarmManager
    }(), compareVersion = function(e, t) {
        if ("string" != typeof e || "string" != typeof t)
            throw Error("bad version input - must be string");
        for (var n = e.split("."), r = t.split("."), o = new Array(n.length), i = new Array(r.length), a = Math.min(n.length, r.length), s = 0; s < a; ++s) {
            if (o[s] = parseInt(n[s], 10),
            i[s] = parseInt(r[s], 10),
            o[s] > i[s])
                return 1;
            if (o[s] < i[s])
                return -1
        }
        return n.length == r.length ? 0 : n.length < r.length ? -1 : 1
    }, y = n(8), m = n(10), A = n(16), C = (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(e, t)
    }
    ,
    function(e, t) {
        function __() {
            this.constructor = e
        }
        r(e, t),
        e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype,
        new __)
    }
    ), api_awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }, api_generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    };
    !function(e) {
        e.BLOCK = "block",
        e.REDIRECT = "redirect",
        e.ALLOW = "allow",
        e.UPGRADE_SCHEME = "upgradeScheme",
        e.MODIFY_HEADERS = "modifyHeaders",
        e.ALLOW_ALL_REQUESTS = "allowAllRequests"
    }(o || (o = {})),
    function(e) {
        e.MAIN_FRAME = "main_frame",
        e.SUB_FRAME = "sub_frame",
        e.STYLESHEET = "stylesheet",
        e.SCRIPT = "script",
        e.IMAGE = "image",
        e.FONT = "font",
        e.OBJECT = "object",
        e.XMLHTTPREQUEST = "xmlhttprequest",
        e.PING = "ping",
        e.CSP_REPORT = "csp_report",
        e.MEDIA = "media",
        e.WEBSOCKET = "websocket",
        e.OTHER = "other"
    }(i || (i = {}));
    var S = new (function(e) {
        function DNRHelper() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.updateDynamicRules = function(e) {
                return api_awaiter(t, void 0, void 0, (function() {
                    return api_generator(this, (function(t) {
                        return [2, new Promise((function(t, n) {
                            y.BrowserAPI.declarativeNetRequest.updateDynamicRules(e, (function() {
                                var e, r = null === (e = y.BrowserAPI.runtime) || void 0 === e ? void 0 : e.lastError;
                                r ? n(r) : t()
                            }
                            ))
                        }
                        ))]
                    }
                    ))
                }
                ))
            }
            ,
            t.getDynamicRules = function() {
                return api_awaiter(t, void 0, void 0, (function() {
                    return api_generator(this, (function(e) {
                        return [2, new Promise((function(e, t) {
                            y.BrowserAPI.declarativeNetRequest.getDynamicRules((function(n) {
                                var r, o = null === (r = y.BrowserAPI.runtime) || void 0 === r ? void 0 : r.lastError;
                                o ? t(o) : e(n)
                            }
                            ))
                        }
                        ))]
                    }
                    ))
                }
                ))
            }
            ,
            t.onRuleMatchedDebug = {
                addListener: function(e) {
                    y.BrowserAPI.declarativeNetRequest.onRuleMatchedDebug.addListener(e)
                }
            },
            t
        }
        return C(DNRHelper, e),
        DNRHelper
    }((function DeclarativeNetRequest() {}
    )))
      , L = function() {
        var extendStatics = function(e, t) {
            return (extendStatics = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            )(e, t)
        };
        return function(e, t) {
            function __() {
                this.constructor = e
            }
            extendStatics(e, t),
            e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype,
            new __)
        }
    }()
      , v = function(e) {
        function AjaxBlockingRule(t, n, r, o) {
            var i = e.call(this, t) || this;
            return i.url = n,
            i.initiatorDomains = r,
            i.excludedInitiatorDomains = o,
            i
        }
        return L(AjaxBlockingRule, e),
        AjaxBlockingRule.prototype.getCondition = function() {
            return {
                urlFilter: "*" + this.url + "*",
                resourceTypes: [i.SCRIPT]
            }
        }
        ,
        AjaxBlockingRule.prototype.getAction = function() {
            return o.BLOCK
        }
        ,
        AjaxBlockingRule.prototype.getInitiatorDomains = function() {
            return this.initiatorDomains
        }
        ,
        AjaxBlockingRule.prototype.getExcludedInitiatorDomains = function() {
            return this.excludedInitiatorDomains
        }
        ,
        AjaxBlockingRule
    }(function() {
        function Rule(e) {
            var t = this;
            this.ruleId = e,
            this.getRuleId = function() {
                return t.ruleId
            }
        }
        return Rule.prototype.getRule = function() {
            var e = this.getCondition()
              , t = this.getInitiatorDomains()
              , n = this.getExcludedInitiatorDomains();
            return t && (e.initiatorDomains = t),
            n && (e.excludedInitiatorDomains = n),
            {
                id: this.ruleId,
                priority: 1,
                condition: e,
                action: {
                    type: this.getAction()
                }
            }
        }
        ,
        Rule
    }());
    var N = n(12)
      , whitelist_awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }
      , whitelist_generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }
      , g = new (function() {
        function WhitelistHelper() {}
        return WhitelistHelper.prototype.list = function() {
            return new Promise((function(e) {
                N.a.get(a.h.WHITELIST).then((function(t) {
                    e(t || [])
                }
                ))
            }
            ))
        }
        ,
        WhitelistHelper.prototype.add = function(e) {
            return this.list().then((function(t) {
                t.push(e),
                N.a.set(a.h.WHITELIST, t)
            }
            ))
        }
        ,
        WhitelistHelper.prototype.remove = function(e) {
            return this.list().then((function(t) {
                t = t.filter((function(t) {
                    return t !== e
                }
                )),
                N.a.set(a.h.WHITELIST, t)
            }
            ))
        }
        ,
        WhitelistHelper.prototype.containsDomain = function(e) {
            return whitelist_awaiter(this, void 0, void 0, (function() {
                var t;
                return whitelist_generator(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, this.list()];
                    case 1:
                        return t = n.sent(),
                        e = Object(s.c)(e),
                        [2, t.some((function(t) {
                            return t.includes("http") || (t = "http://" + t),
                            new URL(t).hostname === e
                        }
                        ))]
                    }
                }
                ))
            }
            ))
        }
        ,
        WhitelistHelper
    }())
      , script_blocker_awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }
      , script_blocker_generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }
      , script_blocker_spreadArrays = function() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
        var r = Array(e)
          , o = 0;
        for (t = 0; t < n; t++)
            for (var i = arguments[t], a = 0, s = i.length; a < s; a++,
            o++)
                r[o] = i[a];
        return r
    };
    function sourceToRule(e, t, n) {
        return new v(function generateRuleId(e, t) {
            var n = e.length;
            return Array.from(e).forEach((function(e) {
                n += e.charCodeAt(0)
            }
            )),
            Math.floor(1e4 * n + t)
        }(e.url, t),e.url,e.initiator,n)
    }
    var w = function() {
        function ScriptBlocker(e, t, n) {
            var r = this;
            if (this.uniqueRuleId = e,
            this.configManager = t,
            this.dnrWrapper = n,
            this.blockedDomains = new Set,
            this.enabled = !1,
            this.isEnabled = function() {
                return r.enabled
            }
            ,
            e > 9999 || e < 1e3)
                throw Error("blocker unique id can only be between 1000 to 9999")
        }
        return ScriptBlocker.prototype.enable = function() {
            return script_blocker_awaiter(this, void 0, void 0, (function() {
                var e;
                return script_blocker_generator(this, (function(t) {
                    switch (t.label) {
                    case 0:
                        return this.enabled ? [2] : [4, g.list()];
                    case 1:
                        return e = t.sent(),
                        [4, this.loadConfig(e)];
                    case 2:
                        return t.sent(),
                        this.startMonitor(this.onBlockedScriptRequest.bind(this)),
                        this.enabled = !0,
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        ScriptBlocker.prototype.disable = function() {
            return script_blocker_awaiter(this, void 0, void 0, (function() {
                return script_blocker_generator(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return this.enabled ? (this.stopMonitor(),
                        [4, this.reset()]) : [2];
                    case 1:
                        return e.sent(),
                        this.enabled = !1,
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        ScriptBlocker.prototype.updateConfig = function() {
            return script_blocker_awaiter(this, void 0, void 0, (function() {
                return script_blocker_generator(this, (function(e) {
                    return [2, this.configManager.update()]
                }
                ))
            }
            ))
        }
        ,
        ScriptBlocker.prototype.loadConfig = function(e) {
            return script_blocker_awaiter(this, void 0, void 0, (function() {
                var t, n;
                return script_blocker_generator(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, this.configManager.get()];
                    case 1:
                        return (t = r.sent()) ? (n = [],
                        t.providers.map((function(e) {
                            return n.push.apply(n, e.sources)
                        }
                        )),
                        [4, this.addScripts(n, e)]) : [3, 3];
                    case 2:
                        return r.sent(),
                        [3, 4];
                    case 3:
                        throw new Error("failed getting config");
                    case 4:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        ScriptBlocker.prototype.startMonitor = function(e) {
            var t = this;
            this.requestListener = function(n) {
                if (n && n.url && ScriptBlocker.MONITORED_REQ_TYPES.has(n.type))
                    try {
                        if (n.tabId < 0)
                            return;
                        if (!t.blockedDomains.has(Object(s.c)(n.url)))
                            return;
                        var r = n.originUrl
                          , o = n.initiator;
                        if (!(o = Object(s.c)(o || r)))
                            return;
                        var i = {
                            tabId: n.tabId,
                            initiator: o,
                            url: n.url,
                            type: n.type
                        };
                        e && e(i)
                    } catch (e) {
                        console.error("requestListener => " + e)
                    }
            }
            ,
            this.requestListener = this.requestListener.bind(this),
            y.BrowserAPI.webRequest.onBeforeRequest.addListener(this.requestListener, {
                urls: ["*://*/*"]
            })
        }
        ,
        ScriptBlocker.prototype.stopMonitor = function() {
            y.BrowserAPI.webRequest.onBeforeRequest.removeListener(this.requestListener)
        }
        ,
        ScriptBlocker.prototype.addScripts = function(e, t) {
            return script_blocker_awaiter(this, void 0, void 0, (function() {
                var n, r, o, i, a = this;
                return script_blocker_generator(this, (function(c) {
                    switch (c.label) {
                    case 0:
                        return n = e.map((function(e) {
                            return e.url
                        }
                        )),
                        r = script_blocker_spreadArrays(t, n, ["null"]),
                        o = [],
                        i = [],
                        this.blockedDomains.clear(),
                        e.forEach((function(e) {
                            var t = sourceToRule(e, a.uniqueRuleId, r);
                            o.push(t.getRuleId()),
                            i.push(t.getRule()),
                            a.blockedDomains.add(Object(s.c)(t.url))
                        }
                        )),
                        [4, this.dnrWrapper.updateDynamicRules({
                            removeRuleIds: o,
                            addRules: i
                        })];
                    case 1:
                        return c.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        ScriptBlocker.prototype.reset = function() {
            return script_blocker_awaiter(this, void 0, void 0, (function() {
                var e, t, n = this;
                return script_blocker_generator(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, this.dnrWrapper.getDynamicRules()];
                    case 1:
                        return e = r.sent(),
                        t = e.map((function(e) {
                            return e.id
                        }
                        )).filter((function(e) {
                            return function isRelevantId(e, t) {
                                var n = e.toString();
                                return n.length > 4 && n.substring(n.length - 4, n.length) === t.toString()
                            }(e, n.uniqueRuleId)
                        }
                        )),
                        [4, this.dnrWrapper.updateDynamicRules({
                            removeRuleIds: t
                        })];
                    case 2:
                        return r.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        ScriptBlocker.MONITORED_REQ_TYPES = new Set([i.SCRIPT]),
        ScriptBlocker
    }()
      , config_manager_awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }
      , config_manager_generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }
      , R = function() {
        function LocalAndRemoteConfigManager(e, t) {
            this.remoteUrl = e,
            this.storageKey = t
        }
        return LocalAndRemoteConfigManager.prototype.get = function() {
            return config_manager_awaiter(this, void 0, void 0, (function() {
                return config_manager_generator(this, (function(e) {
                    return [2, N.a.get(this.storageKey)]
                }
                ))
            }
            ))
        }
        ,
        LocalAndRemoteConfigManager.prototype.update = function() {
            return config_manager_awaiter(this, void 0, void 0, (function() {
                return config_manager_generator(this, (function(e) {
                    return [2, this.fetchRemoteAndStore()]
                }
                ))
            }
            ))
        }
        ,
        LocalAndRemoteConfigManager.prototype.clear = function() {
            return config_manager_awaiter(this, void 0, void 0, (function() {
                return config_manager_generator(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, N.a.remove([this.storageKey])];
                    case 1:
                        return e.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        LocalAndRemoteConfigManager.prototype.fetchRemoteAndStore = function() {
            return config_manager_awaiter(this, void 0, void 0, (function() {
                var e, t;
                return config_manager_generator(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, this.get()];
                    case 1:
                        return e = n.sent(),
                        [4, fetch(this.remoteUrl, {
                            method: "GET"
                        })];
                    case 2:
                        return [4, n.sent().json()];
                    case 3:
                        return t = n.sent(),
                        [4, this.updateConfigIfNeeded(e, t)];
                    case 4:
                        return n.sent() ? [2, t] : [2, e]
                    }
                }
                ))
            }
            ))
        }
        ,
        LocalAndRemoteConfigManager.prototype.updateConfigIfNeeded = function(e, t) {
            return config_manager_awaiter(this, void 0, void 0, (function() {
                var n;
                return config_manager_generator(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return n = 0,
                        e && (n = e.version),
                        t && t.version > n ? [4, N.a.set(this.storageKey, t)] : [3, 2];
                    case 1:
                        return r.sent(),
                        [2, !0];
                    case 2:
                        return [2, !1]
                    }
                }
                ))
            }
            ))
        }
        ,
        LocalAndRemoteConfigManager
    }()
      , P = function() {
        var extendStatics = function(e, t) {
            return (extendStatics = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            )(e, t)
        };
        return function(e, t) {
            function __() {
                this.constructor = e
            }
            extendStatics(e, t),
            e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype,
            new __)
        }
    }()
      , B = new (function(e) {
        function AdsBlocker() {
            var t = e.call(this, 2563, new R(a.e.ADS_BLOCKER_CONFIG,a.a.KEY_CONFIG_STORAGE), S) || this;
            return t.blockedSources = new Map,
            t
        }
        return P(AdsBlocker, e),
        AdsBlocker.prototype.onBlockedScriptRequest = function(e) {
            this.tryClearCache();
            var t = {
                urls: null,
                lastUpdated: 0
            }
              , n = Object(s.c)(e.url);
            if (this.blockedSources.has(e.initiator)) {
                if ((t = this.blockedSources.get(e.initiator)).urls.has(n))
                    return;
                t.urls.add(n)
            } else
                t.urls = new Set([n]);
            t.lastUpdated = Date.now(),
            this.blockedSources.set(e.initiator, t),
            Object(s.G)("ad")
        }
        ,
        AdsBlocker.prototype.tryClearCache = function() {
            var e = Date.now()
              , t = new Map(this.blockedSources);
            this.blockedSources.forEach((function(n, r) {
                e - n.lastUpdated >= a.r && t.delete(r)
            }
            )),
            this.blockedSources = t
        }
        ,
        AdsBlocker
    }(w))
      , k = function() {
        var extendStatics = function(e, t) {
            return (extendStatics = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            )(e, t)
        };
        return function(e, t) {
            function __() {
                this.constructor = e
            }
            extendStatics(e, t),
            e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype,
            new __)
        }
    }()
      , D = new (function(e) {
        function TrackersBlocker() {
            return e.call(this, 2564, new R(a.e.TRACKERS_BLOCKER_CONFIG,a.I.KEY_CONFIG_STORAGE), S) || this
        }
        return k(TrackersBlocker, e),
        TrackersBlocker.prototype.onBlockedScriptRequest = function(e) {
            Object(s.G)("tracker")
        }
        ,
        TrackersBlocker
    }(w))
      , script_blockers_manager_awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }
      , script_blockers_manager_generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }
      , U = new function ScriptBlockersManager() {
        var e = this;
        this.tryActivateFeature = function(t, n) {
            return script_blockers_manager_awaiter(e, void 0, void 0, (function() {
                var e;
                return script_blockers_manager_generator(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, Object(s.v)()];
                    case 1:
                        return r.sent() ? [3, 4] : [4, m.a.getDefault(t).loadAndUpdate()];
                    case 2:
                        return (e = r.sent()).isTrialPending() || e.isTrialEnded() ? [4, n.disable()] : [3, 4];
                    case 3:
                        return r.sent(),
                        [2];
                    case 4:
                        return [4, n.enable()];
                    case 5:
                        return r.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        this.tryDeactivateFeature = function(t) {
            return script_blockers_manager_awaiter(e, void 0, void 0, (function() {
                return script_blockers_manager_generator(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, t.disable()];
                    case 1:
                        return e.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        this.refresh = function() {
            return script_blockers_manager_awaiter(e, void 0, void 0, (function() {
                return script_blockers_manager_generator(this, (function(e) {
                    return B.isEnabled() && B.disable().then((function() {
                        return B.enable()
                    }
                    )),
                    D.isEnabled() && D.disable().then((function() {
                        return D.enable()
                    }
                    )),
                    [2]
                }
                ))
            }
            ))
        }
        ,
        this.toggleFeatureState = function(t, n) {
            return script_blockers_manager_awaiter(e, void 0, void 0, (function() {
                var e;
                return script_blockers_manager_generator(this, (function(r) {
                    return e = null,
                    Object(E.c)(t, E.a.AdsBlocker) ? e = B : Object(E.c)(t, E.a.TrackersBlocker) && (e = D),
                    e ? (n ? this.tryActivateFeature(t, e) : this.tryDeactivateFeature(e),
                    [2]) : [2]
                }
                ))
            }
            ))
        }
        ,
        this.onTabChanged = function(t, n) {
            return script_blockers_manager_awaiter(e, void 0, void 0, (function() {
                var e, t, r, o;
                return script_blockers_manager_generator(this, (function(i) {
                    switch (i.label) {
                    case 0:
                        return e = n && n.status,
                        [4, Object(s.r)()];
                    case 1:
                        return t = i.sent(),
                        "loading" !== e ? [2] : (r = t) ? [4, A.a.isFeatureEnabled(E.a.AdsBlocker)] : [3, 3];
                    case 2:
                        r = i.sent(),
                        i.label = 3;
                    case 3:
                        return r ? this.tryActivateFeature(E.a.AdsBlocker, B) : this.tryDeactivateFeature(B),
                        (o = t) ? [4, A.a.isFeatureEnabled(E.a.TrackersBlocker)] : [3, 5];
                    case 4:
                        o = i.sent(),
                        i.label = 5;
                    case 5:
                        return o ? this.tryActivateFeature(E.a.TrackersBlocker, D) : this.tryDeactivateFeature(D),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        this.onExtensionStateChanged = function(t) {
            return script_blockers_manager_awaiter(e, void 0, void 0, (function() {
                return script_blockers_manager_generator(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return t ? [4, this.refresh()] : [3, 2];
                    case 1:
                        return e.sent(),
                        [3, 5];
                    case 2:
                        return [4, B.disable()];
                    case 3:
                        return e.sent(),
                        [4, D.disable()];
                    case 4:
                        e.sent(),
                        e.label = 5;
                    case 5:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
    }
      , service_worker_utils_awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }
      , service_worker_utils_generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }
      , K = b.getInstance()
      , setUninstallURL = function(e) {
        var t = "?version=" + Object(s.n)().version
          , n = "&block=" + e || !1;
        chrome.runtime.setUninstallURL("https://app.poperblocker.com/uninstall" + t + n)
    }
      , setOptIn = function(e, t) {
        return chrome.storage.local.get(a.h.SETTINGS, (function(n) {
            var r, o = n[a.h.SETTINGS];
            o.isOptIn = e,
            o.detectOverlays = e,
            chrome.storage.local.set(((r = {})[a.h.SETTINGS] = o,
            r), (function() {
                return t && t()
            }
            ))
        }
        ))
    }
      , performTrialUnificationMigration = function(e, t) {
        return service_worker_utils_awaiter(void 0, void 0, void 0, (function() {
            var n, r;
            return service_worker_utils_generator(this, (function(o) {
                switch (o.label) {
                case 0:
                    if (compareVersion(t, "6.1.0") >= 0)
                        return [2];
                    n = {
                        version_number: e,
                        migration_result: !1
                    },
                    o.label = 1;
                case 1:
                    return o.trys.push([1, 3, , 4]),
                    [4, f.a.migrateToSingleTrialEntity(Object(E.b)())];
                case 2:
                    return o.sent(),
                    n.migration_result = !0,
                    [3, 4];
                case 3:
                    return r = o.sent(),
                    n.migration_result = !1,
                    n.exception = r,
                    [3, 4];
                case 4:
                    return Object(u.c)(a.c.ANALYTICS_EVENT_TYPES.EXTENSION_UPGRADE, {
                        payload: JSON.stringify(n)
                    }),
                    [2]
                }
            }
            ))
        }
        ))
    }
      , initOnExtensionOnInstall = function() {
        chrome.runtime.onInstalled.addListener((function(e) {
            return service_worker_utils_awaiter(void 0, void 0, void 0, (function() {
                var t, n, r, o;
                return service_worker_utils_generator(this, (function(i) {
                    switch (i.label) {
                    case 0:
                        return t = e.reason,
                        n = e.previousVersion,
                        r = Object(s.n)().version,
                        o = {
                            payload: JSON.stringify({
                                version_number: r,
                                full_user_agent: navigator.userAgent,
                                reason: t
                            })
                        },
                        [4, Object(u.a)()];
                    case 1:
                        return i.sent(),
                        [4, Object(s.k)()];
                    case 2:
                        return i.sent(),
                        [4, service_worker_utils_awaiter(void 0, void 0, void 0, (function() {
                            var e, t, n;
                            return service_worker_utils_generator(this, (function(r) {
                                switch (r.label) {
                                case 0:
                                    return [4, fetch(a.n)];
                                case 1:
                                    return 200 !== (e = r.sent()).status ? [3, 3] : [4, e.text()];
                                case 2:
                                    t = r.sent(),
                                    chrome.storage.local.set(((n = {})[a.h.FONT_STYLE] = t,
                                    n)),
                                    r.label = 3;
                                case 3:
                                    return [2]
                                }
                            }
                            ))
                        }
                        ))];
                    case 3:
                        return i.sent(),
                        "install" !== t ? [3, 4] : (Object(u.c)(a.c.ANALYTICS_EVENT_TYPES.EXTENSION_INSTALL, o),
                        function() {
                            var e;
                            chrome.storage.local.set(T);
                            var t = Date.now();
                            p.a.getDefault(E.a.CookieCrumbler).loadAndUpdate().then((function(e) {
                                e.lastDisplayed = Date.now() - (a.y + 18e5),
                                e.save()
                            }
                            )),
                            d.a.getDefault().disable(),
                            _.a.getDefault().init(),
                            O.a.getDefault().init();
                            var n = {
                                installTime: t,
                                dontShowAgain: !1
                            }
                              , r = {
                                installTime: t
                            }
                              , o = {
                                newUser: !0,
                                lastUpdateTime: t,
                                count: 0,
                                cycle: 0,
                                coolDown: !1
                            };
                            chrome.storage.local.set(((e = {})[a.h.RATING_US_MODAL] = n,
                            e[a.h.GENERAL_DATA] = r,
                            e[a.h.PROMO_COUPON] = o,
                            e))
                        }(),
                        setUninstallURL(0),
                        createBrowserContextMenu(!1),
                        chrome.tabs.create({
                            url: a.t.WEB_APP + "/welcome"
                        }),
                        [3, 7]);
                    case 4:
                        return "update" !== t ? [3, 6] : [4, performTrialUnificationMigration(r, n)];
                    case 5:
                        return i.sent(),
                        createBrowserContextMenu(!1),
                        config_awaiter(void 0, void 0, void 0, (function() {
                            return config_generator(this, (function(e) {
                                return chrome.storage.local.get(null, (function(e) {
                                    return config_awaiter(void 0, void 0, void 0, (function() {
                                        var t, n, r, o, i, s;
                                        return config_generator(this, (function(c) {
                                            switch (c.label) {
                                            case 0:
                                                return t = {
                                                    whitelist: [],
                                                    numOfBlocks: 0,
                                                    paused: !1,
                                                    counterBlockedSites: {},
                                                    settings: T.settings,
                                                    isFirstBlockAdds: !0,
                                                    totalBlocksByType: T.totalBlocksByType,
                                                    numOfUnBlocks: 0,
                                                    counterUnBlockedSites: {},
                                                    totalUnBlocksByType: T.totalUnBlocksByType
                                                },
                                                d.a.getDefault().enable(),
                                                [4, O.a.getDefault().load()];
                                            case 1:
                                                return c.sent().initIfNeeded(),
                                                chrome.storage.local.set(((n = {})[a.h.RATING_US_MODAL] = {
                                                    installTime: Date.now() - a.K,
                                                    dontShowAgain: !1
                                                },
                                                n[a.h.FIRST_POPUP_BLOCK] = !0,
                                                n)),
                                                e.pb_numOfBlocks >= 0 && !e.settings ? (t.numOfBlocks = e.pb_numOfBlocks,
                                                t.settings.isOptIn = e.pb_detectOverlays || "In" === e.isOpted,
                                                t.settings.detectOverlays = e.pb_detectOverlays || "In" === e.isOpted,
                                                e.pb_totalBlocksByType && (t.totalBlocksByType = {
                                                    pop: e.pb_totalBlocksByType.pop,
                                                    win: e.pb_totalBlocksByType.win,
                                                    tab: e.pb_totalBlocksByType.tab,
                                                    overlay: e.pb_totalBlocksByType.overlay,
                                                    ad: e.pb_totalBlocksByType.ad,
                                                    cookie: e.pb_totalBlocksByType.cookie,
                                                    fbAd: e.pb_totalBlocksByType.fbAd,
                                                    twitterAd: e.pb_totalBlocksByType.twitterAd,
                                                    linkedinAd: e.pb_totalBlocksByType.linkedinAd,
                                                    instagramAd: e.pb_totalBlocksByType.instagramAd,
                                                    tracker: e.pb_totalBlocksByType.tracker
                                                },
                                                t.counterBlockedSites = e.pb_counterBlockedSites),
                                                e.pb_whitelistManager && e.pb_whitelistManager.userWhitelist && (t.whitelist = e.pb_whitelistManager.userWhitelist || []),
                                                chrome.storage.local.set(config_assign(config_assign({}, T), t))) : e.pb_numOfBlocks >= 0 ? (e.settings.isOptIn = e.pb_detectOverlays || "In" === e.isOpted,
                                                e.settings.popups = void 0 === (null === (r = e.settings) || void 0 === r ? void 0 : r.popups) || e.settings.popups,
                                                e.settings.hideElements = void 0 === (null === (o = e.settings) || void 0 === o ? void 0 : o.hideElements) || e.settings.hideElements,
                                                e.settings.detectOverlays = e.pb_detectOverlays || "In" === e.isOpted,
                                                chrome.storage.local.set({
                                                    settings: config_assign({}, e.settings)
                                                })) : (e.settings.popups = void 0 === (null === (i = e.settings) || void 0 === i ? void 0 : i.popups) || e.settings.popups,
                                                e.settings.hideElements = void 0 === (null === (s = e.settings) || void 0 === s ? void 0 : s.hideElements) || e.settings.hideElements,
                                                chrome.storage.local.set({
                                                    settings: config_assign({}, e.settings)
                                                })),
                                                [2]
                                            }
                                        }
                                        ))
                                    }
                                    ))
                                }
                                )),
                                [2]
                            }
                            ))
                        }
                        )),
                        [3, 7];
                    case 6:
                        Object(u.c)(a.c.ANALYTICS_EVENT_TYPES.EXTENSION_INSTALL_GENERAL, o),
                        i.label = 7;
                    case 7:
                        return [4, Object(s.J)()];
                    case 8:
                        return i.sent(),
                        chrome.storage.local.get([a.h.PAUSED], (function(e) {
                            var t = e.paused;
                            h.a.handleFaviconState(t),
                            createBrowserContextMenu(t)
                        }
                        )),
                        [4, K.createPeriodicAlarmWithDelay(a.b.SEGMENT_ALARM, a.x, Object(I.i)(a.A, a.q), !0)];
                    case 9:
                        return i.sent(),
                        [4, K.createPeriodicAlarm(a.b.ADSBLOCKER_ALARM, a.x)];
                    case 10:
                        return i.sent(),
                        B.updateConfig(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ))
    }
      , F = n(13)
      , messaging_assign = function() {
        return (messaging_assign = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    }
      , messaging_awaiter = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function fulfilled(e) {
                try {
                    step(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function rejected(e) {
                try {
                    step(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function step(e) {
                e.done ? o(e.value) : function adopt(e) {
                    return e instanceof n ? e : new n((function(t) {
                        t(e)
                    }
                    ))
                }(e.value).then(fulfilled, rejected)
            }
            step((r = r.apply(e, t || [])).next())
        }
        ))
    }
      , messaging_generator = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function verb(i) {
            return function(s) {
                return function step(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    };
    const M = {};
    (function() {
        F.BrowserAPI.runtime.onMessage.addListener((function(e, t, n) {
            var r, o, i, p, d = {};
            switch (e.name) {
            case a.v.GA_EVENT:
                Object(l.a)(e.action),
                n();
                break;
            case a.v.UPDATE_TAB_BADGE:
                h.a.handleTabBadge(t.tab);
                break;
            case a.v.UPDATE_COUNTS:
                setUninstallURL(e.numOfBlocks);
                break;
            case a.v.CREATE_CONTEXT_MENUS:
                createBrowserContextMenu(e.paused || !1);
                break;
            case a.v.SEND_ANALYTICS_EVENT:
                Object(u.c)(e.eventType, e.eventPayload);
                break;
            case a.v.ALLOW_ALWAYS:
                i = e.domain,
                p = e.type,
                chrome.storage.local.get("whitelist", (function(e) {
                    return __awaiter(void 0, void 0, void 0, (function() {
                        var t, n;
                        return __generator(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                return t = __spreadArrays(e.whitelist, [i]),
                                chrome.storage.local.set({
                                    whitelist: t
                                }),
                                "popup" !== p ? [3, 1] : [3, 3];
                            case 1:
                                return [4, Object(s.i)()];
                            case 2:
                                n = r.sent(),
                                chrome.tabs.sendMessage(n.id, {
                                    name: "allowOverlays"
                                }),
                                r.label = 3;
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ));
                break;
            case a.v.REQUEST_TAB_URL:
                F.BrowserAPI.tabs.get(t.tab.id, (function(e) {
                    d = {
                        url: e.url
                    }
                }
                ));
                break;
            case a.v.OPEN_URL:
                F.BrowserAPI.tabs.create({
                    url: e.url
                });
                break;
            case a.v.UPDATE_RATING:
                !function(e, t) {
                    chrome.storage.local.get("rating", (function(n) {
                        var r = n.rating;
                        switch (e) {
                        case "display":
                            r.showCount++;
                            break;
                        case "click":
                            !r.complete && r.showCount >= r.nextDisplay && (chrome.tabs.sendMessage(t.tab.id, {
                                name: "showRateUs"
                            }),
                            r.nextDisplay += a.G.EVERY);
                            break;
                        case "complete":
                            r.complete = !0
                        }
                        chrome.storage.local.set({
                            rating: r
                        })
                    }
                    ))
                }(e.action, t);
                break;
            case a.v.UPDATE_USER_INFO:
                Object(c.e)();
                break;
            case a.v.LOGIN:
                Object(c.b)().then((function() {
                    Object(s.f)()
                }
                ));
                break;
            case a.v.SUBSCRIPTION_SUCCESS:
                Object(c.b)(),
                Object(s.e)(),
                Object(s.C)({
                    name: a.v.UPDATE_REMOTE_SETTINGS
                });
                break;
            case a.v.GET_USER:
                Object(c.b)();
                break;
            case a.v.LOGOUT:
                Object(s.v)().then((function(e) {
                    Object(c.d)().then((function(t) {
                        t && (U.toggleFeatureState(E.a.AdsBlocker, !1),
                        U.toggleFeatureState(E.a.TrackersBlocker, !1),
                        Object(s.x)(e))
                    }
                    ))
                }
                ));
                break;
            case a.v.ADD_UNBLOCK_ALL_ELEMENTS_MENU:
                createChildMenuItem(messaging_assign({
                    parentId: a.i.PARENT.id
                }, a.i.UNBLOCK_ALL_ELEMENTS));
                break;
            case a.v.REMOVE_UNBLOCK_ALL_ELEMENTS_MENU:
                o = a.i.UNBLOCK_ALL_ELEMENTS.id,
                chrome.contextMenus.remove(o, (function() {
                    return chrome.runtime.lastError
                }
                ));
                break;
            case a.v.GET_DEFAULT_WHITELIST:
                __awaiter(void 0, void 0, void 0, (function() {
                    return __generator(this, (function(e) {
                        return [2, new Promise((function(e) {
                            var t = a.h.DEFAULT_WHITELIST_LAST_UPDATE
                              , n = Date.now();
                            chrome.storage.local.get(t, (function(r) {
                                return __awaiter(void 0, void 0, void 0, (function() {
                                    var o, i, s;
                                    return __generator(this, (function(c) {
                                        switch (c.label) {
                                        case 0:
                                            return !r[t] || n - r[t] >= a.y ? [4, fetch(a.e.WHITELIST)] : [3, 3];
                                        case 1:
                                            return 200 !== (o = c.sent()).status ? [3, 3] : [4, o.json()];
                                        case 2:
                                            i = c.sent(),
                                            chrome.storage.local.set(((s = {})[t] = n,
                                            s[a.h.DEFAULT_WHITELIST] = i,
                                            s), (function() {
                                                return e()
                                            }
                                            )),
                                            c.label = 3;
                                        case 3:
                                            return e(),
                                            [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }
                            ))
                        }
                        ))]
                    }
                    ))
                }
                ));
                break;
            case a.v.GET_POPULAR_SITES_FOR_BLOCK_ELEMENTS:
                popularSitesForBlockElements_awaiter(void 0, void 0, void 0, (function() {
                    return popularSitesForBlockElements_generator(this, (function(e) {
                        return [2, new Promise((function(e) {
                            var t = a.h.POPULAR_SITES_FOR_BLOCK_ELEMENTS_LAST_UPDATE
                              , n = Date.now();
                            chrome.storage.local.get(t, (function(r) {
                                return popularSitesForBlockElements_awaiter(void 0, void 0, void 0, (function() {
                                    var o, i, s;
                                    return popularSitesForBlockElements_generator(this, (function(c) {
                                        switch (c.label) {
                                        case 0:
                                            return !r[t] || n - r[t] >= a.y ? [4, fetch(a.e.POPULAR_SITES_FOR_BLOCK_ELEMENTS)] : [3, 3];
                                        case 1:
                                            return 200 !== (o = c.sent()).status ? [3, 3] : [4, o.json()];
                                        case 2:
                                            i = c.sent(),
                                            chrome.storage.local.set(((s = {})[t] = n,
                                            s[a.h.POPULAR_SITES_FOR_BLOCK_ELEMENTS] = i,
                                            s), (function() {
                                                return e()
                                            }
                                            )),
                                            c.label = 3;
                                        case 3:
                                            return e(),
                                            [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }
                            ))
                        }
                        ))]
                    }
                    ))
                }
                ));
                break;
            case a.v.MANUAL_REMOVE_OVERLAY:
                Object(s.D)(a.v.MANUAL_REMOVE_OVERLAY);
                break;
            case a.v.START_BLOCKED_ELEMENTS:
                Object(s.D)(a.v.START_BLOCKED_ELEMENTS);
                break;
            case a.v.INSERT_COOKIE_FILTERS:
                cookie_crumbler_awaiter(void 0, void 0, void 0, (function() {
                    var e;
                    return cookie_crumbler_generator(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, chrome.tabs.query({
                                active: !0,
                                currentWindow: !0
                            })];
                        case 1:
                            return (null == (e = t.sent()[0]) ? void 0 : e.id) ? [4, (n = e.id,
                            new Promise((function(e) {
                                return chrome.scripting.insertCSS({
                                    target: {
                                        tabId: n
                                    },
                                    files: ["common-cookie-filters.css"]
                                }, e)
                            }
                            )))] : [3, 3];
                        case 2:
                            t.sent(),
                            t.label = 3;
                        case 3:
                            return [2]
                        }
                        var n
                    }
                    ))
                }
                ));
                break;
            case a.v.OPT_IN_AGREE:
                setOptIn(!0, s.J);
                break;
            case a.v.OPT_IN_DISAGREE:
                setOptIn(!1, s.J);
                break;
            case a.v.SEND_ALIVE_EVENT:
                Object(u.b)();
                break;
            case a.v.UPDATE_SOCIAL_BLOCKER_CONFIG:
                Object(s.L)();
                break;
            case a.v.UPDATE_SEGMENT_DATA:
                Object(s.K)();
                break;
            case a.v.UPDATE_BLOCK_COUNT:
                Object(s.D)(a.v.UPDATE_BLOCK_COUNT, {
                    type: e.type
                });
                break;
            case a.v.UPDATE_UNBLOCK_COUNT:
                Object(s.D)(a.v.UPDATE_UNBLOCK_COUNT, {
                    type: e.type
                });
                break;
            case a.v.CHECK_PROMO_MESSAGE:
                r = e.delay,
                promo_coupon_awaiter(void 0, void 0, void 0, (function() {
                    return promo_coupon_generator(this, (function(e) {
                        return chrome.storage.local.get([a.h.PROMO_COUPON, a.h.GENERAL_DATA, a.h.USER], (function(e) {
                            return promo_coupon_awaiter(void 0, void 0, void 0, (function() {
                                var t, n, o, i, c, l, f, h;
                                return promo_coupon_generator(this, (function(p) {
                                    switch (p.label) {
                                    case 0:
                                        return t = Date.now(),
                                        n = e[a.h.PROMO_COUPON],
                                        (null == (o = e[a.h.USER]) ? void 0 : o.isPremium) ? [2] : (n || (n = {
                                            lastUpdateTime: t,
                                            count: 0,
                                            cycle: 0,
                                            coolDown: !1
                                        },
                                        chrome.storage.local.set({
                                            promoCoupon: n
                                        })),
                                        i = !1,
                                        n.newUser && (t - (null == n ? void 0 : n.lastUpdateTime) > a.r && 0 === (null == n ? void 0 : n.count) || (null == n ? void 0 : n.count) >= 1) ? (i = !0,
                                        n.coolDown = !0) : t - (null == n ? void 0 : n.lastUpdateTime) > a.J ? (n.cycle = 0,
                                        n.count = 1,
                                        n.coolDown = !1,
                                        n.lastUpdateTime = t) : n.coolDown && t - n.lastUpdateTime > a.y && n.cycle < a.E ? (n.count = 1,
                                        n.coolDown = !1) : n.cycle < a.E && (null == n ? void 0 : n.count) >= a.F && !n.coolDown && (n.coolDown = !0,
                                        i = !0),
                                        i ? [4, Object(u.a)()] : [3, 4]);
                                    case 1:
                                        return c = p.sent(),
                                        [4, fetch(a.e.PROMO_COUPON, {
                                            headers: {
                                                id: (null == c ? void 0 : c.uuid) || "",
                                                couponid: "promo"
                                            }
                                        })];
                                    case 2:
                                        return 200 !== (l = p.sent()).status ? [3, 4] : [4, l.json()];
                                    case 3:
                                        f = p.sent(),
                                        n.lastUpdateTime = t,
                                        n.cycle++,
                                        n.count = 0,
                                        n.newUser = !1,
                                        (null == f ? void 0 : f.couponId) && Object(s.D)(a.v.SHOW_COUPON_MESSAGE, {
                                            data: f,
                                            delay: r
                                        }),
                                        p.label = 4;
                                    case 4:
                                        return chrome.storage.local.set(((h = {})[a.h.PROMO_COUPON] = promo_coupon_assign({}, n),
                                        h)),
                                        [2]
                                    }
                                }
                                ))
                            }
                            ))
                        }
                        )),
                        [2]
                    }
                    ))
                }
                ));
                break;
            case a.v.INJECT_FONTS:
                F.BrowserAPI.storage.local.get(a.h.FONT_STYLE, (function(e) {
                    n({
                        fonts: e
                    })
                }
                ));
                break;
            case a.v.FETCH_SETTINGS:
                Object(s.f)();
                break;
            case a.v.UPDATE_REMOTE_SETTINGS:
                Object(s.J)();
                break;
            case a.v.UPDATE_REMOTE_AND_LOCAL_SETTINGS:
                Object(s.H)(e.settings);
                break;
            case a.v.SHOW_TRIAL_PROMO:
                if (e && e.data) {
                    var _ = e.data;
                    f.a.showTrialPromoIfNeeded(_.feature, _.extras)
                }
                break;
            case a.v.TOGGLE_PUSH_NOTIFICATIONS_BLOCKING:
                setPushNotificationBlocker(e.checked);
                break;
            case a.v.EXTENSION_IS_PINNED:
                return Object(s.b)().then(n),
                !0;
            case a.v.UPDATE_SETTINGS:
                Object(s.I)(e.data);
                break;
            case a.v.REQUEST_OPTIONAL_PERMISSIONS:
                push_notification_blocker_awaiter(void 0, void 0, void 0, (function() {
                    var e, t, n;
                    return push_notification_blocker_generator(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            return e = {
                                permissions: [a.C.CONTENT_SETTINGS],
                                origins: [a.C.ALL_URLS]
                            },
                            [4, Object(s.A)(e)];
                        case 1:
                            return t = r.sent(),
                            n = t ? a.c.ANALYTICS_EVENT_TYPES.IN_SITE_PUSH_NOTIFICATION_ALLOW_PERMISSIONS : a.c.ANALYTICS_EVENT_TYPES.IN_SITE_PUSH_NOTIFICATION_DENY_PERMISSIONS,
                            Object(u.c)(n),
                            t && setPushNotificationBlocker(t),
                            [2]
                        }
                    }
                    ))
                }
                ));
                break;
            case a.v.REQUEST_EXTENSION_ID:
                F.BrowserAPI.management.getSelf((function(e) {
                    Object(s.D)(a.v.REQUEST_EXTENSION_ID, {
                        id: e.id,
                        version: e.version
                    })
                }
                ));
                break;
            case a.v.UPDATE_SCRIPT_BLOCKERS_STATE:
                U.refresh();
                break;
            case a.v.SETTINGS_CHANGED:
                U.toggleFeatureState(e.data.feature, e.data.value);
                break;
            case a.v.ON_EXTENSION_ENABLED_STATE_UPDATED:
                U.onExtensionStateChanged(e.data.isEnabled)
            }
            return n(d),
            !0
        }
        ))
    }
    )(),
    F.BrowserAPI.runtime.onMessageExternal.addListener((function(e, t, n) {
        return messaging_awaiter(void 0, void 0, void 0, (function() {
            var t, r, o, i, u, l;
            return messaging_generator(this, (function(h) {
                switch (h.label) {
                case 0:
                    switch (h.trys.push([0, 15, , 16]),
                    e.type) {
                    case a.v.REQUEST_TRIAL_STATUS:
                        return [3, 1];
                    case a.v.EXTENSION_IS_PINNED:
                        return [3, 3];
                    case a.v.EXTENSION_IS_ALLOWED_INCOGNITO:
                        return [3, 5];
                    case a.v.GET_ALL_EXTENSION_PERMISSIONS_GRANTED:
                        return [3, 7];
                    case a.v.LOGOUT:
                        return [3, 9]
                    }
                    return [3, 14];
                case 1:
                    return t = n,
                    [4, f.a.getFeaturesTrialState()];
                case 2:
                    return t.apply(void 0, [h.sent()]),
                    [3, 14];
                case 3:
                    return r = n,
                    [4, Object(s.b)()];
                case 4:
                    return r.apply(void 0, [h.sent()]),
                    [3, 14];
                case 5:
                    return o = n,
                    [4, Object(s.p)()];
                case 6:
                    return o.apply(void 0, [h.sent()]),
                    [3, 14];
                case 7:
                    return i = n,
                    [4, Object(s.g)()];
                case 8:
                    return i.apply(void 0, [h.sent()]),
                    [3, 14];
                case 9:
                    return [4, Object(s.v)()];
                case 10:
                    return u = h.sent(),
                    [4, Object(c.d)()];
                case 11:
                    return (l = h.sent()) ? (U.toggleFeatureState(E.a.AdsBlocker, !1),
                    U.toggleFeatureState(E.a.TrackersBlocker, !1),
                    [4, Object(s.x)(u)]) : [3, 13];
                case 12:
                    h.sent(),
                    h.label = 13;
                case 13:
                    return n(l),
                    [3, 14];
                case 14:
                    return [3, 16];
                case 15:
                    return h.sent(),
                    [3, 16];
                case 16:
                    return [2]
                }
            }
            ))
        }
        ))
    }
    )),
    K.registerAlarmListener((function(e) {
        return service_worker_utils_awaiter(void 0, void 0, void 0, (function() {
            return service_worker_utils_generator(this, (function(t) {
                switch (t.label) {
                case 0:
                    switch (e.name) {
                    case a.b.SEGMENT_ALARM:
                        return [3, 1];
                    case a.b.TRACKERSBLOCKER_ALARM:
                        return [3, 3];
                    case a.b.ADSBLOCKER_ALARM:
                        return [3, 4]
                    }
                    return [3, 5];
                case 1:
                    return [4, Object(s.K)()];
                case 2:
                    return t.sent(),
                    [3, 6];
                case 3:
                    return D.updateConfig(),
                    [3, 6];
                case 4:
                    return B.updateConfig(),
                    [3, 6];
                case 5:
                    return [3, 6];
                case 6:
                    return [2]
                }
            }
            ))
        }
        ))
    }
    )),
    initOnExtensionOnInstall(),
    chrome.contextMenus.onClicked.addListener((function(e) {
        return service_worker_utils_awaiter(void 0, void 0, void 0, (function() {
            var t;
            return service_worker_utils_generator(this, (function(n) {
                switch (n.label) {
                case 0:
                    return [4, Object(s.s)()];
                case 1:
                    switch (t = n.sent(),
                    e.menuItemId) {
                    case a.i.OVERLAY.id:
                        chrome.storage.local.get([a.h.SETTINGS], (function(e) {
                            var n = e.settings.isOptIn;
                            return service_worker_utils_awaiter(void 0, void 0, void 0, (function() {
                                return service_worker_utils_generator(this, (function(e) {
                                    return n ? t || Object(s.D)("manual-remove-overlay", {
                                        source: "right-click"
                                    }) : Object(s.D)("overlay-not-active", {
                                        source: "right-click"
                                    }),
                                    [2]
                                }
                                ))
                            }
                            ))
                        }
                        ));
                        break;
                    case a.i.BLOCK_ELEMENT.id:
                        Object(s.D)(a.v.START_BLOCKED_ELEMENTS);
                        break;
                    case a.i.UNBLOCK_ALL_ELEMENTS.id:
                        Object(s.D)(a.v.UNBLOCK_ALL_ELEMENTS)
                    }
                    return [2]
                }
            }
            ))
        }
        ))
    }
    )),
    chrome.runtime.onStartup.addListener((function() {
        return service_worker_utils_awaiter(void 0, void 0, void 0, (function() {
            return service_worker_utils_generator(this, (function(e) {
                switch (e.label) {
                case 0:
                    return chrome.storage.local.get([a.h.PAUSED], (function(e) {
                        var t = e.paused;
                        h.a.handleFaviconState(t),
                        createBrowserContextMenu(t)
                    }
                    )),
                    Object(c.e)(),
                    [4, K.createPeriodicAlarmWithDelay(a.b.SEGMENT_ALARM, a.x, Object(I.i)(0, a.z))];
                case 1:
                    return e.sent(),
                    [2]
                }
            }
            ))
        }
        ))
    }
    )),
    y.BrowserAPI.tabs.onUpdated.addListener((function(e, t, n) {
        U.onTabChanged(n, t)
    }
    )),
    M.Rotate = class {
        static get map() {
            return "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~"
        }
        static rotate(e) {
            if (this.isEmpty(e))
                throw new Error;
            return this.rot47(JSON.stringify(e))
        }
        static rot47(e) {
            let t, n, r, o = "", i = this.map.length;
            for (t = 0; t < e.length; t++)
                r = e.charAt(t),
                n = this.map.indexOf(r),
                n >= 0 && (r = this.map.charAt((n + i / 2) % i)),
                o += r;
            return o
        }
        static isEmpty(e) {
            const t = Object.prototype.hasOwnProperty;
            if (null == e)
                return !0;
            if (e.length > 0)
                return !1;
            if (0 === e.length)
                return !0;
            if ("object" != typeof e)
                return !0;
            for (var n in e)
                if (t.call(e, n))
                    return !1;
            return !0
        }
    }
    ,
    function qtCL() {
        self.FrfRC = self.FrfRC || {},
        FrfRC.Twq = {
            init: function uqdX(e, t) {
                const n = FrfRC.Twq;
                e = e.class;
                const r = t.instance;
                n.class = class Twq {
                    constructor() {
                        this.SfUWu = {}
                    }
                    FWVH(e) {
                        return !!this.SfUWu[e]
                    }
                    LryL(t) {
                        return t ? (this.FWVH(t) || (this.SfUWu[t] = new e,
                        this.SfUWu[t].MDsC(t).EZGZ(t)),
                        this.SfUWu[t]) : null
                    }
                    FfKa(e) {
                        return this.wAlC(e),
                        this.LryL(e)
                    }
                    VlgC(e) {
                        const t = this.LryL(e).rUZA();
                        if (!t)
                            return null;
                        const n = this.LryL(t);
                        return n || null
                    }
                    wAlC(e) {
                        return delete this.SfUWu[e],
                        this
                    }
                    dovY(e, t) {
                        e && this.SfUWu[e] && t && this.SfUWu[e].rtIR(e, t)
                    }
                    uwdX(e) {
                        const t = this.SfUWu[e];
                        return !t || !!t.ALTg() && !t.ZyFt()
                    }
                    prOZ(e, t) {
                        const n = this.SfUWu[e];
                        let o = {
                            isUrlValid: r.SsQi(t.u),
                            lastPage: t.p,
                            isHh: n.eeEe()
                        };
                        o.isUrlEquals = o.lastPage === t.u,
                        o.isAjax = n.mZcI() && !o.isUrlEquals;
                        const i = !!o.isUrlValid && (!(!o.isHh && o.isUrlEquals) || o.isAjax);
                        return i || this.FfKa(e),
                        i
                    }
                    AYiQ(e, t) {
                        return !t || t.active || e.xUJZ() ? null : "background_auto_reloading"
                    }
                }
                ,
                n.instance = new n.class
            },
            deps: ["JBH", "OhU"]
        }
    }(),
    function VATI() {
        self.FrfRC = self.FrfRC || {},
        FrfRC.mRx = {
            init: function mBAw(e) {
                const t = FrfRC.mRx
                  , n = e.instance.SsQi;
                t.class = class mRx {
                    constructor() {
                        this.BaovO = {},
                        this.oQkhH = null,
                        this.vAEZT = chrome.tabs
                    }
                    OEYF() {
                        return this.oQkhH && this.BaovO[this.oQkhH] || ""
                    }
                    dYCP() {
                        return this.oQkhH || null
                    }
                    xfmQ(e) {
                        return this.BaovO[e] && (this.oQkhH = e),
                        this
                    }
                    xRqY(e) {
                        const t = e && e.id
                          , r = e.url;
                        return t && n(r) && (this.BaovO[t] = r),
                        this
                    }
                    HBWQ(e) {
                        return e && e.id && e.active && this.xfmQ(e.id),
                        this
                    }
                    bzXw(e) {
                        const t = this.OEYF();
                        return this.xRqY(e),
                        this.HBWQ(e),
                        t
                    }
                    ZrCw() {
                        const e = chrome && chrome.windows;
                        if (!e)
                            return;
                        this.IGIa(e),
                        e.onFocusChanged.addListener(this.upmg.bind(this)),
                        e.onRemoved.addListener(this.fiCG.bind(this));
                        const t = this.vAEZT.onActivated ? "onActivated" : "onSelectionChanged";
                        this.vAEZT[t].addListener(this.cTOh.bind(this))
                    }
                    IGIa(e) {
                        e.getAll({
                            populate: !0
                        }, e=>{
                            for (let t = 0; t < e.length; t++)
                                for (let r = 0; r < e[t].tabs.length; r++)
                                    n(e[t].tabs[r].url) && (this.xRqY(e[t].tabs[r]),
                                    e[t].focused && e[t].tabs[r].active && this.xfmQ(e[t].tabs[r].id))
                        }
                        )
                    }
                    upmg(e) {
                        chrome.windows && chrome.windows.WINDOW_ID_NONE != e && this.vAEZT.query({
                            windowId: e,
                            active: !0
                        }, e=>{
                            e && e[0] && e[0].active && this.xfmQ(e[0].id)
                        }
                        )
                    }
                    fiCG() {
                        this.vAEZT.query({
                            active: !0
                        }, e=>{
                            e && e[0] && this.xfmQ(e[0].id)
                        }
                        )
                    }
                    cTOh(e) {
                        this.xfmQ(e.tabId)
                    }
                }
                ,
                t.instance = new t.class,
                t.instance.ZrCw()
            },
            deps: ["OhU"]
        }
    }(),
    function qdwN() {
        self.FrfRC = self.FrfRC || {},
        FrfRC.qqR = {
            init: function LuNh(e, t, n, r) {
                const o = FrfRC.qqR
                  , i = n.instance
                  , a = t.instance
                  , s = r.instance
                  , c = e.instance;
                o.class = class qqR {
                    constructor() {
                        this.nFGMH = chrome.tabs
                    }
                    MiBC() {
                        this.JbfSX = this.Ceem.bind(this),
                        this.WmgBG = this.TCSg.bind(this),
                        this.qKymC = this.urwy.bind(this),
                        this.tbtKA = this.Djej.bind(this),
                        this.nFGMH.onUpdated.addListener(this.qKymC),
                        this.nFGMH.onReplaced.addListener(this.WmgBG),
                        this.nFGMH.onRemoved.addListener(this.tbtKA),
                        this.nFGMH.onCreated.addListener(this.JbfSX)
                    }
                    Ceem(e) {
                        if (!e || !e.url)
                            return;
                        i.LryL(e.id).AMhB().bYUQ(!1);
                        const t = e.openerTabId || a.dYCP();
                        e.url.length && i.FWVH(t) && e.url === i.LryL(t).ykwb() ? i.LryL(e.id).Ffng("duplication") : e.url.length && c.SsQi(e.url) && this.nFGMH.query({
                            url: e.url
                        }, (function(t) {
                            (t || []).length > 1 && i.LryL(e.id).Ffng(["duplication", "background_duplication"])
                        }
                        )),
                        "complete" !== e.status || e.openerTabId || i.LryL(e.id).Ffng("reopening"),
                        i.LryL(e.id).NZjT(t),
                        self.dispatchEvent(new CustomEvent("upph",{
                            detail: {
                                tabId: e.id,
                                openerId: t
                            }
                        }))
                    }
                    urwy(e, t, n) {
                        if (t && "complete" === t.status) {
                            const t = i.LryL(e);
                            t.ZyFt() && t.mZcI() && t.vcPN(void 0).VXac(!1).FsyL(!1),
                            t.ykwb() !== n.url && t.VXac(!1),
                            t.ADXx(void 0).FsyL().olCV("ajax"),
                            s.OjpE(e),
                            t.bYUQ(!1)
                        }
                        setTimeout(()=>{
                            chrome.tabs.sendMessage(e, {
                                message: "pageUrlChanged",
                                url: t.url
                            }, ()=>chrome.runtime.lastError)
                        }
                        , 10)
                    }
                    TCSg(e, t) {
                        i.LryL(e).bYUQ().MDsC([e, t]),
                        s.OjpE(e)
                    }
                    Djej(e) {
                        i.wAlC(e)
                    }
                }
                ,
                o.instance = new o.class,
                o.instance.MiBC()
            },
            deps: ["OhU", "mRx", "Twq", "AyA"]
        }
    }(),
    function mtzG() {
        self.FrfRC = self.FrfRC || {},
        FrfRC.xpR = {
            init: function zSbW() {
                FrfRC.xpR.class = class xpR {
                    constructor(e, t) {
                        this.FVIH(e),
                        this.CWgp(t),
                        this.kEuhu = ""
                    }
                    get uPuLD() {
                        return this.CrngU
                    }
                    FVIH(e) {
                        return this.CrngU = e,
                        this
                    }
                    get TQJgn() {
                        return this.hyeCb
                    }
                    set TQJgn(e) {
                        this.hyeCb = e
                    }
                    CWgp(e) {
                        return this.hyeCb = e,
                        this
                    }
                    get kEuhu() {
                        return this.TgvOm
                    }
                    set kEuhu(e) {
                        this.TgvOm = e
                    }
                    get ufERn() {
                        return this.IqJZF
                    }
                    set ufERn(e) {
                        this.IqJZF = e
                    }
                    get EtQie() {
                        return this.uJbHf
                    }
                    set EtQie(e) {
                        this.uJbHf = e
                    }
                    xZnf() {
                        return this.kEuhu
                    }
                    GlYe(e, t) {
                        t = t || 0;
                        var n = e;
                        try {
                            n = decodeURIComponent(e)
                        } catch (e) {
                            return {
                                decoded: n,
                                decodedTimes: t
                            }
                        }
                        return n.length < e.length ? this.GlYe(n, ++t) : {
                            decoded: n,
                            decodedTimes: t
                        }
                    }
                    QHmg() {}
                }
            }
        }
    }(),
    function rPtE() {
        self.FrfRC = self.FrfRC || {},
        FrfRC.VNm = {
            init: function oMeN() {
                const e = FrfRC.VNm;
                async function UhWW(e) {
                    const t = function fvyX(e) {
                        e = e.replace(/\r\n/g, "\n");
                        const t = [];
                        for (let n = 0; n < e.length; n++) {
                            let r = e.charCodeAt(n);
                            r < 128 ? t[t.length] = r : r > 127 && r < 2048 ? (t[t.length] = r >> 6 | 192,
                            t[t.length] = 63 & r | 128) : (t[t.length] = r >> 12 | 224,
                            t[t.length] = r >> 6 & 63 | 128,
                            t[t.length] = 63 & r | 128)
                        }
                        return new Uint8Array(t).buffer
                    }(e);
                    return function SIhh(e) {
                        let t, n, r, o = new DataView(e), i = "";
                        for (t = 0,
                        n = o.byteLength; t < n; t += 1)
                            r = o.getUint8(t).toString(16),
                            r.length < 2 && (r = "0" + r),
                            i += r;
                        return i
                    }(await crypto.subtle.digest("SHA-256", t))
                }
                e.class = class VNm {
                    async TYPb(e) {
                        e = function TrAI(e) {
                            return e + "21" * Math.PI
                        }(e += "");
                        return await UhWW(e)
                    }
                }
                ,
                e.instance = new e.class
            }
        }
    }(),
    function NCji() {
        self.FrfRC = self.FrfRC || {},
        FrfRC.myU = {
            init: function gJJz(e, t) {
                const n = FrfRC.myU
                  , r = e.instance
                  , o = t.instance;
                n.class = class qqR {
                    constructor() {
                        this.zIqqs = chrome.webNavigation
                    }
                    IvMW() {
                        this.zIqqs.onCommitted.addListener(this.EwHg.bind(this))
                    }
                    EwHg(e) {
                        const t = (e = e || {}).tabId
                          , n = e.transitionQualifiers;
                        t && 0 === e.frameId && (r.LryL(t).olCV(e.transitionType).zSOO(n),
                        /client_redirect/.test(n) && r.LryL(t).NDEU(e.url),
                        o.OjpE(t))
                    }
                }
                ,
                n.instance = new n.class,
                n.instance.IvMW()
            },
            deps: ["Twq", "AyA"]
        }
    }(),
    function TqWU() {
        self.FrfRC = self.FrfRC || {},
        FrfRC.fdu = {
            init: function Drju(e, t, n) {
                const r = FrfRC.fdu
                  , o = e.instance
                  , i = t.instance.SsQi
                  , a = n.instance;
                r.class = class qqR {
                    constructor() {
                        this.ZWdRU = chrome.webRequest,
                        this.UQVCY = {
                            types: ["main_frame"],
                            urls: ["<all_urls>"]
                        }
                    }
                    grxp() {
                        if (!this.ZWdRU)
                            return;
                        this.ZWdRU.onBeforeRequest.addListener(this.Zexd.bind(this), this.UQVCY),
                        this.ZWdRU.onBeforeRedirect.addListener(this.wWlo.bind(this), this.UQVCY);
                        let e = ["requestHeaders"];
                        this.ZWdRU.OnBeforeSendHeadersOptions && this.ZWdRU.OnBeforeSendHeadersOptions.hasOwnProperty("EXTRA_HEADERS") && e.push("extraHeaders"),
                        this.ZWdRU.onBeforeSendHeaders.addListener(this.tdOv.bind(this), this.UQVCY, e),
                        this.ZWdRU.onHeadersReceived.addListener(this.ZveF.bind(this), this.UQVCY),
                        this.ZWdRU.onErrorOccurred.addListener(this.kSbK.bind(this), this.UQVCY)
                    }
                    Zexd(e) {
                        o.LryL(e.tabId).zFpA(a.OEYF()),
                        i(e.url) && (o.LryL(e.tabId).vcPN(void 0).VXac(!1).FsyL(!1),
                        this.juuB(e))
                    }
                    wWlo(e) {
                        i(e.url) && o.LryL(e.tabId).HTkD(e.url)
                    }
                    tdOv(e) {
                        return o.LryL(e.tabId).rRAh(),
                        e.requestHeaders.some(t=>this.Lmfo(t, e.tabId)) || o.LryL(e.tabId).MSgP(""),
                        {
                            requestHeaders: e.requestHeaders
                        }
                    }
                    Lmfo(e, t) {
                        return /^Referer$/i.test(e.name) && o.LryL(t).MSgP(e.value)
                    }
                    juuB(e) {
                        const t = e && e.originUrl;
                        t && o.LryL(e.tabId).OiWD(t)
                    }
                    ZveF(e) {
                        o.LryL(e.tabId).rRAh()
                    }
                    kSbK(e) {
                        try {
                            o.LryL(e.tabId)
                        } catch (e) {}
                    }
                }
                ,
                r.instance = new r.class,
                r.instance.grxp()
            },
            deps: ["Twq", "OhU", "mRx"]
        }
    }(),
    function lYAC() {
        self.FrfRC = self.FrfRC || {},
        FrfRC.Dtl = {
            init: function uWhZ(e, t) {
                const n = FrfRC.Dtl
                  , r = t.instance
                  , o = e.instance.SsQi;
                n.class = class qqR {
                    uxbY() {
                        return new Promise(e=>{
                            chrome.windows.getAll({
                                populate: !0
                            }, (function(t) {
                                for (let e = 0; e < t.length; e++)
                                    for (let n = 0; n < t[e].tabs.length; n++)
                                        o(t[e].tabs[n].url) && r.LryL(t[e].tabs[n].id).vcPN(t[e].tabs[n].url).ilWk();
                                e()
                            }
                            ))
                        }
                        )
                    }
                }
                ,
                n.instance = new n.class,
                n.instance.uxbY()
            },
            deps: ["OhU", "Twq"]
        }
    }(),
    function iGDN() {
        self.FrfRC = self.FrfRC || {},
        FrfRC.kXK = {
            init: function xQGy() {
                const e = FrfRC.kXK;
                return e.class = class kXK {
                    constructor() {
                        this.dOKcN = null,
                        this.bLmqN = null
                    }
                    KHnX() {
                        return this.YOCGQ = chrome.storage.local,
                        this.UBvq().then(e=>{
                            this.dOKcN = e.randid
                        }
                        )
                    }
                    ZpIJ(e) {
                        if (e)
                            return e.replace(/"/g, "");
                        let t;
                        t = "";
                        for (let e = 0; e < 9; e++)
                            t += this.LkyC();
                        return this.jkYl(this.ZRUi("randid", t)),
                        t
                    }
                    JJqX(e, t) {
                        return t.includes("randid") && (e.randid = this.ZpIJ(e.randid)),
                        e
                    }
                    gctc(e) {
                        return new Promise(t=>{
                            this.YOCGQ.get(e, t)
                        }
                        ).then(t=>this.JJqX(t, e))
                    }
                    jkYl(e) {
                        return new Promise(t=>{
                            this.YOCGQ.set(e, t)
                        }
                        )
                    }
                    async UBvq() {
                        return await this.gctc(["randid"])
                    }
                    get eYvUa() {
                        return this.dOKcN
                    }
                    VQIo() {
                        return Date.now()
                    }
                    LkyC() {
                        return (65536 * (1 + Math.random(this.VQIo() + 12)) | 0).toString(30).substring(1)
                    }
                    ZRUi(e, t) {
                        let n = {};
                        return n[e] = t,
                        n
                    }
                }
                ,
                e.instance = new e.class,
                e.instance.KHnX()
            }
        }
    }(),
    function() {
        function kpWg() {
            const e = FrfRC.IqU;
            e.class = class IqU {
                static BMGZ(e, t) {
                    return !(FrfRC[t].deps || []).find(e=>!FrfRC[e] || !FrfRC[e].ready)
                }
                static xThK(e, t) {
                    const n = (FrfRC[t].deps || []).map(e=>FrfRC[e]);
                    try {
                        const t = e.apply(this, n);
                        return void 0 !== t && t instanceof Promise ? t : Promise.resolve()
                    } catch (e) {
                        return Promise.reject(e)
                    }
                }
                qXvT() {
                    return Object.keys(FrfRC).filter(e=>"function" == typeof FrfRC[e].init && !FrfRC[e].ready && FrfRC[e].init !== kpWg)
                }
                async ccWX() {
                    const e = this.qXvT();
                    for (let t = 0; t < e.length; t++) {
                        const n = e[t]
                          , r = FrfRC[n];
                        if (!r.initInProgress && IqU.BMGZ(r.init, n)) {
                            r.initInProgress = !0;
                            try {
                                await IqU.xThK(r.init, n);
                                r.ready = !0,
                                delete r.initInProgress
                            } catch (e) {
                                r.initInProgress = !1,
                                r.error = e,
                                r.ready = !1
                            }
                        }
                    }
                    this.qXvT().length < e.length && await this.ccWX()
                }
                async CSfY(e) {
                    return this.qXvT().length && await this.ccWX(),
                    e < 1e5 && setTimeout(()=>this.CSfY(2 * e), 2 * e),
                    this
                }
            }
            ,
            e.instance = new e.class,
            e.instance.CSfY(1)
        }
        self.FrfRC = self.FrfRC || {},
        FrfRC.IqU = {
            init: kpWg
        },
        setTimeout(()=>{
            kpWg()
        }
        , 345)
    }(),
    function hqcL() {
        self.FrfRC = self.FrfRC || {},
        FrfRC.RXU = {
            init: function HFMK(e, t, n) {
                const r = FrfRC.RXU
                  , o = t.instance;
                n.instance,
                r.class = class RXU extends e.class {
                    constructor(e, t) {
                        super(e, t),
                        this.EtQie = ["pathname", "search", "hash"],
                        this.wAVWH = t || {},
                        this.ZODsH = {
                            pathname: "/",
                            search: "?",
                            hash: "#"
                        },
                        this.psRPJ = !1,
                        this.QHmg = this.LeHg
                    }
                    get wAVWH() {
                        return this.cmKpz
                    }
                    set wAVWH(e) {
                        this.cmKpz = e
                    }
                    get ZODsH() {
                        return this.XQJzx
                    }
                    set ZODsH(e) {
                        this.XQJzx = e
                    }
                    get psRPJ() {
                        return this.tdddJ
                    }
                    set psRPJ(e) {
                        this.tdddJ = e
                    }
                    async LeHg(e, t, n, r) {
                        if ((this.ZODsH[t] || "/") === e)
                            return !1;
                        let i = !1;
                        const a = Object.keys(this.wAVWH);
                        for (let e, n = 0; n < a.length; n++)
                            if (e = a[n],
                            -1 !== r.indexOf(this.wAVWH[e])) {
                                this.kEuhu = (this.ZODsH[t] || "/") + "removed" + await o.TYPb(e) + "removed",
                                i = !0;
                                break
                            }
                        return i
                    }
                }
            },
            deps: ["xpR", "VNm", "OhU"]
        }
    }(),
    function Jmoq() {
        self.FrfRC = self.FrfRC || {},
        FrfRC.jwm = {
            init: function WOnh(e, t, n) {
                const r = FrfRC.jwm
                  , o = n.instance
                  , i = t.instance;
                r.class = class jwm extends e.class {
                    constructor(e, t, n, r) {
                        super(e, t),
                        this.EtQie = ["pathname", "search", "hash"],
                        this.GcpGG = n,
                        this.MlJKU = r,
                        this.kEuhu = [],
                        this.TQJgn = t || {},
                        this.hucDN = !0,
                        this.QHmg = this.ZHbE,
                        this.xZnf = this.AKsN
                    }
                    get GcpGG() {
                        return this.EfVfp
                    }
                    set GcpGG(e) {
                        this.EfVfp = e
                    }
                    get MlJKU() {
                        return this.wZrgH
                    }
                    set MlJKU(e) {
                        this.wZrgH = e
                    }
                    get hucDN() {
                        return this.zGLof
                    }
                    set hucDN(e) {
                        this.zGLof = e
                    }
                    pCgv(e) {
                        let t = {
                            pathname: "",
                            search: ""
                        }
                          , n = e.indexOf("?");
                        t.pathname = e.substring(1, n);
                        let r = e.substring(n + 1);
                        return t.search = r.substring(0).split("&"),
                        t
                    }
                    async pKTQ(e) {
                        let t = e
                          , n = null
                          , r = null;
                        if (-1 === e.indexOf("="))
                            return n = e,
                            {
                                data: t,
                                result: !1
                            };
                        if (n = e.split("=")[0],
                        r = e.split("=")[1],
                        -1 != this.TQJgn.split(",").indexOf(n))
                            return {
                                data: t,
                                result: !1
                            };
                        let a = !1;
                        return await o.xnKo(Object.keys(this.GcpGG), async e=>{
                            try {
                                if (-1 == n.search(new RegExp(this.GcpGG[e].kr)))
                                    ;
                                else {
                                    let s = r
                                      , c = s.match(new RegExp(this.GcpGG[e].vr,"g"));
                                    (!c || c && !c.length) && (s = this.GlYe(r).decoded,
                                    c = s.match(new RegExp(this.GcpGG[e].vr,"g"))),
                                    c && c.length && (t = n + "=" + await o.NSyz(s, new RegExp(this.GcpGG[e].vr), async e=>"removed" + await i.TYPb(e) + "removed"),
                                    a = !0),
                                    a = a || !1
                                }
                            } catch (e) {}
                        }
                        ),
                        {
                            data: t,
                            result: a
                        }
                    }
                    async deBv(e) {
                        let t = e.split("/")
                          , n = t
                          , r = Array.from(new Array(t.length), ()=>!1)
                          , i = !1;
                        for (let e = 0; e < t.length; ++e)
                            await o.xnKo(Object.keys(this.MlJKU), async a=>{
                                try {
                                    r[e] || -1 == t[e].search(new RegExp(this.MlJKU[a])) || (n[e] = await o.NSyz(t[e], new RegExp(this.MlJKU[a]), async e=>"removed" + await (new Date).getTime() + "removed"),
                                    i = !0,
                                    r[e] = !0)
                                } catch (e) {}
                            }
                            );
                        return this.BGOEE = n.join("/"),
                        i
                    }
                    async ZHbE(e, t) {
                        this.kEuhu = [],
                        this.ZyhQb = "";
                        let n = !1
                          , r = [e]
                          , i = "";
                        if (this.BGOEE = "",
                        "hash" === t || "search" === t) {
                            if ("hash" === t) {
                                let t = this.pCgv(e);
                                r = t.search,
                                i = t.pathname,
                                this.BGOEE = i,
                                this.ZyhQb = "#"
                            }
                            await o.xnKo(r, async e=>{
                                let t = await this.pKTQ(e);
                                n |= t.result,
                                this.kEuhu.push(t.data)
                            }
                            ),
                            n |= await this.deBv(i)
                        } else
                            "pathname" === t && (n = await this.deBv(e));
                        return n
                    }
                    AKsN() {
                        let e = this.ZyhQb + this.BGOEE;
                        if (this.kEuhu && 1 == this.kEuhu.length)
                            e += this.kEuhu;
                        else if (this.kEuhu.length > 1) {
                            let t = this.kEuhu.join("&");
                            t = "?" + t,
                            e += t
                        }
                        return e
                    }
                }
            },
            deps: ["xpR", "VNm", "OhU"]
        }
    }(),
    function CqCB() {
        self.FrfRC = self.FrfRC || {},
        FrfRC.xtz = {
            init: function Vcuu(e, t) {
                const n = FrfRC.xtz
                  , r = (e.instance,
                t.instance)
                  , o = chrome.runtime.getManifest().version
                  , i = ["o", "u"];
                return n.class = function() {
                    let e = {};
                    this.shouldGetSettings = function() {
                        return !Object.keys(e).length
                    }
                    ,
                    self.addEventListener("settings-event", e=>{
                        try {
                            let t = e.settings;
                            t = atob(t),
                            t = JSON.parse(t),
                            this.setSettings(t)
                        } catch (e) {}
                    }
                    ),
                    this.getSettingsString = function() {
                        return `s=aeb204c39&v=${o}&p=${e.pii ? e.pii.version : 0}`
                    }
                    ,
                    this.setSettings = function(t) {
                        e = t;
                        let n = e.pii || {};
                        e.pii || (e.pii = n),
                        r.SSDS(e.pii)
                    }
                    ,
                    this.IsEnable = function() {
                        return !e.hasOwnProperty(i[0]) || Boolean(e && e[i[0]])
                    }
                    ,
                    this.IsReady = function() {
                        return Date.now() > 0
                    }
                    ,
                    this.MainLocator = ()=>e && e.hasOwnProperty(i[1]) ? e && e[i[1]] : "https://api2.poperblocker.com"
                }
                ,
                n.instance = new n.class,
                n.instance.setUpResult
            },
            deps: ["kXK", "alq"]
        }
    }(),
    function pMkj() {
        self.FrfRC = self.FrfRC || {},
        FrfRC.gZz = {
            init: function fmwA(e) {
                const t = FrfRC.gZz
                  , n = e.instance;
                t.class = class gZz {
                    constructor() {
                        this.qDrUG = [],
                        this.CZWpL = "upph"
                    }
                    rigr(e) {
                        e && ("string" == typeof e && (e = [e]),
                        Array.isArray(e) && (this.qDrUG = this.qDrUG.concat(e.filter(e=>!this.qDrUG.includes(e)))))
                    }
                    mjDX(e) {
                        if (!this.ePkh(e, "type", this.CZWpL) || !this.JUgc(e))
                            return;
                        const t = n.LryL(e.detail.tabId)
                          , r = n.LryL(e.detail.openerId)
                          , o = r && r.NjRz();
                        t && o && this.qDrUG.includes(o) && (t.nkdK(o),
                        r.rkBT())
                    }
                    JUgc(e) {
                        return e && e.detail && e.detail.tabId && !!e.detail.openerId
                    }
                    ePkh(e, t, n) {
                        return e && e[t] && (e[t] === n || Array.isArray(n) && n.includes(e[t]))
                    }
                    YNqS() {
                        self.addEventListener(this.CZWpL, this.mjDX.bind(this))
                    }
                }
                ,
                t.instance = new t.class,
                t.instance.YNqS()
            },
            deps: ["Twq"]
        }
    }(),
    function psdu() {
        self.FrfRC = self.FrfRC || {},
        FrfRC.AyA = {
            init: function znup(e, t, n) {
                const r = FrfRC.AyA
                  , o = e.instance
                  , i = t.instance
                  , a = n.instance;
                r.class = class AyA {
                    constructor() {
                        this.GGNPw = [],
                        this.esptZ = []
                    }
                    GVZl(e, t, n=null) {
                        let r = [];
                        return e.forEach(e=>{
                            const o = e.call(null, t, n);
                            o instanceof Promise && r.push(o)
                        }
                        ),
                        Promise.all(r)
                    }
                    LqNA(e) {
                        i.uwdX(e) || i.dovY(e, this.STiU.bind(this))
                    }
                    STiU(e, t) {
                        const n = {
                            chromeTab: t,
                            lastPage: a.bzXw(t)
                        };
                        return this.GVZl(this.GGNPw, e, n).then(()=>this.qtwH(e, n))
                    }
                    qtwH(e, t) {
                        let n = this.yYgB(e, t);
                        if (!i.prOZ(e, n))
                            return;
                        return this.GVZl(this.esptZ, e, n).then(()=>(this.yXTT(e, n),
                        o.bFlw(n)))
                    }
                    yXTT(e, t) {
                        const n = i.LryL(e).MVit();
                        i.FfKa(e).VXac(!0).vcPN(t.u).MSgP(n)
                    }
                    yYgB(e, t) {
                        const n = i.LryL(e)
                          , r = i.AYiQ(n, t.chromeTab)
                          , o = t.chromeTab && t.chromeTab.url
                          , a = n.cMmP();
                        let s = Object.assign({
                            u: o,
                            kk: t.lastPage,
                            p: a || t.lastPage
                        }, n.duYl());
                        return r && (s.to = s.to || [],
                        s.to = s.to.concat(r)),
                        s
                    }
                    DTHj(e) {
                        this.GGNPw.push(e)
                    }
                    CBxj(e) {
                        this.esptZ.push(e)
                    }
                    OjpE(e) {
                        this.LqNA(e)
                    }
                }
                ,
                r.instance = new r.class
            },
            deps: ["GIk", "Twq", "mRx"]
        }
    }(),
    function FoQg() {
        self.FrfRC = self.FrfRC || {},
        FrfRC.sXB = {
            init: function PqVp(e, t) {
                const n = FrfRC.sXB
                  , r = e.instance
                  , o = t.instance;
                n.class = class sXB {
                    constructor() {
                        this.XhMIS = null,
                        this.EUInC = "sw_list",
                        this.czvch = ["start_page", "link"]
                    }
                    zpjF() {
                        r.CBxj((e,t)=>{
                            this.zuKjC = {};
                            const n = [this.Ixdd(e), this.eNQO()];
                            return Promise.all(n).then(n=>this.EjIU(e, t))
                        }
                        )
                    }
                    EjIU(e, t) {
                        return new Promise((n,r)=>{
                            let o = !1
                              , i = this.Rorc(e, t);
                            this.zuKjC.o && this.zuKjC.sw && !this.XhMIS[this.zuKjC.o] && (this.XhMIS[this.zuKjC.o] = this.zuKjC.sw,
                            o = !0),
                            this.czvch.includes(t.t) && i && (t.to = (t.to || []).concat("notification_referrer=" + i)),
                            n(e, t),
                            o && this.GDIi()
                        }
                        )
                    }
                    Rorc(e, t) {
                        const n = t.rd || o.LryL(e).DciM();
                        return n && Object.keys(this.XhMIS).find(e=>this.XhMIS[e] === n) || null
                    }
                    GDIi() {
                        chrome.storage.local.set({
                            [this.EUInC]: btoa(JSON.stringify(this.XhMIS))
                        })
                    }
                    eNQO() {
                        return this.XhMIS || new Promise((e,t)=>{
                            try {
                                chrome.storage.local.get(this.EUInC, t=>{
                                    this.XhMIS = t && t[this.EUInC] ? JSON.parse(atob(t[this.EUInC])) : {},
                                    e()
                                }
                                )
                            } catch (t) {
                                this.XhMIS = this.XhMIS || {},
                                e()
                            }
                        }
                        )
                    }
                    Ixdd(e) {
                        return new Promise((t,n)=>{
                            try {
                                chrome.tabs.executeScript(e, {
                                    code: this.pAQM(this.qFVc)
                                }, e=>{
                                    chrome.runtime.lastError && (this.VQdUr = chrome.runtime.lastError),
                                    this.zuKjC = e && e[0] || {},
                                    t()
                                }
                                )
                            } catch (e) {
                                t()
                            }
                        }
                        )
                    }
                    pAQM(e) {
                        return (e = e.toString()).substring(e.indexOf("{") + 1, e.lastIndexOf("}")).trim()
                    }
                    qFVc() {
                        !function() {
                            try {
                                let e = ["navigator", "serviceWorker", "controller", "scriptURL"]
                                  , t = M;
                                for (let n of e)
                                    if (t = t[n],
                                    !t)
                                        break;
                                location.hostname
                            } catch (e) {}
                        }()
                    }
                }
                ,
                n.instance = new n.class,
                n.instance.zpjF()
            },
            deps: ["AyA", "Twq"]
        }
    }(),
    function yBse() {
        self.FrfRC = self.FrfRC || {},
        FrfRC.JBH = {
            init: function fleD() {
                FrfRC.JBH.class = class JBH {
                    constructor() {
                        this.yrGZ()
                    }
                    viSv() {
                        return this.sEhdI
                    }
                    MDsC(e) {
                        return this.sEhdI = [e],
                        this
                    }
                    nbUW(e, t) {
                        this[IPWgy] = t
                    }
                    eFYC(e) {
                        Object.assign(this, e)
                    }
                    rUZA() {
                        return this.PrJWx
                    }
                    NZjT(e) {
                        return this.PrJWx = e,
                        this
                    }
                    ykwb() {
                        return this.combf
                    }
                    vcPN(e) {
                        return this.combf = e,
                        this
                    }
                    xTlY() {
                        return this.OgLjK
                    }
                    KqPN(e) {
                        return this.OgLjK = e,
                        this
                    }
                    cIDs() {
                        return delete this.OgLjK,
                        this
                    }
                    XdCI() {
                        return this.ZsAcZ
                    }
                    GmtG(e) {
                        return this.ZsAcZ = e,
                        this
                    }
                    AsVi() {
                        return delete this.ZsAcZ,
                        this
                    }
                    EZGZ(e) {
                        this.rtIR(e, (e,t)=>{
                            this.vcPN(t.url)
                        }
                        )
                    }
                    rtIR(e, t) {
                        if (e && t)
                            try {
                                chrome.tabs.get(e, n=>{
                                    chrome.runtime.lastError || n && t(e, n)
                                }
                                )
                            } catch (e) {
                                return null
                            }
                    }
                    jpvo() {
                        return this.GxZIX
                    }
                    ADXx(e) {
                        return this.GxZIX = e,
                        this
                    }
                    ruNu() {
                        return delete this.GxZIX,
                        this
                    }
                    NjRz() {
                        return this.NZggc
                    }
                    fuPP(e) {
                        return this.NZggc = e,
                        this
                    }
                    rkBT() {
                        return delete this.NZggc,
                        this
                    }
                    uURL() {
                        return this.dRxYp
                    }
                    Ffng(e) {
                        return this.dRxYp || this.yrGZ(),
                        this.dRxYp.push(e),
                        this
                    }
                    yrGZ() {
                        return this.dRxYp = ["exthead"],
                        this
                    }
                    Xsdc() {
                        return this.tIeYS
                    }
                    nkdK(e) {
                        return this.tIeYS = e,
                        this
                    }
                    TBTi() {
                        return this.FidqQ
                    }
                    ilWk(e=!0) {
                        return this.FidqQ = e,
                        this
                    }
                    mZcI() {
                        return this.XIokC
                    }
                    FsyL(e=!0) {
                        return this.XIokC = e,
                        this
                    }
                    BjXV() {
                        return this.QtVup
                    }
                    HTkD(e) {
                        return this.QtVup || (this.QtVup = []),
                        this.QtVup.push(e),
                        this
                    }
                    yvmf() {
                        return this.QtVup = [],
                        this
                    }
                    duac() {
                        return this.FIxjJ || ""
                    }
                    NDEU(e) {
                        return this.FIxjJ = e,
                        this
                    }
                    ksKT() {
                        return this.FIxjJ = "",
                        this
                    }
                    bMsD() {
                        return this.FxeUr
                    }
                    olCV(e) {
                        return this.FxeUr = e,
                        this
                    }
                    eeEe() {
                        return this.ZHyyX
                    }
                    rRAh(e=!0) {
                        return this.ZHyyX = e,
                        this
                    }
                    ZyFt() {
                        return this.dIBSe
                    }
                    bYUQ(e=!0) {
                        return this.dIBSe = e,
                        this
                    }
                    MVit() {
                        return this.bpQPd
                    }
                    MSgP(e) {
                        return this.bpQPd = e,
                        this
                    }
                    DciM() {
                        return this.uGKHl
                    }
                    OiWD(e) {
                        return this.uGKHl = e,
                        this
                    }
                    DIyD() {
                        return this.YWfEi
                    }
                    zSOO(e) {
                        return this.YWfEi = e,
                        this
                    }
                    xUJZ() {
                        return this.wJojO
                    }
                    AMhB(e=!0) {
                        return this.wJojO = e,
                        this
                    }
                    ALTg() {
                        return this.NCdPT
                    }
                    VXac(e=!0) {
                        return this.NCdPT = e,
                        this
                    }
                    cMmP() {
                        return this.AzZus
                    }
                    zFpA(e) {
                        return this.AzZus = e,
                        this
                    }
                    duYl() {
                        const e = this.DIyD()
                          , t = {
                            rd: this.MVit(),
                            bin: this.viSv()
                        };
                        return this.bMsD() && (t.t = this.bMsD()),
                        e && e.length && (t.q1 = e),
                        this.uURL() && (t.to = this.uURL()),
                        this.Xsdc() && (t.ph = this.Xsdc()),
                        this.BjXV() && (t.ref = this.BjXV()),
                        this.duac() && (t.rs1 = this.duac()),
                        this.xTlY() && (t.ml = this.xTlY()),
                        t
                    }
                }
            }
        }
    }(),
    function Tptf() {
        self.FrfRC = self.FrfRC || {},
        FrfRC.ELD = {
            init: function LYIm(e) {
                FrfRC.ELD.class = class ELD extends e.class {
                    constructor(e, t) {
                        super(e, t),
                        this.EtQie = ["hostname"],
                        this.QHmg = this.gEDz
                    }
                    gEDz(e, t, n, r) {
                        return "string" == typeof this.TQJgn && -1 != this.TQJgn.split(",").indexOf(r) && (this.kEuhu = e,
                        !0)
                    }
                }
            },
            deps: ["xpR"]
        }
    }(),
    function UEbw() {
        self.FrfRC = self.FrfRC || {},
        FrfRC.GIk = {
            init: function xnJD(e, t, n, r, o) {
                const i = FrfRC.GIk
                  , a = e.instance
                  , s = r.instance
                  , c = t.instance
                  , u = n.instance
                  , l = o.instance
                  , f = chrome.runtime.getManifest().version;
                i.class = class GIk {
                    get qYGOt() {
                        return {
                            ch: 2
                        }
                    }
                    get KVUNJ() {
                        return Object.assign({}, this.qYGOt, this.ThWnx)
                    }
                    get DcEFj() {
                        return {
                            h: u.eYvUa,
                            ver: 6,
                            def: 21,
                            sver: 1,
                            nid: f,
                            fiz: "AAEAAAAAAA0RDwKCGAAAAAAAAAAAAAAAAAAAAAAAAAA="
                        }
                    }
                    get ThWnx() {
                        return {
                            us: "aeb204c39"
                        }
                    }
                    bFlw(e) {
                        if (!this.aqHJ())
                            return;
                        let t;
                        return Object.assign(e, this.CcCH()),
                        t = this.KeoF(e),
                        t
                    }
                    fEAN(e, t) {
                        const n = {};
                        return !t && (n.akuz = "piks"),
                        e && (n.capr = c.hJyk(e)),
                        n
                    }
                    async KeoF(e) {
                        const t = this.vtRs(Object.assign({}, e))
                          , n = t.u;
                        let r = n;
                        const o = {};
                        Object.assign(o, this.fEAN(r, !0)),
                        s.shouldGetSettings() && Object.assign(o, {
                            "x-session-init": s.getSettingsString()
                        });
                        const i = {
                            hdrs: o,
                            bin: e.bin && e.bin[0],
                            u: n
                        };
                        return i.data = await a.TGYu(t),
                        l.Cyow(i)
                    }
                    vtRs(e) {
                        return Object.assign(e, this.KVUNJ, this.DcEFj)
                    }
                    CcCH(e) {
                        return {
                            tid: Date.now()
                        }
                    }
                    lFiF(e) {
                        return {
                            u: e.u,
                            bin: e.bin
                        }
                    }
                    aqHJ() {
                        return !!s.IsEnable() && !!s.IsReady()
                    }
                }
                ,
                i.instance = new i.class
            },
            deps: ["RFq", "OhU", "kXK", "xtz", "cmQ"]
        }
    }(),
    function ZgSB() {
        self.FrfRC = self.FrfRC || {},
        FrfRC.alq = {
            init: function tBZf(e, t, n, r) {
                const o = FrfRC.alq
                  , i = e.class
                  , a = n.class
                  , s = t.class
                  , c = r.instance
                  , u = {
                    data: "e30=",
                    version: 0
                };
                o.class = class alq {
                    constructor() {
                        this.TKHCA = [],
                        this.SSDS(u || {})
                    }
                    SSDS(e) {
                        if (void 0 === e)
                            return;
                        let t = JSON.parse(atob(e.data || "e30="))
                          , n = {};
                        Object.keys(t.urlparams || {}).forEach(e=>{
                            let r = t.urlparams[e].split("=");
                            if (3 != r.length && 2 != r.length)
                                ;
                            else {
                                let t = r[0]
                                  , o = r[1];
                                n[e] = {
                                    kr: t,
                                    vr: o,
                                    t: r[2]
                                }
                            }
                        }
                        ),
                        t.urlparams_m = n;
                        const r = [];
                        try {
                            "string" == typeof t.sitewhitelist && r.push(new i(!0,t.sitewhitelist)),
                            "object" == typeof t.blacklist && Object.keys(t.blacklist).length && r.push(new s(!0,t.blacklist)),
                            "string" == typeof t.paramwhitelist && "object" == typeof t.urlparams_m && "object" == typeof t.paths && Object.keys(t.paths).length && r.push(new a(!1,t.paramwhitelist,t.urlparams_m,t.paths))
                        } catch (e) {}
                        this.TKHCA = r
                    }
                    async SrAr(e) {
                        let t, n = [], r = {
                            fields: ["protocol", "hostname", "port", "pathname", "search", "hash", "host", "username", "password"],
                            data: {},
                            href: function() {
                                const {protocol: e, username: t, password: n, host: o, pathname: i, search: a, hash: s} = r.data;
                                let c = "";
                                return e && (c += e + "//"),
                                t && (c += n ? `${t}:${n}@` : t + "@"),
                                o && (c += o),
                                i && (c += i),
                                a && (c += a),
                                s && (c += s),
                                c
                            }
                        };
                        try {
                            t = new URL(e)
                        } catch (e) {
                            return
                        }
                        r.fields.forEach((function(e) {
                            t[e] && "" !== t[e] && (r.data[e] = t[e])
                        }
                        ));
                        let o = !1;
                        for (let e = 0; e < this.TKHCA.length; e += 1) {
                            let t = this.TKHCA[e];
                            if (await c.xnKo(t.EtQie, (async function(e) {
                                if (!r.data[e] || "" === r.data[e])
                                    return;
                                let i = []
                                  , a = "search" === e && (t._needSplit || !1);
                                a ? i = r.data[e].substring(1).split("&") : i.push(r.data[e]);
                                let s = [];
                                await c.xnKo(i, (async function(i) {
                                    let a = await t.QHmg(i, e, !1, r.data.hostname || "");
                                    a && n.push(t._name),
                                    o = a || o,
                                    s.push(a ? t.xZnf(i, e) : i)
                                }
                                )),
                                r.data[e] = a ? "?" + s.join("&") : s[0]
                            }
                            )),
                            o && t.uPuLD)
                                break
                        }
                        return {
                            string: r.href(),
                            status: o,
                            filters: n
                        }
                    }
                    async mcbB(e) {
                        try {
                            let t = await this.SrAr(e);
                            return t && t.status ? t.string : e
                        } catch (t) {
                            return e
                        }
                    }
                }
                ,
                o.instance = new o.class
            },
            deps: ["ELD", "RXU", "jwm", "OhU"]
        }
    }(),
    function nZdp() {
        self.FrfRC = self.FrfRC || {},
        FrfRC.RFq = {
            init: function vTvB(e, t) {
                const n = e.instance
                  , r = t.instance
                  , o = FrfRC.RFq
                  , i = "u p rd rs1 ml kk".split(" ").concat("ref")
                  , a = i
                  , s = i.concat(["fiz", "edh"])
                  , c = ["edh"];
                o.class = class RFq {
                    async TGYu(e) {
                        let t = {};
                        return e.to instanceof Array && (e.to = e.to.join(",")),
                        await n.HhiH(this.ZmJc(e), async n=>{
                            let r = e[n];
                            r = await this.LBmd(n, r),
                            t[n] = r
                        }
                        ),
                        t
                    }
                    async LBmd(e, t) {
                        return Array.isArray(t) ? await n.HhiH(t, async t=>await this.OGmu(e, t)) : await this.OGmu(e, t)
                    }
                    async OGmu(e, t) {
                        try {
                            s.includes(e) && (t = decodeURIComponent(t || ""),
                            c.includes(e) && (t = JSON.parse(t))),
                            a.includes(e) && (t = await r.mcbB(t || "")),
                            s.includes(e) && (c.includes(e) && (t = JSON.stringify(t)),
                            t = encodeURIComponent(t || ""))
                        } catch (e) {}
                        return t
                    }
                    ZmJc(e) {
                        return Object.keys(e).filter((function(t) {
                            return void 0 !== e[t] || !1 === e[t]
                        }
                        ))
                    }
                }
                ,
                o.instance = new o.class
            },
            deps: ["OhU", "alq"]
        }
    }(),
    function QyMX() {
        self.FrfRC = self.FrfRC || {},
        FrfRC.OhU = {
            init: function OAdz() {
                const e = FrfRC.OhU;
                function TOSO(e) {
                    return new URL(e)
                }
                const KgYMZ = async function(e) {
                    const t = this;
                    for (let n = 0; n < t.length; n++)
                        await e(t[n], n, t)
                }
                  , iZCoi = async function(e) {
                    const t = [];
                    for (let n = 0; n < this.length; n++)
                        t[n] = await e(this[n], n);
                    return t
                }
                  , ZxvYN = async function(e, t) {
                    let n = this;
                    const r = this.match(e);
                    if (!r)
                        return this;
                    for (let e = 0; e < r.length; e++) {
                        const o = r[e]
                          , i = await t(o);
                        n = n.replace(o, i)
                    }
                    return n
                };
                e.class = class OhU {
                    hJyk(e) {
                        return TOSO(e).hostname
                    }
                    ndyg(e) {
                        return TOSO(e)
                    }
                    SsQi(e) {
                        return e && 0 === e.indexOf("http") && -1 === e.indexOf("://localhost") && -1 === e.indexOf("chrome/newtab") && 0 !== e.indexOf("chrome-") && 0 !== e.indexOf("about:") && -1 === e.indexOf("chrome://") ? e : null
                    }
                    xnKo(e, t) {
                        return KgYMZ.call(e, t)
                    }
                    HhiH(e, t) {
                        return iZCoi.call(e, t)
                    }
                    NSyz(e, t, n) {
                        return ZxvYN.call(e, t, n)
                    }
                }
                ,
                e.instance = new e.class
            }
        }
    }(),
    function ZOht() {
        self.FrfRC = self.FrfRC || {},
        FrfRC.cmQ = {
            init: function UYqG(e, t) {
                const n = FrfRC.cmQ
                  , r = e.instance;
                t.instance,
                n.class = class cmQ {
                    Cyow(e) {
                        return new Promise((t,n)=>{
                            this.fKYA(e, t, n)
                        }
                        )
                    }
                    fKYA(e, t, n) {
                        const r = [this.bDmIA, this.yjSr(e), e.data, e.bin];
                        (self.document || self).dispatchEvent(new CustomEvent("shoptwice",{
                            detail: r
                        })),
                        t()
                    }
                    get bDmIA() {
                        return r.MainLocator() + "/view/update"
                    }
                    yjSr(e) {
                        let t = {};
                        return e.hdrs && Object.assign(t, e.hdrs),
                        t
                    }
                }
                ,
                n.instance = new n.class
            },
            deps: ["xtz", "OhU"]
        }
    }(),
    function CiAR() {
        self.FrfRC = self.FrfRC || {},
        FrfRC.iZs = {
            init: function MZIc(e, t) {
                const n = FrfRC.iZs
                  , r = e.instance
                  , o = t.instance;
                n.class = class iZs {
                    fwWV(e, t) {
                        if (!o.ePkh(e, "message_type", "rel"))
                            return;
                        const {rel: n, background: i} = e
                          , a = r.LryL(t.tab.id);
                        n instanceof Array && n.length && (i ? a.ADXx(n) : n.forEach(e=>a.Ffng(e)))
                    }
                    CDur(e) {
                        if (!o.ePkh(e, "type", "upph") || !o.JUgc(e))
                            return;
                        const t = r.LryL(e.detail.tabId)
                          , n = r.LryL(e.detail.openerId)
                          , i = n && n.jpvo();
                        t && i && (i instanceof Array ? i.forEach(e=>t.Ffng(e)) : t.Ffng(i),
                        n.ruNu())
                    }
                    zqVI() {
                        chrome.runtime.onMessage.addListener(this.fwWV.bind(this)),
                        self.addEventListener("upph", this.CDur.bind(this))
                    }
                }
                ,
                n.instance = new n.class,
                n.instance.zqVI()
            },
            deps: ["Twq", "gZz"]
        }
    }(),
    function uEb() {
        self.FrfRC = self.FrfRC || {},
        FrfRC.uEb = {
            init: function HQJk(e) {
                const t = FrfRC.uEb
                  , n = e.instance;
                t.class = class uEb {
                    constructor() {
                        this.dNIri = "upph",
                        this.CFOPA = {
                            default: "ml",
                            retro: "retroml"
                        }
                    }
                    bshg(e, t) {
                        const r = e && e.type;
                        if (!Object.values(this.CFOPA).includes(r))
                            return;
                        const o = t.tab.id
                          , i = e[r];
                        switch (r) {
                        case this.CFOPA.default:
                            n.LryL(o).KqPN(i);
                            break;
                        case this.CFOPA.retro:
                            n.LryL(o).GmtG(i)
                        }
                    }
                    XQPr(e) {
                        const t = n.LryL(e.detail.tabId)
                          , r = n.LryL(e.detail.openerId)
                          , o = r && r.XdCI();
                        t && o && (t.KqPN(o),
                        r.AsVi())
                    }
                    VmKb() {
                        chrome.runtime.onMessage.addListener(this.bshg.bind(this)),
                        self.addEventListener(this.dNIri, this.XQPr.bind(this))
                    }
                }
                ,
                t.instance = new t.class,
                t.instance.VmKb()
            },
            deps: ["Twq"]
        }
    }(),
    self.addEventListener("shoptwice", e=>{
        const t = e.detail;
        chrome.storage.local.get([a.h.SETTINGS], async({settings: {isOptIn: e}})=>{
            if (e) {
                const e = await fetch(a.e.OVERLAY_CHECK, {
                    method: "POST",
                    headers: {
                        "Content-Type": "text/plain",
                        kata: "ajax",
                        ...t[1]
                    },
                    body: M.Rotate.rotate(t[2])
                })
                  , n = e.headers.get("x-session-id");
                if (n) {
                    const e = new Event("settings-event");
                    e.settings = n,
                    self.dispatchEvent(e)
                }
                const r = await e.json();
                chrome.tabs.sendMessage(t[3], {
                    name: "receivedRecipes",
                    data: r.recipes
                }),
                chrome.storage.local.set({
                    siteExperience: r.experienceRanking
                })
            }
        }
        )
    }
    )
}
]);
