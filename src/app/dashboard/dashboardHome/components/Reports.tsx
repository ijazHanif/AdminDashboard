// import React from 'react'
// import { Card, CardHeader, CardTitle, CardContent} from '@/components/ui/card';
// import { Button } from '@/components/ui/button';

// const Reports = () => {
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Monthly Reports</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <p>Download your reports below:</p>
//         <div className='flex gap-4 py-4'>
//            <Button>Download Account Report</Button>
//            <Button>Download Invoice Report</Button>
//         </div>
//         {/* You can add tables or more buttons as needed */}
//       </CardContent>
//     </Card>
//   );
// }

// export default Reports


import React from 'react'
import { Card, CardHeader, CardTitle, CardContent} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
const Reports = () => {
  return (
    <div>
        <Card>
          <CardHeader>
            <CardTitle>Monthly Reports</CardTitle>
          </CardHeader>
          <CardContent>
          <p>your reports below:</p>
          <div className='flex gap-2 py-4'>
             <Button>Download Account Reports</Button>
             <Button>Download Invoice Reports</Button>
          </div>
          </CardContent>
        </Card>
    </div>
  )
}

export default Reports
