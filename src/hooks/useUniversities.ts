import { useCallback, useState } from "react"
import { UniversitiesService } from "../services/UniversitiesService"
import { UniversitiesProps } from "../types"

export const useUniversities = () => {
    const [error, setError] = useState<Error>()
    const [loading, setLoading] = useState(false)
    const [universities, setUniversities] = useState<UniversitiesProps[]>()

    const fetchUniversities = useCallback(async () => {
        setLoading(true)
        UniversitiesService
            .getAllUniversities()
            .then(setUniversities)
            .catch(err => setError(new Error(err.message)))
            .finally(() => setLoading(false))
    }, [])

    return {
        fetchUniversities,
        universities,
        loading,
        error
    }
}
