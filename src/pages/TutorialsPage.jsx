import Tutorials from '../components/Tutorial/Tutorials'
import { Contact } from '../components/Contact'
import { style, tutorialsStyle } from '../assets/Helper'


const TutorialsPage = () => {
  return (
    <>
      <Tutorials styles={tutorialsStyle}/>
      <Contact styles={style} />
    </>
  )
}

export default TutorialsPage