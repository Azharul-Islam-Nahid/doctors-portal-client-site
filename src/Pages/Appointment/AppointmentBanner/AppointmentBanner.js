import { DayPicker } from 'react-day-picker';
import background from '../../../assets/images/bg.png'
import chair from '../../../assets/images/chair.png'

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <header className='my-6' style={{
            'backgroundImage': `url(${background})`,
            'backgroundRepeat': 'no-repeat',
            'backgroundSize': '50%'
        }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='dentist chair' />
                    <div className='mr-6'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;