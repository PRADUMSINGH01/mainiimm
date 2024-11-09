import Layout from './Layout';
import StatsComponent from './UserStats';
import Alert from './Alert';
import WorkingOnItPage from './WeAreWorking';
import DailyStreak from './dailyStrick';

export default function Dashboard() {
 
    const statsData = [
        { subject: 'Quant', score: 30, total: 3000 },
        { subject: 'DILR', score: 40, total: 3000 },
        { subject: 'Reading', score: 25, total: 500 },
        { subject: 'Mocks', score: 45, total: 200 },
      ];

    return (
        <Layout>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6"></h2>
            <DailyStreak maxDays={365} streakDays={0}/>
{/*             
            <Alert type="success" message="You have successfully completed the last set of questions!" duration={3000} />
            <Alert type="error" message="There was an error processing your request." duration={5000} />
            <Alert type="warning" message="Remember to practice daily to maintain your streak!" duration={4000} />
            <Alert type="info" message="New questions have been added to your dashboard." duration={6000} /> */}

            <StatsComponent stats={statsData} />
            </Layout>
    );
}
