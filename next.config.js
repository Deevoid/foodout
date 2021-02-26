module.exports = {
	webpack: (config, { defaultLoaders }) => {
		config.module.rules.push({
			test: /\.scss$/,
			use: [
				defaultLoaders.babel,
				{
					loader: require("styled-jsx/webpack").loader,
					options: {
						type: (fileName, options) => options.query.type || "scoped",
					},
				},
			],
		});

    config.module.rules.push({
        test: /\.css$/i,
        use: [ 'css-loader', 'postcss-loader'],
		});

    

		return config;
	},
};