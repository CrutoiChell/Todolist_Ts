import { useState } from 'react'
import { Input } from './components/Input/Input'
import { nanoid } from 'nanoid'
import { Tasks } from './components/Tasks/Tasks'
import s from './App.module.css'
export interface ITask {
  id: string,
  text: string,
  isEdit: boolean,
  isChecked: boolean,
}

// console.log(typeof nanoid());

let arr2: ITask[];

const storedArr = localStorage.getItem('arr');
if (storedArr !== null) {
  arr2 = JSON.parse(storedArr);
} else {
  arr2 = [];
}

export function App() {

  const [list, setList] = useState<string>('')
  const [arr, setArr] = useState<ITask[]>(arr2)

  function handleAdd(list: string) {
    if (list.trim()) {
      let newTask: ITask = {
        id: nanoid(),
        text: list,
        isEdit: false,
        isChecked: false,
      }
      let copy = [...arr, newTask]
      setArr(copy)
      setList('')
      let str = JSON.stringify(copy)
      localStorage.setItem('arr', str)
    }
  }

  function handleDelete(id: string) {
    let copy = arr.filter(el => el.id !== id)
    setArr(copy)
    let str = JSON.stringify(copy)
    localStorage.setItem('arr', str)
  }

  function handleToggle(id: string) {
    let copy = arr.map(el => {
      if (el.id == id) {
        el.isEdit = !el.isEdit
      }
      return el
    })
    setArr(copy)
    let str = JSON.stringify(copy)
    localStorage.setItem('arr', str)
  }

  function handleCheckBox(id: string) {
    let copy = arr.map(el => {
      if (el.id == id) {
        el.isChecked = !el.isChecked
      }
      return el
    })
    setArr(copy)
    let str = JSON.stringify(copy)
    localStorage.setItem('arr', str)
  }

  function handleEdit(id: string, e: React.ChangeEvent<HTMLInputElement>) {
    let copy = arr.map(el => {
      if (el.id === id) {
        el.text = e.target.value
        setList('')
      }
      return el;
    })
    setArr(copy)
    let str = JSON.stringify(copy)
    localStorage.setItem('arr', str)
  }

  return (
    <main className={s.container}>
      <h1>TODO LIST</h1>
      <Input
        list={list}
        handleAdd={handleAdd}
        setList={setList}
      />
      <Tasks
        arr={arr}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleToggle={handleToggle}
        handleCheckBox={handleCheckBox}
      />
    </main>
  )
}
