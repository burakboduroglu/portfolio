self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/(\\/?index|\\/?index\\.json))?[\\/#\\?]?$",
    "originalSource": "/"
  },
  {
    "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/(tr|en))(?:\\/((?:[^\\/#\\?]+?)(?:\\/(?:[^\\/#\\?]+?))*))?(\\.json)?[\\/#\\?]?$",
    "originalSource": "/(tr|en)/:path*"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()