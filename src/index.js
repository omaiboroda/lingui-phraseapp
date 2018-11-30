const defaultConfig = {
  prefix: "{{__",
  suffix: "__}}"
};

export const transformCatalog = (catalog, config) => {
  config = { ...defaultConfig, ...config };
  const formattedMessages = Object.keys(catalog.messages).reduce((acc, key) => {
    acc[key] = `${config.prefix}phrase_${key}${config.suffix}`;
    return acc;
  }, {});
  return { ...catalog, messages: formattedMessages };
};

export const initializePhraseAppEditor = config => {
  window.PHRASEAPP_CONFIG = config;

  if (config.phraseEnabled) {
    const phraseapp = document. createElement("script");
    phraseapp.type = "text/javascript";
    phraseapp.async = true;
    phraseapp.src = [
      "https://",
      "phraseapp.com/assets/in-context-editor/2.0/app.js?",
      new Date().getTime()
    ].join("");
    var s = document.getElementsByTagName("script")[0];
    if (s != undefined) {
      s.parentNode.insertBefore(phraseapp, s);
    } else {
      document.insertBefore(phraseapp, null);
    }
  }
};
