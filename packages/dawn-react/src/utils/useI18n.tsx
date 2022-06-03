import * as React from "react";
import defaultData from "../../locales/en.json";
import { get } from "./get";
import { merge } from "./merge";

const REPLACE_REGEX = /{([^}]*)}/g;

type TranslateFunc = (id: string, replacements?: { [key: string]: string | number | boolean }) => string;
type TranslationKeyExistsFunc = (path: string) => boolean;

export class I18n {
  translation: TranslationDictionary = {};
  lang?: string;

  constructor(translation?: TranslationDictionary | TranslationDictionary[], lang?: string) {
    this.translation = Array.isArray(translation)
      ? merge(defaultData, ...translation.slice().reverse())
      : merge(defaultData, translation) || defaultData;
    this.lang = lang;
  }

  translate: TranslateFunc = (id, replacements) => {
    if (id.length <= 0) {
      return "";
    }

    let text: string;
    try {
      text = get(this.translation, id, "");
    } catch (err) {
      console.error(err);
      text = "";
    }

    if (!text) {
      return "";
    }

    if (replacements) {
      return text.replace(REPLACE_REGEX, (match: string) => {
        // eslint-disable-next-line no-param-reassign
        match = match.replace(/\s+/g, "");
        const replacement: string = match.substring(1, match.length - 1);

        if (replacements[replacement] === undefined) {
          const replacementData = JSON.stringify(replacements);

          console.error(
            `Error in translation for key '${id}'. No replacement found for key '${replacement}'. The following replacements were passed: '${replacementData}'`
          );
        }

        return replacements[replacement] as string;
      });
    }

    return text;
  };

  translationKeyExists: TranslationKeyExistsFunc = (path) => {
    return Boolean(get(this.translation, path));
  };
}

interface TranslationDictionary {
  [key: string]: string | TranslationDictionary;
}

const I18nContext = React.createContext<I18n | undefined>(undefined);

type Props = {
  translation?: TranslationDictionary;
  lang?: string;
  children?: React.ReactNode;
};

export const I18nProvider: React.FunctionComponent<Props> = ({ children, translation = {}, lang = "en" }) => {
  const context = React.useContext(I18nContext);
  if (!context) {
    const [i18n] = React.useState(new I18n(translation, lang));
    return <I18nContext.Provider value={i18n}>{children}</I18nContext.Provider>;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export function useI18n() {
  const i18n = React.useContext(I18nContext);

  const translate: TranslateFunc = React.useMemo(() => {
    if (i18n) {
      return i18n.translate;
    }
    console.warn(REQUIRED_ERROR);
    return () => "";
  }, [i18n]);

  const translationKeyExists: TranslationKeyExistsFunc = React.useMemo(() => {
    if (i18n) {
      return i18n.translationKeyExists;
    }
    console.warn(REQUIRED_ERROR);
    return () => false;
  }, [i18n]);

  return {
    translate,
    translationKeyExists
  };
}

const REQUIRED_ERROR = `Use of \`useI18n\` requires \`I18nProvider\` in parent node.`;
