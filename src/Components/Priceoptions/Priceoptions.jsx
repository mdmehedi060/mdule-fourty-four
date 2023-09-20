import Priceoption from "../Priceoption/Priceoption";
const Priceoptions = () => {
    
        const priceOptions =[
          {
            "name": "Basic Membership",
            "features": [
              "Access to gym facilities",
              "Use of cardio equipment",
              "Locker room access",
              "Group fitness classes (limited)"
            ],
            "price": 30.99,
            "billingCycle": "monthly"
          },
          {
            "name": "Premium Membership",
            "features": [
              "Access to gym facilities",
              "Use of cardio equipment",
              "Locker room access",
              "Unlimited group fitness classes",
              "Access to personal trainers"
            ],
            "price": 49.99,
            "billingCycle": "monthly"
          },
          {
            "name": "Annual Membership",
            "features": [
              "Access to gym facilities",
              "Use of cardio equipment",
              "Locker room access",
              "Unlimited group fitness classes",
              "Access to personal trainers",
              "Discounted annual rate"
            ],
            "price": 499.99,
            "billingCycle": "annually"
          }
        ]
      
      
    return (
        <div className="m-12">
            <h2 className="text-3xl">Best Prices in the town</h2>
           <div className="grid grid-cols-3 gap-6 mt-8">
           {
              priceOptions.map(option => <Priceoption key={option.id} option={option}></Priceoption>)
            }
           </div>
        </div>
    );
};

export default Priceoptions;