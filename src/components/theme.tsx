import { Switch } from '@/components/ui/switch.tsx'
import { Label } from '@/components/ui/label.tsx'

export default function Theme({
  isGreenMode,
  setIsGreenMode,
}: {
  isGreenMode: boolean
  setIsGreenMode: (isGreenMode: boolean) => void
}) {
  return (
    <div className="flex justify-end pr-3 items-center space-x-2">
      <Switch
        checked={isGreenMode}
        onCheckedChange={() => setIsGreenMode(!isGreenMode)}
      />
      <Label className="text-primary">
        {' '}
        {isGreenMode ? 'Mode vert' : 'Mode défaut'}
      </Label>
    </div>
  )
}
