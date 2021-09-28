module.exports = {
	asString: {
		mixed: {
			input: [
				{
					media: 'screen and (min-width:1278px)',
					bar: 2
				},
				'screen and (min-width:1278px)',
				42
			]
		},
		simple: {
			input: [
				'screen and (min-width:1278px)',
				'screen and (min-width:100px)',
				'screen and (min-width:99px)'
			],
			output: [
				'screen and (min-width:99px)',
				'screen and (min-width:100px)',
				'screen and (min-width:1278px)'
			]
		},
		complex: {
			input: [
				'screen and (min-width:100px)',
				'screen and (min-width:99px)',
				'(min-width:99px)',
				'(min-width:300px)',
				'screen and (min-width:100px)',
				'screen and (min-width:100px) and (max-width:200px)',
				'screen and (min-width:250px)',
				'screen and (min-width:1278px)',
				'screen and (max-width:1277px)',
				'(max-width:1276px)',
				'print',
				'all',
				'screen',
				'xxx'
			],
			output: [
				'screen',
				'xxx',
				'all',
				'screen and (min-width:99px)',
				'(min-width:99px)',
				'screen and (min-width:100px)',
				'screen and (min-width:100px)',
				'screen and (min-width:100px) and (max-width:200px)',
				'screen and (min-width:250px)',
				'(min-width:300px)',
				'screen and (min-width:1278px)',
				'screen and (max-width:1277px)',
				'(max-width:1276px)',
				'print'
			]
		}
	},
	asObject: {
		mixed: {
			input: [
				{
					media: 'screen and (min-width:1278px)',
					bar: 2
				},
				'string',
				42
			]
		},
		simple: {
			input: [
				{
					media: 'screen and (min-width:1278px)',
					bar: 2
				},
				{
					media: 'screen and (min-width:100px)',
				},
				{
					media: 'screen and (min-width:99px)',
					foo: 1
				}
			],
			output: [
				{
					media: 'screen and (min-width:99px)',
					foo: 1
				},
				{
					media: 'screen and (min-width:100px)',
				},
				{
					media: 'screen and (min-width:1278px)',
					bar: 2
				}
			]
		},
		complex: {
			input: [
				{
					media: 'xxx'
				},
				{
					media: 'screen and (min-width:100px)'
				},
				{
					media: 'screen and (min-width:99px)'
				},
				{
					media: '(min-width:99px)',
					foo: 1
				},
				{
					media: 'print'
				},
				{
					media: '(min-width:300px)'
				},
				{
					media: 'screen and (min-width:100px)'
				},
				{
					media: 'screen and (min-width:100px) and (max-width:200px)',
					bar: 2
				},
				{
					media: 'screen'
				},
				{
					media: 'screen and (min-width:250px)'
				},
				{
					media: 'screen and (min-width:1278px)'
				},
				{
					media: 'all'
				},
				{
					media: 'screen and (max-width:1277px)'
				},
				{
					media: '(max-width:1276px)'
				}
			],
			output: [
				{
					media: 'xxx'
				},
				{
					media: 'screen'
				},
				{
					media: 'all'
				},
				{
					media: 'screen and (min-width:99px)'
				},
				{
					media: '(min-width:99px)',
					foo: 1
				},
				{
					media: 'screen and (min-width:100px)'
				},
				{
					media: 'screen and (min-width:100px)'
				},
				{
					media: 'screen and (min-width:100px) and (max-width:200px)',
					bar: 2
				},
				{
					media: 'screen and (min-width:250px)'
				},
				{
					media: '(min-width:300px)'
				},
				{
					media: 'screen and (min-width:1278px)'
				},
				{
					media: 'screen and (max-width:1277px)'
				},
				{
					media: '(max-width:1276px)'
				},
				{
					media: 'print'
				}
			]
		}
	}
};
