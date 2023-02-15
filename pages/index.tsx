import Head from 'next/head';
import { useQuery } from '@tanstack/react-query';
import Card from '@/components/card';
import { IQuest } from '@/types/quest';
import styled, { DefaultTheme } from 'styled-components';

export const LogoWrapper = styled.div<{ theme: DefaultTheme }>`
	position: fixed;
	top: 0;
	left: 0;
	padding-top: ${({ theme }) => theme.spacing.xs};
	padding-bottom: ${({ theme }) => theme.spacing.xs};
	padding-left: ${({ theme }) => theme.spacing.m};
	background: ${({ theme }) => theme.colors.black};
	width: 100%;
	z-index: 1;
`;

const QuestWrapper = styled.div<{ theme: DefaultTheme }>`
	display: grid;
	grid-row-gap: ${({ theme }) => theme.spacing.s};
	grid-column-gap: ${({ theme }) => theme.spacing.s};
	grid-template-columns: repeat(3, 1fr);
	max-width: 1044px;
	margin: 60px auto;
	padding-top: ${({ theme }) => theme.spacing.xl};

	@media screen and (max-width: 992px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const getQuests = async () => {
	const res = await fetch('/api/quests');
	return res.json();
};

export default function Home() {
	// Fetcher function

	const questData = useQuery({
		queryKey: ['data', 1],
		queryFn: () => getQuests()
	});

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
					{questData?.data?.map((quest: IQuest, idx: number) => (
						<Card key={idx} data={quest}></Card>
					))}
				</QuestWrapper>
			</main>
		</>
	);
}
