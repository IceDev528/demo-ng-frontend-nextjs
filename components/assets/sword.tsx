import styled, { DefaultTheme } from 'styled-components';

interface ISword {
	active: boolean;
}

const SwordSVG = styled.svg<{ theme: DefaultTheme }>`
	&.gold {
		path {
			fill: ${({ theme }) => theme.colors.gold};
		}
	}
`;

const SwordIcon = ({ active }: ISword) => {
	return (
		<SwordSVG
			width='11'
			height='11'
			viewBox='0 0 11 11'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={active ? 'gold' : ''}
		>
			<path
				d='M3.01378 1.17309H1.88753L7.16682 6.45202L7.75341 5.90067M10.6629 9.45514L10.1701 9.94784C10.1159 10.0022 10.0514 10.0454 9.98046 10.0748C9.9095 10.1042 9.83343 10.1194 9.7566 10.1194C9.67978 10.1194 9.60371 10.1042 9.53275 10.0748C9.46178 10.0454 9.39733 10.0022 9.34306 9.94784L7.51291 8.11782L5.94085 9.67803L5.11376 8.851L5.94672 8.0181L0.714355 2.7861V0H3.50065L8.73301 5.232L9.56596 4.39911L10.3931 5.22614L8.82686 6.79222L10.657 8.62225C10.8917 8.85687 10.8916 9.22639 10.6629 9.45514Z'
				fill='#8E8E8E4D'
			/>
		</SwordSVG>
	);
};

export default SwordIcon;
