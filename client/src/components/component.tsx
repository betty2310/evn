import { Button } from "@/components/ui/button"

export function Component() {
  return (
    <div className="flex h-[100dvh] items-center justify-center">
      <div className="flex flex-col gap-4">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </div>
    </div>
  )
}
