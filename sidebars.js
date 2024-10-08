/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    "intro",
    "Installation",
    "Example-usage",
    {
      type: "category",
      label: "More Examples",
      items: [
        "More-Examples/Controlling-empty-responses",
        "More-Examples/Convert parameters-to-objects",
        "More-Examples/Default-settings",
        "More-Examples/Enable-CORS",
        "More-Examples/Inject-request-body",
        "More-Examples/Inject-request-body-parameters",
        "More-Examples/Inject-request-header-parameters",
        "More-Examples/Inject-routing-parameters",
        "More-Examples/Inject-session-object",
        "More-Examples/Inject-state-object",
        "More-Examples/Inject-uploaded-file",
        "More-Examples/Load-all-controllers-from-the-given-directory",
        "More-Examples/Make-parameter-required",
        "More-Examples/Prefix-all-controllers-routes",
        "More-Examples/Prefix-controller-with-base-route",
        "More-Examples/Render-templates",
        "More-Examples/Return-Promises",
        "More-Examples/Selectively-disable-request-or-response-transform",
        "More-Examples/Set-Location",
        "More-Examples/Set-Redirect",
        "More-Examples/Set-custom-ContentType",
        "More-Examples/Set-custom-HTTP-code",
        "More-Examples/Set-custom-headers",
        "More-Examples/Throw-HTTP-errors",
        "More-Examples/Using-Request-and-Response-objects",
        "More-Examples/Working-with-json",
        "More-Examples/pre-configure-express-or -koa",
      ],
    },
    {
      type: "category",
      label: "Using-Middlewares",
      items: [
        "Using-middlewares/index",
        "Using-middlewares/Use existing-middleware",
      ],
    },

    {
      type: "category",
      label: "Using-interceptors",
      items: [
        "Using-interceptors/index",
        "Using-Interceptors/Interceptor-Function",
        "Using-Interceptors/Interceptor-classes",
        "Using-middlewares/Global-Intereceptors",
      ],
    },
    "Creating-Insatancex-of-classes-from-action-params",
  ],
};

export default sidebars;
