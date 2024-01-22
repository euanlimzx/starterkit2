import { MultiSelect, Textarea } from '@opengovsg/design-system-react'
import { useState } from 'react'

export default function Sus() {
  const [multiselectValues, setMultiSelectValues] = useState<string[]>([])
  return (
    // <MultiSelect
    //   placeholder={'Select a region'}
    //   items={[
    //     {
    //       value: 'Central',
    //     },
    //     {
    //       value: 'North',
    //     },
    //     {
    //       value: 'East',
    //     },
    //     {
    //       value: 'Northeast',
    //     },
    //     {
    //       value: 'West',
    //     },
    //   ]}
    //   name="RegionSelect"
    //   onChange={(e) => {
    //     console.log(e)
    //     setMultiSelectValues([...e])
    //   }}
    //   values={multiselectValues}
    // />
    <Textarea
      size={'lg'}
      value={'ello i dont understand wtf is causing an issue'}
    />
  )
}
