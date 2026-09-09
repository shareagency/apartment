import Layout from '../components/Layout'
import DescriptionBlock from '../components/DescriptionBlock'
import CtaButton from '../components/CtaButton'
import ContractLink from '../components/ContractLink'

const HomeLayout = () => {
  return (
    <Layout>
      {/* Секция Header - уже в HomePage, здесь только для лейаута */}
      
      {/* Секция описания квартиры */}
      <DescriptionBlock />
      
      {/* Кнопка перехода на форму заполнения данных */}
      <CtaButton href="/apply-form" />
      
      {/* Ссылка на скачивание договора */}
      <ContractLink href="/doc/doc.pdf" />
    </Layout>
  )
}

HomeLayout.displayName = 'HomeLayout'

export default HomeLayout
