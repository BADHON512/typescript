import './style.css'

interface Todo {
    title:string,
    isCompleted:boolean,
    readonly id:string
}

const todos:Todo[]=[]

const todosContainer=document.querySelector(".todosContainer") as HTMLDivElement
const todoInput=document.getElementsByName("input")[0] as HTMLInputElement
const form= document.getElementById("#form") as HTMLFormElement