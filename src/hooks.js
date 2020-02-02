import { useEffect, useState } from "react"

const useLoading = () => {
    const [loading, setLoading] = useState('Loading')
    useEffect(() => {
        const id = window.setInterval(()=> {
            setLoading(l => l === 'Loading...' ? 'Loading': l+'.')
        }, 200)
        return () => clearInterval(id)
    })
    return loading
}
export {
    useLoading
}