import React from 'react'
import { cn } from '../../../lib/utils'

const DetailItem = ({bgColor,
  icon,
  iconColor,
  label,
  value}) => {
  return (
    <div className={cn(
      "w-full px-4 py-2 flex justify-between items-center rounded-[25px]",
      bgColor
    )}>
      <div className="flex gap-4 items-center">
        <div className={cn("flex items-center", iconColor)}>
          {icon}
        </div>
        <p className="text-sm lg:text-lg">{label} :</p>
      </div>
      <p className="text-sm lg:text-lg">{value}</p>
    </div>
  )
}

export default DetailItem
