export default function LoginForm(){




    return(
        <div className="rounded-xl w-full overflow-scroll">
            <div className=" p-3 bg-[#FCF8F4] text-black text-center">LETS GET YOU STARTED</div>

            <div className="p-10 bg-white text-black rounded-b-xl">
                <form className="flex flex-col gap-12">

                    <div>
                        <div>I am<span className=" text-red-500 text-xs">*</span></div>
                        <div className="w-3/5 flex justify-between items-center pt-2">
                        
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
                        <input type="text" className="landinginput"/>
                    </div>


                    <div className="flex flex-col">
                        
                        <label htmlFor="countries">Country <span className=" text-red-500 text-xs">*</span></label>
                        <select id="countries" name="countries" className="w-1/2 p-3">
                            <option value="india">India</option>
                            <option value="usa">United States</option>
                            <option value="canada">Canada</option>
                            <option value="australia">Australia</option>
                            <option value="uk">United Kingdom</option>
                            <option value="germany">Germany</option>
                            <option value="france">France</option>
                            <option value="japan">Japan</option>
                            <option value="china">China</option>
                            <option value="brazil">Brazil</option>
                        </select>

                    </div>

                        

                        <div className="flex flex-col">
                            <label htmlFor="phoneno">Phone <span className=" text-red-500 text-xs">*</span></label>
                            <div className="flex gap-2 w-full">

                                <select name="countrycode" id="" className="basis-1/3">
                                    <option value="+91">India (+91)</option>
                                    <option value="+1">United States (+1)</option>
                                    <option value="+1">Canada (+1)</option>
                                    <option value="+61">Australia (+61)</option>
                                    <option value="+44">United Kingdom (+44)</option>
                                    <option value="+49">Germany (+49)</option>
                                    <option value="+33">France (+33)</option>
                                    <option value="+81">Japan (+81)</option>
                                    <option value="+86">China (+86)</option>
                                    <option value="+55">Brazil (+55)</option>
                                </select>


                                <input type="text" id="phoneno" name="phoneno" className=" landinginput basis-2/3 w-full"/>
                            </div>
                        </div>

                    <div className="flex flex-col w-1/2">
                        <label htmlFor="em">Email</label>
                        <input type="email" id="em" className="landinginput"/>
                    </div>


                    <div className="flex items-center justify-between">
                        <div><span>Need help?</span> Call 999999999 </div>
                        <div>
                            <button className="bg-[#122B49] text-white p-3 rounded-xl pl-5 pr-5">Next</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}