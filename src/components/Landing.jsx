export default function Landing( { children }){





    return(
        <div className="landing flex flex-col">
            

            <div className="flex flex-col pl-24 pt-24 gap-5">

                <div className="text-4xl">Sell or Rent your Property For Free</div>

                <div className="font-thin w-1/2">Whether you are ready to sell or looking for answers, 
                    we will guide you with data and expertise specific to your needs.

                </div>
            </div>



            <div className="flex items-start justify-center gap-32 mt-20">
 

                <div className="flex flex-col  gap-5 ">

                    <div className="text-2xl">Upload your property in 4 simple steps</div>

                    <div className="text-xl font-thin flex flex-col gap-2">
                        <div>✅ Add your properties <span>Basic Details</span></div>
                        <div>✅ Add property <span>Location</span></div>
                        <div>✅ Add property <span>Features and amenities</span></div>
                        <div>✅ Add <span>Price details</span></div>
                        <div>✅ Add your best <span>Property Shots</span></div>
                    </div>

                </div>



                <div className="w-1/3 h-2/5 rounded-xl overflow-y-scroll">
                    {children}
                </div>


            </div>
            
        </div>
    )
}