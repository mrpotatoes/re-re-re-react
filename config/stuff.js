var config = {
  "core": {
    "ignoredNames": [".git", ".hg", ".svn", ".DS_Store", "._*", "Thumbs.db", "desktop.ini"],
    "excludeVcsIgnoredPaths": true,
    "followSymlinks": true,
    "disabledPackages": [],
    "themes": ["one-dark-ui", "one-dark-syntax"],
    "projectHome": "/Users/alibresinn/github",
    "audioBeep": true,
    "closeDeletedFileTabs": false,
    "destroyEmptyPanes": true,
    "closeEmptyWindows": true,
    "fileEncoding": "utf8",
    "openEmptyEditorOnStart": true,
    "restorePreviousWindowsOnStart": true,
    "reopenProjectMenuCount": 15,
    "automaticallyUpdate": true,
    "useProxySettingsWhenCallingApm": true,
    "allowPendingPaneItems": true,
    "telemetryConsent": "undecided",
    "warnOnLargeFileLimit": 40,
    "titleBar": "native"
  },
  "editor": {
    "fontFamily": "",
    "fontSize": 14,
    "lineHeight": 1.5,
    "showCursorOnSelection": true,
    "showInvisibles": false,
    "showIndentGuide": false,
    "showLineNumbers": true,
    "atomicSoftTabs": true,
    "autoIndent": true,
    "autoIndentOnPaste": true,
    "nonWordCharacters": "/\\()\"':,.;<>~!@#$%^&*|+=[]{}`?-…",
    "preferredLineLength": 80,
    "tabLength": 2,
    "softWrap": false,
    "softTabs": true,
    "tabType": "auto",
    "softWrapAtPreferredLineLength": false,
    "softWrapHangingIndent": 0,
    "scrollSensitivity": 40,
    "scrollPastEnd": false,
    "undoGroupingInterval": 300,
    "confirmCheckoutHeadRevision": true,
    "invisibles": {
      "eol": "¬",
      "space": "·",
      "tab": "»",
      "cr": "¤"
    },
    "zoomFontWhenCtrlScrolling": false
  },
  "busy-signal": {
    "itemsToShowInHistory": 5
  },
  "file-icons": {
    "coloured": true,
    "onChanges": false,
    "tabPaneIcon": true,
    "defaultIconClass": "default-icon",
    "strategies": {
      "grammar": true,
      "hashbangs": true,
      "modelines": true,
      "usertypes": true,
      "linguist": true
    }
  },
  "hyperclick": {
    "darwinTriggerKeys": "metaKey",
    "linuxTriggerKeys": "ctrlKey",
    "win32TriggerKeys": "ctrlKey"
  },
  "language-babel": {
    "autoIndentJSX": false,
    "taggedTemplateGrammar": [],
    "allowLocalOverride": false,
    "transpileOnSave": false,
    "createTranspiledCode": false,
    "disableWhenNoBabelrcFileInPath": true,
    "suppressTranspileOnSaveMessages": true,
    "suppressSourcePathMessages": true,
    "createMap": false,
    "babelMapsAddUrl": true,
    "babelSourcePath": "",
    "babelTranspilePath": "",
    "babelMapsPath": "",
    "createTargetDirectories": true
  },
  "linter": {
    "lintPreviewTabs": true,
    "lintOnOpen": true,
    "lintOnChange": true,
    "lintOnChangeInterval": 300,
    "ignoreGlob": "**/*.min.{js,css}",
    "disabledProviders": []
  },
  "linter-eslint": {
    "lintHtmlFiles": false,
    "useGlobalEslint": false,
    "showRuleIdInMessage": true,
    "disableWhenNoEslintConfig": true,
    "eslintrcPath": "",
    "globalNodePath": "",
    "advancedLocalNodeModules": "",
    "eslintRulesDir": "",
    "disableEslintIgnore": false,
    "disableFSCache": false,
    "fixOnSave": false,
    "scopes": ["source.js", "source.jsx", "source.js.jsx", "source.babel", "source.js-semantic"],
    "rulesToSilenceWhileTyping": [],
    "rulesToDisableWhileFixing": []
  },
  "linter-ui-default": {
    "showPanel": false,
    "showTooltip": true,
    "showStatusBar": true,
    "showDecorations": true,
    "showProviderName": false,
    "panelTakesMinimumHeight": true,
    "useBusySignal": true,
    "decorateOnTreeView": "Files",
    "panelRepresents": "Current File",
    "statusBarPosition": "Left",
    "statusBarRepresents": "Current File",
    "statusBarClickBehavior": "Toggle Panel",
    "tooltipFollows": "Mouse",
    "gutterPosition": "Right",
    "panelHeight": 150
  },
  "pigments": {
    "traverseIntoSymlinkDirectories": false,
    "sourceNames": ["**/*.css", "**/*.styl", "**/*.stylus", "**/*.less", "**/*.sass", "**/*.scss"],
    "ignoredNames": ["vendor/*", "node_modules/*", "spec/*", "test/*"],
    "ignoredBufferNames": [],
    "extendedSearchNames": ["**/*.css"],
    "supportedFiletypes": ["*"],
    "filetypesForColorWords": ["css", "less", "styl", "stylus", "sass", "scss"],
    "ignoredScopes": [],
    "autocompleteScopes": [".source.css", ".source.css.less", ".source.sass", ".source.css.scss", ".source.stylus"],
    "extendAutocompleteToVariables": false,
    "extendAutocompleteToColorValue": false,
    "autocompleteSuggestionsFromValue": false,
    "maxDecorationsInGutter": 100,
    "markerType": "native-background",
    "sassShadeAndTintImplementation": "compass",
    "sortPaletteColors": "none",
    "groupPaletteColors": "none",
    "mergeColorDuplicates": false,
    "delayBeforeScan": 500,
    "ignoreVcsIgnoredPaths": true,
    "notifyReloads": true,
    "dismissableReloadNotifications": true
  },
  "project-plus": {
    "showPath": false,
    "projectHome": " ",
    "newWindow": false,
    "autoDiscover": true,
    "notifications": true
  },
  "one-dark-ui": {
    "fontSize": "Auto",
    "layoutMode": "Auto",
    "tabSizing": "Auto"
  },
  "one-light-ui": {
    "fontSize": "Auto",
    "layoutMode": "Auto",
    "tabSizing": "Auto"
  },
  "autocomplete-plus": {
    "enableAutoActivation": true,
    "autoActivationDelay": 100,
    "maxVisibleSuggestions": 10,
    "confirmCompletion": "tab and enter",
    "useCoreMovementCommands": true,
    "fileBlacklist": [".*"],
    "scopeBlacklist": [],
    "includeCompletionsFromAllBuffers": true,
    "strictMatching": false,
    "minimumWordLength": 3,
    "enableBuiltinProvider": true,
    "builtinProviderBlacklist": ".source.gfm",
    "backspaceTriggersAutocomplete": false,
    "enableAutoConfirmSingleSuggestion": true,
    "suggestionListFollows": "Word",
    "defaultProvider": "Symbol",
    "suppressActivationForEditorClasses": ["vim-mode.command-mode", "vim-mode.visual-mode", "vim-mode.operator-pending-mode"],
    "consumeSuffix": true,
    "useAlternateScoring": true,
    "useLocalityBonus": true,
    "enableExtendedUnicodeSupport": false
  },
  "autosave": {
    "enabled": false
  },
  "bracket-matcher": {
    "autocompleteCharacters": ["()", "[]", "{}", "\"\"", "''", "``", "“”", "‘’", "«»", "‹›"],
    "pairsWithExtraNewline": ["()", "[]", "{}"],
    "autocompleteBrackets": true,
    "wrapSelectionsInBrackets": true
  },
  "command-palette": {
    "useAlternateScoring": true,
    "preserveLastSearch": false
  },
  "find-and-replace": {
    "focusEditorAfterSearch": false,
    "projectSearchResultsPaneSplitDirection": "none",
    "closeFindPanelAfterSearch": false,
    "scrollToResultOnLiveSearch": false,
    "liveSearchMinimumCharacters": 3,
    "showSearchWrapIcon": true
  },
  "fuzzy-finder": {
    "ignoredNames": [],
    "searchAllPanes": false,
    "preserveLastSearch": false,
    "useAlternateScoring": true
  },
  "git-diff": {
    "showIconsInEditorGutter": false
  },
  "grammar-selector": {
    "showOnRightSideOfStatusBar": true
  },
  "line-ending-selector": {
    "defaultLineEnding": "OS Default"
  },
  "markdown-preview": {
    "breakOnSingleNewline": false,
    "liveUpdate": true,
    "openPreviewInSplitPane": true,
    "grammars": ["source.gfm", "source.litcoffee", "text.html.basic", "text.md", "text.plain", "text.plain.null-grammar"],
    "useGitHubStyle": false
  },
  "notifications": {
    "showErrorsInDevMode": false
  },
  "open-on-github": {
    "includeLineNumbersInUrls": true
  },
  "package-generator": {
    "createInDevMode": false,
    "packageSyntax": "javascript"
  },
  "spell-check": {
    "grammars": ["source.asciidoc", "source.gfm", "text.git-commit", "text.plain", "text.plain.null-grammar"],
    "useLocales": true,
    "locales": [],
    "localePaths": [],
    "knownWords": [],
    "addKnownWords": false
  },
  "status-bar": {
    "isVisible": true,
    "fullWidth": true,
    "cursorPositionFormat": "%L:%C",
    "selectionCountFormat": "(%L, %C)"
  },
  "tabs": {
    "showIcons": true,
    "alwaysShowTabBar": true,
    "tabScrolling": "platform",
    "tabScrollingThreshold": 120,
    "enableVcsColoring": false,
    "addNewTabsAtEnd": false,
    "enableMruTabSwitching": true
  },
  "tree-view": {
    "squashDirectoryNames": false,
    "hideVcsIgnoredFiles": false,
    "hideIgnoredNames": false,
    "showOnRightSide": false,
    "sortFoldersBeforeFiles": true,
    "autoReveal": false,
    "focusOnReveal": true,
    "alwaysOpenExisting": false
  },
  "welcome": {
    "showOnStartup": true
  },
  "whitespace": {
    "removeTrailingWhitespace": true,
    "keepMarkdownLineBreakWhitespace": true,
    "ignoreWhitespaceOnCurrentLine": true,
    "ignoreWhitespaceOnlyLines": false,
    "ensureSingleTrailingNewline": true
  },
  "cucumber-autocomplete": {
    "path": "/features"
  },
  "docblockr": {
    "deep_indent": false,
    "extend_double_slash": true,
    "indentation_spaces": 1,
    "indentation_spaces_same_para": 1,
    "align_tags": "deep",
    "extra_tags": [],
    "extra_tags_go_after": false,
    "notation_map": [],
    "return_tag": "@return",
    "return_description": true,
    "param_description": true,
    "spacer_between_sections": false,
    "per_section_indent": false,
    "min_spaces_between_columns": 1,
    "auto_add_method_tag": false,
    "simple_mode": false,
    "lower_case_primitives": false,
    "short_primitives": false,
    "override_js_var": false,
    "newline_after_block": false,
    "c_style_block_comments": false,
    "development_mode": false
  },
  "emmet-simplified": {
    "extensionsPath": "~/emmet",
    "formatLineBreaks": true,
    "useEmmetComments": false
  },
  "git-plus": {
    "general": {
      "gitPath": "git",
      "enableStatusBarIcon": true,
      "openInPane": true,
      "splitPane": "Down",
      "messageTimeout": 5,
      "showFormat": "full"
    },
    "commits": {
      "verboseCommits": false
    },
    "diffs": {
      "includeStagedDiff": true,
      "wordDiff": true,
      "syntaxHighlighting": true
    },
    "logs": {
      "numberOfCommitsToShow": 25
    },
    "remoteInteractions": {
      "pullRebase": false,
      "pullBeforePush": false,
      "promptForBranch": false
    },
    "experimental": {
      "stageFilesBeta": true,
      "customCommands": false,
      "diffBranches": false,
      "useSplitDiff": false,
      "autoFetch": 0,
      "autoFetchNotify": false
    }
  },
  "highlight-line": {
    "enableBackgroundColor": true,
    "hideHighlightOnSelect": false,
    "enableUnderline": false,
    "enableSelectionBorder": false,
    "underline": "solid"
  },
  "highlight-selected": {
    "onlyHighlightWholeWords": true,
    "hideHighlightOnSelectedWord": false,
    "ignoreCase": false,
    "lightTheme": false,
    "highlightBackground": false,
    "minimumLength": 2,
    "timeout": 20,
    "showInStatusBar": true,
    "highlightInPanes": true
  },
  "js-hyperclick": {
    "extensions": [".js", ".json", ".node"],
    "usePendingPanes": false,
    "jumpToImport": false,
    "skipIntermediate": true
  },
  "local-history": {
    "fileSizeLimit": 262144,
    "daysLimit": 30,
    "historyStoragePath": "/Users/alibresinn/.atom/local-history",
    "difftoolCommand": "meld \"{current-file}\" \"{revision-file}\""
  },
  "markdown-preview-plus": {
    "breakOnSingleNewline": false,
    "liveUpdate": true,
    "openPreviewInSplitPane": true,
    "previewSplitPaneDir": "right",
    "grammars": ["source.gfm", "source.litcoffee", "text.html.basic", "text.md", "text.plain", "text.plain.null-grammar"],
    "enableLatexRenderingByDefault": false,
    "useLazyHeaders": true,
    "useGitHubStyle": false,
    "enablePandoc": false,
    "useNativePandocCodeStyles": false,
    "pandocPath": "pandoc",
    "pandocArguments": [],
    "pandocMarkdownFlavor": "markdown-raw_tex+tex_math_single_backslash",
    "pandocBibliography": false,
    "pandocRemoveReferences": true,
    "pandocBIBFile": "bibliography.bib",
    "pandocBIBFileFallback": "",
    "pandocCSLFile": "custom.csl",
    "pandocCSLFileFallback": ""
  },
  "merge-conflicts": {
    "gitPath": ""
  },
  "re-re-re-react": {
    "activateHyperMode": false,
    "setRange": 42
  },
  "atom-ternjs": {
    "excludeLowerPriorityProviders": false,
    "guess": true,
    "sort": true,
    "caseInsensitive": true,
    "useSnippets": false,
    "snippetsFirst": false,
    "useSnippetsAndFunction": false,
    "inlineFnCompletion": true,
    "inlineFnCompletionDocumentation": false,
    "documentation": true,
    "urls": true,
    "origins": true,
    "ternServerGetFileAsync": true,
    "ternServerDependencyBudget": 20000
  },
  "platformio-ide-terminal": {
    "toggles": {
      "autoClose": false,
      "cursorBlink": true,
      "runInsertedText": true,
      "selectToCopy": true
    },
    "core": {
      "autoRunCommand": "",
      "mapTerminalsTo": "None",
      "mapTerminalsToAutoOpen": false,
      "scrollback": 1000,
      "shell": "/bin/zsh",
      "shellArguments": "",
      "workingDirectory": "Project"
    },
    "style": {
      "animationSpeed": 1,
      "fontFamily": "",
      "fontSize": "",
      "defaultPanelHeight": "300px",
      "theme": "standard"
    },
    "ansiColors": {
      "normal": {
        "black": "#000000",
        "red": "#cd0000",
        "green": "#00cd00",
        "yellow": "#cdcd00",
        "blue": "#0000cd",
        "magenta": "#cd00cd",
        "cyan": "#00cdcd",
        "white": "#e5e5e5"
      },
      "zBright": {
        "brightBlack": "#7f7f7f",
        "brightRed": "#ff0000",
        "brightGreen": "#00ff00",
        "brightYellow": "#ffff00",
        "brightBlue": "#0000ff",
        "brightMagenta": "#ff00ff",
        "brightCyan": "#00ffff",
        "brightWhite": "#ffffff"
      }
    },
    "iconColors": {
      "red": "#ff0000",
      "orange": "#ffa500",
      "yellow": "#ffff00",
      "green": "#008000",
      "blue": "#0000ff",
      "purple": "#800080",
      "pink": "#ff69b4",
      "cyan": "#00ffff",
      "magenta": "#ff00ff"
    },
    "customTexts": {
      "customText1": "",
      "customText2": "",
      "customText3": "",
      "customText4": "",
      "customText5": "",
      "customText6": "",
      "customText7": "",
      "customText8": ""
    }
  }
}

for (var key in config) {
  let setting = {
    [key]: config[key]
  }

  console.log(setting)
  console.log("-----------")
}