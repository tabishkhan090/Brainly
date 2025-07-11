export function Input({ placeholder, refrance} : {placeholder: string, refrance?:any}){
    return <div className="p-2">
        <input type="text" ref={refrance} placeholder={placeholder} className="px-4 py-2 border rounded" />
    </div>
}