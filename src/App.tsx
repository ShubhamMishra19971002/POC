import { FC, useEffect } from "react"
import { appStyle } from "./app.style"
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

  useEffect(() => {
    console.log(document.querySelector('div.root-1'))
    const appElement:any=document.getElementById('app')
    const styleElement=document.createElement('style')
    styleElement.textContent=appStyle
    if(document.querySelector('div.root-1')){
      document.querySelector('div.app')?.attachShadow({ mode: 'open' })?.appendChild(appElement).appendChild(styleElement)
    }
  }, [])

  return (
    <div className="root-1">
      <div id="app">
        <button onClick={() => funcProp("world1")}>{stringProp}</button>
        <p className="style">uagsyuagsu</p>
      </div>
    </div>
  )
}

export default App
