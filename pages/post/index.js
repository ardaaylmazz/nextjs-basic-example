import { useRouter } from 'next/router'; 

export default function Post() {
    const router = useRouter()
    const {url} = router;

    
    
    return (
        <>
            {url}
        </>
    )
}