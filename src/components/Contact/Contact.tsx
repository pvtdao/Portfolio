import emailjs from '@emailjs/browser'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import { AiFillGithub } from 'react-icons/ai'
import { FaDiscord, FaFacebookF } from 'react-icons/fa'
import * as yup from 'yup'
import './contact.css'

type ContactPropsType = {
	changeCursorAnimate: (type: string) => void
	changeCursorText: (text: string, fontSize?: string) => void
	leave: () => void
}

function Contact({
	changeCursorAnimate,
	changeCursorText,
	leave
}: ContactPropsType) {
	const schema = yup.object({
		email: yup
			.string()
			.required('Email is required.')
			.email('Email invalid.'),
		name: yup.string().required('Name is required.'),
		message: yup
			.string()
			.required('Message is required.')
			.min(10, 'Give a message.')
	})

	const methods = useForm({
		defaultValues: {
			name: '',
			email: '',
			message: ''
		},
		resolver: yupResolver(schema)
	})

	async function handleSendMail(values: {
		name: string
		email: string
		message: string
	}) {
		const params = {
			from_email: values.email,
			from_name: values.name,
			to_name: "Neil",
			message: values.message
		}
		emailjs.send("service_xq7nrus", "template_65dpjov", params, "user_TyMxpx1mu4ws35L92uLuk").then(res => console.log("Sent!", res)).catch(err => console.log("ERR: ", err))
	}

	return (
		<section className='contact h-screen pt-[100px]'>
			<div className='container h-full flex flex-col mx-auto '>
				<h1
					onMouseEnter={() => changeCursorAnimate('text-lg')}
					onMouseLeave={leave}
					className='hover:cursor-none w-max mx-auto block text-center mt-[7vmin] text-[3rem] md:text-[5rem] font-bold'
				>
					Contact me
				</h1>

				<div className='grid grid-cols-1 lg:grid-cols-[1fr_.7fr] gap-[5rem] mt-[10rem]'>
					<FormProvider {...methods}>
						<form
							noValidate
							onSubmit={methods.handleSubmit(handleSendMail)}
							className=''
						>
							<div className='flex flex-col md:flex-row  gap-[4rem]'>
								<div className='relative w-full'>
									<input
										placeholder=' '
										id='name'
										{...methods.register('name')}
										autoComplete='off'
										className='contact-name px-5 py-3 text-[1.8rem] lg:text-[2rem] border-0 border-b rounded-none outline-none w-full'
									/>
									<div className='input-underline'></div>
									<label
										htmlFor='name'
										className='text-[#a9a9a9] px-5 text-[1.6rem] pointer-events-none absolute bottom-[10px] left-0 transition-all'
									>
										May i know your name?
									</label>
								</div>
								<div className='relative w-full'>
									<input
										placeholder=' '
										type='email'
										id='email'
										{...methods.register('email')}
										autoComplete='off'
										className='contact-email px-5 py-3 text-[1.8rem] lg:text-[2rem] border-0 border-b rounded-none outline-none w-full'
									/>
									<div className='input-underline'></div>
									<label
										htmlFor='email'
										className='text-[#a9a9a9] px-5 text-[1.6rem] pointer-events-none absolute bottom-[10px] left-0 transition-all'
									>
										And your email too
									</label>
								</div>
							</div>
							<div className='mt-[4rem]'>
								<div className='relative w-full'>
									<textarea
										id='message'
										{...methods.register('message')}
										placeholder='Message for me...'
										className='resize-none text-[1.8rem] lg:text-[2rem] px-5 py-3 border-0 border-b rounded-none outline-none w-full'
									></textarea>
									<div className='input-underline message-box'></div>
								</div>
							</div>
							<div className='flex justify-end '>
								<button
									onMouseEnter={() =>
										changeCursorAnimate('text-sm')
									}
									onMouseLeave={leave}
									type='submit'
									className='mt-[4rem] text-[1.8rem] lg:text-[2rem] border border-[rgba(0,0,0,.5)] px-10 py-2 lg:px-[3rem] lg:py-[1rem] hover:bg-black transition-all hover:text-white'
								>
									Send
								</button>
							</div>
						</form>
					</FormProvider>
					<div className='lg:border-l flex flex-col justify-around gap-[2rem] h-full px-[1rem]'>
						<ul
							onMouseEnter={() => {
								changeCursorAnimate('text-sm')
							}}
							onMouseLeave={leave}
							className='flex items-end justify-center w-max mx-auto'
						>
							<li className='p-4'>
								<a
									href='https://github.com/pvtdao'
									target='_blank'
								>
									<AiFillGithub className='text-[4rem]' />
								</a>
							</li>
							<li className='p-4'>
								<a
									href='https://www.facebook.com/PhanVuThanhDao'
									target='_blank'
								>
									<FaFacebookF className='text-[4rem]' />
								</a>
							</li>
							<li className='p-4'>
								<a
									href='https://discordapp.com/users/968331004064432168'
									target='_blank'
								>
									<FaDiscord className='text-[4rem]' />
								</a>
							</li>
						</ul>
						{/* <p className='text-[1.8rem] lg:text-[2rem] text-center '>
							Email me: <span>thanhdao.pv1999@gmail.com</span>
						</p> */}
						<div
							className='w-max mx-auto justify-self-end flex flex-col lg:gap-[2rem] items-center justify-between text-[1.8rem] lg:text-[2rem] hover:cursor-none'
							onMouseEnter={() => {
								changeCursorAnimate('text-sm')
							}}
							onMouseLeave={leave}
						>
							<p className='font-semibold'>
								Design & Develop by <span>PVTD</span>
							</p>
							<p className='font-semibold'>
								&copy; Copyright - 2021
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
