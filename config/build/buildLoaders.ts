import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[]  {

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }


    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env'],
                "plugins": [
                    [
                        "i18next-extract",
                        {
                            locales: ["ru", "en"],
                            keyAsDefaultValue: true
                        }
                    ]
                ]
            }
        }
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const scssLoader = {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: (resourcePath: string) => Boolean(resourcePath.includes(".module.")),
                            localIdentName: options.isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]"
                        },
                    },
                },
                // Compiles Sass to CSS
                "sass-loader",
            ],
        }
    return [
        svgLoader,
        babelLoader,
        fileLoader,
        typescriptLoader,
        scssLoader
    ]
}