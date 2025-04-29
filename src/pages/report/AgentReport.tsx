import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

interface ReportData {
  agent: {
    name: string;
    suburb: string;
  };
  metrics: {
    impressions: number;
    clicks: number;
    ctr: number;
    topFourPosition: number;
    topPosition: number;
    directCalls: number;
  };
  budget: {
    estimated: number;
    actual: number;
  };
  keywords: string[];
  calls: Array<{
    date: string;
    time: string;
    duration: string;
    caller: string;
    received: boolean;
  }>;
}

const mockReport: ReportData = {
  agent: {
    name: 'Stephen Cole',
    suburb: 'Broome',
  },
  metrics: {
    impressions: 2714,
    clicks: 271,
    ctr: 9.99,
    topFourPosition: 63.83,
    topPosition: 55.02,
    directCalls: 8,
  },
  budget: {
    estimated: 5500,
    actual: 6102,
  },
  keywords: [
    'Real Estate Broome',
    'Real Estate Agents Broome',
    'Property for Sale Broome',
    'Houses for Sale Broome',
  ],
  calls: [
    {
      date: 'Apr 5, 2025',
      time: '1:30 PM',
      duration: '23s',
      caller: '0400 894 216',
      received: true,
    },
    {
      date: 'Mar 11, 2025',
      time: '2:30 PM',
      duration: '44s',
      caller: '0493 385 084',
      received: true,
    },
  ],
};

const AgentReport: React.FC = () => {
  const { agentId, month } = useParams<{ agentId: string; month: string }>();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Your Monthly Ad Performance – {month}</h1>
          <p className="text-xl opacity-90">
            {mockReport.agent.name} • {mockReport.agent.suburb}
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8 space-y-8">
        {/* Metrics Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(mockReport.metrics).map(([key, value]) => (
            <Card key={key}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {typeof value === 'number' && key.toLowerCase().includes('ctr') 
                    ? `${value}%`
                    : value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Budget Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Budget Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Actual Spend</span>
                <span>${mockReport.budget.actual}</span>
              </div>
              <Progress 
                value={(mockReport.budget.actual / mockReport.budget.estimated) * 100} 
                className="h-2"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>Estimated Budget</span>
                <span>${mockReport.budget.estimated}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Keywords */}
        <Card>
          <CardHeader>
            <CardTitle>Your ads showed up for these searches:</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {mockReport.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Ad Preview */}
        <Card>
          <CardHeader>
            <CardTitle>Ad Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg p-4 space-y-2">
              <div className="text-sm text-green-700">Ad • raywhitebroome.com.au</div>
              <div className="text-blue-800 font-medium">
                Real Estate Broome | Call {mockReport.agent.name}
              </div>
              <div className="text-gray-600 text-sm">
                Thinking of Selling Real Estate in Broome? Expert local knowledge...
              </div>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm">Call 0433 349 777</Button>
                <Button variant="outline" size="sm">Website</Button>
              </div>
              <div className="text-xs text-gray-500 mt-2">
                Shown on Mobile (iPhone)
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Calls</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-gray-500">
                    <th className="pb-2">Date</th>
                    <th className="pb-2">Time</th>
                    <th className="pb-2">Duration</th>
                    <th className="pb-2">Caller</th>
                    <th className="pb-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mockReport.calls.map((call, index) => (
                    <tr key={index} className="border-t">
                      <td className="py-2">{call.date}</td>
                      <td>{call.time}</td>
                      <td>{call.duration}</td>
                      <td>{call.caller}</td>
                      <td>{call.received ? '✅ Received' : '❌ Missed'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Button variant="outline" className="w-full">
                See full call log
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Campaign Renewal */}
        <div className="text-center space-y-6 py-8">
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Renew Campaign – $9,600 for 12 Months
          </Button>
          <p className="text-sm text-gray-500">
            Have questions? Reply to this email or contact your campaign manager.
          </p>
          <p className="text-xs text-gray-400">
            This performance summary is based on data provided by Google Ads. All times are AEST.
          </p>
        </div>
      </main>
    </div>
  );
};

export default AgentReport;
