import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface AgentProfile {
  id: string;
  name: string;
  email: string;
  suburbs: string[];
  dealLink: string;
  adGroups: string[];
  reportFrequency: 'monthly' | 'quarterly';
}

const mockAgent: AgentProfile = {
  id: '1',
  name: 'Stephen Cole',
  email: 'stephen.cole@example.com',
  suburbs: ['Broome'],
  dealLink: 'https://pipedrive.com/deals/agent-stephen',
  adGroups: ['Broome Properties', 'Broome Rentals', 'Broome Land'],
  reportFrequency: 'monthly',
};

const AgentDetail: React.FC = () => {
  const { agentId } = useParams<{ agentId: string }>();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Agent Profile Header */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex items-start gap-6">
              <Avatar className="h-20 w-20">
                <AvatarImage src={`/agents/${agentId}.jpg`} />
                <AvatarFallback>{mockAgent.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold mb-2">{mockAgent.name}</h1>
                <div className="text-gray-500 space-y-1">
                  <p>Email: {mockAgent.email}</p>
                  <p>Suburbs: {mockAgent.suburbs.join(', ')}</p>
                  <p>
                    Deal Link:{' '}
                    <a href={mockAgent.dealLink} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      Pipedrive
                    </a>
                  </p>
                </div>
              </div>
              <div className="ml-auto">
                <Button variant="default">Preview Next Report</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="adGroups">Ad Groups</TabsTrigger>
            <TabsTrigger value="reportSettings">Report Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">CTR Trend</p>
                      <p className="text-2xl font-bold">9.99%</p>
                      <div className="h-2 bg-gray-200 rounded-full mt-2">
                        <div className="h-2 bg-green-500 rounded-full" style={{ width: '75%' }} />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Spend vs Target</p>
                      <p className="text-2xl font-bold">$6,102 / $5,500</p>
                      <div className="h-2 bg-gray-200 rounded-full mt-2">
                        <div className="h-2 bg-red-500 rounded-full" style={{ width: '110%' }} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="adGroups">
            <Card>
              <CardHeader>
                <CardTitle>Active Ad Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockAgent.adGroups.map((group) => (
                    <div key={group} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span>{group}</span>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reportSettings">
            <Card>
              <CardHeader>
                <CardTitle>Report Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium">Report Frequency</label>
                    <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                      <option value="monthly" selected={mockAgent.reportFrequency === 'monthly'}>Monthly</option>
                      <option value="quarterly" selected={mockAgent.reportFrequency === 'quarterly'}>Quarterly</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Custom Email Notes</label>
                    <textarea 
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      rows={4}
                      placeholder="Add any custom notes to include in the report email..."
                    />
                  </div>
                  <Button>Save Settings</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AgentDetail;
