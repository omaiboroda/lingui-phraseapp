# lingui-phraseapp

This is a package which helps you to use lingui together with PhraseApp In-Context Editor

## Installation

    npm install lingui-phraseapp

## Usage

You need to init the Editor and transform your catalogue to proper format.
For that you have `initializePhraseAppEditor(config)` and `transformCatalog(catalog, config)` functions.

    import { initializePhraseAppEditor, transformCatalog } from 'lingui-phrase';
    import catalog from "./locales/en/messages";

    const config = {
      projectId: "<YOUR_PROJECT_ID>",
      autoLowercase: false,
      phraseEnabled: true
    };

    initializePhraseAppEditor(config);
    const catalogInEditorFormat = transformCatalog(catalog, config);
    const i18n = setupI18n({ catalogs: catalogInEditorFormat })
    ...
