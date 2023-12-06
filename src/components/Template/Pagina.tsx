
export default function Pagina(props: any) {
    return (
        <div className="w-screen h-screen bg-gradient-to-r from-slate-400 via-red-300 to-slate-400">
            {props.children}
        </div>
    )
}