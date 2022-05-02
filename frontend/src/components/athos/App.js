//import './App.css';
import GetForms from './components/getforms';
//import PostForms from './components/postforms';
import PutForms from './components/putforms';
import DeleteForms from './components/deleteforms';
import PostBooks from './components/postbooks';
import DeleteBooks from './components/deletebooks';
import GetBooks from './components/getbooks';
import PutBooks from './components/putbooks';
import LoadImages from './components/loadimages';

function App() {
  return (
    <div className="App">
      <PostBooks />
      <DeleteBooks />
      <PutBooks />
      <GetBooks />
      <hr/>
      <PutForms />
      <DeleteForms/>
      <GetForms/>
      <LoadImages/>
    </div>
  );
}

export default App;
