import './App.css';
import Main from './component/Main/main';
import Experience from './component/Experience/experience';
import StepOne from './component/StepOne/stepOne';
import StepTwo from './component/StepTwo/stepTwo';
import StepThree from './component/StepThree/stepThree';
import StepFour from './component/StepFour/stepFour';

function App() {
  return (
    <div className="App">
      <Main></Main>
      <Experience></Experience>
      <StepOne></StepOne>
      <StepTwo />
      <StepThree />
      <StepFour />
    </div>
  );
}

export default App;
