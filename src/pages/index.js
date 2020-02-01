import { firestore } from "../firebas";

const App = () => {
    console.log(firestore.app.name)
  return (
    <div>
      <h1>Hello react with firebase</h1>
    </div>
  );
};
export default App;
