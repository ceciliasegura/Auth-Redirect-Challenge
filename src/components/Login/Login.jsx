export default function Login() {
    return (
        <>
            <div className=" flex justify-center items center">

                <p className="text-3xl	font-extrabold	text-black-color flex flex-col justify-center items-center pt-6 mb-6 ">Iniciar sesión</p>
            </div>

            <div className="flex justify-center items center">

                <div className=" flex justify-center items center w-[448px] h-[282px] bg-white pt-10">

                    <form action="" className="py-8 px-10 flex flex-col gap-6 w-[448px]">
                        <div className="flex flex-col gap-1 mt-[-20px]">
                            <label htmlFor="email" className="text-black-color font-medium text-sm">Email</label>
                            <input type="text" name="email" id="email" className="'py-[9px] px-[13px] rounded-md border border-grey-color" />
                        </div>
                        <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="text-black-color font-medium text-sm">Contraseña</label>
                        <input type="text" name="password" id="password" className="'py-[9px] px-[13px] rounded-md border border-grey-color" />
                        </div>
                        <input type="submit" className="border bg-green-color text-white w-[368px] h-[38px] rounded-md cursor-pointer py-[9px]" value="Acceder" />
                    </form>
                </div>
            </div>

        </>

    )
}