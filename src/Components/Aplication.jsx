import {useState} from 'react'

export function Aplication() {
    const [title, settitle] = useState('')
    const [todoo, settodoo] = useState([])

    // cancelar el comportamiento por default de un formulario para que no se este recargando

    function formSubmit(e){
        e.preventDefault()
    }

    function handleChange(e){
        const value = e.target.value 
        settitle(value)
    }

    function handleSubmit(){

        const newTodoo = {
            id : crypto.randomUUID(),
            title : title,
            compled : false
        }

        // primera forma
        // const temp = [...todoo]
        // temp.unshift(newTodoo)

        // settodoo(temp)

        // segunda forma

        settodoo([...todoo, newTodoo])
    }
  return (
    <div>
      <form action="#" onSubmit={formSubmit}>
        <input type="text" onChange={handleChange} />
        <input type="submit" value='Ingresar-Tarea' onClick={handleSubmit}/>
      </form>
      {title}
    </div>
  )
}
