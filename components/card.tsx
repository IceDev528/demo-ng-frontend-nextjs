import styled, { DefaultTheme } from 'styled-components';
import { IQuest } from '@/types/quest';
import SwordIcon from './assets/sword';
import Link from 'next/link';

interface ICard {
	data: IQuest;
}

const CardWrapper = styled.div<{ theme: DefaultTheme }>`
	background: ${({ theme }) => theme.colors.lighterBlack};
	border: 1px solid rgba(58, 58, 58, 0.5);
	border-radius: ${({ theme }) => theme.radius.xl};
	padding: 6px;
	cursor: pointer;
	text-decoration: none;
`;

const CardCoverImg = styled.img<{ theme: DefaultTheme }>`
	border-radius: ${({ theme }) => theme.radius.l};
	width: 100%;
	aspect-ratio: 3 / 1;
`;

const CardTitle = styled.h4`
	font-family: 'Cinzel', sans-serif;
	color: ${({ theme }) => theme.colors.white};
	margin-top: ${({ theme }) => theme.spacing['5xs']};
	margin-bottom: ${({ theme }) => theme.spacing['4xs']};
`;

const CardInfoContainer = styled.div`
	padding: 0 ${({ theme }) => theme.radius.s};
`;

const CardInfoWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const CardInfo = styled.div`
	display: flex;
	align-items: center;
`;

const CardInfoTypo = styled.p<{ theme: DefaultTheme }>`
	font-family: 'Lato', sans-serif;
	font-size: 12px;
	line-height: 14px;
	margin-top: 0;
	min-width: 60px;
	&.gold {
		color: ${({ theme }) => theme.colors.gold};
		margin-right: ${({ theme }) => theme.spacing['2xs']};
	}
	&.blue {
		color: ${({ theme }) => theme.colors.blue};
	}
	color: ${({ theme }) => theme.colors.white};
`;

export default function Card({ data }: ICard) {
	return (
		<Link href={`/quests/${data?.id}`}>
			<CardWrapper>
				<CardCoverImg src={data.cover} alt='cover' />
				<CardInfoContainer>
					<CardTitle>{data.title}</CardTitle>
					<CardInfoWrapper>
						<div>
							<CardInfo>
								<CardInfoTypo className='gold'>Skill tree</CardInfoTypo>
								<CardInfoTypo className='blue'>{data.skillTree}</CardInfoTypo>
							</CardInfo>
							<CardInfo>
								<CardInfoTypo className='gold'>Skill</CardInfoTypo>
								<CardInfoTypo>{data.skill}</CardInfoTypo>
							</CardInfo>
							<CardInfo>
								<CardInfoTypo className='gold'>Type</CardInfoTypo>
								<CardInfoTypo>{data.type}</CardInfoTypo>
							</CardInfo>
						</div>
						<div>
							<CardInfo>
								<CardInfoTypo className='gold'>Difficulty</CardInfoTypo>
								<CardInfoTypo>
									{[0, 1, 2, 3, 4].map((idx: number) => (
										<SwordIcon key={idx} active={idx < data.difficulty ? true : false} />
									))}
								</CardInfoTypo>
							</CardInfo>
							<CardInfo>
								<CardInfoTypo className='gold'>Experience</CardInfoTypo>
								<CardInfoTypo>{data.experience}</CardInfoTypo>
							</CardInfo>
							<CardInfo>
								<CardInfoTypo className='gold'>Gold</CardInfoTypo>
								<CardInfoTypo>{data.gold}</CardInfoTypo>
							</CardInfo>
						</div>
					</CardInfoWrapper>
				</CardInfoContainer>
			</CardWrapper>
		</Link>
	);
}
