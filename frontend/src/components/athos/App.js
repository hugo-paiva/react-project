//import './App.css';
import GetForms from './components/getforms';
import PostForms from './components/postforms';
import PutForms from './components/putforms';
import DeleteForms from './components/deleteforms';

function App() {
  return (
    <div className="App">
      <PostForms/>
      <PutForms />
      <DeleteForms/>
      <GetForms/>
    </div>
  );
}

export default App;
