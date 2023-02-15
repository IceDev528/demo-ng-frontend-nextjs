import { FC } from 'react';
import { useRouter } from 'next/router';
import { IQuest } from 'types/quest';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { LogoWrapper } from '..';
import styled, { DefaultTheme } from 'styled-components';
import SwordIcon from '@/components/assets/sword';

const QuestWrapper = styled.div<{ theme: DefaultTheme }>`
	position: relative;
	max-width: 755px;
	padding: ${({ theme }) => theme.spacing['5xs']};
	border-radius: ${({ theme }) => theme.radius.xl};
	border: 1px solid rgba(58, 58, 58, 0.5);
	background: ${({ theme }) => theme.colors.lighterBlack};
	margin: 108px auto;
`;

const Hero = styled.img<{ theme: DefaultTheme }>`
	width: 100%;
	aspect-ratio: 2.8 / 1;
	border-radius: ${({ theme }) => theme.radius.l} ${({ theme }) => theme.radius.l} 0px 0px;
`;

const TitleWrapper = styled.label<{ theme: DefaultTheme }>`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Arrow = styled.div<{ theme: DefaultTheme }>`
	width: fit-content;
	height: 3px;
	width: 139px;
	background: linear-gradient(90deg, #6d5d43 0%, rgba(89, 80, 63, 0) 100%);
	margin-left: ${({ theme }) => theme.spacing['6xs']};

	&.left {
		transform: matrix(-1, 0, 0, 1, 0, 0);
		margin-right: ${({ theme }) => theme.spacing['6xs']};
		margin-left: 0;
	}
`;

const Circle = styled.img<{ theme: DefaultTheme }>`
	width: 9px;
	height: 9px;
`;

const Title = styled.label<{ theme: DefaultTheme }>`
	font-family: 'Cinzel';
	font-style: normal;
	font-weight: 700;
	font-size: 20px;
	line-height: 27px;
	padding: ${({ theme }) => theme.spacing['3xs']};
	color: ${({ theme }) => theme.colors.white};
	text-align: center;
`;

const InfoContainer = styled.div<{ theme: DefaultTheme }>`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing['4xs']};
	padding-left: ${({ theme }) => theme.spacing['2xs']};
	padding-right: ${({ theme }) => theme.spacing['2xs']};
`;

const InfoWrapper = styled.label<{ theme: DefaultTheme }>`
	display: grid;
	grid-template-columns: repeat(2, 1fr);

	@media screen and (max-width: 400px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const InfoGroup = styled.div<{ theme: DefaultTheme }>`
	display: flex;
	align-items: center;
`;

const InfoTypo = styled.p<{ theme: DefaultTheme }>`
	font-family: 'Lato', sans-serif;
	font-size: 14px;
	line-height: 16.8px;
	margin-top: 0;
	min-width: 60px;
	&.gold {
		color: ${({ theme }) => theme.colors.gold};
		margin-right: ${({ theme }) => theme.spacing['2xs']};
	}
	color: ${({ theme }) => theme.colors.white};
`;

const Description = styled.label<{ theme: DefaultTheme }>`
	font-family: 'Lato', sans-serif;
	font-weight: 400;
	font-style: normal;
	font-size: 14px;
	line-height: 17px;
	color: ${({ theme }) => theme.colors.grey};
`;

const FooterWrapper = styled.div<{ theme: DefaultTheme }>`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: ${({ theme }) => theme.spacing['5xs']};
	margin-top: ${({ theme }) => theme.spacing.xl};
	padding-left: ${({ theme }) => theme.spacing['2xs']};
	padding-right: ${({ theme }) => theme.spacing['2xs']};
`;

const FooterLabel = styled.div<{ theme: DefaultTheme }>`
	font-family: 'Cinzel';
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 19px;
	text-transform: capitalize;
	color: ${({ theme }) => theme.colors.white};
`;

const FooterContainer = styled.div<{ theme: DefaultTheme }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ExpComp = styled.img<{ theme: DefaultTheme }>`
	display: flex;
	justify-content: space-between;
`;

const Action = styled.button<{ theme: DefaultTheme }>`
	border: 0.6px solid ${({ theme }) => theme.colors.gold};
	width: 92px;
	height: 35px;
	radius: ${({ theme }) => theme.radius.s};
	font-family: 'Cinzel';
	font-style: normal;
	font-weight: 700;
	font-size: 12px;
	line-height: 16px;
	text-align: center;
	text-transform: capitalize;
	color: ${({ theme }) => theme.colors.white};
	background: transparent;
	cursor: pointer;
`;

const Close = styled.img<{ theme: DefaultTheme }>`
	position: absolute;
	top: ${({ theme }) => theme.spacing['3xs']};
	right: ${({ theme }) => theme.spacing['3xs']};
	cursor: pointer;
`;

interface IQuestDetails {
	quest: IQuest;
}

const questDetails: FC<IQuestDetails> = ({ quest }) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const router = useRouter();

	const handleBack = () => {
		router.push('/');
	};

	return (
		<>
			<Head>
				<title>Node Guardians</title>
				<meta name='description' content='Node Guardians frontend' />
			</Head>

			<main>
				<LogoWrapper>
					<img src='/logo-text.svg' alt='logo' />
				</LogoWrapper>
				<QuestWrapper>
					<Hero src={quest.cover}></Hero>
					<InfoContainer>
						<TitleWrapper>
							<Arrow className='left'></Arrow>
							<Circle src='/circle.svg'></Circle>
							<Title>Delegate call detection</Title>
							<Circle src='/circle.svg'></Circle>
							<Arrow></Arrow>
						</TitleWrapper>
						<InfoWrapper>
							<div>
								<InfoGroup>
									<InfoTypo className='gold'>Skill tree</InfoTypo>
									<InfoTypo className='blue'>{quest.skillTree}</InfoTypo>
								</InfoGroup>
								<InfoGroup>
									<InfoTypo className='gold'>Skill</InfoTypo>
									<InfoTypo>{quest.skill}</InfoTypo>
								</InfoGroup>
							</div>
							<div>
								<InfoGroup>
									<InfoTypo className='gold'>Difficulty</InfoTypo>
									<InfoTypo>
										{[0, 1, 2, 3, 4].map((idx: number) => (
											<SwordIcon key={idx} active={idx < quest.difficulty ? true : false} />
										))}
									</InfoTypo>
								</InfoGroup>
								<InfoGroup>
									<InfoTypo className='gold'>Type</InfoTypo>
									<InfoTypo>{quest.type}</InfoTypo>
								</InfoGroup>
							</div>
						</InfoWrapper>
						<Description>
							Trading of cryptoassets in DeFi relies on new and unique matching mechanisms. One widely used mechanism in
							traditional finance is the centralised limit order book, which entails keeping electronic records of all
							outstanding orders. Likewise, Trading of cryptoassets in DeFi relies on new and unique matching
							mechanisms.{' '}
						</Description>
					</InfoContainer>
					<FooterWrapper>
						<FooterLabel>QUEST REWARDS</FooterLabel>
						<FooterContainer>
							<ExpComp src='/reward.svg'></ExpComp>
							<Action onClick={handleBack}>Go Back</Action>
						</FooterContainer>
					</FooterWrapper>
					<Close src='/close.svg' onClick={handleBack}></Close>
				</QuestWrapper>
			</main>
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
	const response = await fetch(`http://localhost:3000/api/quests/${params?.questId}`);
	const quest = await response.json();

	return {
		props: {
			quest
		}
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const response = await fetch('http://localhost:3000/api/quests');
	const quests = await response.json();

	console.log(quests);
	const paths = quests?.map((quest: IQuest) => {
		return {
			params: {
				questId: `${quest?.id}`
			}
		};
	});

	console.log('paths', paths);

	return {
		paths,
		fallback: false
	};
};

export default questDetails;
