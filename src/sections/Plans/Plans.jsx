import Grid from "@/components/Grid"
import Section from "@/layouts/Section"
import planGroups from "./planGroups"
import PlanCard from "@/components/PlanCard"

const Plans = () => {
  return (
    <Section
      title="Choose the plan that's right for you"
      titleId="plans-id"
      description="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
    >
      <Grid
        columns={3}
      >
        {planGroups[0].items.map((planItem, index) => (
          <PlanCard
            {...planItem}
            key={index}
          >

          </PlanCard>
        ))}
      </Grid>
    </Section>
  )
}

export default Plans