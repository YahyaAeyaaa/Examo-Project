import { useEffect, useState } from 'react'
import api from '../config/api'

const Test = () => {
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const testConnection = async () => {
            try {
                const response = await api.get('/test')
                console.log('Success:', response.data)
                setResult(response.data)
            } catch (err) {
                console.log('Error:', err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        testConnection()
    }, [])

    if (loading) return <div>Testing connection...</div>
    if (error) return <div>Error: {error}</div>
    
    return (
        <div>
            <h1>Connection Test</h1>
            <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
    )
}

export default Test