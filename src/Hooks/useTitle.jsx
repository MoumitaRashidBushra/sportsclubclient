
import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Sports Club`;

    }, [title])
};

export default useTitle;