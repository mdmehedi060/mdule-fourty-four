import PropTypes from 'prop-types';
const Priceoption = ({option}) => {
    const {name, price, features}=option;
    return (
        <div className='bg-blue-500 text-black rounded-md p-4 text-center'>
            <h2 className='text-center'>
                <span className="7xl font-extrabold">{price}</span>
                <span className="6xl">/mon</span>
            </h2>
            <h4 className="text-3xl">{name}</h4>
        </div>
    );
};

Priceoption.propTypes ={
    option: PropTypes.object
}

export default Priceoption;