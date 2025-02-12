type CKEditorConfig = {
	placeholder?: string;
	plugins?: Array<string | (() => string)>;
	removePlugins?: Array<string | (() => string)>;
	language?: string | CKlangConfig;
	htmlEditorConfig?: {
		mediaEmbed: {
			previewsInData: boolean;
		};
	};
	fontColor?: {
		colors: { color: string; label: string }[];
	};
	fontBackgroundColor?: {
		colors: { color: string; label: string }[];
	};
	link?: {
		addTargetToExternalLinks: boolean;
	};
};

type CKlangConfig = {
	content?: string;
	textPartLanguage?: {
		languageCode: string;
		textDirection: 'ltr' | 'rtl';
		title: string;
	};
	ui?: string;
};
