
import React from "react";

interface Activity {
  title: string;
  time: string;
}

interface OverviewProps {
  recentActivities: Activity[];
}

export function Overview({ recentActivities }: OverviewProps) {
  return (
    <div className="space-y-4">
      {recentActivities.map((activity, index) => (
        <div key={index} className="flex justify-between p-2 border-b text-[13px]">
          <span className="font-medium">{activity.title}</span>
          <span className="text-sm text-muted-foreground">{activity.time}</span>
        </div>
      ))}
    </div>
  );
}
