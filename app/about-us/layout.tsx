import {ReactNode} from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            {children}
            &copy; Next Js Grate
        </div>
    )
}
