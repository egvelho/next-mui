"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typographyStyles = void 0;
const styles_1 = require("@material-ui/core/styles");
exports.typographyStyles = (0, styles_1.makeStyles)((theme) => ({
    "@global": {
        "@font-face": {
            fontFamily: '"Roboto"',
            fontStyle: "italic",
            fontDisplay: "swap",
            fontWeight: "900",
            src: `local("Roboto Black italic"), 
         local("Roboto-Blackitalic"), 
         url("./roboto-latin-900italic.woff2") format("woff2"), 
         url("./roboto-latin-900italic.woff") format("woff")`,
        },
        ".mi": {
            fontFamily: '"Material Icons"',
            fontWeight: "normal",
            fontStyle: "normal",
            fontSize: "24px",
            display: "inline-block",
            lineHeight: "1",
            textTransform: "none",
            letterSpacing: "normal",
            wordWrap: "normal",
            whiteSpace: "nowrap",
            direction: "ltr",
            webkitFontSmoothing: "antialiased",
            textRendering: "optimizeLegibility",
            mozOsxFontSmoothing: "grayscale",
            fontFeatureSettings: '"liga"',
        },
        ".mi-3d-rotation:before": {
            content: '"\\\\e84d"',
        },
        ".mi-ac-unit:before": {
            content: '"\\\\eb3b"',
        },
        ".mi-access-alarm:before": {
            content: '"\\\\e190"',
        },
        ".mi-access-alarms:before": {
            content: '"\\\\e191"',
        },
        ".mi-access-time:before": {
            content: '"\\\\e192"',
        },
        ".mi-accessibility:before": {
            content: '"\\\\e84e"',
        },
        ".mi-accessible:before": {
            content: '"\\\\e914"',
        },
        ".mi-account-balance:before": {
            content: '"\\\\e84f"',
        },
        ".mi-account-balance-wallet:before": {
            content: '"\\\\e850"',
        },
        ".mi-account-box:before": {
            content: '"\\\\e851"',
        },
        ".mi-account-circle:before": {
            content: '"\\\\e853"',
        },
        ".mi-adb:before": {
            content: '"\\\\e60e"',
        },
        ".mi-add:before": {
            content: '"\\\\e145"',
        },
        ".mi-add-a-photo:before": {
            content: '"\\\\e439"',
        },
        ".mi-add-alarm:before": {
            content: '"\\\\e193"',
        },
        ".mi-add-alert:before": {
            content: '"\\\\e003"',
        },
        ".mi-add-box:before": {
            content: '"\\\\e146"',
        },
        ".mi-add-circle:before": {
            content: '"\\\\e147"',
        },
        ".mi-add-circle-outline:before": {
            content: '"\\\\e148"',
        },
        ".mi-add-location:before": {
            content: '"\\\\e567"',
        },
        ".mi-add-shopping-cart:before": {
            content: '"\\\\e854"',
        },
        ".mi-add-to-photos:before": {
            content: '"\\\\e39d"',
        },
        ".mi-add-to-queue:before": {
            content: '"\\\\e05c"',
        },
        ".mi-adjust:before": {
            content: '"\\\\e39e"',
        },
        ".mi-airline-seat-flat:before": {
            content: '"\\\\e630"',
        },
        ".mi-airline-seat-flat-angled:before": {
            content: '"\\\\e631"',
        },
        ".mi-airline-seat-individual-suite:before": {
            content: '"\\\\e632"',
        },
        ".mi-airline-seat-legroom-extra:before": {
            content: '"\\\\e633"',
        },
        ".mi-airline-seat-legroom-normal:before": {
            content: '"\\\\e634"',
        },
        ".mi-airline-seat-legroom-reduced:before": {
            content: '"\\\\e635"',
        },
        ".mi-airline-seat-recline-extra:before": {
            content: '"\\\\e636"',
        },
        ".mi-airline-seat-recline-normal:before": {
            content: '"\\\\e637"',
        },
        ".mi-airplanemode-active:before": {
            content: '"\\\\e195"',
        },
        ".mi-airplanemode-inactive:before": {
            content: '"\\\\e194"',
        },
        ".mi-airplay:before": {
            content: '"\\\\e055"',
        },
        ".mi-airport-shuttle:before": {
            content: '"\\\\eb3c"',
        },
        ".mi-alarm:before": {
            content: '"\\\\e855"',
        },
        ".mi-alarm-add:before": {
            content: '"\\\\e856"',
        },
        ".mi-alarm-off:before": {
            content: '"\\\\e857"',
        },
        ".mi-alarm-on:before": {
            content: '"\\\\e858"',
        },
        ".mi-album:before": {
            content: '"\\\\e019"',
        },
        ".mi-all-inclusive:before": {
            content: '"\\\\eb3d"',
        },
        ".mi-all-out:before": {
            content: '"\\\\e90b"',
        },
        ".mi-android:before": {
            content: '"\\\\e859"',
        },
        ".mi-announcement:before": {
            content: '"\\\\e85a"',
        },
        ".mi-apps:before": {
            content: '"\\\\e5c3"',
        },
        ".mi-archive:before": {
            content: '"\\\\e149"',
        },
        ".mi-arrow-back:before": {
            content: '"\\\\e5c4"',
        },
        ".mi-arrow-downward:before": {
            content: '"\\\\e5db"',
        },
        ".mi-arrow-drop-down:before": {
            content: '"\\\\e5c5"',
        },
        ".mi-arrow-drop-down-circle:before": {
            content: '"\\\\e5c6"',
        },
        ".mi-arrow-drop-up:before": {
            content: '"\\\\e5c7"',
        },
        ".mi-arrow-forward:before": {
            content: '"\\\\e5c8"',
        },
        ".mi-arrow-upward:before": {
            content: '"\\\\e5d8"',
        },
        ".mi-art-track:before": {
            content: '"\\\\e060"',
        },
        ".mi-aspect-ratio:before": {
            content: '"\\\\e85b"',
        },
        ".mi-assessment:before": {
            content: '"\\\\e85c"',
        },
        ".mi-assignment:before": {
            content: '"\\\\e85d"',
        },
        ".mi-assignment-ind:before": {
            content: '"\\\\e85e"',
        },
        ".mi-assignment-late:before": {
            content: '"\\\\e85f"',
        },
        ".mi-assignment-return:before": {
            content: '"\\\\e860"',
        },
        ".mi-assignment-returned:before": {
            content: '"\\\\e861"',
        },
        ".mi-assignment-turned-in:before": {
            content: '"\\\\e862"',
        },
        ".mi-assistant:before": {
            content: '"\\\\e39f"',
        },
        ".mi-assistant-photo:before": {
            content: '"\\\\e3a0"',
        },
        ".mi-attach-file:before": {
            content: '"\\\\e226"',
        },
        ".mi-attach-money:before": {
            content: '"\\\\e227"',
        },
        ".mi-attachment:before": {
            content: '"\\\\e2bc"',
        },
        ".mi-audiotrack:before": {
            content: '"\\\\e3a1"',
        },
        ".mi-autorenew:before": {
            content: '"\\\\e863"',
        },
        ".mi-av-timer:before": {
            content: '"\\\\e01b"',
        },
        ".mi-backspace:before": {
            content: '"\\\\e14a"',
        },
        ".mi-backup:before": {
            content: '"\\\\e864"',
        },
        ".mi-battery-alert:before": {
            content: '"\\\\e19c"',
        },
        ".mi-battery-charging-full:before": {
            content: '"\\\\e1a3"',
        },
        ".mi-battery-full:before": {
            content: '"\\\\e1a4"',
        },
        ".mi-battery-std:before": {
            content: '"\\\\e1a5"',
        },
        ".mi-battery-unknown:before": {
            content: '"\\\\e1a6"',
        },
        ".mi-beach-access:before": {
            content: '"\\\\eb3e"',
        },
        ".mi-beenhere:before": {
            content: '"\\\\e52d"',
        },
        ".mi-block:before": {
            content: '"\\\\e14b"',
        },
        ".mi-bluetooth:before": {
            content: '"\\\\e1a7"',
        },
        ".mi-bluetooth-audio:before": {
            content: '"\\\\e60f"',
        },
        ".mi-bluetooth-connected:before": {
            content: '"\\\\e1a8"',
        },
        ".mi-bluetooth-disabled:before": {
            content: '"\\\\e1a9"',
        },
        ".mi-bluetooth-searching:before": {
            content: '"\\\\e1aa"',
        },
        ".mi-blur-circular:before": {
            content: '"\\\\e3a2"',
        },
        ".mi-blur-linear:before": {
            content: '"\\\\e3a3"',
        },
        ".mi-blur-off:before": {
            content: '"\\\\e3a4"',
        },
        ".mi-blur-on:before": {
            content: '"\\\\e3a5"',
        },
        ".mi-book:before": {
            content: '"\\\\e865"',
        },
        ".mi-bookmark:before": {
            content: '"\\\\e866"',
        },
        ".mi-bookmark-border:before": {
            content: '"\\\\e867"',
        },
        ".mi-border-all:before": {
            content: '"\\\\e228"',
        },
        ".mi-border-bottom:before": {
            content: '"\\\\e229"',
        },
        ".mi-border-clear:before": {
            content: '"\\\\e22a"',
        },
        ".mi-border-color:before": {
            content: '"\\\\e22b"',
        },
        ".mi-border-horizontal:before": {
            content: '"\\\\e22c"',
        },
        ".mi-border-inner:before": {
            content: '"\\\\e22d"',
        },
        ".mi-border-left:before": {
            content: '"\\\\e22e"',
        },
        ".mi-border-outer:before": {
            content: '"\\\\e22f"',
        },
        ".mi-border-right:before": {
            content: '"\\\\e230"',
        },
        ".mi-border-style:before": {
            content: '"\\\\e231"',
        },
        ".mi-border-top:before": {
            content: '"\\\\e232"',
        },
        ".mi-border-vertical:before": {
            content: '"\\\\e233"',
        },
        ".mi-branding-watermark:before": {
            content: '"\\\\e06b"',
        },
        ".mi-brightness-1:before": {
            content: '"\\\\e3a6"',
        },
        ".mi-brightness-2:before": {
            content: '"\\\\e3a7"',
        },
        ".mi-brightness-3:before": {
            content: '"\\\\e3a8"',
        },
        ".mi-brightness-4:before": {
            content: '"\\\\e3a9"',
        },
        ".mi-brightness-5:before": {
            content: '"\\\\e3aa"',
        },
        ".mi-brightness-6:before": {
            content: '"\\\\e3ab"',
        },
        ".mi-brightness-7:before": {
            content: '"\\\\e3ac"',
        },
        ".mi-brightness-auto:before": {
            content: '"\\\\e1ab"',
        },
        ".mi-brightness-high:before": {
            content: '"\\\\e1ac"',
        },
        ".mi-brightness-low:before": {
            content: '"\\\\e1ad"',
        },
        ".mi-brightness-medium:before": {
            content: '"\\\\e1ae"',
        },
        ".mi-broken-image:before": {
            content: '"\\\\e3ad"',
        },
        ".mi-brush:before": {
            content: '"\\\\e3ae"',
        },
        ".mi-bubble-chart:before": {
            content: '"\\\\e6dd"',
        },
        ".mi-bug-report:before": {
            content: '"\\\\e868"',
        },
        ".mi-build:before": {
            content: '"\\\\e869"',
        },
        ".mi-burst-mode:before": {
            content: '"\\\\e43c"',
        },
        ".mi-business:before": {
            content: '"\\\\e0af"',
        },
        ".mi-business-center:before": {
            content: '"\\\\eb3f"',
        },
        ".mi-cached:before": {
            content: '"\\\\e86a"',
        },
        ".mi-cake:before": {
            content: '"\\\\e7e9"',
        },
        ".mi-call:before": {
            content: '"\\\\e0b0"',
        },
        ".mi-call-end:before": {
            content: '"\\\\e0b1"',
        },
        ".mi-call-made:before": {
            content: '"\\\\e0b2"',
        },
        ".mi-call-merge:before": {
            content: '"\\\\e0b3"',
        },
        ".mi-call-missed:before": {
            content: '"\\\\e0b4"',
        },
        ".mi-call-missed-outgoing:before": {
            content: '"\\\\e0e4"',
        },
        ".mi-call-received:before": {
            content: '"\\\\e0b5"',
        },
        ".mi-call-split:before": {
            content: '"\\\\e0b6"',
        },
        ".mi-call-to-action:before": {
            content: '"\\\\e06c"',
        },
        ".mi-camera:before": {
            content: '"\\\\e3af"',
        },
        ".mi-camera-alt:before": {
            content: '"\\\\e3b0"',
        },
        ".mi-camera-enhance:before": {
            content: '"\\\\e8fc"',
        },
        ".mi-camera-front:before": {
            content: '"\\\\e3b1"',
        },
        ".mi-camera-rear:before": {
            content: '"\\\\e3b2"',
        },
        ".mi-camera-roll:before": {
            content: '"\\\\e3b3"',
        },
        ".mi-cancel:before": {
            content: '"\\\\e5c9"',
        },
        ".mi-card-giftcard:before": {
            content: '"\\\\e8f6"',
        },
        ".mi-card-membership:before": {
            content: '"\\\\e8f7"',
        },
        ".mi-card-travel:before": {
            content: '"\\\\e8f8"',
        },
        ".mi-casino:before": {
            content: '"\\\\eb40"',
        },
        ".mi-cast:before": {
            content: '"\\\\e307"',
        },
        ".mi-cast-connected:before": {
            content: '"\\\\e308"',
        },
        ".mi-center-focus-strong:before": {
            content: '"\\\\e3b4"',
        },
        ".mi-center-focus-weak:before": {
            content: '"\\\\e3b5"',
        },
        ".mi-change-history:before": {
            content: '"\\\\e86b"',
        },
        ".mi-chat:before": {
            content: '"\\\\e0b7"',
        },
        ".mi-chat-bubble:before": {
            content: '"\\\\e0ca"',
        },
        ".mi-chat-bubble-outline:before": {
            content: '"\\\\e0cb"',
        },
        ".mi-check:before": {
            content: '"\\\\e5ca"',
        },
        ".mi-check-box:before": {
            content: '"\\\\e834"',
        },
        ".mi-check-box-outline-blank:before": {
            content: '"\\\\e835"',
        },
        ".mi-check-circle:before": {
            content: '"\\\\e86c"',
        },
        ".mi-chevron-left:before": {
            content: '"\\\\e5cb"',
        },
        ".mi-chevron-right:before": {
            content: '"\\\\e5cc"',
        },
        ".mi-child-care:before": {
            content: '"\\\\eb41"',
        },
        ".mi-child-friendly:before": {
            content: '"\\\\eb42"',
        },
        ".mi-chrome-reader-mode:before": {
            content: '"\\\\e86d"',
        },
        ".mi-class:before": {
            content: '"\\\\e86e"',
        },
        ".mi-clear:before": {
            content: '"\\\\e14c"',
        },
        ".mi-clear-all:before": {
            content: '"\\\\e0b8"',
        },
        ".mi-close:before": {
            content: '"\\\\e5cd"',
        },
        ".mi-closed-caption:before": {
            content: '"\\\\e01c"',
        },
        ".mi-cloud:before": {
            content: '"\\\\e2bd"',
        },
        ".mi-cloud-circle:before": {
            content: '"\\\\e2be"',
        },
        ".mi-cloud-done:before": {
            content: '"\\\\e2bf"',
        },
        ".mi-cloud-download:before": {
            content: '"\\\\e2c0"',
        },
        ".mi-cloud-off:before": {
            content: '"\\\\e2c1"',
        },
        ".mi-cloud-queue:before": {
            content: '"\\\\e2c2"',
        },
        ".mi-cloud-upload:before": {
            content: '"\\\\e2c3"',
        },
        ".mi-code:before": {
            content: '"\\\\e86f"',
        },
        ".mi-collections:before": {
            content: '"\\\\e3b6"',
        },
        ".mi-collections-bookmark:before": {
            content: '"\\\\e431"',
        },
        ".mi-color-lens:before": {
            content: '"\\\\e3b7"',
        },
        ".mi-colorize:before": {
            content: '"\\\\e3b8"',
        },
        ".mi-comment:before": {
            content: '"\\\\e0b9"',
        },
        ".mi-compare:before": {
            content: '"\\\\e3b9"',
        },
        ".mi-compare-arrows:before": {
            content: '"\\\\e915"',
        },
        ".mi-computer:before": {
            content: '"\\\\e30a"',
        },
        ".mi-confirmation-number:before": {
            content: '"\\\\e638"',
        },
        ".mi-contact-mail:before": {
            content: '"\\\\e0d0"',
        },
        ".mi-contact-phone:before": {
            content: '"\\\\e0cf"',
        },
        ".mi-contacts:before": {
            content: '"\\\\e0ba"',
        },
        ".mi-content-copy:before": {
            content: '"\\\\e14d"',
        },
        ".mi-content-cut:before": {
            content: '"\\\\e14e"',
        },
        ".mi-content-paste:before": {
            content: '"\\\\e14f"',
        },
        ".mi-control-point:before": {
            content: '"\\\\e3ba"',
        },
        ".mi-control-point-duplicate:before": {
            content: '"\\\\e3bb"',
        },
        ".mi-copyright:before": {
            content: '"\\\\e90c"',
        },
        ".mi-create:before": {
            content: '"\\\\e150"',
        },
        ".mi-create-new-folder:before": {
            content: '"\\\\e2cc"',
        },
        ".mi-credit-card:before": {
            content: '"\\\\e870"',
        },
        ".mi-crop:before": {
            content: '"\\\\e3be"',
        },
        ".mi-crop-16-9:before": {
            content: '"\\\\e3bc"',
        },
        ".mi-crop-3-2:before": {
            content: '"\\\\e3bd"',
        },
        ".mi-crop-5-4:before": {
            content: '"\\\\e3bf"',
        },
        ".mi-crop-7-5:before": {
            content: '"\\\\e3c0"',
        },
        ".mi-crop-din:before": {
            content: '"\\\\e3c1"',
        },
        ".mi-crop-free:before": {
            content: '"\\\\e3c2"',
        },
        ".mi-crop-landscape:before": {
            content: '"\\\\e3c3"',
        },
        ".mi-crop-original:before": {
            content: '"\\\\e3c4"',
        },
        ".mi-crop-portrait:before": {
            content: '"\\\\e3c5"',
        },
        ".mi-crop-rotate:before": {
            content: '"\\\\e437"',
        },
        ".mi-crop-square:before": {
            content: '"\\\\e3c6"',
        },
        ".mi-dashboard:before": {
            content: '"\\\\e871"',
        },
        ".mi-data-usage:before": {
            content: '"\\\\e1af"',
        },
        ".mi-date-range:before": {
            content: '"\\\\e916"',
        },
        ".mi-dehaze:before": {
            content: '"\\\\e3c7"',
        },
        ".mi-delete:before": {
            content: '"\\\\e872"',
        },
        ".mi-delete-forever:before": {
            content: '"\\\\e92b"',
        },
        ".mi-delete-sweep:before": {
            content: '"\\\\e16c"',
        },
        ".mi-description:before": {
            content: '"\\\\e873"',
        },
        ".mi-desktop-mac:before": {
            content: '"\\\\e30b"',
        },
        ".mi-desktop-windows:before": {
            content: '"\\\\e30c"',
        },
        ".mi-details:before": {
            content: '"\\\\e3c8"',
        },
        ".mi-developer-board:before": {
            content: '"\\\\e30d"',
        },
        ".mi-developer-mode:before": {
            content: '"\\\\e1b0"',
        },
        ".mi-device-hub:before": {
            content: '"\\\\e335"',
        },
        ".mi-devices:before": {
            content: '"\\\\e1b1"',
        },
        ".mi-devices-other:before": {
            content: '"\\\\e337"',
        },
        ".mi-dialer-sip:before": {
            content: '"\\\\e0bb"',
        },
        ".mi-dialpad:before": {
            content: '"\\\\e0bc"',
        },
        ".mi-directions:before": {
            content: '"\\\\e52e"',
        },
        ".mi-directions-bike:before": {
            content: '"\\\\e52f"',
        },
        ".mi-directions-boat:before": {
            content: '"\\\\e532"',
        },
        ".mi-directions-bus:before": {
            content: '"\\\\e530"',
        },
        ".mi-directions-car:before": {
            content: '"\\\\e531"',
        },
        ".mi-directions-railway:before": {
            content: '"\\\\e534"',
        },
        ".mi-directions-run:before": {
            content: '"\\\\e566"',
        },
        ".mi-directions-subway:before": {
            content: '"\\\\e533"',
        },
        ".mi-directions-transit:before": {
            content: '"\\\\e535"',
        },
        ".mi-directions-walk:before": {
            content: '"\\\\e536"',
        },
        ".mi-disc-full:before": {
            content: '"\\\\e610"',
        },
        ".mi-dns:before": {
            content: '"\\\\e875"',
        },
        ".mi-do-not-disturb:before": {
            content: '"\\\\e612"',
        },
        ".mi-do-not-disturb-alt:before": {
            content: '"\\\\e611"',
        },
        ".mi-do-not-disturb-off:before": {
            content: '"\\\\e643"',
        },
        ".mi-do-not-disturb-on:before": {
            content: '"\\\\e644"',
        },
        ".mi-dock:before": {
            content: '"\\\\e30e"',
        },
        ".mi-domain:before": {
            content: '"\\\\e7ee"',
        },
        ".mi-done:before": {
            content: '"\\\\e876"',
        },
        ".mi-done-all:before": {
            content: '"\\\\e877"',
        },
        ".mi-donut-large:before": {
            content: '"\\\\e917"',
        },
        ".mi-donut-small:before": {
            content: '"\\\\e918"',
        },
        ".mi-drafts:before": {
            content: '"\\\\e151"',
        },
        ".mi-drag-handle:before": {
            content: '"\\\\e25d"',
        },
        ".mi-drive-eta:before": {
            content: '"\\\\e613"',
        },
        ".mi-dvr:before": {
            content: '"\\\\e1b2"',
        },
        ".mi-edit:before": {
            content: '"\\\\e3c9"',
        },
        ".mi-edit-location:before": {
            content: '"\\\\e568"',
        },
        ".mi-eject:before": {
            content: '"\\\\e8fb"',
        },
        ".mi-email:before": {
            content: '"\\\\e0be"',
        },
        ".mi-enhanced-encryption:before": {
            content: '"\\\\e63f"',
        },
        ".mi-equalizer:before": {
            content: '"\\\\e01d"',
        },
        ".mi-error:before": {
            content: '"\\\\e000"',
        },
        ".mi-error-outline:before": {
            content: '"\\\\e001"',
        },
        ".mi-euro-symbol:before": {
            content: '"\\\\e926"',
        },
        ".mi-ev-station:before": {
            content: '"\\\\e56d"',
        },
        ".mi-event:before": {
            content: '"\\\\e878"',
        },
        ".mi-event-available:before": {
            content: '"\\\\e614"',
        },
        ".mi-event-busy:before": {
            content: '"\\\\e615"',
        },
        ".mi-event-note:before": {
            content: '"\\\\e616"',
        },
        ".mi-event-seat:before": {
            content: '"\\\\e903"',
        },
        ".mi-exit-to-app:before": {
            content: '"\\\\e879"',
        },
        ".mi-expand-less:before": {
            content: '"\\\\e5ce"',
        },
        ".mi-expand-more:before": {
            content: '"\\\\e5cf"',
        },
        ".mi-explicit:before": {
            content: '"\\\\e01e"',
        },
        ".mi-explore:before": {
            content: '"\\\\e87a"',
        },
        ".mi-exposure:before": {
            content: '"\\\\e3ca"',
        },
        ".mi-exposure-neg-1:before": {
            content: '"\\\\e3cb"',
        },
        ".mi-exposure-neg-2:before": {
            content: '"\\\\e3cc"',
        },
        ".mi-exposure-plus-1:before": {
            content: '"\\\\e3cd"',
        },
        ".mi-exposure-plus-2:before": {
            content: '"\\\\e3ce"',
        },
        ".mi-exposure-zero:before": {
            content: '"\\\\e3cf"',
        },
        ".mi-extension:before": {
            content: '"\\\\e87b"',
        },
        ".mi-face:before": {
            content: '"\\\\e87c"',
        },
        ".mi-fast-forward:before": {
            content: '"\\\\e01f"',
        },
        ".mi-fast-rewind:before": {
            content: '"\\\\e020"',
        },
        ".mi-favorite:before": {
            content: '"\\\\e87d"',
        },
        ".mi-favorite-border:before": {
            content: '"\\\\e87e"',
        },
        ".mi-featured-play-list:before": {
            content: '"\\\\e06d"',
        },
        ".mi-featured-video:before": {
            content: '"\\\\e06e"',
        },
        ".mi-feedback:before": {
            content: '"\\\\e87f"',
        },
        ".mi-fiber-dvr:before": {
            content: '"\\\\e05d"',
        },
        ".mi-fiber-manual-record:before": {
            content: '"\\\\e061"',
        },
        ".mi-fiber-new:before": {
            content: '"\\\\e05e"',
        },
        ".mi-fiber-pin:before": {
            content: '"\\\\e06a"',
        },
        ".mi-fiber-smart-record:before": {
            content: '"\\\\e062"',
        },
        ".mi-file-download:before": {
            content: '"\\\\e2c4"',
        },
        ".mi-file-upload:before": {
            content: '"\\\\e2c6"',
        },
        ".mi-filter:before": {
            content: '"\\\\e3d3"',
        },
        ".mi-filter-1:before": {
            content: '"\\\\e3d0"',
        },
        ".mi-filter-2:before": {
            content: '"\\\\e3d1"',
        },
        ".mi-filter-3:before": {
            content: '"\\\\e3d2"',
        },
        ".mi-filter-4:before": {
            content: '"\\\\e3d4"',
        },
        ".mi-filter-5:before": {
            content: '"\\\\e3d5"',
        },
        ".mi-filter-6:before": {
            content: '"\\\\e3d6"',
        },
        ".mi-filter-7:before": {
            content: '"\\\\e3d7"',
        },
        ".mi-filter-8:before": {
            content: '"\\\\e3d8"',
        },
        ".mi-filter-9:before": {
            content: '"\\\\e3d9"',
        },
        ".mi-filter-9-plus:before": {
            content: '"\\\\e3da"',
        },
        ".mi-filter-b-and-w:before": {
            content: '"\\\\e3db"',
        },
        ".mi-filter-center-focus:before": {
            content: '"\\\\e3dc"',
        },
        ".mi-filter-drama:before": {
            content: '"\\\\e3dd"',
        },
        ".mi-filter-frames:before": {
            content: '"\\\\e3de"',
        },
        ".mi-filter-hdr:before": {
            content: '"\\\\e3df"',
        },
        ".mi-filter-list:before": {
            content: '"\\\\e152"',
        },
        ".mi-filter-none:before": {
            content: '"\\\\e3e0"',
        },
        ".mi-filter-tilt-shift:before": {
            content: '"\\\\e3e2"',
        },
        ".mi-filter-vintage:before": {
            content: '"\\\\e3e3"',
        },
        ".mi-find-in-page:before": {
            content: '"\\\\e880"',
        },
        ".mi-find-replace:before": {
            content: '"\\\\e881"',
        },
        ".mi-fingerprint:before": {
            content: '"\\\\e90d"',
        },
        ".mi-first-page:before": {
            content: '"\\\\e5dc"',
        },
        ".mi-fitness-center:before": {
            content: '"\\\\eb43"',
        },
        ".mi-flag:before": {
            content: '"\\\\e153"',
        },
        ".mi-flare:before": {
            content: '"\\\\e3e4"',
        },
        ".mi-flash-auto:before": {
            content: '"\\\\e3e5"',
        },
        ".mi-flash-off:before": {
            content: '"\\\\e3e6"',
        },
        ".mi-flash-on:before": {
            content: '"\\\\e3e7"',
        },
        ".mi-flight:before": {
            content: '"\\\\e539"',
        },
        ".mi-flight-land:before": {
            content: '"\\\\e904"',
        },
        ".mi-flight-takeoff:before": {
            content: '"\\\\e905"',
        },
        ".mi-flip:before": {
            content: '"\\\\e3e8"',
        },
        ".mi-flip-to-back:before": {
            content: '"\\\\e882"',
        },
        ".mi-flip-to-front:before": {
            content: '"\\\\e883"',
        },
        ".mi-folder:before": {
            content: '"\\\\e2c7"',
        },
        ".mi-folder-open:before": {
            content: '"\\\\e2c8"',
        },
        ".mi-folder-shared:before": {
            content: '"\\\\e2c9"',
        },
        ".mi-folder-special:before": {
            content: '"\\\\e617"',
        },
        ".mi-font-download:before": {
            content: '"\\\\e167"',
        },
        ".mi-format-align-center:before": {
            content: '"\\\\e234"',
        },
        ".mi-format-align-justify:before": {
            content: '"\\\\e235"',
        },
        ".mi-format-align-left:before": {
            content: '"\\\\e236"',
        },
        ".mi-format-align-right:before": {
            content: '"\\\\e237"',
        },
        ".mi-format-bold:before": {
            content: '"\\\\e238"',
        },
        ".mi-format-clear:before": {
            content: '"\\\\e239"',
        },
        ".mi-format-color-fill:before": {
            content: '"\\\\e23a"',
        },
        ".mi-format-color-reset:before": {
            content: '"\\\\e23b"',
        },
        ".mi-format-color-text:before": {
            content: '"\\\\e23c"',
        },
        ".mi-format-indent-decrease:before": {
            content: '"\\\\e23d"',
        },
        ".mi-format-indent-increase:before": {
            content: '"\\\\e23e"',
        },
        ".mi-format-italic:before": {
            content: '"\\\\e23f"',
        },
        ".mi-format-line-spacing:before": {
            content: '"\\\\e240"',
        },
        ".mi-format-list-bulleted:before": {
            content: '"\\\\e241"',
        },
        ".mi-format-list-numbered:before": {
            content: '"\\\\e242"',
        },
        ".mi-format-paint:before": {
            content: '"\\\\e243"',
        },
        ".mi-format-quote:before": {
            content: '"\\\\e244"',
        },
        ".mi-format-shapes:before": {
            content: '"\\\\e25e"',
        },
        ".mi-format-size:before": {
            content: '"\\\\e245"',
        },
        ".mi-format-strikethrough:before": {
            content: '"\\\\e246"',
        },
        ".mi-format-textdirection-l-to-r:before": {
            content: '"\\\\e247"',
        },
        ".mi-format-textdirection-r-to-l:before": {
            content: '"\\\\e248"',
        },
        ".mi-format-underlined:before": {
            content: '"\\\\e249"',
        },
        ".mi-forum:before": {
            content: '"\\\\e0bf"',
        },
        ".mi-forward:before": {
            content: '"\\\\e154"',
        },
        ".mi-forward-10:before": {
            content: '"\\\\e056"',
        },
        ".mi-forward-30:before": {
            content: '"\\\\e057"',
        },
        ".mi-forward-5:before": {
            content: '"\\\\e058"',
        },
        ".mi-free-breakfast:before": {
            content: '"\\\\eb44"',
        },
        ".mi-fullscreen:before": {
            content: '"\\\\e5d0"',
        },
        ".mi-fullscreen-exit:before": {
            content: '"\\\\e5d1"',
        },
        ".mi-functions:before": {
            content: '"\\\\e24a"',
        },
        ".mi-g-translate:before": {
            content: '"\\\\e927"',
        },
        ".mi-gamepad:before": {
            content: '"\\\\e30f"',
        },
        ".mi-games:before": {
            content: '"\\\\e021"',
        },
        ".mi-gavel:before": {
            content: '"\\\\e90e"',
        },
        ".mi-gesture:before": {
            content: '"\\\\e155"',
        },
        ".mi-get-app:before": {
            content: '"\\\\e884"',
        },
        ".mi-gif:before": {
            content: '"\\\\e908"',
        },
        ".mi-golf-course:before": {
            content: '"\\\\eb45"',
        },
        ".mi-gps-fixed:before": {
            content: '"\\\\e1b3"',
        },
        ".mi-gps-not-fixed:before": {
            content: '"\\\\e1b4"',
        },
        ".mi-gps-off:before": {
            content: '"\\\\e1b5"',
        },
        ".mi-grade:before": {
            content: '"\\\\e885"',
        },
        ".mi-gradient:before": {
            content: '"\\\\e3e9"',
        },
        ".mi-grain:before": {
            content: '"\\\\e3ea"',
        },
        ".mi-graphic-eq:before": {
            content: '"\\\\e1b8"',
        },
        ".mi-grid-off:before": {
            content: '"\\\\e3eb"',
        },
        ".mi-grid-on:before": {
            content: '"\\\\e3ec"',
        },
        ".mi-group:before": {
            content: '"\\\\e7ef"',
        },
        ".mi-group-add:before": {
            content: '"\\\\e7f0"',
        },
        ".mi-group-work:before": {
            content: '"\\\\e886"',
        },
        ".mi-hd:before": {
            content: '"\\\\e052"',
        },
        ".mi-hdr-off:before": {
            content: '"\\\\e3ed"',
        },
        ".mi-hdr-on:before": {
            content: '"\\\\e3ee"',
        },
        ".mi-hdr-strong:before": {
            content: '"\\\\e3f1"',
        },
        ".mi-hdr-weak:before": {
            content: '"\\\\e3f2"',
        },
        ".mi-headset:before": {
            content: '"\\\\e310"',
        },
        ".mi-headset-mic:before": {
            content: '"\\\\e311"',
        },
        ".mi-healing:before": {
            content: '"\\\\e3f3"',
        },
        ".mi-hearing:before": {
            content: '"\\\\e023"',
        },
        ".mi-help:before": {
            content: '"\\\\e887"',
        },
        ".mi-help-outline:before": {
            content: '"\\\\e8fd"',
        },
        ".mi-high-quality:before": {
            content: '"\\\\e024"',
        },
        ".mi-highlight:before": {
            content: '"\\\\e25f"',
        },
        ".mi-highlight-off:before": {
            content: '"\\\\e888"',
        },
        ".mi-history:before": {
            content: '"\\\\e889"',
        },
        ".mi-home:before": {
            content: '"\\\\e88a"',
        },
        ".mi-hot-tub:before": {
            content: '"\\\\eb46"',
        },
        ".mi-hotel:before": {
            content: '"\\\\e53a"',
        },
        ".mi-hourglass-empty:before": {
            content: '"\\\\e88b"',
        },
        ".mi-hourglass-full:before": {
            content: '"\\\\e88c"',
        },
        ".mi-http:before": {
            content: '"\\\\e902"',
        },
        ".mi-https:before": {
            content: '"\\\\e88d"',
        },
        ".mi-image:before": {
            content: '"\\\\e3f4"',
        },
        ".mi-image-aspect-ratio:before": {
            content: '"\\\\e3f5"',
        },
        ".mi-import-contacts:before": {
            content: '"\\\\e0e0"',
        },
        ".mi-import-export:before": {
            content: '"\\\\e0c3"',
        },
        ".mi-important-devices:before": {
            content: '"\\\\e912"',
        },
        ".mi-inbox:before": {
            content: '"\\\\e156"',
        },
        ".mi-indeterminate-check-box:before": {
            content: '"\\\\e909"',
        },
        ".mi-info:before": {
            content: '"\\\\e88e"',
        },
        ".mi-info-outline:before": {
            content: '"\\\\e88f"',
        },
        ".mi-input:before": {
            content: '"\\\\e890"',
        },
        ".mi-insert-chart:before": {
            content: '"\\\\e24b"',
        },
        ".mi-insert-comment:before": {
            content: '"\\\\e24c"',
        },
        ".mi-insert-drive-file:before": {
            content: '"\\\\e24d"',
        },
        ".mi-insert-emoticon:before": {
            content: '"\\\\e24e"',
        },
        ".mi-insert-invitation:before": {
            content: '"\\\\e24f"',
        },
        ".mi-insert-link:before": {
            content: '"\\\\e250"',
        },
        ".mi-insert-photo:before": {
            content: '"\\\\e251"',
        },
        ".mi-invert-colors:before": {
            content: '"\\\\e891"',
        },
        ".mi-invert-colors-off:before": {
            content: '"\\\\e0c4"',
        },
        ".mi-iso:before": {
            content: '"\\\\e3f6"',
        },
        ".mi-keyboard:before": {
            content: '"\\\\e312"',
        },
        ".mi-keyboard-arrow-down:before": {
            content: '"\\\\e313"',
        },
        ".mi-keyboard-arrow-left:before": {
            content: '"\\\\e314"',
        },
        ".mi-keyboard-arrow-right:before": {
            content: '"\\\\e315"',
        },
        ".mi-keyboard-arrow-up:before": {
            content: '"\\\\e316"',
        },
        ".mi-keyboard-backspace:before": {
            content: '"\\\\e317"',
        },
        ".mi-keyboard-capslock:before": {
            content: '"\\\\e318"',
        },
        ".mi-keyboard-hide:before": {
            content: '"\\\\e31a"',
        },
        ".mi-keyboard-return:before": {
            content: '"\\\\e31b"',
        },
        ".mi-keyboard-tab:before": {
            content: '"\\\\e31c"',
        },
        ".mi-keyboard-voice:before": {
            content: '"\\\\e31d"',
        },
        ".mi-kitchen:before": {
            content: '"\\\\eb47"',
        },
        ".mi-label:before": {
            content: '"\\\\e892"',
        },
        ".mi-label-outline:before": {
            content: '"\\\\e893"',
        },
        ".mi-landscape:before": {
            content: '"\\\\e3f7"',
        },
        ".mi-language:before": {
            content: '"\\\\e894"',
        },
        ".mi-laptop:before": {
            content: '"\\\\e31e"',
        },
        ".mi-laptop-chromebook:before": {
            content: '"\\\\e31f"',
        },
        ".mi-laptop-mac:before": {
            content: '"\\\\e320"',
        },
        ".mi-laptop-windows:before": {
            content: '"\\\\e321"',
        },
        ".mi-last-page:before": {
            content: '"\\\\e5dd"',
        },
        ".mi-launch:before": {
            content: '"\\\\e895"',
        },
        ".mi-layers:before": {
            content: '"\\\\e53b"',
        },
        ".mi-layers-clear:before": {
            content: '"\\\\e53c"',
        },
        ".mi-leak-add:before": {
            content: '"\\\\e3f8"',
        },
        ".mi-leak-remove:before": {
            content: '"\\\\e3f9"',
        },
        ".mi-lens:before": {
            content: '"\\\\e3fa"',
        },
        ".mi-library-add:before": {
            content: '"\\\\e02e"',
        },
        ".mi-library-books:before": {
            content: '"\\\\e02f"',
        },
        ".mi-library-music:before": {
            content: '"\\\\e030"',
        },
        ".mi-lightbulb-outline:before": {
            content: '"\\\\e90f"',
        },
        ".mi-line-style:before": {
            content: '"\\\\e919"',
        },
        ".mi-line-weight:before": {
            content: '"\\\\e91a"',
        },
        ".mi-linear-scale:before": {
            content: '"\\\\e260"',
        },
        ".mi-link:before": {
            content: '"\\\\e157"',
        },
        ".mi-linked-camera:before": {
            content: '"\\\\e438"',
        },
        ".mi-list:before": {
            content: '"\\\\e896"',
        },
        ".mi-live-help:before": {
            content: '"\\\\e0c6"',
        },
        ".mi-live-tv:before": {
            content: '"\\\\e639"',
        },
        ".mi-local-activity:before": {
            content: '"\\\\e53f"',
        },
        ".mi-local-airport:before": {
            content: '"\\\\e53d"',
        },
        ".mi-local-atm:before": {
            content: '"\\\\e53e"',
        },
        ".mi-local-bar:before": {
            content: '"\\\\e540"',
        },
        ".mi-local-cafe:before": {
            content: '"\\\\e541"',
        },
        ".mi-local-car-wash:before": {
            content: '"\\\\e542"',
        },
        ".mi-local-convenience-store:before": {
            content: '"\\\\e543"',
        },
        ".mi-local-dining:before": {
            content: '"\\\\e556"',
        },
        ".mi-local-drink:before": {
            content: '"\\\\e544"',
        },
        ".mi-local-florist:before": {
            content: '"\\\\e545"',
        },
        ".mi-local-gas-station:before": {
            content: '"\\\\e546"',
        },
        ".mi-local-grocery-store:before": {
            content: '"\\\\e547"',
        },
        ".mi-local-hospital:before": {
            content: '"\\\\e548"',
        },
        ".mi-local-hotel:before": {
            content: '"\\\\e549"',
        },
        ".mi-local-laundry-service:before": {
            content: '"\\\\e54a"',
        },
        ".mi-local-library:before": {
            content: '"\\\\e54b"',
        },
        ".mi-local-mall:before": {
            content: '"\\\\e54c"',
        },
        ".mi-local-movies:before": {
            content: '"\\\\e54d"',
        },
        ".mi-local-offer:before": {
            content: '"\\\\e54e"',
        },
        ".mi-local-parking:before": {
            content: '"\\\\e54f"',
        },
        ".mi-local-pharmacy:before": {
            content: '"\\\\e550"',
        },
        ".mi-local-phone:before": {
            content: '"\\\\e551"',
        },
        ".mi-local-pizza:before": {
            content: '"\\\\e552"',
        },
        ".mi-local-play:before": {
            content: '"\\\\e553"',
        },
        ".mi-local-post-office:before": {
            content: '"\\\\e554"',
        },
        ".mi-local-printshop:before": {
            content: '"\\\\e555"',
        },
        ".mi-local-see:before": {
            content: '"\\\\e557"',
        },
        ".mi-local-shipping:before": {
            content: '"\\\\e558"',
        },
        ".mi-local-taxi:before": {
            content: '"\\\\e559"',
        },
        ".mi-location-city:before": {
            content: '"\\\\e7f1"',
        },
        ".mi-location-disabled:before": {
            content: '"\\\\e1b6"',
        },
        ".mi-location-off:before": {
            content: '"\\\\e0c7"',
        },
        ".mi-location-on:before": {
            content: '"\\\\e0c8"',
        },
        ".mi-location-searching:before": {
            content: '"\\\\e1b7"',
        },
        ".mi-lock:before": {
            content: '"\\\\e897"',
        },
        ".mi-lock-open:before": {
            content: '"\\\\e898"',
        },
        ".mi-lock-outline:before": {
            content: '"\\\\e899"',
        },
        ".mi-looks:before": {
            content: '"\\\\e3fc"',
        },
        ".mi-looks-3:before": {
            content: '"\\\\e3fb"',
        },
        ".mi-looks-4:before": {
            content: '"\\\\e3fd"',
        },
        ".mi-looks-5:before": {
            content: '"\\\\e3fe"',
        },
        ".mi-looks-6:before": {
            content: '"\\\\e3ff"',
        },
        ".mi-looks-one:before": {
            content: '"\\\\e400"',
        },
        ".mi-looks-two:before": {
            content: '"\\\\e401"',
        },
        ".mi-loop:before": {
            content: '"\\\\e028"',
        },
        ".mi-loupe:before": {
            content: '"\\\\e402"',
        },
        ".mi-low-priority:before": {
            content: '"\\\\e16d"',
        },
        ".mi-loyalty:before": {
            content: '"\\\\e89a"',
        },
        ".mi-mail:before": {
            content: '"\\\\e158"',
        },
        ".mi-mail-outline:before": {
            content: '"\\\\e0e1"',
        },
        ".mi-map:before": {
            content: '"\\\\e55b"',
        },
        ".mi-markunread:before": {
            content: '"\\\\e159"',
        },
        ".mi-markunread-mailbox:before": {
            content: '"\\\\e89b"',
        },
        ".mi-memory:before": {
            content: '"\\\\e322"',
        },
        ".mi-menu:before": {
            content: '"\\\\e5d2"',
        },
        ".mi-merge-type:before": {
            content: '"\\\\e252"',
        },
        ".mi-message:before": {
            content: '"\\\\e0c9"',
        },
        ".mi-mic:before": {
            content: '"\\\\e029"',
        },
        ".mi-mic-none:before": {
            content: '"\\\\e02a"',
        },
        ".mi-mic-off:before": {
            content: '"\\\\e02b"',
        },
        ".mi-mms:before": {
            content: '"\\\\e618"',
        },
        ".mi-mode-comment:before": {
            content: '"\\\\e253"',
        },
        ".mi-mode-edit:before": {
            content: '"\\\\e254"',
        },
        ".mi-monetization-on:before": {
            content: '"\\\\e263"',
        },
        ".mi-money-off:before": {
            content: '"\\\\e25c"',
        },
        ".mi-monochrome-photos:before": {
            content: '"\\\\e403"',
        },
        ".mi-mood:before": {
            content: '"\\\\e7f2"',
        },
        ".mi-mood-bad:before": {
            content: '"\\\\e7f3"',
        },
        ".mi-more:before": {
            content: '"\\\\e619"',
        },
        ".mi-more-horiz:before": {
            content: '"\\\\e5d3"',
        },
        ".mi-more-vert:before": {
            content: '"\\\\e5d4"',
        },
        ".mi-motorcycle:before": {
            content: '"\\\\e91b"',
        },
        ".mi-mouse:before": {
            content: '"\\\\e323"',
        },
        ".mi-move-to-inbox:before": {
            content: '"\\\\e168"',
        },
        ".mi-movie:before": {
            content: '"\\\\e02c"',
        },
        ".mi-movie-creation:before": {
            content: '"\\\\e404"',
        },
        ".mi-movie-filter:before": {
            content: '"\\\\e43a"',
        },
        ".mi-multiline-chart:before": {
            content: '"\\\\e6df"',
        },
        ".mi-music-note:before": {
            content: '"\\\\e405"',
        },
        ".mi-music-video:before": {
            content: '"\\\\e063"',
        },
        ".mi-my-location:before": {
            content: '"\\\\e55c"',
        },
        ".mi-nature:before": {
            content: '"\\\\e406"',
        },
        ".mi-nature-people:before": {
            content: '"\\\\e407"',
        },
        ".mi-navigate-before:before": {
            content: '"\\\\e408"',
        },
        ".mi-navigate-next:before": {
            content: '"\\\\e409"',
        },
        ".mi-navigation:before": {
            content: '"\\\\e55d"',
        },
        ".mi-near-me:before": {
            content: '"\\\\e569"',
        },
        ".mi-network-cell:before": {
            content: '"\\\\e1b9"',
        },
        ".mi-network-check:before": {
            content: '"\\\\e640"',
        },
        ".mi-network-locked:before": {
            content: '"\\\\e61a"',
        },
        ".mi-network-wifi:before": {
            content: '"\\\\e1ba"',
        },
        ".mi-new-releases:before": {
            content: '"\\\\e031"',
        },
        ".mi-next-week:before": {
            content: '"\\\\e16a"',
        },
        ".mi-nfc:before": {
            content: '"\\\\e1bb"',
        },
        ".mi-no-encryption:before": {
            content: '"\\\\e641"',
        },
        ".mi-no-sim:before": {
            content: '"\\\\e0cc"',
        },
        ".mi-not-interested:before": {
            content: '"\\\\e033"',
        },
        ".mi-note:before": {
            content: '"\\\\e06f"',
        },
        ".mi-note-add:before": {
            content: '"\\\\e89c"',
        },
        ".mi-notifications:before": {
            content: '"\\\\e7f4"',
        },
        ".mi-notifications-active:before": {
            content: '"\\\\e7f7"',
        },
        ".mi-notifications-none:before": {
            content: '"\\\\e7f5"',
        },
        ".mi-notifications-off:before": {
            content: '"\\\\e7f6"',
        },
        ".mi-notifications-paused:before": {
            content: '"\\\\e7f8"',
        },
        ".mi-offline-pin:before": {
            content: '"\\\\e90a"',
        },
        ".mi-ondemand-video:before": {
            content: '"\\\\e63a"',
        },
        ".mi-opacity:before": {
            content: '"\\\\e91c"',
        },
        ".mi-open-in-browser:before": {
            content: '"\\\\e89d"',
        },
        ".mi-open-in-new:before": {
            content: '"\\\\e89e"',
        },
        ".mi-open-with:before": {
            content: '"\\\\e89f"',
        },
        ".mi-pages:before": {
            content: '"\\\\e7f9"',
        },
        ".mi-pageview:before": {
            content: '"\\\\e8a0"',
        },
        ".mi-palette:before": {
            content: '"\\\\e40a"',
        },
        ".mi-pan-tool:before": {
            content: '"\\\\e925"',
        },
        ".mi-panorama:before": {
            content: '"\\\\e40b"',
        },
        ".mi-panorama-fish-eye:before": {
            content: '"\\\\e40c"',
        },
        ".mi-panorama-horizontal:before": {
            content: '"\\\\e40d"',
        },
        ".mi-panorama-vertical:before": {
            content: '"\\\\e40e"',
        },
        ".mi-panorama-wide-angle:before": {
            content: '"\\\\e40f"',
        },
        ".mi-party-mode:before": {
            content: '"\\\\e7fa"',
        },
        ".mi-pause:before": {
            content: '"\\\\e034"',
        },
        ".mi-pause-circle-filled:before": {
            content: '"\\\\e035"',
        },
        ".mi-pause-circle-outline:before": {
            content: '"\\\\e036"',
        },
        ".mi-payment:before": {
            content: '"\\\\e8a1"',
        },
        ".mi-people:before": {
            content: '"\\\\e7fb"',
        },
        ".mi-people-outline:before": {
            content: '"\\\\e7fc"',
        },
        ".mi-perm-camera-mic:before": {
            content: '"\\\\e8a2"',
        },
        ".mi-perm-contact-calendar:before": {
            content: '"\\\\e8a3"',
        },
        ".mi-perm-data-setting:before": {
            content: '"\\\\e8a4"',
        },
        ".mi-perm-device-information:before": {
            content: '"\\\\e8a5"',
        },
        ".mi-perm-identity:before": {
            content: '"\\\\e8a6"',
        },
        ".mi-perm-media:before": {
            content: '"\\\\e8a7"',
        },
        ".mi-perm-phone-msg:before": {
            content: '"\\\\e8a8"',
        },
        ".mi-perm-scan-wifi:before": {
            content: '"\\\\e8a9"',
        },
        ".mi-person:before": {
            content: '"\\\\e7fd"',
        },
        ".mi-person-add:before": {
            content: '"\\\\e7fe"',
        },
        ".mi-person-outline:before": {
            content: '"\\\\e7ff"',
        },
        ".mi-person-pin:before": {
            content: '"\\\\e55a"',
        },
        ".mi-person-pin-circle:before": {
            content: '"\\\\e56a"',
        },
        ".mi-personal-video:before": {
            content: '"\\\\e63b"',
        },
        ".mi-pets:before": {
            content: '"\\\\e91d"',
        },
        ".mi-phone:before": {
            content: '"\\\\e0cd"',
        },
        ".mi-phone-android:before": {
            content: '"\\\\e324"',
        },
        ".mi-phone-bluetooth-speaker:before": {
            content: '"\\\\e61b"',
        },
        ".mi-phone-forwarded:before": {
            content: '"\\\\e61c"',
        },
        ".mi-phone-in-talk:before": {
            content: '"\\\\e61d"',
        },
        ".mi-phone-iphone:before": {
            content: '"\\\\e325"',
        },
        ".mi-phone-locked:before": {
            content: '"\\\\e61e"',
        },
        ".mi-phone-missed:before": {
            content: '"\\\\e61f"',
        },
        ".mi-phone-paused:before": {
            content: '"\\\\e620"',
        },
        ".mi-phonelink:before": {
            content: '"\\\\e326"',
        },
        ".mi-phonelink-erase:before": {
            content: '"\\\\e0db"',
        },
        ".mi-phonelink-lock:before": {
            content: '"\\\\e0dc"',
        },
        ".mi-phonelink-off:before": {
            content: '"\\\\e327"',
        },
        ".mi-phonelink-ring:before": {
            content: '"\\\\e0dd"',
        },
        ".mi-phonelink-setup:before": {
            content: '"\\\\e0de"',
        },
        ".mi-photo:before": {
            content: '"\\\\e410"',
        },
        ".mi-photo-album:before": {
            content: '"\\\\e411"',
        },
        ".mi-photo-camera:before": {
            content: '"\\\\e412"',
        },
        ".mi-photo-filter:before": {
            content: '"\\\\e43b"',
        },
        ".mi-photo-library:before": {
            content: '"\\\\e413"',
        },
        ".mi-photo-size-select-actual:before": {
            content: '"\\\\e432"',
        },
        ".mi-photo-size-select-large:before": {
            content: '"\\\\e433"',
        },
        ".mi-photo-size-select-small:before": {
            content: '"\\\\e434"',
        },
        ".mi-picture-as-pdf:before": {
            content: '"\\\\e415"',
        },
        ".mi-picture-in-picture:before": {
            content: '"\\\\e8aa"',
        },
        ".mi-picture-in-picture-alt:before": {
            content: '"\\\\e911"',
        },
        ".mi-pie-chart:before": {
            content: '"\\\\e6c4"',
        },
        ".mi-pie-chart-outlined:before": {
            content: '"\\\\e6c5"',
        },
        ".mi-pin-drop:before": {
            content: '"\\\\e55e"',
        },
        ".mi-place:before": {
            content: '"\\\\e55f"',
        },
        ".mi-play-arrow:before": {
            content: '"\\\\e037"',
        },
        ".mi-play-circle-filled:before": {
            content: '"\\\\e038"',
        },
        ".mi-play-circle-outline:before": {
            content: '"\\\\e039"',
        },
        ".mi-play-for-work:before": {
            content: '"\\\\e906"',
        },
        ".mi-playlist-add:before": {
            content: '"\\\\e03b"',
        },
        ".mi-playlist-add-check:before": {
            content: '"\\\\e065"',
        },
        ".mi-playlist-play:before": {
            content: '"\\\\e05f"',
        },
        ".mi-plus-one:before": {
            content: '"\\\\e800"',
        },
        ".mi-poll:before": {
            content: '"\\\\e801"',
        },
        ".mi-polymer:before": {
            content: '"\\\\e8ab"',
        },
        ".mi-pool:before": {
            content: '"\\\\eb48"',
        },
        ".mi-portable-wifi-off:before": {
            content: '"\\\\e0ce"',
        },
        ".mi-portrait:before": {
            content: '"\\\\e416"',
        },
        ".mi-power:before": {
            content: '"\\\\e63c"',
        },
        ".mi-power-input:before": {
            content: '"\\\\e336"',
        },
        ".mi-power-settings-new:before": {
            content: '"\\\\e8ac"',
        },
        ".mi-pregnant-woman:before": {
            content: '"\\\\e91e"',
        },
        ".mi-present-to-all:before": {
            content: '"\\\\e0df"',
        },
        ".mi-print:before": {
            content: '"\\\\e8ad"',
        },
        ".mi-priority-high:before": {
            content: '"\\\\e645"',
        },
        ".mi-public:before": {
            content: '"\\\\e80b"',
        },
        ".mi-publish:before": {
            content: '"\\\\e255"',
        },
        ".mi-query-builder:before": {
            content: '"\\\\e8ae"',
        },
        ".mi-question-answer:before": {
            content: '"\\\\e8af"',
        },
        ".mi-queue:before": {
            content: '"\\\\e03c"',
        },
        ".mi-queue-music:before": {
            content: '"\\\\e03d"',
        },
        ".mi-queue-play-next:before": {
            content: '"\\\\e066"',
        },
        ".mi-radio:before": {
            content: '"\\\\e03e"',
        },
        ".mi-radio-button-checked:before": {
            content: '"\\\\e837"',
        },
        ".mi-radio-button-unchecked:before": {
            content: '"\\\\e836"',
        },
        ".mi-rate-review:before": {
            content: '"\\\\e560"',
        },
        ".mi-receipt:before": {
            content: '"\\\\e8b0"',
        },
        ".mi-recent-actors:before": {
            content: '"\\\\e03f"',
        },
        ".mi-record-voice-over:before": {
            content: '"\\\\e91f"',
        },
        ".mi-redeem:before": {
            content: '"\\\\e8b1"',
        },
        ".mi-redo:before": {
            content: '"\\\\e15a"',
        },
        ".mi-refresh:before": {
            content: '"\\\\e5d5"',
        },
        ".mi-remove:before": {
            content: '"\\\\e15b"',
        },
        ".mi-remove-circle:before": {
            content: '"\\\\e15c"',
        },
        ".mi-remove-circle-outline:before": {
            content: '"\\\\e15d"',
        },
        ".mi-remove-from-queue:before": {
            content: '"\\\\e067"',
        },
        ".mi-remove-red-eye:before": {
            content: '"\\\\e417"',
        },
        ".mi-remove-shopping-cart:before": {
            content: '"\\\\e928"',
        },
        ".mi-reorder:before": {
            content: '"\\\\e8fe"',
        },
        ".mi-repeat:before": {
            content: '"\\\\e040"',
        },
        ".mi-repeat-one:before": {
            content: '"\\\\e041"',
        },
        ".mi-replay:before": {
            content: '"\\\\e042"',
        },
        ".mi-replay-10:before": {
            content: '"\\\\e059"',
        },
        ".mi-replay-30:before": {
            content: '"\\\\e05a"',
        },
        ".mi-replay-5:before": {
            content: '"\\\\e05b"',
        },
        ".mi-reply:before": {
            content: '"\\\\e15e"',
        },
        ".mi-reply-all:before": {
            content: '"\\\\e15f"',
        },
        ".mi-report:before": {
            content: '"\\\\e160"',
        },
        ".mi-report-problem:before": {
            content: '"\\\\e8b2"',
        },
        ".mi-restaurant:before": {
            content: '"\\\\e56c"',
        },
        ".mi-restaurant-menu:before": {
            content: '"\\\\e561"',
        },
        ".mi-restore:before": {
            content: '"\\\\e8b3"',
        },
        ".mi-restore-page:before": {
            content: '"\\\\e929"',
        },
        ".mi-ring-volume:before": {
            content: '"\\\\e0d1"',
        },
        ".mi-room:before": {
            content: '"\\\\e8b4"',
        },
        ".mi-room-service:before": {
            content: '"\\\\eb49"',
        },
        ".mi-rotate-90-degrees-ccw:before": {
            content: '"\\\\e418"',
        },
        ".mi-rotate-left:before": {
            content: '"\\\\e419"',
        },
        ".mi-rotate-right:before": {
            content: '"\\\\e41a"',
        },
        ".mi-rounded-corner:before": {
            content: '"\\\\e920"',
        },
        ".mi-router:before": {
            content: '"\\\\e328"',
        },
        ".mi-rowing:before": {
            content: '"\\\\e921"',
        },
        ".mi-rss-feed:before": {
            content: '"\\\\e0e5"',
        },
        ".mi-rv-hookup:before": {
            content: '"\\\\e642"',
        },
        ".mi-satellite:before": {
            content: '"\\\\e562"',
        },
        ".mi-save:before": {
            content: '"\\\\e161"',
        },
        ".mi-scanner:before": {
            content: '"\\\\e329"',
        },
        ".mi-schedule:before": {
            content: '"\\\\e8b5"',
        },
        ".mi-school:before": {
            content: '"\\\\e80c"',
        },
        ".mi-screen-lock-landscape:before": {
            content: '"\\\\e1be"',
        },
        ".mi-screen-lock-portrait:before": {
            content: '"\\\\e1bf"',
        },
        ".mi-screen-lock-rotation:before": {
            content: '"\\\\e1c0"',
        },
        ".mi-screen-rotation:before": {
            content: '"\\\\e1c1"',
        },
        ".mi-screen-share:before": {
            content: '"\\\\e0e2"',
        },
        ".mi-sd-card:before": {
            content: '"\\\\e623"',
        },
        ".mi-sd-storage:before": {
            content: '"\\\\e1c2"',
        },
        ".mi-search:before": {
            content: '"\\\\e8b6"',
        },
        ".mi-security:before": {
            content: '"\\\\e32a"',
        },
        ".mi-select-all:before": {
            content: '"\\\\e162"',
        },
        ".mi-send:before": {
            content: '"\\\\e163"',
        },
        ".mi-sentiment-dissatisfied:before": {
            content: '"\\\\e811"',
        },
        ".mi-sentiment-neutral:before": {
            content: '"\\\\e812"',
        },
        ".mi-sentiment-satisfied:before": {
            content: '"\\\\e813"',
        },
        ".mi-sentiment-very-dissatisfied:before": {
            content: '"\\\\e814"',
        },
        ".mi-sentiment-very-satisfied:before": {
            content: '"\\\\e815"',
        },
        ".mi-settings:before": {
            content: '"\\\\e8b8"',
        },
        ".mi-settings-applications:before": {
            content: '"\\\\e8b9"',
        },
        ".mi-settings-backup-restore:before": {
            content: '"\\\\e8ba"',
        },
        ".mi-settings-bluetooth:before": {
            content: '"\\\\e8bb"',
        },
        ".mi-settings-brightness:before": {
            content: '"\\\\e8bd"',
        },
        ".mi-settings-cell:before": {
            content: '"\\\\e8bc"',
        },
        ".mi-settings-ethernet:before": {
            content: '"\\\\e8be"',
        },
        ".mi-settings-input-antenna:before": {
            content: '"\\\\e8bf"',
        },
        ".mi-settings-input-component:before": {
            content: '"\\\\e8c0"',
        },
        ".mi-settings-input-composite:before": {
            content: '"\\\\e8c1"',
        },
        ".mi-settings-input-hdmi:before": {
            content: '"\\\\e8c2"',
        },
        ".mi-settings-input-svideo:before": {
            content: '"\\\\e8c3"',
        },
        ".mi-settings-overscan:before": {
            content: '"\\\\e8c4"',
        },
        ".mi-settings-phone:before": {
            content: '"\\\\e8c5"',
        },
        ".mi-settings-power:before": {
            content: '"\\\\e8c6"',
        },
        ".mi-settings-remote:before": {
            content: '"\\\\e8c7"',
        },
        ".mi-settings-system-daydream:before": {
            content: '"\\\\e1c3"',
        },
        ".mi-settings-voice:before": {
            content: '"\\\\e8c8"',
        },
        ".mi-share:before": {
            content: '"\\\\e80d"',
        },
        ".mi-shop:before": {
            content: '"\\\\e8c9"',
        },
        ".mi-shop-two:before": {
            content: '"\\\\e8ca"',
        },
        ".mi-shopping-basket:before": {
            content: '"\\\\e8cb"',
        },
        ".mi-shopping-cart:before": {
            content: '"\\\\e8cc"',
        },
        ".mi-short-text:before": {
            content: '"\\\\e261"',
        },
        ".mi-show-chart:before": {
            content: '"\\\\e6e1"',
        },
        ".mi-shuffle:before": {
            content: '"\\\\e043"',
        },
        ".mi-signal-cellular-4-bar:before": {
            content: '"\\\\e1c8"',
        },
        ".mi-signal-cellular-connected-no-internet-4-bar:before": {
            content: '"\\\\e1cd"',
        },
        ".mi-signal-cellular-no-sim:before": {
            content: '"\\\\e1ce"',
        },
        ".mi-signal-cellular-null:before": {
            content: '"\\\\e1cf"',
        },
        ".mi-signal-cellular-off:before": {
            content: '"\\\\e1d0"',
        },
        ".mi-signal-wifi-4-bar:before": {
            content: '"\\\\e1d8"',
        },
        ".mi-signal-wifi-4-bar-lock:before": {
            content: '"\\\\e1d9"',
        },
        ".mi-signal-wifi-off:before": {
            content: '"\\\\e1da"',
        },
        ".mi-sim-card:before": {
            content: '"\\\\e32b"',
        },
        ".mi-sim-card-alert:before": {
            content: '"\\\\e624"',
        },
        ".mi-skip-next:before": {
            content: '"\\\\e044"',
        },
        ".mi-skip-previous:before": {
            content: '"\\\\e045"',
        },
        ".mi-slideshow:before": {
            content: '"\\\\e41b"',
        },
        ".mi-slow-motion-video:before": {
            content: '"\\\\e068"',
        },
        ".mi-smartphone:before": {
            content: '"\\\\e32c"',
        },
        ".mi-smoke-free:before": {
            content: '"\\\\eb4a"',
        },
        ".mi-smoking-rooms:before": {
            content: '"\\\\eb4b"',
        },
        ".mi-sms:before": {
            content: '"\\\\e625"',
        },
        ".mi-sms-failed:before": {
            content: '"\\\\e626"',
        },
        ".mi-snooze:before": {
            content: '"\\\\e046"',
        },
        ".mi-sort:before": {
            content: '"\\\\e164"',
        },
        ".mi-sort-by-alpha:before": {
            content: '"\\\\e053"',
        },
        ".mi-spa:before": {
            content: '"\\\\eb4c"',
        },
        ".mi-space-bar:before": {
            content: '"\\\\e256"',
        },
        ".mi-speaker:before": {
            content: '"\\\\e32d"',
        },
        ".mi-speaker-group:before": {
            content: '"\\\\e32e"',
        },
        ".mi-speaker-notes:before": {
            content: '"\\\\e8cd"',
        },
        ".mi-speaker-notes-off:before": {
            content: '"\\\\e92a"',
        },
        ".mi-speaker-phone:before": {
            content: '"\\\\e0d2"',
        },
        ".mi-spellcheck:before": {
            content: '"\\\\e8ce"',
        },
        ".mi-star:before": {
            content: '"\\\\e838"',
        },
        ".mi-star-border:before": {
            content: '"\\\\e83a"',
        },
        ".mi-star-half:before": {
            content: '"\\\\e839"',
        },
        ".mi-stars:before": {
            content: '"\\\\e8d0"',
        },
        ".mi-stay-current-landscape:before": {
            content: '"\\\\e0d3"',
        },
        ".mi-stay-current-portrait:before": {
            content: '"\\\\e0d4"',
        },
        ".mi-stay-primary-landscape:before": {
            content: '"\\\\e0d5"',
        },
        ".mi-stay-primary-portrait:before": {
            content: '"\\\\e0d6"',
        },
        ".mi-stop:before": {
            content: '"\\\\e047"',
        },
        ".mi-stop-screen-share:before": {
            content: '"\\\\e0e3"',
        },
        ".mi-storage:before": {
            content: '"\\\\e1db"',
        },
        ".mi-store:before": {
            content: '"\\\\e8d1"',
        },
        ".mi-store-mall-directory:before": {
            content: '"\\\\e563"',
        },
        ".mi-straighten:before": {
            content: '"\\\\e41c"',
        },
        ".mi-streetview:before": {
            content: '"\\\\e56e"',
        },
        ".mi-strikethrough-s:before": {
            content: '"\\\\e257"',
        },
        ".mi-style:before": {
            content: '"\\\\e41d"',
        },
        ".mi-subdirectory-arrow-left:before": {
            content: '"\\\\e5d9"',
        },
        ".mi-subdirectory-arrow-right:before": {
            content: '"\\\\e5da"',
        },
        ".mi-subject:before": {
            content: '"\\\\e8d2"',
        },
        ".mi-subscriptions:before": {
            content: '"\\\\e064"',
        },
        ".mi-subtitles:before": {
            content: '"\\\\e048"',
        },
        ".mi-subway:before": {
            content: '"\\\\e56f"',
        },
        ".mi-supervisor-account:before": {
            content: '"\\\\e8d3"',
        },
        ".mi-surround-sound:before": {
            content: '"\\\\e049"',
        },
        ".mi-swap-calls:before": {
            content: '"\\\\e0d7"',
        },
        ".mi-swap-horiz:before": {
            content: '"\\\\e8d4"',
        },
        ".mi-swap-vert:before": {
            content: '"\\\\e8d5"',
        },
        ".mi-swap-vertical-circle:before": {
            content: '"\\\\e8d6"',
        },
        ".mi-switch-camera:before": {
            content: '"\\\\e41e"',
        },
        ".mi-switch-video:before": {
            content: '"\\\\e41f"',
        },
        ".mi-sync:before": {
            content: '"\\\\e627"',
        },
        ".mi-sync-disabled:before": {
            content: '"\\\\e628"',
        },
        ".mi-sync-problem:before": {
            content: '"\\\\e629"',
        },
        ".mi-system-update:before": {
            content: '"\\\\e62a"',
        },
        ".mi-system-update-alt:before": {
            content: '"\\\\e8d7"',
        },
        ".mi-tab:before": {
            content: '"\\\\e8d8"',
        },
        ".mi-tab-unselected:before": {
            content: '"\\\\e8d9"',
        },
        ".mi-tablet:before": {
            content: '"\\\\e32f"',
        },
        ".mi-tablet-android:before": {
            content: '"\\\\e330"',
        },
        ".mi-tablet-mac:before": {
            content: '"\\\\e331"',
        },
        ".mi-tag-faces:before": {
            content: '"\\\\e420"',
        },
        ".mi-tap-and-play:before": {
            content: '"\\\\e62b"',
        },
        ".mi-terrain:before": {
            content: '"\\\\e564"',
        },
        ".mi-text-fields:before": {
            content: '"\\\\e262"',
        },
        ".mi-text-format:before": {
            content: '"\\\\e165"',
        },
        ".mi-textsms:before": {
            content: '"\\\\e0d8"',
        },
        ".mi-texture:before": {
            content: '"\\\\e421"',
        },
        ".mi-theaters:before": {
            content: '"\\\\e8da"',
        },
        ".mi-thumb-down:before": {
            content: '"\\\\e8db"',
        },
        ".mi-thumb-up:before": {
            content: '"\\\\e8dc"',
        },
        ".mi-thumbs-up-down:before": {
            content: '"\\\\e8dd"',
        },
        ".mi-time-to-leave:before": {
            content: '"\\\\e62c"',
        },
        ".mi-timelapse:before": {
            content: '"\\\\e422"',
        },
        ".mi-timeline:before": {
            content: '"\\\\e922"',
        },
        ".mi-timer:before": {
            content: '"\\\\e425"',
        },
        ".mi-timer-10:before": {
            content: '"\\\\e423"',
        },
        ".mi-timer-3:before": {
            content: '"\\\\e424"',
        },
        ".mi-timer-off:before": {
            content: '"\\\\e426"',
        },
        ".mi-title:before": {
            content: '"\\\\e264"',
        },
        ".mi-toc:before": {
            content: '"\\\\e8de"',
        },
        ".mi-today:before": {
            content: '"\\\\e8df"',
        },
        ".mi-toll:before": {
            content: '"\\\\e8e0"',
        },
        ".mi-tonality:before": {
            content: '"\\\\e427"',
        },
        ".mi-touch-app:before": {
            content: '"\\\\e913"',
        },
        ".mi-toys:before": {
            content: '"\\\\e332"',
        },
        ".mi-track-changes:before": {
            content: '"\\\\e8e1"',
        },
        ".mi-traffic:before": {
            content: '"\\\\e565"',
        },
        ".mi-train:before": {
            content: '"\\\\e570"',
        },
        ".mi-tram:before": {
            content: '"\\\\e571"',
        },
        ".mi-transfer-within-a-station:before": {
            content: '"\\\\e572"',
        },
        ".mi-transform:before": {
            content: '"\\\\e428"',
        },
        ".mi-translate:before": {
            content: '"\\\\e8e2"',
        },
        ".mi-trending-down:before": {
            content: '"\\\\e8e3"',
        },
        ".mi-trending-flat:before": {
            content: '"\\\\e8e4"',
        },
        ".mi-trending-up:before": {
            content: '"\\\\e8e5"',
        },
        ".mi-tune:before": {
            content: '"\\\\e429"',
        },
        ".mi-turned-in:before": {
            content: '"\\\\e8e6"',
        },
        ".mi-turned-in-not:before": {
            content: '"\\\\e8e7"',
        },
        ".mi-tv:before": {
            content: '"\\\\e333"',
        },
        ".mi-unarchive:before": {
            content: '"\\\\e169"',
        },
        ".mi-undo:before": {
            content: '"\\\\e166"',
        },
        ".mi-unfold-less:before": {
            content: '"\\\\e5d6"',
        },
        ".mi-unfold-more:before": {
            content: '"\\\\e5d7"',
        },
        ".mi-update:before": {
            content: '"\\\\e923"',
        },
        ".mi-usb:before": {
            content: '"\\\\e1e0"',
        },
        ".mi-verified-user:before": {
            content: '"\\\\e8e8"',
        },
        ".mi-vertical-align-bottom:before": {
            content: '"\\\\e258"',
        },
        ".mi-vertical-align-center:before": {
            content: '"\\\\e259"',
        },
        ".mi-vertical-align-top:before": {
            content: '"\\\\e25a"',
        },
        ".mi-vibration:before": {
            content: '"\\\\e62d"',
        },
        ".mi-video-call:before": {
            content: '"\\\\e070"',
        },
        ".mi-video-label:before": {
            content: '"\\\\e071"',
        },
        ".mi-video-library:before": {
            content: '"\\\\e04a"',
        },
        ".mi-videocam:before": {
            content: '"\\\\e04b"',
        },
        ".mi-videocam-off:before": {
            content: '"\\\\e04c"',
        },
        ".mi-videogame-asset:before": {
            content: '"\\\\e338"',
        },
        ".mi-view-agenda:before": {
            content: '"\\\\e8e9"',
        },
        ".mi-view-array:before": {
            content: '"\\\\e8ea"',
        },
        ".mi-view-carousel:before": {
            content: '"\\\\e8eb"',
        },
        ".mi-view-column:before": {
            content: '"\\\\e8ec"',
        },
        ".mi-view-comfy:before": {
            content: '"\\\\e42a"',
        },
        ".mi-view-compact:before": {
            content: '"\\\\e42b"',
        },
        ".mi-view-day:before": {
            content: '"\\\\e8ed"',
        },
        ".mi-view-headline:before": {
            content: '"\\\\e8ee"',
        },
        ".mi-view-list:before": {
            content: '"\\\\e8ef"',
        },
        ".mi-view-module:before": {
            content: '"\\\\e8f0"',
        },
        ".mi-view-quilt:before": {
            content: '"\\\\e8f1"',
        },
        ".mi-view-stream:before": {
            content: '"\\\\e8f2"',
        },
        ".mi-view-week:before": {
            content: '"\\\\e8f3"',
        },
        ".mi-vignette:before": {
            content: '"\\\\e435"',
        },
        ".mi-visibility:before": {
            content: '"\\\\e8f4"',
        },
        ".mi-visibility-off:before": {
            content: '"\\\\e8f5"',
        },
        ".mi-voice-chat:before": {
            content: '"\\\\e62e"',
        },
        ".mi-voicemail:before": {
            content: '"\\\\e0d9"',
        },
        ".mi-volume-down:before": {
            content: '"\\\\e04d"',
        },
        ".mi-volume-mute:before": {
            content: '"\\\\e04e"',
        },
        ".mi-volume-off:before": {
            content: '"\\\\e04f"',
        },
        ".mi-volume-up:before": {
            content: '"\\\\e050"',
        },
        ".mi-vpn-key:before": {
            content: '"\\\\e0da"',
        },
        ".mi-vpn-lock:before": {
            content: '"\\\\e62f"',
        },
        ".mi-wallpaper:before": {
            content: '"\\\\e1bc"',
        },
        ".mi-warning:before": {
            content: '"\\\\e002"',
        },
        ".mi-watch:before": {
            content: '"\\\\e334"',
        },
        ".mi-watch-later:before": {
            content: '"\\\\e924"',
        },
        ".mi-wb-auto:before": {
            content: '"\\\\e42c"',
        },
        ".mi-wb-cloudy:before": {
            content: '"\\\\e42d"',
        },
        ".mi-wb-incandescent:before": {
            content: '"\\\\e42e"',
        },
        ".mi-wb-iridescent:before": {
            content: '"\\\\e436"',
        },
        ".mi-wb-sunny:before": {
            content: '"\\\\e430"',
        },
        ".mi-wc:before": {
            content: '"\\\\e63d"',
        },
        ".mi-web:before": {
            content: '"\\\\e051"',
        },
        ".mi-web-asset:before": {
            content: '"\\\\e069"',
        },
        ".mi-weekend:before": {
            content: '"\\\\e16b"',
        },
        ".mi-whatshot:before": {
            content: '"\\\\e80e"',
        },
        ".mi-widgets:before": {
            content: '"\\\\e1bd"',
        },
        ".mi-wifi:before": {
            content: '"\\\\e63e"',
        },
        ".mi-wifi-lock:before": {
            content: '"\\\\e1e1"',
        },
        ".mi-wifi-tethering:before": {
            content: '"\\\\e1e2"',
        },
        ".mi-work:before": {
            content: '"\\\\e8f9"',
        },
        ".mi-wrap-text:before": {
            content: '"\\\\e25b"',
        },
        ".mi-youtube-searched-for:before": {
            content: '"\\\\e8fa"',
        },
        ".mi-zoom-in:before": {
            content: '"\\\\e8ff"',
        },
        ".mi-zoom-out:before": {
            content: '"\\\\e900"',
        },
        ".mi-zoom-out-map:before": {
            content: '"\\\\e56b"',
        },
    },
}));
//# sourceMappingURL=typography.js.map