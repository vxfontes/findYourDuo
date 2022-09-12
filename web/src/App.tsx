// tipagem no typescript
  //componente com nome props no final
interface ButtonProps {
  title: string
}

// parametro: tipo
function Button(props: ButtonProps) {
  return (
    <button>
      {props.title}
    </button>
  )
}

function App() {
  return (
    <>
      <Button title="Send 1" />
      <Button title="Send 2" />
      <Button title="Send 3" />
    </>
  )
}

export default App;