import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { UserButton } from '@clerk/nextjs'


export default function Dashboard() {
  return (
    <div>
      <h1 className='text-blue-500 text-6xl'>Dashboard</h1>
      <UserButton afterSignOutUrl='/' />
      <Button variant="outline">Button</Button>
      <Button variant="ghost">Button</Button>
      </div>
      )
}
