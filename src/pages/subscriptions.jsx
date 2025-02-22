import Plans from "@/sections/Plans"
import PlansComparison from "@/sections/PlansComparison"

export const metadata = {
  title: 'Subscriptions'
} 

export default function () {
  return (
    <>
      <Plans></Plans>
      <PlansComparison></PlansComparison>
    </>
  )
}
