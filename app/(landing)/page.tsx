import Image from 'next/image'
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <div>
      <h1 className='text-blue-500 text-6xl'>OpenAI</h1>
      <Button>Click me</Button>
      <Button variant="outline">Button</Button>
      <Button variant="ghost">Button</Button>
      </div>
      )
}
