import { useLoading } from "../hooks"

const Loading = () => {
    const loading = useLoading()
    return (<div>
        <h1>{loading}</h1>
        <style jsx>
          {
            `
            h1 {
              width: 50%;
              text-align: center;
            }
            `
          }
        </style>
    </div>)
}
export default Loading;