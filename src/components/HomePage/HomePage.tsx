import { deviceType } from 'react-device-detect'
import './homepage.css'
import Introduce from './Introduce'
console.log('🚀 ~ file: HomePage.tsx:8 ~ deviceType:', deviceType)
// TODO: Check change device on browser

type HomePropsType = {
	changeCursorAnimate: (type: string) => void
	leave: () => void
}

function HomePage({ changeCursorAnimate, leave }: HomePropsType) {
	return (
		<section className='homepage relative pt-[100px]'>
			<Introduce
				leave={leave}
				changeCursorAnimate={changeCursorAnimate}
			/>
		</section>
	)
}

export default HomePage
