module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb",
        "airbnb/hooks",
        "airbnb-typescript",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier",
        "next/core-web-vitals",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        project: "./tsconfig.eslint.json",
        sourceType: "module",
        tsconfigRootDir: __dirname,
    },
    plugins: [
        "import",
        "jsx-a11y",
        "prefer-arrow",
        "react",
        "react-hooks",
        "@typescript-eslint",
    ],
    root: true,
    rules: {
        "react/no-array-index-key": "off", // 今回は静的なサイトなので、keyにindexを使用することによる危険性はない筈

        "import/prefer-default-export": "off", // default exportよりnamed export派なので
        "import/no-default-export": "error", // default exportよりnamed export派なので
        "@typescript-eslint/no-unused-expressions": [
            "error",
            { allowTernary: true },
        ], // 返り値がvoidの三項演算子(judge?a:b)を許容する スタイリッシュに書けて好きなので
        "padding-line-between-statements": [
            "error",
            {
                blankLine: "always",
                prev: "*",
                next: "return",
            },
        ], // return文の前に空行を入れることを強制
        "@typescript-eslint/no-unused-vars": [
            "warn",
            // NOTE
            {
                vars: "all",
                args: "after-used",
                argsIgnorePattern: "_",
                ignoreRestSiblings: false,
                varsIgnorePattern: "_",
            },
        ], // "_"以外の名前の使用されていない変数を禁じる
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            },
        ], // インポート時にjs, jsx, ts, tsxのファイルであればファイル拡張子を省略する
        "react/jsx-filename-extension": [
            "error",
            {
                extensions: [".jsx", ".tsx"],
            },
        ], // JSX のファイル拡張子を制限する eslint-config-airbnb で .jsx のみに限定されているので、.tsx を追加
        "react/jsx-props-no-spreading": [
            "error",
            {
                html: "enforce",
                custom: "enforce",
                explicitSpread: "ignore",
            },
        ], // props の記述にスプレッド構文を許さない eslint-config-airbnb にてすべて禁止されているが、<Foo {...{ bar, baz } /}> のように個々の props を明記する書き方のみ許容
        "react/react-in-jsx-scope": "off", // JSX 記述を使用する場合に react モジュールを React としてインポートすることを強制 新しい JSX 変換形式を用いる場合はインポートが不要になるためこの設定を無効化
        "prefer-arrow/prefer-arrow-functions": [
            "error",
            {
                disallowPrototype: true,
                singleReturnOnly: false,
                classPropertiesAllowed: false,
            },
        ], // 関数定義をアロー関数式に統一
        "react/function-component-definition": [
            "error",
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function",
            },
        ], // 通常の関数だろうが無名関数だろうが、関数定義をfunction (props){...}ではなく、(props)=>{...}に統一する
    },
    overrides: [
        {
            files: ["*.tsx"],
            rules: {
                "react/prop-types": "off", // コンポーネントの props に型チェックを行うための propTypes プロパティ19の定義を強制するルール。eslint-config-airbnb で設定されているが、TypeScript の場合は不要なのでファイル拡張子が .tsx の場合に無効化するよう設定を上書き
                "react/require-default-props": "off", // ts+関数コンポーネントなので、default propsの警告は不要だし、デフォルト引数で書くと怒られるので
            },
        },
    ],
    settings: {
        "import/resolver": {
            node: {
                paths: ["src"],
            },
        },
    },
};
