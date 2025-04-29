import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { BellIcon, SearchIcon } from 'lucide-react';

interface AgentData {
  id: string;
  name: string;
  suburbs: string[];
  adGroups: number;
  impressions: number;
  ctr: number;
  topPosition: number;
  estSpend: number;
  actualSpend: number;
  hasAlert: boolean;
}

const mockAgents: AgentData[] = [
  {
    id: '1',
    name: 'Stephen Cole',
    suburbs: ['Broome'],
    adGroups: 3,
    impressions: 2714,
    ctr: 9.99,
    topPosition: 55.02,
    estSpend: 5500,
    actualSpend: 6102,
    hasAlert: true,
  },
  {
    id: '2',
    name: 'Claude Makdesi',
    suburbs: ['Mordialloc', 'Edithvale'],
    adGroups: 3,
    impressions: 2755,
    ctr: 6.13,
    topPosition: 50.88,
    estSpend: 9000,
    actualSpend: 8723,
    hasAlert: false,
  },
];

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation */}
      <header className="bg-white shadow-sm">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center flex-1">
            <div className="relative w-64">
              <Input
                type="text"
                placeholder="Search Agent / Suburb / Ad Group"
                className="pl-10"
              />
              <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <BellIcon className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="px-6 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-3 lg:grid-cols-5">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Spend This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$78,240</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Impressions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">158,342</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average CTR</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6.32%</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Clicks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">9,356</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ad Groups Overspending</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">12</div>
            </CardContent>
          </Card>
        </div>

        {/* Agents Table */}
        <Card>
          <CardHeader>
            <CardTitle>Agents Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Agent Name</TableHead>
                  <TableHead>Suburb(s)</TableHead>
                  <TableHead>Ad Groups</TableHead>
                  <TableHead>Impressions</TableHead>
                  <TableHead>CTR</TableHead>
                  <TableHead>#1 Position %</TableHead>
                  <TableHead>Est. Spend</TableHead>
                  <TableHead>Actual Spend</TableHead>
                  <TableHead>Alert</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockAgents.map((agent) => (
                  <TableRow key={agent.id} className="cursor-pointer hover:bg-gray-50">
                    <TableCell className="font-medium">{agent.name}</TableCell>
                    <TableCell>{agent.suburbs.join(', ')}</TableCell>
                    <TableCell>{agent.adGroups}</TableCell>
                    <TableCell>{agent.impressions.toLocaleString()}</TableCell>
                    <TableCell>{agent.ctr}%</TableCell>
                    <TableCell>{agent.topPosition}%</TableCell>
                    <TableCell>${agent.estSpend.toLocaleString()}</TableCell>
                    <TableCell>${agent.actualSpend.toLocaleString()}</TableCell>
                    <TableCell>
                      {agent.hasAlert ? (
                        <span className="text-red-500">⚠️ Over</span>
                      ) : (
                        <span className="text-green-500">✅</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;
