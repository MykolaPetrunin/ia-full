import {FC, PropsWithChildren} from "react";

export const MainPage:FC<PropsWithChildren>  =({children})=>{
    return <div>
        <div>Main Page</div>
        {children}
    </div>
}