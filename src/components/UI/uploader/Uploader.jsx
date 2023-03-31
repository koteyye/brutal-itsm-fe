import { useEffect, useState } from "react"


const Uploader = (props) => {

    const [selectedFile, setSelectedFile] = useState(null)

    const fileSelectHandler = (event) => {
        setSelectedFile(event.target.files[0])
    }

    useEffect(() => {
        if (selectedFile !== null) {
            const fd = new FormData()
            fd.append('file', selectedFile, selectedFile.name)
            props.fileSelected(fd)
        }
    }, [selectedFile])

    const fileUploadHandler = () => {
        const fd = new FormData()
        fd.append('file', selectedFile, selectedFile.name)
        props.selectedFile(fd)
    }

    return (
        <div>
            <input type="file" onChange={fileSelectHandler} />
        </div>
    )
}

export default Uploader