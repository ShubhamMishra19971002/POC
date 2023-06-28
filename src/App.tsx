import { FC } from "react"

type AppProps = {
  stringProp: string
  numProp: number
  floatProp: number
  trueProp: boolean
  falseProp: boolean
  arrayProp: any[]
  objProp: Record<string, any>
  funcProp: (name: string) => void
}

const App: FC<AppProps> = ({
  stringProp,
  numProp,
  floatProp,
  trueProp,
  falseProp,
  arrayProp,
  objProp,
  funcProp,
}) => {
  console.log({
    stringProp,
    numProp,
    floatProp,
    trueProp,
    falseProp,
    arrayProp,
    objProp,
    funcProp,
  })

  return <button onClick={() => funcProp("world")}>{stringProp}</button>
}

export default App
