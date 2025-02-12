import Section from '@/layouts/Section';

const Categories = () => {
  return (
    <Section
      title="Explore our wide variety of categories"
      titleId='categories-title'
      description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      actions={(
        <div>
          <button>Back</button>
          <button>Next</button>
        </div>
      )}
      isActionsHiddenOnMobile
    >
      CATEGORIES
    </Section>
  )
}

export default Categories;