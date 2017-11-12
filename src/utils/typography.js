import Typography from 'typography'

const typography = new Typography({
	baseFontSize: '16px',
	baseFontWeight: 400,
	baseLineHeight: 1.65,
	headerFontFamily: ['Open Sans', 'Helvetica', 'sans-serif'],
	headerColor: 'white',
	bodyFontFamily: ['Open Sans', 'Helvetica', 'sans-serif'],
	bodyColor: 'white',
	googleFonts: [
		{
			name: 'Open Sans',
			styles: [
			'400',
			'700'
			],
		}
	],
})

export default typography