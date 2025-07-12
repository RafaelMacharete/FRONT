import type { FormEvent } from 'react';
import { Button } from './components/Button';
import { Card } from './components/Card';
import GeoForm from './components/GeoForm'
import { Person } from './components/Person';

const Page = () => {

  const handleButton1 = () => alert('Button 1');
  const handleButton2 = () => alert('Button 2');
  const handleButton3 = () => alert('Button 3');

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Sent!')
  }
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

      <div className="space-x-5">
        <Button label='Press here 1' onClick={handleButton1}/>
        <Button label='Press here 2' onClick={handleButton2}/>
        <Button label='Press here 3' onClick={handleButton3}/>
      </div>

      <form onSubmit={handleFormSubmit}>
        <input type="text" />
        <input type="submit" value='Enviar' />
      </form>
      
    </div>
  )
}

export default Page;