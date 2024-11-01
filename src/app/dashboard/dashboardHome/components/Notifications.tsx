import React from 'react'
import {Card, CardHeader, CardTitle, CardContent} from '@/components/ui/card';

const Notifications = () => {
  const notifications = [
    "New account created - John Doe",
    "Invoice #1023 is pending payment",
    "Label 'Urgent' has been updated",
    "New receipt generated for Jane Smith",
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {notifications.map((notification, index) => (
            <li key={index} className="py-4 text-sm border-b">{notification}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default Notifications