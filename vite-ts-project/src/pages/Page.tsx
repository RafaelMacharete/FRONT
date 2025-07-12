import GeoForm from '../components/GeoForm'
import { Person } from '../components/Person';

const Page = () => {
    return (
        <div>
            <h1 className="font-bold text-2xl">Yo</h1>

            <Person
                name='Goku'
                avatar='https://i.ytimg.com/vi/5crv52CSf_Q/maxresdefault.jpg'
                roles={['Super Saiyajin', 'Human being']}
            />
        </div>
    )
}

export default Page;