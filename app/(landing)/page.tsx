import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <h1 className='text-blue-500 text-6xl'>OpenAI</h1>
      <Button>Click me</Button>
      <Button variant="outline">Button</Button>
      <Button variant="ghost">Button</Button>
      <div>
          <Link href='/sign-in'>
          <Button>Sign in</Button>
          </Link>
          <Link href='/sign-up'>
          <Button>Sign up</Button>
          </Link>
      </div>
      
      </div>
      )
}
