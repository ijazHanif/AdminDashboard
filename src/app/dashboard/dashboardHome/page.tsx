
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDateRangePicker } from "./components/date-range-picker";
import { MainNav } from "./components/main-nav";
import { Overview } from "./components/recentActivity";
import { RecentSales } from "./components/recent-sales";
import TeamSwitcher from "./components/team-switcher";
import { UserNav } from "./components/user-nav";
import { Search } from "./components/search";
import Analytics from "./components/Analytics";
import Reports from "./components/Reports";
import Notifications from "./components/Notifications";

interface Activity {
  title: string;
  time: string;
}

const recentActivities: Activity[] = [
  { title: "New Account Created - John Doe", time: "2 hours ago" },
  { title: "Label Added - Priority Shipping", time: "5 hours ago" },
  { title: "Invoice Generated - #1023", time: "1 day ago" },
  { title: "Outstanding Amount Updated - $200", time: "1 day ago" },
  { title: "Account Deleted - Jane Smith", time: "2 days ago" },
];

export default function DashboardPage() {
  return (
    <div className="">
      <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 px-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {/* Placeholder for the Cards */}
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 ">
                  <CardHeader>
                    <CardTitle>Recent Activities</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview recentActivities={recentActivities} />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                    <CardDescription>
                      You made 265 Transactions this month.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentSales />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <Analytics /> {/* Added the Analytics component here */}
            </TabsContent>
            <TabsContent value='reports' className="space-y-4">
              <Reports/>
            </TabsContent>
            <TabsContent value="notifications" className="space-y-4">
              <Notifications/>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
