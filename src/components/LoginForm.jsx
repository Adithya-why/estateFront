export default function LoginForm(){




    return(
        <div className="rounded-xl w-full">
            <div className=" p-3 bg-[#FCF8F4] text-black text-center">LETS GET YOU STARTED</div>

            <div className="p-10 bg-white text-black">
                <form className="flex flex-col gap-12">

                    <div>
                        <div>I am<span className=" text-red-500 text-xs">*</span></div>
                        <div className="flex gap-10 items-center pt-2">
                        
                            <div>
                                <input type="radio" name="user"/> Owner
                            </div>
                            <div>
                                <input type="radio" name="user" /> Builder
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col gap-2">
                        <div>Name <span className=" text-red-500 text-xs">*</span></div>
                        <input type="text" className="p-2 border border-[#7A7A7A] rounded w-3/4"/>
                    </div>

                </form>
            </div>
        </div>
    )
}