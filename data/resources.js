var resources = [
	{
		'version': '1.1.5',
		'main': 'https://unicode.org/Public/1.1-Update/UnicodeData-1.1.5.txt'
	},
	{
		'version': '2.0.14',
		'main': 'https://unicode.org/Public/2.0-Update/UnicodeData-2.0.14.txt'
	},
	{
		'version': '2.1.2',
		'main': 'https://unicode.org/Public/2.1-Update/UnicodeData-2.1.2.txt'
	},
	{
		'version': '2.1.5',
		'main': 'https://unicode.org/Public/2.1-Update2/UnicodeData-2.1.5.txt'
	},
	{
		'version': '2.1.8',
		'main': 'https://unicode.org/Public/2.1-Update3/UnicodeData-2.1.8.txt'
	},
	{
		'version': '2.1.9',
		'main': 'https://unicode.org/Public/2.1-Update4/UnicodeData-2.1.9.txt'
	},
	{
		'version': '3.0.0',
		'main': 'https://unicode.org/Public/3.0-Update/UnicodeData-3.0.0.txt',
		//'blocks': 'https://unicode.org/Public/3.0-Update/Blocks-3.txt', // issue #1
		//'properties': 'https://unicode.org/Public/3.0-Update/PropList-3.0.0.txt' // issue #2
	},
	{
		'version': '3.0.1',
		'main': 'https://unicode.org/Public/3.0-Update1/UnicodeData-3.0.1.txt'
		//'properties': 'https://unicode.org/Public/3.0-Update1/PropList-3.0.1.txt' // issue #2
	},
	{
		'version': '3.1.0',
		'main': 'https://unicode.org/Public/3.1-Update/UnicodeData-3.1.0.txt',
		'scripts': 'https://unicode.org/Public/3.1-Update/Scripts-3.1.0.txt',
		'blocks': 'https://unicode.org/Public/3.1-Update/Blocks-4.txt',
		'properties': 'https://unicode.org/Public/3.1-Update/PropList-3.1.0.txt',
		'derived-core-properties': 'https://unicode.org/Public/3.1-Update/DerivedCoreProperties-3.1.0.txt',
		'derived-normalization-properties': 'https://unicode.org/Public/3.1-Update/DerivedNormalizationProperties-3.1.0.txt',
		'case-folding': 'https://unicode.org/Public/3.1-Update/CaseFolding-3.txt',
		'line-break': 'https://unicode.org/Public/3.1-Update/LineBreak-6.txt'
	},
	{
		'version': '3.2.0',
		'main': 'https://unicode.org/Public/3.2-Update/UnicodeData-3.2.0.txt',
		'scripts': 'https://unicode.org/Public/3.2-Update/Scripts-3.2.0.txt',
		'blocks': 'https://unicode.org/Public/3.2-Update/Blocks-3.2.0.txt',
		'properties': 'https://unicode.org/Public/3.2-Update/PropList-3.2.0.txt',
		'derived-core-properties': 'https://unicode.org/Public/3.2-Update/DerivedCoreProperties-3.2.0.txt',
		'derived-normalization-properties': 'https://unicode.org/Public/3.2-Update/DerivedNormalizationProps-3.2.0.txt',
		'case-folding': 'https://unicode.org/Public/3.2-Update/CaseFolding-3.2.0.txt',
		'line-break': 'https://unicode.org/Public/3.2-Update/LineBreak-3.2.0.txt'
	},
	{
		'version': '4.0.0',
		'main': 'https://unicode.org/Public/4.0-Update/UnicodeData-4.0.0.txt',
		'scripts': 'https://unicode.org/Public/4.0-Update/Scripts-4.0.0.txt',
		'blocks': 'https://unicode.org/Public/4.0-Update/Blocks-4.0.0.txt',
		'properties': 'https://unicode.org/Public/4.0-Update/PropList-4.0.0.txt',
		'derived-core-properties': 'https://unicode.org/Public/4.0-Update/DerivedCoreProperties-4.0.0.txt',
		'derived-normalization-properties': 'https://unicode.org/Public/4.0-Update/DerivedNormalizationProps-4.0.0.txt',
		'case-folding': 'https://unicode.org/Public/4.0-Update/CaseFolding-4.0.0.txt',
		'line-break': 'https://unicode.org/Public/4.0-Update/LineBreak-4.0.0.txt'
	},
	{
		'version': '4.0.1',
		'main': 'https://unicode.org/Public/4.0-Update1/UnicodeData-4.0.1.txt',
		'scripts': 'https://unicode.org/Public/4.0-Update1/Scripts-4.0.1.txt',
		'blocks': 'https://unicode.org/Public/4.0-Update1/Blocks-4.0.1.txt',
		'properties': 'https://unicode.org/Public/4.0-Update1/PropList-4.0.1.txt',
		'derived-core-properties': 'https://unicode.org/Public/4.0-Update1/DerivedCoreProperties-4.0.1.txt',
		'derived-normalization-properties': 'https://unicode.org/Public/4.0-Update1/DerivedNormalizationProps-4.0.1.txt',
		'case-folding': 'https://unicode.org/Public/4.0-Update1/CaseFolding-4.0.1.txt',
		'line-break': 'https://unicode.org/Public/4.0-Update1/LineBreak-4.0.1.txt'
	},
	{
		'version': '4.1.0',
		'main': 'https://unicode.org/Public/4.1.0/ucd/UnicodeData.txt',
		'scripts': 'https://unicode.org/Public/4.1.0/ucd/Scripts.txt',
		'blocks': 'https://unicode.org/Public/4.1.0/ucd/Blocks.txt',
		'properties': 'https://unicode.org/Public/4.1.0/ucd/PropList.txt',
		'derived-core-properties': 'https://unicode.org/Public/4.1.0/ucd/DerivedCoreProperties.txt',
		'derived-normalization-properties': 'https://unicode.org/Public/4.1.0/ucd/DerivedNormalizationProps.txt',
		'composition-exclusions': 'https://unicode.org/Public/4.1.0/ucd/CompositionExclusions.txt',
		'case-folding': 'https://unicode.org/Public/4.1.0/ucd/CaseFolding.txt',
		'bidi-mirroring': 'https://unicode.org/Public/4.1.0/ucd/BidiMirroring.txt',
		'line-break': 'https://unicode.org/Public/4.1.0/ucd/LineBreak.txt',
		'word-break': 'https://unicode.org/Public/4.1.0/ucd/auxiliary/WordBreakProperty.txt'
	},
	{
		'version': '5.0.0',
		'main': 'https://unicode.org/Public/5.0.0/ucd/UnicodeData.txt',
		'scripts': 'https://unicode.org/Public/5.0.0/ucd/Scripts.txt',
		'blocks': 'https://unicode.org/Public/5.0.0/ucd/Blocks.txt',
		'properties': 'https://unicode.org/Public/5.0.0/ucd/PropList.txt',
		'derived-core-properties': 'https://unicode.org/Public/5.0.0/ucd/DerivedCoreProperties.txt',
		'derived-normalization-properties': 'https://unicode.org/Public/5.0.0/ucd/DerivedNormalizationProps.txt',
		'composition-exclusions': 'https://unicode.org/Public/5.0.0/ucd/CompositionExclusions.txt',
		'case-folding': 'https://unicode.org/Public/5.0.0/ucd/CaseFolding.txt',
		'bidi-mirroring': 'https://unicode.org/Public/5.0.0/ucd/BidiMirroring.txt',
		'line-break': 'https://unicode.org/Public/5.0.0/ucd/LineBreak.txt',
		'word-break': 'https://unicode.org/Public/5.0.0/ucd/auxiliary/WordBreakProperty.txt'
	},
	{
		'version': '5.1.0',
		'main': 'https://unicode.org/Public/5.1.0/ucd/UnicodeData.txt',
		'scripts': 'https://unicode.org/Public/5.1.0/ucd/Scripts.txt',
		'blocks': 'https://unicode.org/Public/5.1.0/ucd/Blocks.txt',
		'properties': 'https://unicode.org/Public/5.1.0/ucd/PropList.txt',
		'derived-core-properties': 'https://unicode.org/Public/5.1.0/ucd/DerivedCoreProperties.txt',
		'derived-normalization-properties': 'https://unicode.org/Public/5.1.0/ucd/DerivedNormalizationProps.txt',
		'composition-exclusions': 'https://unicode.org/Public/5.1.0/ucd/CompositionExclusions.txt',
		'case-folding': 'https://unicode.org/Public/5.1.0/ucd/CaseFolding.txt',
		'bidi-mirroring': 'https://unicode.org/Public/5.1.0/ucd/BidiMirroring.txt',
		'line-break': 'https://unicode.org/Public/5.1.0/ucd/LineBreak.txt',
		'word-break': 'https://unicode.org/Public/5.1.0/ucd/auxiliary/WordBreakProperty.txt'
	},
	{
		'version': '5.2.0',
		'main': 'https://unicode.org/Public/5.2.0/ucd/UnicodeData.txt',
		'scripts': 'https://unicode.org/Public/5.2.0/ucd/Scripts.txt',
		'blocks': 'https://unicode.org/Public/5.2.0/ucd/Blocks.txt',
		'properties': 'https://unicode.org/Public/5.2.0/ucd/PropList.txt',
		'derived-core-properties': 'https://unicode.org/Public/5.2.0/ucd/DerivedCoreProperties.txt',
		'derived-normalization-properties': 'https://unicode.org/Public/5.2.0/ucd/DerivedNormalizationProps.txt',
		'composition-exclusions': 'https://unicode.org/Public/5.2.0/ucd/CompositionExclusions.txt',
		'case-folding': 'https://unicode.org/Public/5.2.0/ucd/CaseFolding.txt',
		'bidi-mirroring': 'https://unicode.org/Public/5.2.0/ucd/BidiMirroring.txt',
		'line-break': 'https://unicode.org/Public/5.2.0/ucd/LineBreak.txt',
		'word-break': 'https://unicode.org/Public/5.2.0/ucd/auxiliary/WordBreakProperty.txt'
	},
	{
		'version': '6.0.0',
		'main': 'https://unicode.org/Public/6.0.0/ucd/UnicodeData.txt',
		'scripts': 'https://unicode.org/Public/6.0.0/ucd/Scripts.txt',
		'script-extensions': 'https://unicode.org/Public/6.0.0/ucd/ScriptExtensions.txt',
		'blocks': 'https://unicode.org/Public/6.0.0/ucd/Blocks.txt',
		'properties': 'https://unicode.org/Public/6.0.0/ucd/PropList.txt',
		'derived-core-properties': 'https://unicode.org/Public/6.0.0/ucd/DerivedCoreProperties.txt',
		'derived-normalization-properties': 'https://unicode.org/Public/6.0.0/ucd/DerivedNormalizationProps.txt',
		'composition-exclusions': 'https://unicode.org/Public/6.0.0/ucd/CompositionExclusions.txt',
		'case-folding': 'https://unicode.org/Public/6.0.0/ucd/CaseFolding.txt',
		'bidi-mirroring': 'https://unicode.org/Public/6.0.0/ucd/BidiMirroring.txt',
		'line-break': 'https://unicode.org/Public/6.0.0/ucd/LineBreak.txt',
		'word-break': 'https://unicode.org/Public/6.0.0/ucd/auxiliary/WordBreakProperty.txt'
	},
	{
		'version': '6.1.0',
		'main': 'https://unicode.org/Public/6.1.0/ucd/UnicodeData.txt',
		'scripts': 'https://unicode.org/Public/6.1.0/ucd/Scripts.txt',
		'script-extensions': 'https://unicode.org/Public/6.1.0/ucd/ScriptExtensions.txt',
		'blocks': 'https://unicode.org/Public/6.1.0/ucd/Blocks.txt',
		'properties': 'https://unicode.org/Public/6.1.0/ucd/PropList.txt',
		'derived-core-properties': 'https://unicode.org/Public/6.1.0/ucd/DerivedCoreProperties.txt',
		'derived-normalization-properties': 'https://unicode.org/Public/6.1.0/ucd/DerivedNormalizationProps.txt',
		'composition-exclusions': 'https://unicode.org/Public/6.1.0/ucd/CompositionExclusions.txt',
		'case-folding': 'https://unicode.org/Public/6.1.0/ucd/CaseFolding.txt',
		'bidi-mirroring': 'https://unicode.org/Public/6.1.0/ucd/BidiMirroring.txt',
		'line-break': 'https://unicode.org/Public/6.1.0/ucd/LineBreak.txt',
		'word-break': 'https://unicode.org/Public/6.1.0/ucd/auxiliary/WordBreakProperty.txt'
	},
	{
		'version': '6.2.0',
		'main': 'https://unicode.org/Public/6.2.0/ucd/UnicodeData.txt',
		'scripts': 'https://unicode.org/Public/6.2.0/ucd/Scripts.txt',
		'script-extensions': 'https://unicode.org/Public/6.2.0/ucd/ScriptExtensions.txt',
		'blocks': 'https://unicode.org/Public/6.2.0/ucd/Blocks.txt',
		'properties': 'https://unicode.org/Public/6.2.0/ucd/PropList.txt',
		'derived-core-properties': 'https://unicode.org/Public/6.2.0/ucd/DerivedCoreProperties.txt',
		'derived-normalization-properties': 'https://unicode.org/Public/6.2.0/ucd/DerivedNormalizationProps.txt',
		'composition-exclusions': 'https://unicode.org/Public/6.2.0/ucd/CompositionExclusions.txt',
		'case-folding': 'https://unicode.org/Public/6.2.0/ucd/CaseFolding.txt',
		'bidi-mirroring': 'https://unicode.org/Public/6.2.0/ucd/BidiMirroring.txt',
		'line-break': 'https://unicode.org/Public/6.2.0/ucd/LineBreak.txt',
		'word-break': 'https://unicode.org/Public/6.2.0/ucd/auxiliary/WordBreakProperty.txt'
	},
	{
		'version': '6.3.0',
		'main': 'https://unicode.org/Public/6.3.0/ucd/UnicodeData.txt',
		'scripts': 'https://unicode.org/Public/6.3.0/ucd/Scripts.txt',
		'script-extensions': 'https://unicode.org/Public/6.3.0/ucd/ScriptExtensions.txt',
		'blocks': 'https://unicode.org/Public/6.3.0/ucd/Blocks.txt',
		'properties': 'https://unicode.org/Public/6.3.0/ucd/PropList.txt',
		'derived-core-properties': 'https://unicode.org/Public/6.3.0/ucd/DerivedCoreProperties.txt',
		'derived-normalization-properties': 'https://unicode.org/Public/6.3.0/ucd/DerivedNormalizationProps.txt',
		'composition-exclusions': 'https://unicode.org/Public/6.3.0/ucd/CompositionExclusions.txt',
		'case-folding': 'https://unicode.org/Public/6.3.0/ucd/CaseFolding.txt',
		'bidi-mirroring': 'https://unicode.org/Public/6.3.0/ucd/BidiMirroring.txt',
		'bidi-brackets': 'https://unicode.org/Public/6.3.0/ucd/BidiBrackets.txt',
		'line-break': 'https://unicode.org/Public/6.3.0/ucd/LineBreak.txt',
		'word-break': 'https://unicode.org/Public/6.3.0/ucd/auxiliary/WordBreakProperty.txt'
	},
	{
		'version': '7.0.0',
		'main': 'https://unicode.org/Public/7.0.0/ucd/UnicodeData.txt',
		'scripts': 'https://unicode.org/Public/7.0.0/ucd/Scripts.txt',
		'script-extensions': 'https://unicode.org/Public/7.0.0/ucd/ScriptExtensions.txt',
		'blocks': 'https://unicode.org/Public/7.0.0/ucd/Blocks.txt',
		'properties': 'https://unicode.org/Public/7.0.0/ucd/PropList.txt',
		'derived-core-properties': 'https://unicode.org/Public/7.0.0/ucd/DerivedCoreProperties.txt',
		'derived-normalization-properties': 'https://unicode.org/Public/7.0.0/ucd/DerivedNormalizationProps.txt',
		'composition-exclusions': 'https://unicode.org/Public/7.0.0/ucd/CompositionExclusions.txt',
		'case-folding': 'https://unicode.org/Public/7.0.0/ucd/CaseFolding.txt',
		'bidi-mirroring': 'https://unicode.org/Public/7.0.0/ucd/BidiMirroring.txt',
		'bidi-brackets': 'https://unicode.org/Public/7.0.0/ucd/BidiBrackets.txt',
		'line-break': 'https://unicode.org/Public/7.0.0/ucd/LineBreak.txt',
		'word-break': 'https://unicode.org/Public/7.0.0/ucd/auxiliary/WordBreakProperty.txt'
	},
	{
		'version': '8.0.0',
		'main': 'https://unicode.org/Public/8.0.0/ucd/UnicodeData.txt',
		'scripts': 'https://unicode.org/Public/8.0.0/ucd/Scripts.txt',
		'script-extensions': 'https://unicode.org/Public/8.0.0/ucd/ScriptExtensions.txt',
		'blocks': 'https://unicode.org/Public/8.0.0/ucd/Blocks.txt',
		'properties': 'https://unicode.org/Public/8.0.0/ucd/PropList.txt',
		'derived-core-properties': 'https://unicode.org/Public/8.0.0/ucd/DerivedCoreProperties.txt',
		'derived-normalization-properties': 'https://unicode.org/Public/8.0.0/ucd/DerivedNormalizationProps.txt',
		'composition-exclusions': 'https://unicode.org/Public/8.0.0/ucd/CompositionExclusions.txt',
		'case-folding': 'https://unicode.org/Public/8.0.0/ucd/CaseFolding.txt',
		'bidi-mirroring': 'https://unicode.org/Public/8.0.0/ucd/BidiMirroring.txt',
		'bidi-brackets': 'https://unicode.org/Public/8.0.0/ucd/BidiBrackets.txt',
		'line-break': 'https://unicode.org/Public/8.0.0/ucd/LineBreak.txt',
		'word-break': 'https://unicode.org/Public/8.0.0/ucd/auxiliary/WordBreakProperty.txt'
	},
	{
		'version': '9.0.0',
		'main': 'https://unicode.org/Public/9.0.0/ucd/UnicodeData.txt',
		'scripts': 'https://unicode.org/Public/9.0.0/ucd/Scripts.txt',
		'script-extensions': 'https://unicode.org/Public/9.0.0/ucd/ScriptExtensions.txt',
		'blocks': 'https://unicode.org/Public/9.0.0/ucd/Blocks.txt',
		'properties': 'https://unicode.org/Public/9.0.0/ucd/PropList.txt',
		'derived-core-properties': 'https://unicode.org/Public/9.0.0/ucd/DerivedCoreProperties.txt',
		'derived-normalization-properties': 'https://unicode.org/Public/9.0.0/ucd/DerivedNormalizationProps.txt',
		'composition-exclusions': 'https://unicode.org/Public/9.0.0/ucd/CompositionExclusions.txt',
		'case-folding': 'https://unicode.org/Public/9.0.0/ucd/CaseFolding.txt',
		'bidi-mirroring': 'https://unicode.org/Public/9.0.0/ucd/BidiMirroring.txt',
		'bidi-brackets': 'https://unicode.org/Public/9.0.0/ucd/BidiBrackets.txt',
		'line-break': 'https://unicode.org/Public/9.0.0/ucd/LineBreak.txt',
		'word-break': 'https://unicode.org/Public/9.0.0/ucd/auxiliary/WordBreakProperty.txt'
	},
	{
		'version': '10.0.0',
		'main': 'https://unicode.org/Public/10.0.0/ucd/UnicodeData.txt',
		'scripts': 'https://unicode.org/Public/10.0.0/ucd/Scripts.txt',
		'script-extensions': 'https://unicode.org/Public/10.0.0/ucd/ScriptExtensions.txt',
		'blocks': 'https://unicode.org/Public/10.0.0/ucd/Blocks.txt',
		'properties': 'https://unicode.org/Public/10.0.0/ucd/PropList.txt',
		'derived-core-properties': 'https://unicode.org/Public/10.0.0/ucd/DerivedCoreProperties.txt',
		'derived-normalization-properties': 'https://unicode.org/Public/10.0.0/ucd/DerivedNormalizationProps.txt',
		'composition-exclusions': 'https://unicode.org/Public/10.0.0/ucd/CompositionExclusions.txt',
		'case-folding': 'https://unicode.org/Public/10.0.0/ucd/CaseFolding.txt',
		'bidi-mirroring': 'https://unicode.org/Public/10.0.0/ucd/BidiMirroring.txt',
		'bidi-brackets': 'https://unicode.org/Public/10.0.0/ucd/BidiBrackets.txt',
		'line-break': 'https://unicode.org/Public/10.0.0/ucd/LineBreak.txt',
		'word-break': 'https://unicode.org/Public/10.0.0/ucd/auxiliary/WordBreakProperty.txt'
	},
	{
		'version': '11.0.0',
		'main': 'https://unicode.org/Public/11.0.0/ucd/UnicodeData.txt',
		'scripts': 'https://unicode.org/Public/11.0.0/ucd/Scripts.txt',
		'script-extensions': 'https://unicode.org/Public/11.0.0/ucd/ScriptExtensions.txt',
		'blocks': 'https://unicode.org/Public/11.0.0/ucd/Blocks.txt',
		'properties': 'https://unicode.org/Public/11.0.0/ucd/PropList.txt',
		'derived-core-properties': 'https://unicode.org/Public/11.0.0/ucd/DerivedCoreProperties.txt',
		'derived-normalization-properties': 'https://unicode.org/Public/11.0.0/ucd/DerivedNormalizationProps.txt',
		'composition-exclusions': 'https://unicode.org/Public/11.0.0/ucd/CompositionExclusions.txt',
		'case-folding': 'https://unicode.org/Public/11.0.0/ucd/CaseFolding.txt',
		'bidi-mirroring': 'https://unicode.org/Public/11.0.0/ucd/BidiMirroring.txt',
		'bidi-brackets': 'https://unicode.org/Public/11.0.0/ucd/BidiBrackets.txt',
		'line-break': 'https://unicode.org/Public/11.0.0/ucd/LineBreak.txt',
		'word-break': 'https://unicode.org/Public/11.0.0/ucd/auxiliary/WordBreakProperty.txt',
		// Emoji, Emoji_Presentation, Emoji_Modifier, Emoji_Modifier_Base, Emoji_Component, Extended_Pictographic
		'emoji': 'https://unicode.org/Public/emoji/11.0/emoji-data.txt',
		// Emoji_Keycap_Sequence, Emoji_Flag_Sequence, Emoji_Modifier_Sequence
		'emoji-sequences': 'https://unicode.org/Public/emoji/11.0/emoji-sequences.txt',
		// Emoji_ZWJ_Sequence
		'emoji-zwj-sequences': 'https://unicode.org/Public/emoji/11.0/emoji-zwj-sequences.txt',
		// TR39 Security: homogrpah attack prevention
		//   http://unicode.org/reports/tr39/restrictions.html
		//   http://unicode.org/reports/tr39/#Confusable_Detection
		//   https://dev.to/loganmeetsworld/homographs-attack--5a1p
		'security-identifier-status': 'https://www.unicode.org/Public/security/11.0.0/IdentifierStatus.txt',
		'security-identifier-type': 'https://www.unicode.org/Public/security/11.0.0/IdentifierType.txt',
		'security-confusables': 'https://www.unicode.org/Public/security/11.0.0/confusables.txt',
		'security-confusables-summary': 'https://www.unicode.org/Public/security/11.0.0/confusablesSummary.txt',
		'security-intentional': 'https://www.unicode.org/Public/security/11.0.0/intentional.txt',
	},
	{
		'version': '12.0.0',
		'main': 'https://unicode.org/Public/12.0.0/ucd/UnicodeData-12.0.0d6.txt',
		'scripts': 'https://unicode.org/Public/12.0.0/ucd/Scripts-12.0.0d15.txt',
		'script-extensions': 'https://unicode.org/Public/12.0.0/ucd/ScriptExtensions-12.0.0d7.txt',
		'blocks': 'https://unicode.org/Public/12.0.0/ucd/Blocks-12.0.0d1.txt',
		'properties': 'https://unicode.org/Public/12.0.0/ucd/PropList-12.0.0d17.txt',
		'derived-core-properties': 'https://unicode.org/Public/12.0.0/ucd/DerivedCoreProperties-12.0.0d17.txt',
		'derived-normalization-properties': 'https://unicode.org/Public/12.0.0/ucd/DerivedNormalizationProps-12.0.0d11.txt',
		'composition-exclusions': 'https://unicode.org/Public/12.0.0/ucd/CompositionExclusions-12.0.0d1.txt',
		'case-folding': 'https://unicode.org/Public/12.0.0/ucd/CaseFolding-12.0.0d1.txt',
		'bidi-mirroring': 'https://unicode.org/Public/12.0.0/ucd/BidiMirroring-12.0.0d1.txt',
		'bidi-brackets': 'https://unicode.org/Public/12.0.0/ucd/BidiBrackets-12.0.0d1.txt',
		'line-break': 'https://unicode.org/Public/12.0.0/ucd/LineBreak-12.0.0d6.txt',
		'word-break': 'https://unicode.org/Public/12.0.0/ucd/auxiliary/WordBreakProperty-12.0.0d15.txt',
		// Emoji, Emoji_Presentation, Emoji_Modifier, Emoji_Modifier_Base, Emoji_Component, Extended_Pictographic
		'emoji': 'https://unicode.org/Public/emoji/12.0/emoji-data.txt',
		// Emoji_Keycap_Sequence, Emoji_Flag_Sequence, Emoji_Modifier_Sequence
		'emoji-sequences': 'https://unicode.org/Public/emoji/12.0/emoji-sequences.txt',
		// Emoji_ZWJ_Sequence
		'emoji-zwj-sequences': 'https://unicode.org/Public/emoji/12.0/emoji-zwj-sequences.txt',
		// TR39 Security: homogrpah attack prevention
		//   http://unicode.org/reports/tr39/restrictions.html
		//   http://unicode.org/reports/tr39/#Confusable_Detection
		//   https://dev.to/loganmeetsworld/homographs-attack--5a1p
		'security-identifier-status': 'https://www.unicode.org/Public/security/12.0.0/IdentifierStatus.txt',
		'security-identifier-type': 'https://www.unicode.org/Public/security/12.0.0/IdentifierType.txt',
		'security-confusables': 'https://www.unicode.org/Public/security/12.0.0/confusables.txt',
		'security-confusables-summary': 'https://www.unicode.org/Public/security/12.0.0/confusablesSummary.txt',
		'security-intentional': 'https://www.unicode.org/Public/security/12.0.0/intentional.txt',
	},
];

module.exports = resources;
