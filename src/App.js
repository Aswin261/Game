import "./App.css";
// import Fun from './comp/ex1';
import HangmanGame from "./comp/hangman";
// import Tetris from './comp/tetris';
import TicTac from "./comp/ttt";
import Drop from "./comp1/2d";
// import Conversation from "./comp1/convo";
import Style from "./comp1/cstyle";
import Dropdown from "./comp1/dd";
import Parent1 from "./comp1/p1";
import Parent from "./comp1/parent";
import Parenthesis from "./comp1/parenthesis";
import Counter from "./comp1/reducer";
import Update from "./comp1/update";
import Delete from "./comp1/user/del";
import Get from "./comp1/user/get";
import Post from "./comp1/user/post";
import Put from "./comp1/user/put";
import Text from "./comp1/Textarea";
import Conversation from "./comp1/convo1";
function App() {
  return (
    <div className="App">
      <TicTac/>
      <HangmanGame/>
      {/* <Tetris/> */}
      {/* <div>
        <Parent />
        <Parent1 />
        <Counter />
      </div>

      <div>
        <Style />
        <Update />
      </div>

      <div>
        <Text />
        <Dropdown />
        <Drop />
      </div>

      <Post />
      <Put />
      <div style={{ padding: "30px" }}>
        <Delete />
        <Get />
      </div>
      <div style={{ height: "300px", overflow: "auto" }}>
        <Parenthesis />
      </div> */}
      {/* <Conversation /> */}
    </div>
  );
}

export default App;
