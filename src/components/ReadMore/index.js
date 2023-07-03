// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  Heading,
  Paragraph,
  Image,
  Button,
  Content,
} from './styledComponents'

const imageUrl = 'https://assets.ccbp.in/frontend/hooks/react-hooks-img.png '

const ReadMore = props => {
  const {reactHooksDescription} = props

  const [buttonName, setText] = useState(false)
  const reactHooksDescription1 = buttonName
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)
  const changeText = buttonName ? 'Read Less' : 'Read More'
  const onClickChangeText = () => setText(prevStatus => !prevStatus)

  return (
    <MainContainer>
      <Heading>React Hooks</Heading>
      <Paragraph>Hooks are a new addition to React</Paragraph>
      <Image src={imageUrl} alt="react hooks" />
      <Content>{reactHooksDescription1}</Content>
      <Button type="button" onClick={onClickChangeText}>
        {changeText}
      </Button>
    </MainContainer>
  )
}
export default ReadMore
