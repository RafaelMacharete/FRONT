import { Card } from './components/Card';
import GeoForm from './components/GeoForm'
import { Person } from './components/Person';

const Page = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Yo</h1>

      <Person
        name='Goku'
        avatar='https://i.ytimg.com/vi/5crv52CSf_Q/maxresdefault.jpg'
        roles={['Super Saiyajin', 'Human being']}
      />

      <Person
        name='Goku'
        roles={['Super Saiyajin', 'Human being']}
      />

      <Card>
        <>
          <h3 className='text-3xl font-bold italic'>'You are awesome'</h3>
          <p className='text-right text-sm'>- Someone</p>
        </>
      </Card>

    </div>
  )
}

export default Page;