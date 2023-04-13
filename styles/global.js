import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    * {
      box-sizing: border-box;
    }

    html,
    body {
      height: 100%;
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif !important;
      scrollbar-gutter: stable;
      -moz-osx-font-smoothing: grayscale;
      min-height: 100vh;
      padding: 115px;
    }

    h1 {
        font-family: inherit;
        color: #010101;
        font-size: 81px;
        letter-spacing: -0.055em;
        line-height: 0.9em;
        text-indent: -0.03em;
        margin-bottom: 4rem;
        margin-top: 10px;
        font-weight: 740;
    }

    p {
        font-size: 15px;
        font-weight: 400;
        line-height: 22.5px;
    }

    .ui.modal{position:absolute;display:none;z-index:1001;text-align:left;background:#fff;border:none;box-shadow:1px 3px 3px 0 rgba(0,0,0,.2),1px 3px 15px 2px rgba(0,0,0,.2);transform-origin:50% 25%;flex:0 0 auto;border-radius:.28571429rem;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;will-change:top,left,margin,transform,opacity}.ui.modal>.icon:first-child+*,.ui.modal>:first-child:not(.icon){border-top-left-radius:.28571429rem;border-top-right-radius:.28571429rem}.ui.modal>:last-child{border-bottom-left-radius:.28571429rem;border-bottom-right-radius:.28571429rem}.ui.modal>.close{cursor:pointer;position:absolute;top:-2.5rem;right:-2.5rem;z-index:1;opacity:.8;font-size:1.25em;color:#fff;width:2.25rem;height:2.25rem;padding:.625rem 0 0 0}.ui.modal>.close:hover{opacity:1}.ui.modal>.header{display:block;background:#fff;margin:0;padding:1.25rem 1.5rem;box-shadow:none;color:rgba(0,0,0,.85);border-bottom:1px solid rgba(34,36,38,.15)}.ui.modal>.header:not(.ui){font-size:1.42857143rem;line-height:1.28571429em;font-weight:700}.ui.modal>.content{display:block;width:100%;font-size:1em;line-height:1.4;padding:1.5rem;background:#fff}.ui.modal>.image.content{display:flex;flex-direction:row}.ui.modal>.content>.image{display:block;flex:0 1 auto;width:'';align-self:top}.ui.modal>[class*="top aligned"]{align-self:top}.ui.modal>[class*="middle aligned"]{align-self:middle}.ui.modal>[class*=stretched]{align-self:stretch}.ui.modal>.content>.description{display:block;flex:1 0 auto;min-width:0;align-self:top}.ui.modal>.content>.icon+.description,.ui.modal>.content>.image+.description{flex:0 1 auto;min-width:'';width:auto;padding-left:2em}.ui.modal>.content>.image>i.icon{margin:0;opacity:1;width:auto;line-height:1;font-size:8rem}.ui.modal>.actions{background:#f9fafb;padding:1rem 1rem;border-top:1px solid rgba(34,36,38,.15);text-align:right}.ui.modal .actions>.button{margin-left:.75em}@media only screen and (max-width:767px){.ui.modal{width:95%;margin:0}}@media only screen and (min-width:768px){.ui.modal{width:88%;margin:0}}@media only screen and (min-width:992px){.ui.modal{width:850px;margin:0}}@media only screen and (min-width:1200px){.ui.modal{width:900px;margin:0}}@media only screen and (min-width:1920px){.ui.modal{width:950px;margin:0}}@media only screen and (max-width:991px){.ui.modal>.header{padding-right:2.25rem}.ui.modal>.close{top:1.0535rem;right:1rem;color:rgba(0,0,0,.87)}}@media only screen and (max-width:767px){.ui.modal>.header{padding:.75rem 1rem!important;padding-right:2.25rem!important}.ui.modal>.content{display:block;padding:1rem!important}.ui.modal>.close{top:.5rem!important;right:.5rem!important}.ui.modal .image.content{flex-direction:column}.ui.modal .content>.image{display:block;max-width:100%;margin:0 auto!important;text-align:center;padding:0 0 1rem!important}.ui.modal>.content>.image>i.icon{font-size:5rem;text-align:center}.ui.modal .content>.description{display:block;width:100%!important;margin:0!important;padding:1rem 0!important;box-shadow:none}.ui.modal>.actions{padding:1rem 1rem 0!important}.ui.modal .actions>.button,.ui.modal .actions>.buttons{margin-bottom:1rem}}.ui.inverted.dimmer>.ui.modal{box-shadow:1px 3px 10px 2px rgba(0,0,0,.2)}.ui.basic.modal{background-color:transparent;border:none;border-radius:0;box-shadow:none!important;color:#fff}.ui.basic.modal>.actions,.ui.basic.modal>.content,.ui.basic.modal>.header{background-color:transparent}.ui.basic.modal>.header{color:#fff}.ui.basic.modal>.close{top:1rem;right:1.5rem}.ui.inverted.dimmer>.basic.modal{color:rgba(0,0,0,.87)}.ui.inverted.dimmer>.ui.basic.modal>.header{color:rgba(0,0,0,.85)}.ui.legacy.modal,.ui.legacy.page.dimmer>.ui.modal{top:50%;left:50%}.ui.legacy.page.dimmer>.ui.scrolling.modal,.ui.page.dimmer>.ui.scrolling.legacy.modal,.ui.top.aligned.dimmer>.ui.legacy.modal,.ui.top.aligned.legacy.page.dimmer>.ui.modal{top:auto}@media only screen and (max-width:991px){.ui.basic.modal>.close{color:#fff}}.ui.loading.modal{display:block;visibility:hidden;z-index:-1}.ui.active.modal{display:block}.modals.dimmer[class*="top aligned"] .modal{margin:5vh auto}@media only screen and (max-width:767px){.modals.dimmer[class*="top aligned"] .modal{margin:1rem auto}}.legacy.modals.dimmer[class*="top aligned"]{padding-top:5vh}@media only screen and (max-width:767px){.legacy.modals.dimmer[class*="top aligned"]{padding-top:1rem}}.scrolling.dimmable.dimmed{overflow:hidden}.scrolling.dimmable>.dimmer{justify-content:flex-start}.scrolling.dimmable.dimmed>.dimmer{overflow:auto;-webkit-overflow-scrolling:touch}.scrolling.dimmable>.dimmer{position:fixed}.modals.dimmer .ui.scrolling.modal{margin:1rem auto}.scrolling.undetached.dimmable.dimmed{overflow:auto;-webkit-overflow-scrolling:touch}.scrolling.undetached.dimmable.dimmed>.dimmer{overflow:hidden}.scrolling.undetached.dimmable .ui.scrolling.modal{position:absolute;left:50%;margin-top:1rem!important}.ui.modal .scrolling.content{max-height:calc(80vh - 10em);overflow:auto}.ui.fullscreen.modal{width:95%!important;margin:1em auto}.ui.fullscreen.modal>.header{padding-right:2.25rem}.ui.fullscreen.modal>.close{top:1.0535rem;right:1rem;color:rgba(0,0,0,.87)}.ui.modal{font-size:1rem}.ui.mini.modal>.header:not(.ui){font-size:1.3em}@media only screen and (max-width:767px){.ui.mini.modal{width:95%;margin:0}}@media only screen and (min-width:768px){.ui.mini.modal{width:35.2%;margin:0}}@media only screen and (min-width:992px){.ui.mini.modal{width:340px;margin:0}}@media only screen and (min-width:1200px){.ui.mini.modal{width:360px;margin:0}}@media only screen and (min-width:1920px){.ui.mini.modal{width:380px;margin:0}}.ui.small.modal>.header:not(.ui){font-size:1.3em}@media only screen and (max-width:767px){.ui.tiny.modal{width:95%;margin:0}}@media only screen and (min-width:768px){.ui.tiny.modal{width:52.8%;margin:0}}@media only screen and (min-width:992px){.ui.tiny.modal{width:510px;margin:0}}@media only screen and (min-width:1200px){.ui.tiny.modal{width:540px;margin:0}}@media only screen and (min-width:1920px){.ui.tiny.modal{width:570px;margin:0}}.ui.small.modal>.header:not(.ui){font-size:1.3em}@media only screen and (max-width:767px){.ui.small.modal{width:95%;margin:0}}@media only screen and (min-width:768px){.ui.small.modal{width:70.4%;margin:0}}@media only screen and (min-width:992px){.ui.small.modal{width:680px;margin:0}}@media only screen and (min-width:1200px){.ui.small.modal{width:720px;margin:0}}@media only screen and (min-width:1920px){.ui.small.modal{width:760px;margin:0}}.ui.large.modal>.header{font-size:1.6em}@media only screen and (max-width:767px){.ui.large.modal{width:95%;margin:0}}@media only screen and (min-width:768px){.ui.large.modal{width:88%;margin:0}}@media only screen and (min-width:992px){.ui.large.modal{width:1020px;margin:0}}@media only screen and (min-width:1200px){.ui.large.modal{width:1080px;margin:0}}@media only screen and (min-width:1920px){.ui.large.modal{width:1140px;margin:0}}

    `;
