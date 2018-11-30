import { initializePhraseAppEditor, transformCatalog } from "./index";
import catalog from "./locales/en/messages";

describe("Lingui phraseapp", () => {
  it("Formats the messages", () => {
    const config = {
      projectId: "foo",
      autoLowercase: false,
      prefix: "{{__",
      suffix: "__}}",
      phraseEnabled: true
    };
    const transformedDictionary = transformCatalog(catalog, config);
    expect(transformedDictionary.messages).toEqual({
      MessageID: "{{__phrase_MessageID__}}"
    });
  });
});
