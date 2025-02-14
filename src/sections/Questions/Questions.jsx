import Accordion from "@/components/Accordion"
import AccordionGroup from "@/components/AccordionGroup"
import Button from "@/components/Button"
import Section from "@/layouts/Section"

const Questions = () => {
  const questionItems= [
    'What is StreamVibe?',
    'How much does StreamVibe cost?',
    'What content is available on StreamVibe?',
    'How can I watch StreamVibe?',
    'How do I sign up for StreamVibe?',
    'What is the StreamVibe free trial?',
    'How do I contact StreamVibe customer support?',
    'What are the StreamVibe payment methods?',
  ] 

  return (
    <Section
      title="Frequently Asked Questions"
      titleId="question-title"
      description="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
      actions={(
        <Button
          label="Ask a Question"
          href="/support"
        >
        </Button>
      )}
    >
      <AccordionGroup
        columns={2}
      >
        {questionItems.map((question, index) => (
          <Accordion
            title={question}
            id={`question-${index}`}
            name="questions"
            isOpen={index === 0}
            key={index}
          >
            <p>StreamVibe is a streaming service that allows you to watch movies and shows on demand.</p>
          </Accordion>
        ))}
      </AccordionGroup>
    </Section>
  )
}

export default Questions