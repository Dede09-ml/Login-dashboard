import Nav from '../navbar/navbar'
import Tab from './table'

function Dashboard({signName}) {
    

    return (
        <div className='container'>
            <Nav logName={signName}/>
            <Tab />
            

        </div>
    )
}

export default Dashboard