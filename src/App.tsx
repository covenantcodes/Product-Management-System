import './App.css'
import CustomButton from './Custom/Button/Button'

const App = () => {
  return (
    <div>
          <CustomButton
            border="none"
            color="white"
            padding="1rem"
            onClick={() => {console.log("Login")} }
            radius="5px"
            label="Login"
            bgcolor="var(--primary-color)"
            width="320px"
            fontFamily="var(--main-font)"
            fontSize="1rem"
            marginTop="1rem"
            cursor="pointer"
          />
    </div>
  )
}

export default App
