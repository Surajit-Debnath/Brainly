export interface InputProps{
   type:"text"|"password";
   placeholder:string
   reference?:any
}

export function Input(props:InputProps){
    return <div>
        <input ref={props.reference} className="px-4 py-2 border rounded m-2" type={props.type} placeholder={props.placeholder}/>
    </div>
}